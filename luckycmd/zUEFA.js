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

/** ✅ UEFA Champions League Standings */
ezra({
  nomCom: "cl_table",
  categorie: "football live",
  reaction: "⚽"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;
  
  // API URL for UEFA Champions League standings
  const standingsUrl = `${apiUrl}/CL/standings`;

  const data = await fetchFootballData(standingsUrl);
  if (!data || !data.standings) {
    return repondre("❌ Error fetching UEFA Champions League standings.");
  }

  const standings = data.standings[0].table;
  let standingsMessage = "📊 *UEFA Champions League Table*\n";
  standings.forEach((team, index) => {
    standingsMessage += `${index + 1}. ${team.team.name} - ${team.points} Points\n`;
  });

  repondre(standingsMessage);
});

/** ✅ UEFA Champions League Matchday */
ezra({
  nomCom: "cl_matchday",
  categorie: "football live",
  reaction: "📅"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for upcoming UEFA Champions League matches
  const matchesUrl = `${apiUrl}/CL/matches`;

  const data = await fetchFootballData(matchesUrl);
  if (!data || !data.matches) {
    return repondre("❌ Error fetching UEFA Champions League matchday.");
  }

  const matches = data.matches;
  let matchdayMessage = "🗓️ *Upcoming UEFA Champions League Matches*\n";
  matches.forEach(match => {
    matchdayMessage += `${match.homeTeam.name} vs ${match.awayTeam.name} - ${match.utcDate}\n`;
  });

  repondre(matchdayMessage);
});

/** ✅ UEFA Champions League Top Scorers */
ezra({
  nomCom: "cl_top_scorer",
  categorie: "football live",
  reaction: "⚽"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for UEFA Champions League top scorers
  const topScorerUrl = `${apiUrl}/CL/scorers`;

  const data = await fetchFootballData(topScorerUrl);
  if (!data || !data.scorers) {
    return repondre("❌ Error fetching UEFA Champions League top scorers.");
  }

  const topScorers = data.scorers;
  let topScorerMessage = "🏆 *UEFA Champions League Top Scorers*\n";
  topScorers.forEach((scorer, index) => {
    topScorerMessage += `${index + 1}. ${scorer.player.name} - ${scorer.numberOfGoals} Goals\n`;
  });

  repondre(topScorerMessage);
});

/** ✅ UEFA Champions League Top Assists */
ezra({
  nomCom: "cl_top_assist",
  categorie: "football live",
  reaction: "🎯"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for UEFA Champions League top assists
  const topAssistUrl = `${apiUrl}/CL/assists`;

  const data = await fetchFootballData(topAssistUrl);
  if (!data || !data.assists) {
    return repondre("❌ Error fetching UEFA Champions League top assists.");
  }

  const topAssists = data.assists;
  let topAssistMessage = "🎯 *UEFA Champions League Top Assists*\n";
  topAssists.forEach((assist, index) => {
    topAssistMessage += `${index + 1}. ${assist.player.name} - ${assist.numberOfAssists} Assists\n`;
  });

  repondre(topAssistMessage);
});

/** ✅ UEFA Champions League News */
ezra({
  nomCom: "cl_news",
  categorie: "football live",
  reaction: "📰"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for UEFA Champions League news (You may need to use another news API for this)
  const newsUrl = `https://newsapi.org/v2/everything?q=UEFA+Champions+League&apiKey=YOUR_NEWSAPI_KEY`; // Replace with your NewsAPI key

  try {
    const response = await axios.get(newsUrl);
    if (response.data.status !== "ok") return repondre("❌ Error fetching UEFA Champions League news.");

    let newsMessage = "📰 *UEFA Champions League News*\n";
    response.data.articles.forEach((article, index) => {
      newsMessage += `${index + 1}. [${article.title}](${article.url})\n`;
    });

    repondre(newsMessage);
  } catch (error) {
    console.error(error);
    repondre("❌ Error fetching UEFA Champions League news.");
  }
});

/** ✅ UEFA Champions League Highlights (You can integrate video highlight API) */
ezra({
  nomCom: "cl_highlights",
  categorie: "football live",
  reaction: "📺"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // Example placeholder for video highlights (Consider using a video API)
  const highlightsUrl = `https://api.example.com/cl-highlights`; // Replace with actual highlight API

  try {
    const response = await axios.get(highlightsUrl);
    if (!response.data.highlights) return repondre("❌ No highlights found.");

    let highlightsMessage = "🎬 *UEFA Champions League Highlights*\n";
    response.data.highlights.forEach((highlight, index) => {
      highlightsMessage += `${index + 1}. [Watch Highlight](${highlight.url})\n`;
    });

    repondre(highlightsMessage);
  } catch (error) {
    console.error(error);
    repondre("❌ Error fetching UEFA Champions League highlights.");
  }
});
