const { ezra } = require("../fredi/ezra");

ezra(
  {
    nomCom: "forward",
    categorie: "mod",
    desc: "Forwards the replied message to a given JID",
    reaction: "🔎",
    fromMe: true, 
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg } = commandeOptions;

    // Ensure the message is a reply
    if (!ms.quoted) return repondre("❌ Reply to a message to forward it.");

    // Ensure a JID is provided
    if (!arg || arg.length === 0) return repondre("❌ Provide a JID. Use the 'getallmembers' command to get JIDs.");

    // Ensure JIDs are properly formatted (should be 2557525939xx@whatsapp.net)
    let jids = arg.map(jid => jid.includes("@whatsapp.net") ? jid : `${jid}@whatsapp.net`);
    
    try {
      // Loop through JIDs and forward the message
      for (let jid of jids) {
        await zk.sendMessage(jid, { forward: ms.quoted }, { quoted: ms });
      }
      repondre("_✅ Message forwarded successfully._");
    } catch (error) {
      console.error("❌ Error forwarding message:", error);
      repondre("❌ Failed to forward the message.");
    }
  }
);
