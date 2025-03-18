const axios = require('axios');
const { ezra } = require("../fredi/ezra");
const conf = require(__dirname + '/../set');

// Football Data API URL and your API key
const apiKey = '7b6507c792f74a2b9db41cfc8fd8cf05'; // Replace with your actual API key
const apiUrl = 'https://api.football-data.org/v4/competitions';

// Helper function to fetch data from the API
const fetchFootballData = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        'X-Auth-Token': apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/** ✅ bundesliga standings */
ezra({
  nomCom: "bundesliga_table",
  categorie: "football live",
  reaction: "⚽"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for Bundesliga standings
  const standingsUrl = `${apiUrl}/BL1/standings`;

  const data = await fetchFootballData(standingsUrl);
  if (!data || !data.standings) {
    return repondre("❌ Error fetching Bundesliga standings.");
  }

  const standings = data.standings[0].table;
  let standingsMessage = "📊 *Bundesliga Table*\n";
  standings.forEach((team, index) => {
    standingsMessage += `${index + 1}. ${team.team.name} - ${team.points} Points\n`;
  });

  repondre(standingsMessage);
});

/** ✅ bundesliga matchday */
ezra({
  nomCom: "bundesliga_matchday",
  categorie: "football live",
  reaction: "📅"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for upcoming Bundesliga matches
  const matchesUrl = `${apiUrl}/BL1/matches`;

  const data = await fetchFootballData(matchesUrl);
  if (!data || !data.matches) {
    return repondre("❌ Error fetching Bundesliga matchday.");
  }

  const matches = data.matches;
  let matchdayMessage = "🗓️ *Upcoming Bundesliga Matches*\n";
  matches.forEach(match => {
    matchdayMessage += `${match.homeTeam.name} vs ${match.awayTeam.name} - ${match.utcDate}\n`;
  });

  repondre(matchdayMessage);
});

/** ✅ bundesliga top scorers */
ezra({
  nomCom: "bundesliga_top_scorer",
  categorie: "football live",
  reaction: "⚽"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for Bundesliga top scorers
  const topScorerUrl = `${apiUrl}/BL1/scorers`;

  const data = await fetchFootballData(topScorer
