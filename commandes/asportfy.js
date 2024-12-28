const { zokou } = require("../framework/zokou");
const axios = require("axios");
const fs = require("fs");

zokou({
  nomCom: "spotifysearch",
  categorie: "Dowload",
  reaction: "🎙️",
  desc: "Search for music on Spotify and download it",
  alias: ["sps"]
}, async (origineMessage, zk, commandeOptions) => {
  const { repondre, arg, ms, auteurMessage } = commandeOptions;

  if (!arg[0] || arg.join('').trim() == '') return repondre('Please enter a music name');

  const query = arg.join(' ').trim();

  try {
    const response = await axios.get(`https://api.cafirexos.com/api/spotifyinfo?text=${encodeURI(query)}`);
    const { data } = response;

    if (data.resultado.length === 0) return repondre('No music found');

    const result = data.resultado[0];
    const message = `📅 *Date* : ${result.year}\n🎤 *Artist* : ${result.artist}\n🎵 *Tittle* : ${result.title}\n💿 *Album* : ${result.album}\n🎶 *Gender* : ${result.genre}\n🔗 *Link* : ${result.url}\n\n Reply to the message with *yes* (without the prefix) if you want to download it`;
    const sentMessage = await zk.sendMessage(origineMessage, {
      image: { url: result.thumbnail },
      caption: message
    }, { quoted: ms });

    zk.awaitForMessage({
      sender: auteurMessage,
      chatJid: origineMessage,
      timeout: 60000,
      filter: msg => msg.message?.contextInfo?.stanzaId == sentMessage.key.id && msg.message?.extendedTextMessage?.text?.trim() == 'oui'
    }).then(async reply => {
      zk.sendMessage(origineMessage, { text: '😎 *Dear, in what format would you like me to send you the song ?* :\n1️⃣ => 🎧 *Audio*\n2️⃣ => 📄 *Document*\n\n Reply to the message with the number of your choice' }, { quoted: reply });

      try {
        const downloadResponse = await axios.get(`https://api.cafirexos.com/api/spotifydl?url=${result.url}`, { responseType: 'arraybuffer' });
        fs.writeFileSync('./spotifysearch.mp3', Buffer.from(downloadResponse.data));
        await zk.sendMessage(origineMessage, { audio: { url: './spotifysearch.mp3' }, mimetype: 'audio/mpeg' });
        fs.unlinkSync('./spotifysearch.mp3');
      } catch (error) {
        repondre('Error while downloading');
        console.log(error);
      }
    }).catch(error => {
      if (error.message == 'Timeout') {
        try {
          console.log('Timeout');
          zk.sendMessage(origineMessage, { text: '```Request canceled```', edit: sentMessage.key });
        } catch (err) {
          console.log(err);
        }
      } else {
        repondre('No response from server');
        console.log(error);
      }
    });
  } catch (error) {
    repondre('Error during query');
    console.log('Error with spotify search command :', error);
  }
});
