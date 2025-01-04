const { zokou } = require('../framework/zokou');
const axios = require("axios");
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
const { isUserBanned, addUserToBanList, removeUserFromBanList } = require("../bdd/banUser");
const { addGroupToBanList, isGroupBanned, removeGroupFromBanList } = require("../bdd/banGroup");
const { isGroupOnlyAdmin, addGroupToOnlyAdminList, removeGroupFromOnlyAdminList } = require("../bdd/onlyAdmin");
const { removeSudoNumber, addSudoNumber, issudo } = require("../bdd/sudo");
//const conf = require("../set");
//const fs = require('fs');
const sleep = (ms) => {
  return new Promise((resolve) => { setTimeout(resolve, ms) });
};

zokou({ nomCom: "tgs", categorie: "Mods" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg, nomAuteurMessage, superUser } = commandeOptions;

  if (!superUser) {
    repondre('🚫Only my Owner can use this command');
    return;
  }

  // const apikey = conf.APILOLHUMAIN
  // if (apikey === null || apikey === 'null') { repondre('Veillez vérifier votre apikey ou si vous en avez pas , veiller crée un compte sur api.lolhuman.xyz et vous en procurer une.'); return; };

  if (!arg[0]) {
    repondre("🤦Give a telegram sticker link");
    return;
  }

  let lien = arg.join(' ');

  let name = lien.split('/addstickers/')[1];

  let api = 'https://api.telegram.org/bot7025486524:AAGNJ3lMa8610p7OAIycwLtNmF9vG8GfboM/getStickerSet?name=' + encodeURIComponent(name);

  try {
    let stickers = await axios.get(api);

    let type = null;

    if (stickers.data.result.is_animated === true || stickers.data.result.is_video === true) {
      type = 'animated sticker';
    } else {
      type = 'not animated sticker';
    }

    let msg = `*Lucky Planet tgsticker*

*Name:* ${stickers.data.result.name}
*Type:* ${type}
*Length:* ${(stickers.data.result.stickers).length}

😁Downloading...`;

    await repondre(msg);

    for (let i = 0; i < (stickers.data.result.stickers).length; i++) {
      let file = await axios.get(`https://api.telegram.org/bot7025486524:AAGNJ3lMa8610p7OAIycwLtNmF9vG8GfboM/getFile?file_id=${stickers.data.result.stickers[i].file_id}`);

      let buffer = await axios({
        method: 'get',
        url: `https://api.telegram.org/file/bot7025486524:AAGNJ3lMa8610p7OAIycwLtNmF9vG8GfboM/${file.data.result.file_path}`,
        responseType: 'arraybuffer',
      });

      const sticker = new Sticker(buffer.data, {
        pack: nomAuteurMessage,
        author: "LUCKY-MD",
        type: StickerTypes.FULL,
        categories: ['🤩', '🎉'],
        id: '12345',
        quality: 50,
        background: '#000000'
      });

      const stickerBuffer = await sticker.toBuffer(); // Convert the sticker to a buffer

      await zk.sendMessage(
        dest,
        {
          sticker: stickerBuffer, // Use the buffer directly in the message object
        },
        { quoted: ms }
      );
    }

  } catch (e) {
    repondre("❌Uhhh sorry We got an error: " + e.message);
  }
})
