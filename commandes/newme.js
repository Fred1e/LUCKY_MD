const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 

 zokou(
 {
  nomCom: "forward",
  categorie: "My Contact",
  desc: "Forwards the replied message",
  reaction: "💯",
  fromMe: "true", 
 },
 async (message, match) => {
  if (!message.quoted) return await message.reply("Reply to message");
  if (!match) return await message.reply("*Provide a JID; use 'jid' command to get JID*");
  let jids = parsedJid(match);
  for (let jid of jids) {
   await message.client.forwardMessage(jid, message.reply_message.message);
  }
  await message.reply("_Message forwarded_");
 }
);

 zokou(
 {
  nomCom: "my status?(.*)",
  fromMe: true,
  desc: "privacy for my status",
  categorie: "My Contact",
  reaction: "♻️" 
 },
 async (message, match) => {
  if (!match) return await message.send(`_*Example:-* ${message.prefix} all_\n_to change *status*  privacy settings_`);
  const available_privacy = ["all", "contacts", "contact_blacklist", "none"];
  if (!available_privacy.includes(match)) return await message.send(`_action must be *${available_privacy.join("/")}* values_`);
  await message.client.updateStatusPrivacy(match);
  await message.send(`_Privacy Updated to *${match}*_`);
 }
);

zokou(
 {
  nomCom: "online ?(.*)",
  fromMe: true,
  desc: "to change online privacy",
  categorie: "My Contact",
  reaction: "♦️", 
 },
 async (message, match) => {
  if (!match) return await message.send(`_*Example:-* ${message.prefix} all_\n_to change *online*  privacy settings_`);
  const available_privacy = ["all", "match_last_seen"];
  if (!available_privacy.includes(match)) return await message.send(`_action must be *${available_privacy.join("/")}* values_`);
  await message.client.updateOnlinePrivacy(match);
  await message.send(`_Privacy Updated to *${match}*_`);
 }
);

 zokou(
 {
  nomCom: "caption ?(.*)",
  fromMe: true,
  desc: "Change video or image caption",
  type: "My Contact",
  reaction: "📑", 
 },
 async (message, match) => {
  if (!message.reply_message.video && !message.reply_message.image && !message.image && !message.video) return await message.reply("*_Reply to an image or video_*");
  if (!match) return await message.reply("*Need a query, e.g., .caption Hello*");
  await message.client.forwardMessage(message.jid, message.quoted ? message.reply_message.message : message.message, { caption: match });
 }
);

zokou(
 {
  nomCom: "lastseen ?(.*)",
  fromMe: true,
  desc: "to change lastseen privacy",
  type: "My Contact",
  reaction: "♻️", 
 },
 async (message, match) => {
  if (!match) return await message.send(`_*Example:-* ${message.prefix} all_\n_to change last seen privacy settings_`);
  const available_privacy = ["all", "contacts", "contact_blacklist", "none"];
  if (!available_privacy.includes(match)) return await message.send(`_action must be *${available_privacy.join("/")}* values_`);
  await message.client.updateLastSeenPrivacy(match);
  await message.send(`_Privacy settings *last seen* Updated to *${match}*_`);
 }
);

zokou(
 {
  nomCom: "online ?(.*)",
  fromMe: true,
  desc: "to change online privacy",
  categorie: "My Contact",
  reactio: "😁",
 },
 async (message, match) => {
  if (!match) return await message.send(`_*Example:-* ${message.prefix} all_\n_to change *online*  privacy settings_`);
  const available_privacy = ["all", "match_last_seen"];
  if (!available_privacy.includes(match)) return await message.send(`_action must be *${available_privacy.join("/")}* values_`);
  await message.client.updateOnlinePrivacy(match);
  await message.send(`_Privacy Updated to *${match}*_`);
 }
);

zokou(
 {
  pattern: "mypp ?(.*)",
  fromMe: true,
  desc: "privacy setting profile picture",
  categorie: "My Contact",
  reaction: "📸",
 },
 async (message, match) => {
  if (!match) return await message.send(`_*Example:-* ${message.prefix} all_\n_to change *profile picture*  privacy settings_`);
  const available_privacy = ["all", "contacts", "contact_blacklist", "none"];
  if (!available_privacy.includes(match)) return await message.send(`_action must be *${available_privacy.join("/")}* values_`);
  await message.client.updateProfilePicturePrivacy(match);
  await message.send(`_Privacy Updated to *${match}*_`);
 }
);

zokou(
 {
  nomCom: "read ?(.*)",
  fromMe: true,
  desc: "privacy for read message",
  categorie: "My Contact",
  reaction: "👍", 
 },
 async (message, match) => {
  if (!match) return await message.send(`_*Example:-* ${message.prefix} all_\n_to change *read and receipts message*  privacy settings_`);
  const available_privacy = ["all", "none"];
  if (!available_privacy.includes(match)) return await message.send(`_action must be *${available_privacy.join("/")}* values_`);
  await message.client.updateReadReceiptsPrivacy(match);
  await message.send(`_Privacy Updated to *${match}*_`);
 }
);

zokou(
 {
  nomCom: "adds",
  fromMe: mode,
  desc: "add a person to group",
  categorie: "My Contact",
  reaction: "✔️", 
 },
 async (message, match) => {
  if (!message.isGroup) return await message.reply("_This command is for groups_");

  match = match || message.reply_message.jid;
  if (!match) return await message.reply("_Mention user to add");

  const isadmin = await isAdmin(message.jid, message.user, message.client);

  if (!isadmin) return await message.reply("_I'm not admin_");
  const jid = parsedJid(match);

  await message.client.groupParticipantsUpdate(message.jid, jid, "add");

  return await message.reply(`_@${jid[0].split("@")[0]} added_`, {
   mentions: [jid],
  });
 }
);

zokou(
 {
  nomCom: "frekick",
  fromMe: mode,
  desc: "kicks a person from group",
  categorie: "My Contact",
  reaction: "🙆‍♂️", 
 },
 async (message, match) => {
  if (!message.isGroup) return await message.reply("_This command is for groups_");

  match = match || message.reply_message.jid;
  if (!match) return await message.reply("_Mention user to kick_");

  const isadmin = await isAdmin(message.jid, message.user, message.client);

  if (!isadmin) return await message.reply("_I'm not admin_");
  const jid = parsedJid(match);

  await message.client.groupParticipantsUpdate(message.jid, jid, "remove");

  return await message.reply(`_@${jid[0].split("@")[0]} kicked_`, {
   mentions: [jid],
  });
 }
);

zokou(
 {
  nomCom: "gjid",
  fromMe: mode,
  desc: "gets jid of all group members",
  caregorie: "My Contact",
 },
 async (message, match, m, client) => {
  if (!message.isGroup) return await message.reply("_This command is for groups_");
  let { participants } = await client.groupMetadata(message.jid);
  let participant = participants.map(u => u.id);
  let str = "╭──〔 *Group Jids* 〕\n";
  participant.forEach(result => {
   str += `├ *${result}*\n`;
  });
  str += `╰──────────────`;
  message.reply(str);
 }
);

 zokou(
 {
  nomCom: "tag",
  fromMe: mode,
  desc: "mention all users in group",
  categorie: "My Contact", 
  reaction: "🧸", 
 },
 async (message, match) => {
  console.log("match");
  match = match || message.reply_message.text;
  if (!match) return message.reply("_Enter or reply to a text to tag_");
  if (!message.isGroup) return;
  const { participants } = await message.client.groupMetadata(message.jid);
  message.sendMessage(message.jid, match, {
   mentions: participants.map(a => a.id),
  });
 }
);

zokou(
 {
  nomCom: "banbot",
  fromMe: mode,
  desc: "ban bot from a chat",
  categorie: "My Contact",
  reaction: "🪖", 
 },
 async (message, match) => {
  const chatid = message.jid;
  const isban = await isBanned(chatid);
  if (isban) {
   return await message.sendMessage(message.jid, "Bot is already banned");
  }
  await banUser(chatid);
  return await message.sendMessage(message.jid, "Bot banned");
 }
);

zokou(
 {
  nomCom: "unbanbot",
  fromMe: mode,
  desc: "Unban bot from a chat",
  categorie: "My Contact",
  reaction: "🤗", 
 },
 async (message, match) => {
  const chatid = message.jid;
  const isban = await isBanned(chatid);
  if (!isban) {
   return await message.sendMessage(message.jid, "Bot is not banned");
  }
  await unbanUser(chatid);
  return await message.sendMessage(message.jid, "Bot unbanned");
 }
);

zokou(
 {
  nomCom: "ginfo",
  fromMe: mode,
  desc: "Get Group Data",
  categorie: "My Contact",
 },
 async (message, match) => {
  match = match ? match : message.reply_text;
  if (!match) return await message.reply("_Group Link?_");
  let groupId = match[1].trim();
  const groupInfo = await message.client.groupGetInviteInfo(groupId);

  if (groupInfo) {
   const creationDate = new Date(groupInfo.creation * 1000);
   const createdAt = `${creationDate.getFullYear()}-${(creationDate.getMonth() + 1).toString().padStart(2, "0")}-${creationDate.getDate().toString().padStart(2, "0")}`;

   let participants = groupInfo.size > 3 ? `${groupInfo.size} members` : `${groupInfo.size} members`;

   let message = `${groupInfo.subject}\n\n`;
   message += `  Creator: wa.me/${groupInfo.owner.split("@")[0]}\n`;
   message += `  Group ID: \`\`\`${groupInfo.id}\`\`\`\n`;
   message += `  *Muted:* ${groupInfo.announce ? "yes" : "no"}\n`;
   message += `  *Locked:* ${groupInfo.restrict ? "yes" : "no"}\n`;
   message += `  *Created at:* ${createdAt}\n`;
   message += `  *Participants:* ${participants}\n`;

   if (groupInfo.desc) {
    message += `  *Description:* ${groupInfo.desc}\n`;
   }

   return await send(message, message.trim(), {
    mentions: [groupInfo.owner],
   });
  } else {
   await message.send("_Group Not Found!_");
  }
 }
);

 zokou(
 {
  nomCom: "filter",
  fromMe: mode,
  desc: "Adds a filter. When someone triggers the filter, it sends the corresponding response. To view your filter list, use `.filter`.",
  usage: ".filter keyword:message",
  categorie: "My Contact",
  reaction: "✔️", 
 },
 async (message, match) => {
  let text, msg;
  try {
   [text, msg] = match.split(":");
  } catch {}
  if (!match) {
   filtreler = await getFilter(message.jid);
   if (filtreler === false) {
    await message.reply("No filters are currently set in this chat.");
   } else {
    var mesaj = "Your active filters for this chat:" + "\n\n";
    filtreler.map(filter => (mesaj += `✒ ${filter.dataValues.pattern}\n`));
    mesaj += "use : .filter keyword:message\nto set a filter";
    await message.reply(mesaj);
   }
  } else if (!text || !msg) {
   return await message.reply("```use : .filter keyword:message\nto set a filter```");
  } else {
   await setFilter(message.jid, text, msg, true);
   return await message.reply(`_Sucessfully set filter for ${text}_`);
  }
 }
);
