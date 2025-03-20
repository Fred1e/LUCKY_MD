const { ezra } = require ("fredi/ezra");

ezra(
 {
  nomCom: "forward",
  categorie: "mod",
  desc: "Forwards the replied message",
  reaction: "🔎",
  fromMe: true,
 },
 async (dest, zk, commandeOptions) => {
  const { ms: message, repondre, arg: match } = commandeOptions;

  console.log("Command received:", match);
  
  if (!message.quoted) return await repondre("Reply to a message first!");
  if (!match) return await repondre("*Provide a JID; use 'getallmembers' command to get JID*");

  let jids = match.split(",").map(jid => jid.trim()); // Parse JIDs
  console.log("Forwarding to:", jids);

  for (let jid of jids) {
   try {
    await zk.sendMessage(jid, { forward: message.quoted });
   } catch (err) {
    console.error("Error forwarding message to", jid, err);
   }
  }

  await repondre("_Message forwarded_");
 }
);
