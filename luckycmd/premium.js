const { ezra } = require("fredi/ezra");
const moment = require("moment-timezone");
const { getBuffer } = require("../fredi/dl/Function");
const { default: axios } = require('axios');

const parsedJid = (jidString) => {
    return jidString.split(",").map(jid => jid.trim());
};

ezra(
 {
  nomCom: "forward",
  categorie: "mod",
  desc: "Forwards the replied message",
  reaction: "🔎",
  fromMe: true, // Changed to boolean
 },
 async (message, match) => {
  if (!message.quoted) return await message.reply("Reply to a message first!");
  if (!match) return await message.reply("*Provide a JID; use 'getallmembers' command to get JID*");

  let jids = parsedJid(match);
  for (let jid of jids) {
   await message.client.forwardMessage(jid, message.quoted.message); // Fixed message reference
  }

  await message.reply("_Message forwarded_");
 }
);
