// What are you doing mothe fucker 🖕 find codes to another bot
// Non visible script 
// Prepare yourself men don't disturb others

const { ezra } = require("../fredi/ezra");
const axios = require("axios");

ezra({ nomCom: "videologo", categorie: "Fledi-logo", reaction: "🔖" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
  const text = arg.join(" ");

  if (!text) {
    repondre("🤦Please provide a search thing.");
    return;
  }

  try {
    // Message content
    const messageText = `😁Reply with below alphabet to generate *${text}* logo

A ☞ sweet love 💞😻
B ☞ lightning pubg🕯️
C ☞ intro video 🎬
D ☞ tiger 🐯 video logo

*Enjoy 🔮*`;

    const contextInfo = {
      mentionedJid: [ms.sender], // Mention the sender
      externalAdReply: {
        title: "LUCKY MD",
        body: "Pambe Kwa, Frediezra",
        thumbnailUrl: "https://files.catbox.moe/7irwqn.jpeg",
        sourceUrl: "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    };

    const messageToSend = {
      text: messageText,
      contextInfo,
    };

    // Send the message
    const sentMessage = await zk.sendMessage(dest, messageToSend, { quoted: ms });

    // Event listener for message responses
    zk.ev.on('messages.upsert', async (update) => {
      const message = update.messages[0];
      if (!message.message || !message.message.extendedTextMessage) {
        return;
      }

      const responseText = message.message.extendedTextMessage.text.trim();
      if (message.message.extendedTextMessage.contextInfo && message.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id) {
        // Handle different logo choices based on alphabet
        let logoUrl;
        switch (responseText) {
          case 'A':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-sweet-love-video-cards-online-734.html", text);
            break;
          case 'B':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html", text);
            break;
          case 'C':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/free-logo-intro-video-maker-online-558.html", text);
            break;
          case 'D':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-digital-tiger-logo-video-effect-723.html", text);
            break;
          
          // Add additional cases as required
          default:
            return repondre("🚫*_Invalid alphabet. Please reply with a valid alphabet._*");
        }

        // Send the logo if URL is found
        if (logoUrl) {
          await zk.sendMessage(dest, {
            video: { url: logoUrl },
            mimetype: "video/mp4",
            caption: `> *Downloaded by Lucky Planet*`,
          }, { quoted: ms });
        }
      }
    });
  } catch (error) {
    console.log(error);
    repondre(`Error: ${error}`);
  }
});

// Function to fetch the logo URL using axios
const fetchLogoUrl = async (url, name) => {
  try {
    const response = await axios.get(`https://api-pink-venom.vercel.app/api/logo`, {
      params: { url, name }
    });
    return response.data.result.download_url; // Ensure this is the correct path for the download URL in the API response
  } catch (error) {
    console.error("❌Error fetching logo:", error);
    return null;
  }
}
