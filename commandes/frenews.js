const { zokou } = require("../framework/zokou");
const axios = require("axios");

zokou({
  nomCom: "news",
  aliases: ["habari", "tuko"],
  categorie: "AI",
  reaction: '🗞️',
}, async (dest, zk, context) => {
  const { repondre: sendResponse, arg: args } = context;
  const text = args.join(" ");

  try {
    if (!text) {
      return sendResponse("Please provide a query.");
    }

    const query = encodeURIComponent(text); // Encode the query to handle special characters
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${text}&from=2024-12-09&sortBy=publishedAt&apiKey=ec5eab56a1bc412bbb6519b2afee0943`);

    // Check if the response status is ok
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    const result = response.data; // Get JSON data from response

    // Check if articles are available
    if (result.articles && result.articles.length > 0) {
      const articles = result.articles.slice(0, 5); // Limit to 5 articles
      let responseMessage = 'Here are the latest news updates:\n\n';

      articles.forEach((article, index) => {
        responseMessage += `${index + 1}. **${article.title}**\n${article.description}\nRead more: ${article.url}\n\n`;
      });

      await sendResponse(responseMessage); // Send the formatted message with news details
    } else {
      await sendResponse("No articles found for your query. Please try with different keywords.");
    }

  } catch (e) {
    console.error(e);  // Use console.error for better error logging
    sendResponse("An error occurred. Please try again later.");
  }
});
