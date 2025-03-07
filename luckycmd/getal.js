const { ezra } = require("../fredi/ezra");
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const { ajouterOuMettreAJourJid, mettreAJourAction, verifierEtatJid } = require("../luckydatabase/antilien");
const { atbajouterOuMettreAJourJid, atbverifierEtatJid } = require("../luckydatabase/antibot");
const { search, download } = require("aptoide-scraper");
const fs = require("fs-extra");
const conf = require("../set");
const { default: axios } = require('axios');
const cron = require("../luckydatabase/cron");
const { exec } = require("child_process");

ezra({ nomCom: "getallmembers", categorie: 'Group', reaction: "📣" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg, verifGroupe, nomGroupe, infosGroupe, nomAuteurMessage, verifAdmin, superUser } = commandeOptions;

  // Ensure the command is for a group
  if (!verifGroupe) { 
    repondre("✋🏿 ✋🏿This command is reserved for groups ❌"); 
    return; 
  }

  // If no arguments, set a default message
  let mess = arg && arg.trim() ? arg.join(' ') : 'No message provided';

  // Get group participants if it's a group
  let membresGroupe = verifGroupe ? await infosGroupe.participants : [];

  // Prepare the initial message with group info
  let tag = `========================\n  
        🌟 *LUCKY-MD* 🌟
========================\n
👥 Group : ${nomGroupe} 🚀 
👤 Author : *${nomAuteurMessage}* 👋 
📜 Message : *${mess}* 📝
========================\n\n`;

  // Emoji array and random selection logic
  const emoji = ['🦴', '👀', '😮‍💨', '❌', '✔️', '😇', '⚙️', '🔧', '🎊', '😡', '🙏🏿', '⛔️', '$', '😟', '🥵', '🐅'];
  const random = Math.floor(Math.random() * emoji.length); // Fixed random calculation

  // Loop through the group members and include their WhatsApp Net ID (JID)
  membresGroupe.forEach((membre, index) => {
    tag += `${index + 1}. ${emoji[random]} @${membre.id.user} (${membre.id.user})\n`; // Display JID as the ID
  });

  // Send the message if user is an admin or super user
  if (verifAdmin || superUser) {
    zk.sendMessage(dest, { text: tag, mentions: membresGroupe.map(m => m.id) }, { quoted: ms });
  } else {
    repondre('Command reserved for admins');
  }
});


ezra({ nomCom: "tagadmin", categorie: 'Group', reaction: "📣" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg, verifGroupe, nomGroupe, infosGroupe, nomAuteurMessage, verifAdmin, superUser } = commandeOptions;

  // Ensure command is for a group
  if (!verifGroupe) { 
    repondre("✋🏿 ✋🏿this command is reserved for groups ❌"); 
    return; 
  }

  // If no message argument, set a default message
  let mess = arg && arg.trim() ? arg.join(' ') : 'Aucun Message';

  // Get group participants if it's a group
  let membresGroupe = verifGroupe ? await infosGroupe.participants : [];

  // Filter out non-admins
  let adminsGroupe = membresGroupe.filter(membre => membre.isAdmin);

  // Prepare the initial message tag
  let tag = `========================\n  
        🌟 *LUCKY-MD* 🌟
========================\n
👥 Group : ${nomGroupe} 🚀 
👤 Author : *${nomAuteurMessage}* 👋 
📜 Message : *${mess}* 📝
========================\n\n`;

  // Emoji array and random selection logic
  const emoji = ['🦴', '👀', '😮‍💨', '❌', '✔️', '😇', '⚙️', '🔧', '🎊', '😡', '🙏🏿', '⛔️', '$', '😟', '🥵', '🐅'];
  const random = Math.floor(Math.random() * emoji.length); // Fixed random calculation

  // Loop through the admin members only, numbering them from 1 to last
  adminsGroupe.forEach((admin, index) => {
    tag += `${index + 1}. ${emoji[random]} @${admin.id.split("@")[0]}\n`;
  });

  // Send the message if user is an admin or super user
  if (verifAdmin || superUser) {
    zk.sendMessage(dest, { text: tag, mentions: adminsGroupe.map(m => m.id) }, { quoted: ms });
  } else {
    repondre('command reserved for admins');
  }
});
