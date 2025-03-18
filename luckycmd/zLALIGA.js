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

/** ✅ laliga standings */
ezra({
  nomCom: "laliga_table",
  categorie: "football live",
  reaction: "⚽"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for La Liga standings
  const standingsUrl = `${apiUrl}/PD/standings`;

  const data = await fetchFootballData(standingsUrl);
  if (!data || !data.standings) {
    return repondre("❌ Error fetching La Liga standings.");
  }

  const standings = data.standings[0].table;
  let standingsMessage = "📊 *La Liga Table*\n";
  standings.forEach((team, index) => {
    standingsMessage += `${index + 1}. ${team.team.name} - ${team.points} Points\n`;
  });

  repondre(standingsMessage);
});

/** ✅ laliga matchday */
ezra({
  nomCom: "laliga_matchday",
  categorie: "football live",
  reaction: "📅"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for upcoming La Liga matches
  const matchesUrl = `${apiUrl}/PD/matches`;

  const data = await fetchFootballData(matchesUrl);
  if (!data || !data.matches) {
    return repondre("❌ Error fetching La Liga matchday.");
  }

  const matches = data.matches;
  let matchdayMessage = "🗓️ *Upcoming La Liga Matches*\n";
  matches.forEach(match => {
    matchdayMessage += `${match.homeTeam.name} vs ${match.awayTeam.name} - ${match.utcDate}\n`;
  });

  repondre(matchdayMessage);
});

/** ✅ laliga top scorers */
ezra({
  nomCom: "laliga_top_scorer",
  categorie: "football live",
  reaction: "⚽"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for La Liga top scorers
  const topScorerUrl = `${apiUrl}/PD/scorers`;

  const data = await fetchFootballData(topScorerUrl);
  if (!data || !data.scorers) {
    return repondre("❌ Error fetching La Liga top scorers.");
  }

  const topScorers = data.scorers;
  let topScorerMessage = "🏆 *La Liga Top Scorers*\n";
  topScorers.forEach((scorer, index) => {
    topScorerMessage += `${index + 1}. ${scorer.player.name} - ${scorer.numberOfGoals} Goals\n`;
  });

  repondre(topScorerMessage);
});

/** ✅ laliga top assists */
ezra({
  nomCom: "laliga_top_assist",
  categorie: "football live",
  reaction: "🎯"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for La Liga top assists
  const topAssistUrl = `${apiUrl}/PD/assists`;

  const data = await fetchFootballData(topAssistUrl);
  if (!data || !data.assists) {
    return repondre("❌ Error fetching La Liga top assists.");
  }

  const topAssists = data.assists;
  let topAssistMessage = "🎯 *La Liga Top Assists*\n";
  topAssists.forEach((assist, index) => {
    topAssistMessage += `${index + 1}. ${assist.player.name} - ${assist.numberOfAssists} Assists\n`;
  });

  repondre(topAssistMessage);
});

/** ✅ laliga news */
ezra({
  nomCom: "laliga_news",
  categorie: "football live",
  reaction: "📰"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // API URL for La Liga news (You may need to use another news API for this)
  const newsUrl = `https://newsapi.org/v2/everything?q=La Liga&apiKey=YOUR_NEWSAPI_KEY`; // Replace with your NewsAPI key

  try {
    const response = await axios.get(newsUrl);
    if (response.data.status !== "ok") return repondre("❌ Error fetching La Liga news.");

    let newsMessage = "📰 *La Liga News*\n";
    response.data.articles.forEach((article, index) => {
      newsMessage += `${index + 1}. [${article.title}](${article.url})\n`;
    });

    repondre(newsMessage);
  } catch (error) {
    console.error(error);
    repondre("❌ Error fetching La Liga news.");
  }
});

/** ✅ laliga highlights (You can integrate video highlight API) */
ezra({
  nomCom: "laliga_highlights",
  categorie: "football live",
  reaction: "📺"
}, async (dest, zk, commandOptions) => {
  const { repondre } = commandOptions;

  // Example placeholder for video highlights (Consider using a video API)
  const highlightsUrl = `https://api.example.com/pd-highlights`; // Replace with actual highlight API

  try {
    const response = await axios.get(highlightsUrl);
    if (!response.data.highlights) return repondre("❌ No highlights found.");

    let highlightsMessage = "🎬 *La Liga Highlights*\n";
    response.data.highlights.forEach((highlight, index) => {
      highlightsMessage += `${index + 1}. [Watch Highlight](${highlight.url})\n`;
    });

    repondre(highlightsMessage);
  } catch (error) {
    console.error(error);
    repondre("❌ Error fetching La Liga highlights.");
  }
});
