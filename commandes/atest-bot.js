const { zokou } = require("../framework/zokou");
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = require('@whiskeysockets/baileys');

zokou(
  {
    nomCom: 'cadeelucky',
    reaction: '🎁',
    categorie: 'test-lucky'
  },
  async (origineMessage, zk, commandeOptions) => {
    const { ms, auteurMessage, repondre } = commandeOptions;
    
    try {
      const message = generateWAMessageFromContent(origineMessage, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: 'messageText',
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: 'Lucky_Md_bot',
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              ...(await prepareWAMessageMedia({
                image: {
                  url: 'https://files.catbox.moe/7irwqn.jpeg',
                },
              }, { upload: zk.waUploadToServer })),
              title: '',
              gifPlayback: true,
              subtitle: '',
              hasMediaAttachment: false,
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                    display_text: "Menu",
                    id: "menu",
                  }),
                },
                 {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                    display_text: "northainz👤",
                    id: "northainz👤",
                  }),
                },
              ],
            }),
            contextInfo: {
              mentionedJid: [auteurMessage],
              forwardingScore: 9999,
              isForwarded: true,
            },
          }),
        },
      },
    }, {});
      
    await zk.relayMessage(origineMessage, message.message, { messageId:  message.key.id });
  //  await zk.sendMessage(origineMessage, messageOptions.message,  { quoted: ms });
       } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
    }
  }
);
 

zokou(
  {
    nomCom: 'butimg',
    reaction: '🎁',
    categorie: 'test-lucky'
  },
  async (origineMessage, zk, commandeOptions) => {
    const { ms, auteurMessage, repondre } = commandeOptions;
    
    try {
    let texte = "boutons message";
    let lien = "https://files.catbox.moe/7irwqn.jpeg";
    let buttons = [
                {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                    display_text: "",
                    id: "menu",
                  }),
                },
                 {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                    display_text: "northainz👤",
                    id: "northainz👤",
                  }),
                },
              ];
     await zk.sendButImg(origineMessage, auteurMessage, texte, lien, buttons);
      
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
    }
  }
);

zokou(
  {
    nomCom: 'but-txt',
    reaction: '🎁',
    categorie: 'test-lucky'
  },
  async (origineMessage, zk, commandeOptions) => {
    const { ms, auteurMessage, repondre } = commandeOptions;
    
    try {
    let texte = "boutons message";
    let buttons = [
                {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                    display_text: "menu",
                    id: "menu",
                  }),
                },
                 {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                    display_text: "northainz👤",
                    id: "northainz👤",
                  }),
                },
              ];
     await zk.sendButTxt(origineMessage, auteurMessage, texte, buttons);
       } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
    }
  }
);

zokou(
  {
    nomCom: 'but',
    reaction: '🎁',
    categorie: 'test-lucky'
  },
  async (origineMessage, zk, commandeOptions) => {
    const { ms, auteurMessage, repondre } = commandeOptions;
    
    try {
    let texte = "boutons message";
    let buttons = [
                {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                    display_text: "menu",
                    id: "menu",
                  }),
                },
                 {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                    display_text: "northainz👤",
                    id: "northainz👤",
                  }),
                },
              ];
     await zk.sendBut(origineMessage, buttons);
            } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
    }
  }
);


/* zk.sendButImg = async (org, auteur, txt, img, buttons)
zk.sendButTxt = async (org, auteur, txt, buttons)
zk.sendBut = async (org, buttons)
*/
