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

/** ✅ liga portugal standings */
ezra({
  nomCom: "liga_portugal_table",
  categorie: "football live",
  reaction: "⚽"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for Liga Portugal standings
  const standingsUrl = `${apiUrl}/PPL/standings`;

  const data = await fetchFootballData(standingsUrl);
  if (!data || !data.standings) {
    return repondre("❌ Error fetching Liga Portugal standings.");
  }

  const standings = data.standings[0].table;
  let standingsMessage = "📊 *Liga Portugal Table*\n";
  standings.forEach((team, index) => {
    standingsMessage += `${index + 1}. ${team.team.name} - ${team.points} Points\n`;
  });

  repondre(standingsMessage);
});

/** ✅ liga portugal matchday */
ezra({
  nomCom: "liga_portugal_matchday",
  categorie: "football live",
  reaction: "📅"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for upcoming Liga Portugal matches
  const matchesUrl = `${apiUrl}/PPL/matches`;

  const data = await fetchFootballData(matchesUrl);
  if (!data || !data.matches) {
    return repondre("❌ Error fetching Liga Portugal matchday.");
  }

  const matches = data.matches;
  let matchdayMessage = "🗓️ *Upcoming Liga Portugal Matches*\n";
  matches.forEach(match => {
    matchdayMessage += `${match.homeTeam.name} vs ${match.awayTeam.name} - ${match.utcDate}\n`;
  });

  repondre(matchdayMessage);
});

/** ✅ liga portugal top scorers */
ezra({
  nomCom: "liga_portugal_top_scorer",
  categorie: "football live",
  reaction: "⚽"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for Liga Portugal top scorers
  const topScorerUrl = `${apiUrl}/PPL/scorers`;

  const data = await fetchFootballData(topScorerUrl);
  if (!data || !data.scorers) {
    return repondre("❌ Error fetching Liga Portugal top scorers.");
  }

  const topScorers = data.scorers;
  let topScorerMessage = "🏆 *Liga Portugal Top Scorers*\n";
  topScorers.forEach((scorer, index) => {
    topScorerMessage += `${index + 1}. ${scorer.player.name} - ${scorer.numberOfGoals} Goals\n`;
  });

  repondre(topScorerMessage);
});

/** ✅ liga portugal top assists */
ezra({
  nomCom: "liga_portugal_top_assist",
  categorie: "football live",
  reaction: "🎯"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for Liga Portugal top assists
  const topAssistUrl = `${apiUrl}/PPL/assists`;

  const data = await fetchFootballData(topAssistUrl);
  if (!data || !data.assists) {
    return repondre("❌ Error fetching Liga Portugal top assists.");
  }

  const topAssists = data.assists;
  let topAssistMessage = "🎯 *Liga Portugal Top Assists*\n";
  topAssists.forEach((assist, index) => {
    topAssistMessage += `${index + 1}. ${assist.player.name} - ${assist.numberOfAssists} Assists\n`;
  });

  repondre(topAssistMessage);
});

/** ✅ liga portugal news */
ezra({
  nomCom: "liga_portugal_news",
  categorie: "football live",
  reaction: "📰"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for Liga Portugal news (You may need to use another news API for this)
  const newsUrl = `https://newsapi.org/v2/everything?q=Liga+Portugal&apiKey=YOUR_NEWSAPI_KEY`; // Replace with your NewsAPI key

  try {
    const response = await axios.get(newsUrl);
    if (response.data.status !== "ok") return repondre("❌ Error fetching Liga Portugal news.");

    let newsMessage = "📰 *Liga Portugal News*\n";
    response.data.articles.forEach((article, index) => {
      newsMessage += `${index + 1}. [${article.title}](${article.url})\n`;
    });

    repondre(newsMessage);
  } catch (error) {
    console.error(error);
    repondre("❌ Error fetching Liga Portugal news.");
  }
});

/** ✅ liga portugal highlights (You can integrate video highlight API) */
ezra({
  nomCom: "liga_portugal_highlights",
  categorie: "football live",
  reaction: "📺"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // Example placeholder for video highlights (Consider using a video API)
  const highlightsUrl = `https://api.example.com/ppl-highlights`; // Replace with actual highlight API

  try {
    const response = await axios.get(highlightsUrl);
    if (!response.data.highlights) return repondre("❌ No highlights found.");

    let highlightsMessage = "🎬 *Liga Portugal Highlights*\n";
    response.data.highlights.forEach((highlight, index) => {
      highlightsMessage += `${index + 1}. [Watch Highlight](${highlight.url})\n`;
    });

    repondre(highlightsMessage);
  } catch (error) {
    console.error(error);
    repondre("❌ Error fetching Liga Portugal highlights.");
  }
});
