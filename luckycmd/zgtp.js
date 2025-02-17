
const { ezra } = require("../fredi/ezra");
const ai = require('unlimited-ai');

ezra({
  nomCom: "gpt",
  aliases: ["gpt4a", "ai4"],
  reaction: '🍂',
  categorie: "search"
}, async (dest, zk, params) => {
  const { repondre, arg } = params;  // Use args for the command arguments
  const lucky = arg.join(" ").trim(); // Assuming args is an array of command parts

  if (!lucky) {
    return repondre("Please provide something to help you friend.");
  }

  // Assuming 'lucky' is the text we want to use in the AI prompt
  const text = lucky;  // Set the text that will be passed to the AI

  try {
    const model = 'gpt-4-turbo-2024-04-09'; 

    const messages = [
      { role: 'user', content: text },
      { role: 'system', content: 'You are an assistant in WhatsApp. You are called Fredi. You respond to user commands.' }
    ];

    const response = await ai.generate(model, messages);
    await zk.sendMessage(dest, {
      text: response,
      contextInfo: {
        externalAdReply: {
          title: "𝐋𝐔𝐂𝐊𝐘-𝚳𝐃 𝐆𝚸𝚻",
          body: "keep learning", // Format the uptime before sending
          thumbnailUrl: "https://files.catbox.moe/t0z3w1.jpg", // Replace with your bot profile photo URL
          sourceUrl: "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f", // Your channel URL
          mediaType: 1,
          showAdAttribution: true, // Verified badge
        },
      },
    });

  } catch (error) {
    console.error("Error generating AI response:", error);
    await repondre("Sorry, I couldn't process your request.");
  }
});

ezra({
  nomCom: "gemine",
  aliases: ["gpto4", "gemni", "gpta2", "gpta3"],
  reaction: '🤷',
  categorie: "search"
}, async (context, zk, params) => {
  const { repondre, arg } = params;
  const elementQuery = arg.join(" ").trim(); // Use 'arg' to capture the user query

  // Check if elementQuery is empty
  if (!elementQuery) {
    return repondre("Please provide something.");
  }

  try {
    // Dynamically import Gemini AI
    const { default: Gemini } = await import('gemini-ai');
    const gemini = new Gemini("AIzaSyC3sNClbdraGrS2ubb5PTdnm_RbUANtdzc");

    const chat = gemini.createChat();

    // Ask Gemini AI for a response
    const res = await chat.ask(elementQuery);

    await zk.sendMessage(context, {
      text: res,
      contextInfo: {
        externalAdReply: {
          title: "𝐋𝐔𝐂𝐊𝐘-𝚳𝐃 𝐆𝚵𝚳𝚰𝚴𝚰",
          body: "keep learning", // Format the uptime before sending
          thumbnailUrl: "https://files.catbox.moe/mse1bd.jpg", // Replace with your bot profile photo URL
          sourceUrl: "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f", // Your channel URL
          mediaType: 1,
          showAdAttribution: true, // Verified badge
        },
      },
    });

  } catch (e) {
    // Handle errors by sending a message to the user
    await repondre("I am unable to generate responses\n\n" + e.message);
  }
});
 
