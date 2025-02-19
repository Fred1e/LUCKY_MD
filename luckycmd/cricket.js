const { ezra } = require('../fredi/ezra');
const axios = require("axios");

ezra({
  nomCom: "cricket",
  category: "football-zone",
  desc: "Sends info of given query from Google Search.",
  reaction: "🏏",
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  try {
    const apiUrl = "https://api.cricapi.com/v1/currentMatches?apikey=f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78";
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (!data) {
      return repondre("*_Please Wait, Getting Cricket Info_*");
    }
for (let i=0 ; i <  dat.data.length; i++) {
let j = i+1;
text +=`*--------------------- MATCH ${i}-------------------*`;
text +=" *Match Name:* "+ dat.data[i].name;
text +=" *Match Status:* "+ dat.data[i].status;
text +=" *Match Date:* " + dat.data[i].dateTimeGMT ;
text +=" *Match Started:* " + dat.data[i].matchStarted;
text +=" *Match Ended:* " + dat.data[i].matchEnded,;

    return repondre(output, { quoted: ms });
  } catch (error) {
    console.error('*_Uhh dear, Did not get any results!_*', error);
    return repondre("*_Uhh dear, Didn't get any results!_*");
  }
});