const axios = require('axios');
const { ezra } = require("../fredi/ezra");
const conf = require(__dirname + '/../set');

// NBA API Key and URL (replace with the correct API endpoint)
const apiKey = '351138f32da58d411e9c5cb74d514928'; // Replace with your actual API key
const apiUrl = 'https://api-basketball.p.rapidapi.com'; // Base NBA API URL

// Helper function to fetch NBA data from the API
const fetchNBAData = async (endpoint) => {
  try {
    const response = await axios.get(apiUrl + endpoint, {
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// NBA command to send buttons and select updates
ezra({
  nomCom: "nba",
  categorie: "sports",
  reaction: "🏀",
  fromMe: true,
}, async (dest, zk, commandOptions) => {
  const { repondre, ms } = commandOptions;

  // Send a button menu to the user
  const buttons = [
    { buttonId: "nba_live", buttonText: { displayText: "🏀 Live Matches" }, type: 1 },
    { buttonId: "nba_standings", buttonText: { displayText: "📊 Standings" }, type: 1 },
    { buttonId: "nba_top_scorers", buttonText: { displayText: "🔥 Top Scorers" }, type: 1 },
    { buttonId: "nba_upcoming", buttonText: { displayText: "⏳ Upcoming Games" }, type: 1 }
  ];

  const buttonMessage = {
    text: "🏀 *NBA Updates*\nChoose an option:",
    footer: "FredieTech Bot",
    buttons: buttons,
    headerType: 1
  };

  await zk.sendMessage(ms.chat, buttonMessage);
});

// NBA button action handler (fetch and display NBA data based on button selection)
ezra({
  nomCom: "nba_action",
  categorie: "sports",
  desc: "Handles NBA button actions",
  fromMe: true,
}, async (dest, zk, commandOptions) => {
  const { repondre, ms } = commandOptions;
  const userSelection = ms.buttonId;

  if (!userSelection) return await repondre("Please choose an option!");

  let apiEndpoint = "";
  let responseTitle = "";

  switch (userSelection) {
    case "nba_live":
      apiEndpoint = "/games?league=12&season=2024&live=all";
      responseTitle = "🏀 *Live NBA Matches:*";
      break;

    case "nba_standings":
      apiEndpoint = "/standings?league=12&season=2024";
      responseTitle = "📊 *NBA Standings:*";
      break;

    case "nba_top_scorers":
      apiEndpoint = "/players/statistics?league=12&season=2024";
      responseTitle = "🔥 *Top NBA Scorers:*";
      break;

    case "nba_upcoming":
      apiEndpoint = "/games?league=12&season=2024&status=NS";
      responseTitle = "⏳ *Upcoming NBA Games:*";
      break;

    default:
      return await repondre("Invalid selection! Please try again.");
  }

  // Fetch data from API
  try {
    const data = await fetchNBAData(apiEndpoint);
    if (!data || data.response.length === 0) {
      return await repondre("No data available at the moment.");
    }

    let message = `${responseTitle}\n\n`;

    // Process data based on the selected category
    if (userSelection === "nba_live") {
      data.response.forEach(game => {
        message += `🏀 *${game.teams.home.name}* vs *${game.teams.away.name}*\n`;
        message += `🏆 *League:* ${game.league.name}\n`;
        message += `🕒 *Time:* ${game.status.short}\n`;
        message += `🔢 *Score:* ${game.scores.home} - ${game.scores.away}\n`;
        message += "––––––––––––––––––––––––––\n";
      });
    } else if (userSelection === "nba_standings") {
      data.response[0].standings.forEach(team => {
        message += `🔝 *${team.rank}.* ${team.team.name} - ${team.win}W/${team.lose}L\n`;
      });
    } else if (userSelection === "nba_top_scorers") {
      data.response.forEach(player => {
        message += `🔥 *${player.player.name}* (${player.team.name}) - ${player.points} PTS\n`;
      });
    } else if (userSelection === "nba_upcoming") {
      data.response.forEach(game => {
        message += `📅 *${game.date}*\n`;
        message += `🏀 *${game.teams.home.name}* vs *${game.teams.away.name}*\n`;
        message += "––––––––––––––––––––––––––\n";
      });
    }

    await repondre(message);
  } catch (error) {
    console.error("Error fetching NBA data:", error);
    await repondre("⚠️ Error fetching NBA updates. Try again later.");
  }
});
