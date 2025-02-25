const { ezra } = require("../fredi/ezra");
const ai = require('unlimited-ai');
const axios = require('axios'); // Added missing axios import
const fs = require('fs');
const conf = require(__dirname + "/../set");

// General handler for AI commands
const handleAiCommand = async (dest, zk, params, url, usageExample) => {
  const { repondre, arg } = params;
  const lucky = arg.join(" ").trim();

  if (!lucky) {
    return repondre(usageExample);
  }

  const text = lucky;

  try {
    const response = await fetchGptResponse(url, text);

    await zk.sendMessage(dest, {
      text: response,
      contextInfo: {
        externalAdReply: {
          title: conf.BOT,
          body: "Keep learning",
          thumbnailUrl: conf.URL,
          sourceUrl: "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
          mediaType: 1,
          showAdAttribution: true,
        },
      },
    });
  } catch (error) {
    console.error("Error generating AI response:", error);
    await repondre("Sorry, I couldn't process your request.");
  }
};

// ezra command handlers
ezra({
  nomCom: "chat",
  aliases: ["chatbot", "chatai"],
  reaction: '🤦',
  categorie: "AI"
}, async (dest, zk, params) => {
  handleAiCommand(dest, zk, params, "https://bk9.fun/ai/chataibot?q=", "Example usage: gpt How's the weather today?");
});

ezra({
  nomCom: "lucky",
  aliases: ["luckymd", "luckybot"],
  reaction: '🤦',
  categorie: "AI4"
}, async (dest, zk, params) => {
  handleAiCommand(dest, zk, params, "https://bk9.fun/ai/BK93?BK9=you%20are%20zoro%20from%20one%20piece&q=", "Example usage: gpt Hi, how are you?");
});

ezra({
  nomCom: "gpt",
  aliases: ["ilamaa", "ilamaai"],
  reaction: '🤦',
  categorie: "AI4"
}, async (dest, zk, params) => {
  handleAiCommand(dest, zk, params, "https://bk9.fun/ai/llama?q=", "Example usage: gpt Hi, how are you?");
});

ezra({
  nomCom: "gemni",
  aliases: ["gemini4", "geminiai"],
  reaction: '🤦',
  categorie: "AI4"
}, async (dest, zk, params) => {
  handleAiCommand(dest, zk, params, "https://bk9.fun/ai/gemini?q=", "Example usage: gpt Hi, how are you?");
});

ezra({
  nomCom: "ilma",
  aliases: ["gpt4", "ai"],
  reaction: '🤦',
  categorie: "AI4"
}, async (dest, zk, params) => {
  const { repondre, arg } = params;
  const lucky = arg.join(" ").trim();

  if (!lucky) {
    return repondre("Please provide a song name.");
  }

  const text = lucky;
  try {
    const model = 'gpt-4-turbo-2024-04-09';
    const messages = [
      { role: 'user', content: text },
      { role: 'system', content: 'You are an assistant in WhatsApp. You are called Keith. You respond to user commands.' }
    ];

    const response = await ai.generate(model, messages);

    await zk.sendMessage(dest, {
      text: response,
      contextInfo: {
        externalAdReply: {
          title: conf.BOT,
          body: "keep Learning",
          thumbnailUrl: conf.URL,
          sourceUrl: "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
          mediaType: 1,
          showAdAttribution: true,
        },
      },
    });
  } catch (error) {
    console.error("Error generating AI response:", error);
    await repondre("Sorry, I couldn't process your request.");
  }
});
