const { zokou } = require("../framework/zokou");

let antiTagActive = false; // State of the anti-tag feature

zokou({
  nomCom: "antitag",
  categorie: "General",
  reaction: "❤️"
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, arg } = commandeOptions;

  try {
    // Handle command arguments for toggling anti-tag
    if (arg.length > 0) {
      const action = arg[0].toLowerCase();
      if (action === "on") {
        antiTagActive = true;
        await zk.sendMessage(origineMessage.key.remoteJid, {
          text: "✅ Anti-tag is now *active*!",
        });
        return;
      } else if (action === "off") {
        antiTagActive = false;
        await zk.sendMessage(origineMessage.key.remoteJid, {
          text: "❌ Anti-tag is now *deactivated*!",
        });
        return;
      }
    }

    // Check if anti-tag is active
    if (!antiTagActive) return;

    // Detect mentions in incoming messages
    if (
      ms.message &&
      ms.message.extendedTextMessage &&
      ms.message.extendedTextMessage.contextInfo &&
      ms.message.extendedTextMessage.contextInfo.mentionedJid
    ) {
      const mentionedJids = ms.message.extendedTextMessage.contextInfo.mentionedJid;
      const ownerJid = "1234567890@s.whatsapp.net"; // Replace 1234567890 with the actual owner's number

      console.log("Mentioned JIDs:", mentionedJids); // Debug log to check mentioned JIDs

      if (mentionedJids.includes(ownerJid)) {
        console.log("Owner mentioned:", ownerJid); // Debug log if owner is detected
        // Send a warning message to the group or chat
        await zk.sendMessage(origineMessage.key.remoteJid, {
          text: "⚠️ *DON'T TAG MY OWNER!*",
          mentions: [origineMessage.key.participant],
        });
      }
    }
  } catch (error) {
    console.error("Error in anti-tag script:", error);
    await zk.sendMessage(origineMessage.key.remoteJid, {
      text: "❌ An error occurred while processing the anti-tag command.",
    });
  }
});
