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

  const data = await fetchFootballData(topScorerUrl);
  if (!data || !data.scorers) {
    return repondre("❌ Error fetching Bundesliga top scorers.");
  }

  const topScorers = data.scorers;
  let topScorerMessage = "🏆 *Bundesliga Top Scorers*\n";
  topScorers.forEach((scorer, index) => {
    topScorerMessage += `${index + 1}. ${scorer.player.name} - ${scorer.numberOfGoals} Goals\n`;
  });

  repondre(topScorerMessage);
});

/** ✅ bundesliga top assists */
ezra({
  nomCom: "bundesliga_top_assist",
  categorie: "football live",
  reaction: "🎯"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for Bundesliga top assists
  const topAssistUrl = `${apiUrl}/BL1/assists`;

  const data = await fetchFootballData(topAssistUrl);
  if (!data || !data.assists) {
    return repondre("❌ Error fetching Bundesliga top assists.");
  }

  const topAssists = data.assists;
  let topAssistMessage = "🎯 *Bundesliga Top Assists*\n";
  topAssists.forEach((assist, index) => {
    topAssistMessage += `${index + 1}. ${assist.player.name} - ${assist.numberOfAssists} Assists\n`;
  });

  repondre(topAssistMessage);
});

/** ✅ bundesliga news */
ezra({
  nomCom: "bundesliga_news",
  categorie: "football live",
  reaction: "📰"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for Bundesliga news (You may need to use another news API for this)
  const newsUrl = `https://newsapi.org/v2/everything?q=Bundesliga&apiKey=YOUR_NEWSAPI_KEY`; // Replace with your NewsAPI key

  try {
    const response = await axios.get(newsUrl);
    if (response.data.status !== "ok") return repondre("❌ Error fetching Bundesliga news.");

    let newsMessage = "📰 *Bundesliga News*\n";
    response.data.articles.forEach((article, index) => {
      newsMessage += `${index + 1}. [${article.title}](${article.url})\n`;
    });

    repondre(newsMessage);
  } catch (error) {
    console.error(error);
    repondre("❌ Error fetching Bundesliga news.");
  }
});

/** ✅ bundesliga highlights (You can integrate video highlight API) */
ezra({
  nomCom: "bundesliga_highlights",
  categorie: "football live",
  reaction: "📺"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // Example placeholder for video highlights (Consider using a video API)
  const highlightsUrl = `https://api.example.com/bl1-highlights`; // Replace with actual highlight API

  try {
    const response = await axios.get(highlightsUrl);
    if (!response.data.highlights) return repondre("❌ No highlights found.");

    let highlightsMessage = "🎬 *Bundesliga Highlights*\n";
    response.data.highlights.forEach((highlight, index) => {
      highlightsMessage += `${index + 1}. [Watch Highlight](${highlight.url})\n`;
    });

    repondre(highlightsMessage);
  } catch (error) {
    console.error(error);
    repondre("❌ Error fetching Bundesliga highlights.");
  }
});
