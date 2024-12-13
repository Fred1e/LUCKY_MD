'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "wagroup",
  'reaction': '🤨',
  'nomFichier': __filename
}, async (_0x3258e7, _0x4c4732, _0x13b70c) => {
  console.log("Commande saisie !!!s");
  await _0x4c4732.sendMessage(_0x3258e7, {
    'text': "Hello 👋\n\nClick on the button below to join the OFFICIAL *LUCKY-MD* WhatsApp Group",
    'contextInfo': {
      'externalAdReply': {
        'sourceUrl': "https://chat.whatsapp.com/IH4xWuVTGpf7ibfzC3h6LM",
        'mediaType': 0x1,
        'mediaUrl': "https://files.catbox.moe/7irwqn.jpeg",
        'title': "Join Our WhatsApp Group",
        'body': "Click to join the official LUCKY-MD WhatsApp group!"
      }
    }
  });
  console.log("Command executed: wagroup");
});
zokou({
  'nomCom': 'wachannel',
  'reaction': '👀',
  'nomFichier': __filename
}, async (_0x14c950, _0x346e6b, _0x31cbea) => {
  console.log("Commande saisie !!!s");
  await _0x346e6b.sendMessage(_0x14c950, {
    'text': "Hello 👋\n\nClick on the button below to Follow the OFFICIAL *LUCKY-MD* WhatsApp Channel",
    'contextInfo': {
      'externalAdReply': {
        'sourceUrl': 'https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f',
        'mediaType': 0x1,
        'mediaUrl': "https://files.catbox.moe/7irwqn.jpeg",
        'title': "Join Our WhatsApp Channel",
        'body': "Click to join the official LUCKY-MD WhatsApp channel!"
      }
    }
  });
  console.log("Command executed: channel");
});
