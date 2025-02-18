const { ezra } = require('../fredi/ezra');
const axios = require('axios');
const conf = require(__dirname + "/../set");
const fetch = require('node-fetch'); 
const { translate } = require('@vitalets/google-translate-api');

ezra({
  nomCom: "surah",
 aliases: ["surahh", "qurann"],
  reaction: '🤲',
  categorie: "God-first"
}, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;
  const reference = arg.join(" ");
  
  if (!reference) {
    return repondre("Please specify the surah number or name.", {
      contextInfo: {
        externalAdReply: {
          title: "Surah Reference Required",
          body: "Please specify the surah number or name.",
          thumbnailUrl: conf.URL, 
          sourceUrl: conf.GURL,
          mediaType: 1,
          showAdAttribution: true,
        },
      },
    });
  }
  
  try {
    const response = await axios.get(`https://quran-endpoint.vercel.app/quran/${reference}`);
    
    if (response.data.status !== 200) {
      return repondre("Invalid surah reference. Please specify a valid surah number or name.", {
        contextInfo: {
          externalAdReply: {
            title: "Invalid Surah Reference",
            body: "Please specify a valid surah number or name.",
            thumbnailUrl: conf.URL, // Replace with a suitable thumbnail URL
            sourceUrl: conf.GURL,
            mediaType: 1,
            showAdAttribution: true,
          },
        },
      });
    }
    
    const data = response.data.data;
    const messageText = `
ᬑ *LUCKY QURAN SURAH* ᬒ

*🕌 Quran: The Holy Book*
📜 Surah ${data.number}: ${data.asma.ar.long} (${data.asma.en.long})
Type: ${data.type.en}
Number of verses: ${data.ayahCount}
🔮 *Explanation (Urdu):* ${data.translatedTafsirUrdu.text}
🔮 *Explanation (English):* ${data.translatedTafsirEnglish.text}
╭────────────────◆
│ *_Powered by ${conf.OWNER_NAME}*
╰─────────────────◆ `;
    
    await zk.sendMessage(dest, {
      text: messageText,
      contextInfo: {
        externalAdReply: {
          title: "LUCKY MD QURAN SURAH",
          body: `We're reading: ${data.asma.en.long}`,
          mediaType: 1,
          thumbnailUrl: conf.URL, 
          sourceUrl: conf.GURL,
          showAdAttribution: true, 
        },
      },
    }, { quoted: ms });
    
  } catch (error) {
    console.error("Error fetching Quran passage:", error);
    await repondre("API request failed. Please try again later.", {
      contextInfo: {
        externalAdReply: {
          title: "Error Fetching Quran Passage",
          body: "Please try again later.",
          thumbnailUrl: conf.URL, // Replace with a suitable thumbnail URL
          sourceUrl: conf.GURL,
          mediaType: 1,
          showAdAttribution: true,
        },
      },
    });
  }
});