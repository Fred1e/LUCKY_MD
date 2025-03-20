const { ezra } = require("fredi/ezra");

const apiKey = "351138f32da58d411e9c5cb74d514928";
const apiUrl = "https://api-basketball.p.rapidapi.com/games?live=all";

ezra(
 {
  nomCom: "basketball",
  categorie: "sports",
  desc: "Get live basketball match updates",
  reaction: "🏀",
  fromMe: true,
 },
 async (dest, zk, commandeOptions) => {
  const { repondre } = commandeOptions;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "api-basketball.p.rapidapi.com"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.response.length === 0) {
      return await repondre("No live basketball matches at the moment.");
    }

    let message = "🏀 *Live Basketball Matches:*\n\n";
    
    data.response.forEach(game => {
      message += `📌 *${game.teams.home.name}* vs *${game.teams.away.name}*\n`;
      message += `🏆 *League:* ${game.league.name}\n`;
      message += `🕒 *Time:* ${game.status.short}\n`;
      message += `🔢 *Score:* ${game.scores.home} - ${game.scores.away}\n`;
      message += "––––––––––––––––––––––––––\n";
    });

    await repondre(message);

  } catch (error) {
    console.error("Error fetching basketball updates:", error);
    await repondre("⚠️ Error fetching basketball data. Try again later.");
  }
 });
