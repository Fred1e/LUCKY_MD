const {
  zokou
} = require("../framework/zokou");
const {
  default: axios
} = require("axios");
zokou({
  'nomCom': "gta",
  'reaction': '🛰️',
  'categorie': 'AI'
}, async (_0x22ef9c, _0x5287a8, _0x2ccd49) => {
  const {
    repondre: _0x2b1a81,
    arg: _0x885e30,
    ms: _0x4eb9fe
  } = _0x2ccd49;
  try {
    if (!_0x885e30 || _0x885e30.length === 0) {
      return _0x2b1a81("Kindly enter a valid image url to generate your gta image");
    }
    const _0x30bcaa = _0x885e30.join(" ");
    const _0x93b128 = "https://www.samirxpikachu.run.place/gta?url=" + _0x30bcaa;
    _0x5287a8.sendMessage(_0x22ef9c, {
      'image': {
        'url': _0x93b128
      },
      'caption': "*powered by LUCKY_MD*"
    }, {
      'quoted': _0x4eb9fe
    });
  } catch (_0x3fe80d) {
    console.error("Erreur:", _0x3fe80d.message || "Une erreur s'est produite");
    _0x2b1a81("Oops, an error occurred while processing your request");
  }
});
