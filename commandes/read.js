const { zokou } = require("../framework/zokou");
const axios = require("axios");

const config = {
  nomCom: "book",
  reaction: '📙',
  categorie: 'IA'
};

zokou(config, async (responseHandler, args, context) => {
  const { repondre, arg } = context;

  try {
    if (!arg || arg.length === 0) {
      return repondre("Ask for any book-related news, and lucky md will provide updates.");
    }

    const query = arg.join(" ");
    const apiResponse = await axios.get(`https://itzpire.com/search/books?query=${encodeURIComponent(query)}`);
    
    const result = apiResponse.data;

    if (result && result.result) {
      repondre(result.result);
    } else {
      repondre("No results found for your query.");
    }
  } catch (error) {
    console.error("Error:", error.message || "An error occurred");
    repondre("Oops, an error occurred while processing your request.");
  }
});
