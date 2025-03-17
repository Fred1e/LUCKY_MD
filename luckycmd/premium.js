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

    // Debugging
    console.log("DEBUG: ms.quoted", ms.quoted);
    console.log("DEBUG: commandeOptions", commandeOptions);

    // Get quoted message safely
    const quotedMessage = ms.quoted || ms.message?.extendedTextMessage?.contextInfo?.quotedMessage;

    if (!quotedMessage) return repondre("❌ Reply to a message to forward it.");

    if (!arg || (Array.isArray(arg) && arg.length === 0) || (typeof arg === "string" && arg.trim() === "")) { 
      return repondre("❌ Provide a valid JID.");
    }

    let jids = (Array.isArray(arg) ? arg : [arg]).map(jid => 
      jid.includes("@s.whatsapp.net") || jid.includes("@g.us") ? jid : `${jid}@s.whatsapp.net`
    );

    try {
      for (let jid of jids) {
        await zk.sendMessage(jid, { forward: quotedMessage, forwardingScore: 1, isForwarded: true });
      }
      repondre("_✅ Message forwarded successfully._");
    } catch (error) {
      console.error("❌ Error forwarding message:", error);
      repondre("❌ Failed to forward the message.");
    }
  }
);
