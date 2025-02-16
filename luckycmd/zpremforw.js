const { ezra } = require("../fredi/ezra");
const { ajouterOuMettreAJourJid, mettreAJourAction, verifierEtatJid } = require("../luckydatabase/antilien");
const { atbajouterOuMettreAJourJid, atbverifierEtatJid } = require("../luckydatabase/antibot");
const fs = require("fs-extra");
const conf = require("../set");
const { default: axios } = require('axios');

ezra({ nomCom: "forward", categorie: 'Group', reaction: "📤" }, async (dest, zk, commandeOptions) => {
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
