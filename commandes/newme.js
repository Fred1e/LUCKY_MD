const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const Taphere = more.repeat(4001)

command(
 {
  pattern: "forward",
  fromMe: true,
  desc: "Forwards the replied message",
  type: "whatsapp",
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
