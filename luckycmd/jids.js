const { ezra } = require("../fredi/ezra");
const baileys = require('@adiwajshing/baileys');

async function getJidFromInviteLink(link, sock) {
  try {
    if (link.startsWith('https://chat.whatsapp.com/')) {
      const code = link.split("/")[3];
      const groupJid = await sock.groupAcceptInvite(code); // Gets real group JID like 1203xxxxx@g.us
      const newsletterJid = groupJid.replace(/@g\.us$/, '@newsletter');
      return newsletterJid;
    } else if (link.startsWith('https://whatsapp.com/channel/')) {
      const id = link.split("/").pop();
      const newsletterJid = `${id}@newsletter`;
      return newsletterJid;
    }
    return null;
  } catch (e) {
    console.error("Error while processing link:", e);
    return null;
  }
}

ezra({
  nomCom: "jid_user",
  categorie: "Mods"
}, async (m, sock, info) => {
  const { ms, repondre, msgRepondu, auteurMessage, auteurMsgRepondu, superUser } = info;

  if (!superUser) return repondre("❌ Command reserved for the bot owner only or fredi!");

  const jid = msgRepondu ? auteurMsgRepondu : auteurMessage;
  const newsletterJid = jid.replace(/@s\.whatsapp\.net$/, "@newsletter");

  sock.sendMessage(m, {
    text: `👤 *User JID:*\n\`\`\`${jid}\`\`\`\n` +
          `📰 *Newsletter JID:*\n\`\`\`${newsletterJid}\`\`\`\n\n> by LUCKY MD`
  }, { quoted: ms });
});

ezra({
  nomCom: "jid_me",
  categorie: "Bot"
}, async (m, sock, info) => {
  const { ms, repondre, superUser } = info;

  if (!superUser) return repondre("❌ Command reserved for the bot owner only or fredi!");

  const botJid = sock.user.id;
  const newsletterJid = botJid.replace(/@s\.whatsapp\.net$/, "@newsletter");

  sock.sendMessage(m, {
    text: `🤖 *Bot JID:*\n\`\`\`${botJid}\`\`\`\n` +
          `📰 *Newsletter JID:*\n\`\`\`${newsletterJid}\`\`\`\n\n> by LUCKY MD`
  }, { quoted: ms });
});

ezra({
  nomCom: "jid_group",
  categorie: "Group"
}, async (m, sock, info) => {
  const { arg, ms, repondre, superUser } = info;

  if (!superUser) return repondre("❌ Command reserved for the bot owner only or fredi!");

  const link = arg[0];
  if (!link || !link.startsWith("https://chat.whatsapp.com/")) {
    return repondre("📎 Please send a valid *group invite link*.\n\nExample:\n*jid_group https://chat.whatsapp.com/InviteCode*");
  }

  const newsletterJid = await getJidFromInviteLink(link, sock);
  if (newsletterJid) {
    sock.sendMessage(m, {
      text: `👥 *Group JID:*\n\`\`\`${link}\`\`\`\n` +
            `📰 *Newsletter JID:*\n\`\`\`${newsletterJid}\`\`\`\n\n> by LUCKY MD`
    }, { quoted: ms });
  } else {
    repondre("❌ Could not retrieve valid JID. Make sure the group invite link is correct.");
  }
});

ezra({
  nomCom: "jid_channel",
  categorie: "Channel"
}, async (m, sock, info) => {
  const { arg, ms, repondre, superUser } = info;

  if (!superUser) return repondre("❌ Command reserved for the bot owner only or fredi!");

  const link = arg[0];
  if (!link || !link.startsWith("https://whatsapp.com/channel/")) {
    return repondre("📢 Please send a valid *channel link*.\n\nExample:\n*jid_channel https://whatsapp.com/channel/12345abcde*");
  }

  const newsletterJid = await getJidFromInviteLink(link, sock);
  if (newsletterJid) {
    sock.sendMessage(m, {
      text: `📣 *Channel Invite ID:*\n\`\`\`${link.split("/").pop()}\`\`\`\n` +
            `📰 *Newsletter JID:*\n\`\`\`${newsletterJid}\`\`\`\n\n> by LUCKY MD`
    }, { quoted: ms });
  } else {
    repondre("❌ Could not retrieve valid JID. Make sure the channel invite link is correct.");
  }
});
