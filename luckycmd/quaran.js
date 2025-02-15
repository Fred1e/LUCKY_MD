const { ezra } = require('../fredi/ezra');
const axios = require('axios');
const wiki = require('wikipedia');
const conf = require(__dirname + "/../set");

ezra({
  nomCom: "quran",
  reaction: '🤲',
  categorie: "God-first"
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  const reference = arg.join(" ");
  
  if (!reference) {
    return repondre("Please specify the surah number or name", {
      contextInfo: {
        externalAdReply: {
          title: "Surah Reference Required",
          body: "Please specify the surah number or name.",
          thumbnailUrl: "https://files.catbox.moe/zt9ie6.jpg", // Replace with a suitable thumbnail URL
          sourceUrl: conf.GURL,
          mediaType: 1,
          showAdAttribution: true,
        },
      },
    });
  }
  
  try {
    const response = await axios.get(`https://quran-endpoint.vercel.app/quran/${surahData.number}`);
    
    if (!response.data) {
      return repondre("Please specify the surah number or name", {
        contextInfo: {
          externalAdReply: {
            title: "Invalid Surah Reference",
            body: "Please specify the surah number or name.",
            thumbnailUrl: "https://files.catbox.moe/zt9ie6.jpg", // Replace with a suitable thumbnail URL
            sourceUrl: conf.GURL,
            mediaType: 1,
            showAdAttribution: true,
          },
        },
      });
    }
    
    const data = response.data;
    const messageText = `
ᬑ *LUCKY QURAN SURAH* ᬒ

*🕌 *Quran: The Holy Book*
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*
Type: ${json.data.type.en}
Number of verses: ${json.data.ayahCount}
🔮 *Explanation (Urdu):* ${translatedTafsirUrdu.text}
🔮 *Explanation (English):*\n${translatedTafsirEnglish.text}
╭────────────────◆
│ *_Powered by ${conf.OWNER_NAME}*
╰─────────────────◆ `;
    
    await zk.sendMessage(dest, {
      text: messageText,
      contextInfo: {
        externalAdReply: {
          title: "LUCKY MD QURAN SURAH",
          body: `We're reading: ${data.reference}`,
          mediaType: 1,
          thumbnailUrl: "https://files.catbox.moe/zt9ie6.jpg", 
          sourceUrl: conf.GURL,
          showAdAttribution: true, 
        },
      },
    }, { quoted: ms });
    
  } catch (error) {
    console.error("Error fetching Quran passage:", error);
    await repondre(`API request failed with status ${res.status} and message ${error.message}`, {
      contextInfo: {
        externalAdReply: {
          title: "Error Fetching Quran Passage",
          body: "Please try again later.",
          thumbnailUrl: "https://files.catbox.moe/zt9ie6.jpg", // Replace with a suitable thumbnail URL
          sourceUrl: conf.GURL,
          mediaType: 1,
          showAdAttribution: true,
        },
      },
    });
  }
});

