const { ezra } = require('../fredi/ezra');
const axios = require("axios");

ezra({
  nomCom: "insult",
  aliases: ["abuse", "tusi"],
  categorie: "search",
  reaction: "🤷"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  try {
    const response = await axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json');
    const data = response.data;

    if (!data || !data.insult) {
      return repondre('Unable to retrieve an insult. Please try again later.');
    }

    const insult = data.insult;
    return repondre(`*Insult:* ${insult}`);
  } catch (error) {
    repondre(`Error: ${error.message || error}`);
  }
});
