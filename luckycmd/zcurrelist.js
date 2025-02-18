const axios = require('axios');
const { ezra } = require('../fredi/ezra');

ezra({
  nomCom: "currencylist",
  aliases: ["currencies", "conversionrates"],
  reaction: '💱',
  categorie: "traders"
}, async (dest, zk, commandeOptions) => {
  const { repondre } = commandeOptions;

  const fetchCurrencyRates = async () => {
    try {
      const response = await axios.get('https://v6.exchangerate-api.com/v6/4b4c3702f644aff09511558e/latest/USD');
      const data = response.data;

      // Check if the response is successful
      if (data && data.result === "success") {
        return data.conversion_rates;
      } else {
        throw new Error('Failed to retrieve currency rates.');
      }
    } catch (error) {
      console.error('Error fetching currency rates:', error);
      return null;
    }
  };

  try {
    const conversionRates = await fetchCurrencyRates();

    if (!conversionRates) {
      return repondre('Failed to retrieve currency rates. Please try again later.');
    }

    let message = '*Currency Conversion Rates*\n\n';
    for (const [currency, rate] of Object.entries(conversionRates)) {
      message += `*${currency}*: ${rate}\n`;
    }

    await zk.sendMessage(dest, { text: message });
  } catch (error) {
    console.error('Error sending currency list:', error);
    await repondre('Something went wrong while sending the currency list. Please try again later.');
  }
});
