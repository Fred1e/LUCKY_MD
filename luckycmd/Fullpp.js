const { ezra } = require("../fredi/ezra");
const { generateProfilePicture } = require("../fredi/dl/Function");
const { S_WHATSAPP_NET } = require('@whiskeysockets/baileys');
const fs = require("fs");

ezra({
  nomCom: "fullpp",
  aliases: ["updatepp", "ppfull"],
  reaction: '🍂',
  categorie: "new"
}, async (dest, zk, commandeOptions) => {
  const { repondre, msgRepondu, auteurMessage } = commandeOptions;

  if (msgRepondu) {
    repondre('quote an image');

    let media;
    if (msgRepondu.imageMessage) {
      media = msgRepondu.imageMessage;
    } else {
      repondre('This is not an image...');
      return;
    }

    try {
      var medis = await zk.downloadAndSaveMediaMessage(media);

      var { img } = await generateProfilePicture(medis);

      await zk.query({
        tag: 'iq',
        attrs: {
          target: undefined,
          to: S_WHATSAPP_NET,
          type: 'set',
          xmlns: 'w:profile:picture'
        },
        content: [
          {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
          }
        ]
      });

      fs.unlinkSync(medis);
      repondre("Bot Profile Picture Updated");
    } catch (error) {
      repondre("An error occurred while updating bot profile photo: " + error);
    }
  } else {
    repondre('No image was quoted.');
  }
});
