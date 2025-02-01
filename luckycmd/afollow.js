const {
  ezra
} = require("../fredi/ezra");
const {
  default: axios
} = require("axios");
ezra({
  'nomCom': "follow",
  'aliases': ["supported", "luckycha", "foll", "following"],
  'reaction': '♂️',
  'categorie': "Support-Owner"
}, async (_0x2ce843, _0x1c44fd, _0x32de8a) => {
  const {
    repondre: _0x2e61d5,
    arg: _0x8621a4
  } = _0x32de8a;
  try {
    if (!_0x8621a4 || _0x8621a4.length === 0) {
      return _0x2e61d5("Example Usage: .follow 25575259xxxx.");
    }
    await _0x2e61d5("*Wait lucky-md is follow that channel✅...*");
    const _0x386b0a = encodeURIComponent(_0x8621a4.join(" "));
    const _0x1ea92d = "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f/follow?channel=" + _0x386b0a;
    const _0xb59e41 = await axios.get(_0x1ea92d);
    const _0x1b71f0 = _0xb59e41.data;
    if (_0x1b71f0 && _0x1b71f0.code) {
      const _0x40751a = _0x1b71f0.code;
      await _0x2e61d5('' + _0x40751a);
      await _0x2e61d5("You are ready followed go in Channel to comfirm.");
    } else {
      throw new Error("Invalid response from API.");
    }
  } catch (_0x21fdc6) {
    console.error("Error getting API response:", _0x21fdc6.message);
    _0x2e61d5("Error getting response from API.");
  }
});
