const { ezra } = require("fredi/ezra");
const moment = require("moment-timezone");
const { getBuffer } = require("../fredi/dl/Function");
const { default: axios } = require('axios');

ezra(
 {
  nomCom: "forward",
  categorie: "mod",
  desc: "Forwards the replied message",
  reaction: "🔎",
  fromMe: true,
 },
 async (dest, zk, commandeOptions) => {
  console.log("Forward command received!"); // Debugging command execution

  const { ms, repondre, arg } = commandeOptions;

  if (!ms) {
    console.error("No message object received.");
    return await repondre("Error: No message detected.");
  }

  if (!ms.quoted) {
    console.log("No quoted message found.");
    return await repondre("Reply to a message first!");
  }

  if (!arg) {
    console.log("No JID provided.");
    return await repondre("*Provide a JID; use 'getallmembers' command to get JID*");
  }

  let jids = arg.split(",").map(jid => jid.trim());
  console.log("Forwarding to:", jids);

  for (let jid of jids) {
   try {
    await zk.sendMessage(jid, { forward: ms.quoted }); // Fixed reference
    console.log(`Message forwarded to: ${jid}`);
   } catch (err) {
    console.error(`Error forwarding to ${jid}:`, err);
   }
  }

  await repondre("_Message forwarded_");
 }
);
