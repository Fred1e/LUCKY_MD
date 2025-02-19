const { ezra } = require('../fredi/ezra');
const axios = require("axios");

ezra({
  nomCom: "cricket",
  categorie: "football-zone",
  desc: "Sends info of given query from Google Search.",
  reaction: "🏏",
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  try {
    const apiUrl = "https://api.cricapi.com/v1/currentMatches?apikey=f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78";
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (!data || !data.data.length) {
      return repondre("*_Please Wait, Getting Cricket Info_*");
    }

    let text = "";

    for (let i = 0; i < data.data.length; i++) {
      text += `*--------------------- MATCH ${i + 1} -------------------*\n`;
      text += `*Match Name:* ${data.data[i].name}\n`;
      text += `*Match Status:* ${data.data[i].status}\n`;
      text += `*Match Date:* ${data.data[i].dateTimeGMT}\n`;
      text += `*Match Started:* ${data.data[i].matchStarted}\n`;
      text += `*Match Ended:* ${data.data[i].matchEnded}\n\n`;
    }
      
    return repondre(text, { quoted: ms });
  } catch (error) {
    console.error("*_Uhh dear, Did not get any results!_*", error);
    return repondre("*_Uhh dear, Didn't get any results!_*");
  }
});
