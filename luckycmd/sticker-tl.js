const { ezra } = require("../fredi/ezra");
const axios = require("axios");
const { Sticker, StickerTypes } = require("wa-sticker-formatter");

ezra({
  'nomCom': 'tel-sticker',
  'categorie': 'General'
}, async (_0x2e51e1, _0x5b32f3, _0x2435f3) => {
  const {
    ms: messageSender,
    repondre: reply,
    arg: args,
    nomAuteurMessage: messageAuthor,
    superUser: isSuperUser
  } = _0x2435f3;

  if (!isSuperUser) {
    reply("Only Mods can use this command");
    return;
  }

  if (!args[0]) {
    reply("Please provide a Telegram sticker link.");
    return;
  }

  const stickerLink = args.join(" ");
  const stickerSetName = stickerLink.split("/addstickers/")[1];
  const apiUrl = `https://api.telegram.org/botYOUR_BOT_TOKEN/getStickerSet?name=${encodeURIComponent(stickerSetName)}`;

  try {
    const response = await axios.get(apiUrl);
    const stickerSet = response.data.result;
    const isAnimated = stickerSet.is_animated || stickerSet.is_video;
    const stickerType = isAnimated ? "animated sticker" : "not animated sticker";

    const message = `Lucky-stickers-dl\n\n*Name:* ${stickerSet.name}\n*Type:* ${stickerType}\n*Length:* ${stickerSet.stickers.length}\n\nDownloading...`;
    await reply(message);

    for (const sticker of stickerSet.stickers) {
      const fileResponse = await axios.get(`https://api.telegram.org/botYOUR_BOT_TOKEN/getFile?file_id=${sticker.file_id}`);
      const filePath = fileResponse.data.result.file_path;

      const fileBufferResponse = await axios({
        method: "get",
        url: `https://api.telegram.org/file/botYOUR_BOT_TOKEN/${filePath}`,
        responseType: "arraybuffer"
      });

      const stickerObject = new Sticker(fileBufferResponse.data, {
        pack: messageAuthor,
        author: "LUCKY_MD",
        type: StickerTypes.FULL,
        categories: ['🤩', '🎉'],
        id: "12345",
        quality: 50,
        background: "#000000"
      });

      const stickerBuffer = await stickerObject.toBuffer();
      await _0x5b32f3.sendMessage(_0x2e51e1, {
        sticker: stickerBuffer
      }, {
        quoted: messageSender
      });
    }
  } catch (error) {
    reply("An error occurred:\n" + error.message);
  }
});
