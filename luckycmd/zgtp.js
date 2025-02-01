const { ezra } = require("../fredi/ezra");
const fs = require('fs');
const ai = require('unlimited-ai');

ezra({
  nomCom: "gpt",
  aliases: ["gpt4.1"],
  reaction: '🤦',
  categorie: "search"
}, async (context, message, params) => {
  const { repondre, arg } = params;  // Use args for the command arguments
  const lucky = arg.join(" ").trim(); // Assuming args is an array of command parts

  if (!lucky) return repondre("Please provide text.");

  // Load previous conversation from store.json, if exists
  let conversationData = [];
  try {
      const rawData = fs.readFileSync('fredi.json', 'utf8');
      conversationData = JSON.parse(rawData);
  } catch (err) {
      console.log('No previous conversation found, starting new one.');
  }

  // Define the model and the user/system message
  const model = 'gpt-4-turbo-2024-04-09';
  const userMessage = { role: 'user', content: lucky };  // Change 'text' to 'lucky' as it's the user input
  const systemMessage = { role: 'system', content: 'You are an assistant in WhatsApp. You are called Fredie. You respond to user commands.' };

  // Add user input to the conversation data
  conversationData.push(userMessage);
  conversationData.push(systemMessage);

  try {
      // Get AI response from the model
      const aiResponse = await ai.generate(model, conversationData);

      // Add AI response to the conversation data
      conversationData.push({ role: 'assistant', content: aiResponse });

      // Write the updated conversation data to store.json
      fs.writeFileSync('fredi.json', JSON.stringify(conversationData, null, 2));

      // Reply to the user with AI's response
      await repondre(aiResponse);
  } catch (error) {
      console.error("Error with AI generation: ", error);
      await repondre("Sorry, there was an error generating the response.");
  }
});
