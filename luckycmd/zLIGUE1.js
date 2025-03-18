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

/** ✅ ligue1 standings */
ezra({
  nomCom: "ligue1_table",
  categorie: "football live",
  reaction: "⚽"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for Ligue 1 standings
  const standingsUrl = `${apiUrl}/FL1/standings`;

  const data = await fetchFootballData(standingsUrl);
  if (!data || !data.standings) {
    return repondre("❌ Error fetching Ligue 1 standings.");
  }

  const standings = data.standings[0].table;
  let standingsMessage = "📊 *Ligue 1 Table*\n";
  standings.forEach((team, index) => {
    standingsMessage += `${index + 1}. ${team.team.name} - ${team.points} Points\n`;
  });

  repondre(standingsMessage);
});

/** ✅ ligue1 matchday */
ezra({
  nomCom: "ligue1_matchday",
  categorie: "football live",
  reaction: "📅"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for upcoming Ligue 1 matches
  const matchesUrl = `${apiUrl}/FL1/matches`;

  const data = await fetchFootballData(matchesUrl);
  if (!data || !data.matches) {
    return repondre("❌ Error fetching Ligue 1 matchday.");
  }

  const matches = data.matches;
  let matchdayMessage = "🗓️ *Upcoming Ligue 1 Matches*\n";
  matches.forEach(match => {
    matchdayMessage += `${match.homeTeam.name} vs ${match.awayTeam.name} - ${match.utcDate}\n`;
  });

  repondre(matchdayMessage);
});

/** ✅ ligue1 top scorers */
ezra({
  nomCom: "ligue1_top_scorer",
  categorie: "football live",
  reaction: "⚽"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for Ligue 1 top scorers
  const topScorerUrl = `${apiUrl}/FL1/scorers`;

  const data = await fetchFootballData(topScorerUrl);
  if (!data || !data.scorers) {
    return repondre("❌ Error fetching Ligue 1 top scorers.");
  }

  const topScorers = data.scorers;
  let topScorerMessage = "🏆 *Ligue 1 Top Scorers*\n";
  topScorers.forEach((scorer, index) => {
    topScorerMessage += `${index + 1}. ${scorer.player.name} - ${scorer.numberOfGoals} Goals\n`;
  });

  repondre(topScorerMessage);
});

/** ✅ ligue1 top assists */
ezra({
  nomCom: "ligue1_top_assist",
  categorie: "football live",
  reaction: "🎯"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for Ligue 1 top assists
  const topAssistUrl = `${apiUrl}/FL1/assists`;

  const data = await fetchFootballData(topAssistUrl);
  if (!data || !data.assists) {
    return repondre("❌ Error fetching Ligue 1 top assists.");
  }

  const topAssists = data.assists;
  let topAssistMessage = "🎯 *Ligue 1 Top Assists*\n";
  topAssists.forEach((assist, index) => {
    topAssistMessage += `${index + 1}. ${assist.player.name} - ${assist.numberOfAssists} Assists\n`;
  });

  repondre(topAssistMessage);
});

/** ✅ ligue1 news */
ezra({
  nomCom: "ligue1_news",
  categorie: "football live",
  reaction: "📰"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for Ligue 1 news (You may need to use another news API for this)
  const newsUrl = `https://newsapi.org/v2/everything?q=Ligue 1&apiKey=YOUR_NEWSAPI_KEY`; // Replace with your NewsAPI key

  try {
    const response = await axios.get(newsUrl);
    if (response.data.status !== "ok") return repondre("❌ Error fetching Ligue 1 news.");

    let newsMessage = "📰 *Ligue 1 News*\n";
    response.data.articles.forEach((article, index) => {
      newsMessage += `${index + 1}. [${article.title}](${article.url})\n`;
    });

    repondre(newsMessage);
  } catch (error) {
    console.error(error);
    repondre("❌ Error fetching Ligue 1 news.");
  }
});

/** ✅ ligue1 highlights (You can integrate video highlight API) */
ezra({
  nomCom: "ligue1_highlights",
  categorie: "football live",
  reaction: "📺"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // Example placeholder for video highlights (Consider using a video API)
  const highlightsUrl = `https://api.example.com/fl1-highlights`; // Replace with actual highlight API

  try {
    const response = await axios.get(highlightsUrl);
    if (!response.data.highlights) return repondre("❌ No highlights found.");

    let highlightsMessage = "🎬 *Ligue 1 Highlights*\n";
    response.data.highlights.forEach((highlight, index) => {
      highlightsMessage += `${index + 1}. [Watch Highlight](${highlight.url})\n`;
    });

    repondre(highlightsMessage);
  } catch (error) {
    console.error(error);
    repondre("❌ Error fetching Ligue 1 highlights.");
  }
});
