const { ezra } = require("../fredi/ezra");
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const { ajouterOuMettreAJourJid, mettreAJourAction, verifierEtatJid } = require("../bdd/antilien");
const { atbajouterOuMettreAJourJid, atbverifierEtatJid } = require("../bdd/antibot");
const { search, download } = require("aptoide-scraper");
const fs = require("fs-extra");
const conf = require("../set");
const { default: axios } = require('axios');
const cron = require("../bdd/cron");
const { exec } = require("child_process");


  // request for getall members
ezra({ nomCom: "tagall", desc: "get jid of all members of groups/pm chats/all groups.", categorie: 'Group', reaction: "📣" },
     async (dest, zk, commandeOptions) => {
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

  // Prepare the initial message tag
  let tag = `LUCKY MD LIST OF MEMBERS JIDS\n
👥 Group : ${nomGroupe} 🚀 
🥂 Total ${anu.length} 
👤 Author : *${nomAuteurMessage}* 👋 
📜 Message : *${mess}* 📝
========================\n\n`;

  // Emoji array and random selection logic
  const emoji = ['🦴', '👀', '😮‍💨', '❌', '✔️', '😇', '⚙️', '🔧', '🎊', '😡', '🙏🏿', '⛔️', '$', '😟', '🥵', '🐅'];
  const random = Math.floor(Math.random() * emoji.length); // Fixed random calculation

  // Loop through the group members, numbering them from 1 to last
  membresGroupe.forEach((membre, index) => {
    tag += `${index + 1}. ${emoji[random]} ${i.id}`;
  });

  // Send the message if user is an admin or super user
  if (verifAdmin || superUser) {
    zk.sendMessage(dest, { text: tag, mentions: membresGroupe.map(m => i.id) }, { quoted: ms });
  } else {
    repondre('request received for admin and owner only');
  }
});

  // request for forward message DMs
  ezra({ nomCom: "forward", desc: "to forwad message to members in the group DMs", categorie: 'Group', reaction: "📤" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg, verifGroupe, nomGroupe, infosGroupe, nomAuteurMessage, superUser  } = commandeOptions;

  if (!verifGroupe) {
    repondre("*😮‍💨  😮‍💨 Uuuuhh!! this command is reserved for groups Only❌*");
    return;
  }

  let mess = arg && arg.length > 0 ? arg.join(' ') : 'Aucun Message';
  let membresGroupe = verifGroupe ? await infosGroupe.participants : "";

  if ( superUser ) {
    // Send the message to each member's number
    for (const membre of membresGroupe) {
      const memberNumber = membre.id.split('@')[0]; // Extract the number from the ID
      // Send the message directly to the member's DM
      await zk.sendMessage(memberNumber, { text: mess });
    }
    repondre('*Lucky Md Forwarded Your Message To All group members in their DMs.*');
  } else {
    repondre('*Only My Owner Can Use This Command.*');
  }
});

  // request for tagadmin cmd
  ezra({ nomCom: "tagadmin", categorie: 'Group', reaction: "🤭" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg, verifGroupe, nomGroupe, infosGroupe, nomAuteurMessage, verifAdmin, superUser } = commandeOptions;

  // Ensure command is for a group
  if (!verifGroupe) { 
    repondre("✋🏿 ✋🏿this command is reserved for groups ❌"); 
    return; 
  }

  // If no message argument, set a default message
  let mess = arg && arg.trim() ? arg.join(' ') : 'Aucun Message';

  // Get group participants if it's a group
  let administrateursGroupe = verifGroupe ? await infosGroupe.participants : [];

  // Prepare the initial message tag
  let tag = `========================\n  
        🤷 *LUCKY-MD* 🤦
========================\n
👥 Group : ${nomGroupe} 🚀 
👤 Author : *${nomAuteurMessage}* 👋 
📜 Message : *${mess}* 📝
========================\n\n`;

  // Emoji array and random selection logic
  const emoji = ['🦴', '👀', '😮‍💨', '❌', '✔️', '😇', '⚙️', '🔧', '🎊', '😡', '🙏🏿', '⛔️', '$', '😟', '🥵', '🐅'];
  const random = Math.floor(Math.random() * emoji.length); // Fixed random calculation

  // Loop through the group admins, numbering them from 1 to last
  administrateursGroupe.forEach((admin, index) => {
    tag += `${index + 1}. ${emoji[random]} @${admin.id.split("@")[0]}\n`;
  });

  // Send the message if user is an admin or super user
  if (verifAdmin || superUser) {
    zk.sendMessage(dest, { text: tag, mentions: administrateursGroupe.map(m => m.id) }, { quoted: ms });
  } else {
    repondre('command reserved for admins');
  }
});