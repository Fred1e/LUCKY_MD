const { zokou } = require('../framework/zokou');
const areact = require('areact');
const axios = require('axios');

zokou({
    nomCom: "areact",
    category: "General",
    reaction: "👌",
},
async (Void, citel, text) => {
if (!isCreator) return m.reply("*📛 THIS IS AN OWNER COMMAND*");
    let responseMessage;

    if (text === 'on') {
      config.AUTO_REACT = true;
      responseMessage = "AUTO_REACT has been enabled.";
    } else if (text === 'off') {
      config.AUTO_REACT = false;
      responseMessage = "AUTO_REACT has been disabled.";
    } else {
      responseMessage = "Usage:\n- `autoreact on`: Enable Auto-React\n- `autoreact off`: Disable Auto-React";
    }

    try {
      await Matrix.sendMessage(m.from, { text: responseMessage }, { quoted: m });
    } catch (error) {
      console.error("Error processing your request:", error);
      await Matrix.sendMessage(m.from, { text: 'Error processing your request.' }, { quoted: m });
    }
  }
};
