// Leave this api.cxx.fredietech.luckymd
// WACHANA NA CODE ZA BOT YANGU UNDA ZAKO 🤦
// SCRIPTED BY FREDIETECH TZ 255 ezra api.s
// THIS SCRIPT FOR LUCKY MD ONLY

require("dotenv").config();
const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
const BaseUrl = process.env.GITHUB_GIT;
const giftedapikey = process.env.BOT_OWNER;
function validateConfig() {
  if (!BaseUrl || !giftedapikey) {
    throw new Error("Configuration error: Missing BaseUrl or API key.");
  }
}
validateConfig();
zokou({
  'nomCom': "video",
  'categorie': "Music",
  'reaction': '🎥'
}, async (_0x246c76, _0x43608a, _0x7dc04e) => {
  const {
    ms: _0x5ddcc9,
    repondre: _0x59580a,
    arg: _0xe570ef
  } = _0x7dc04e;
  if (!_0xe570ef[0]) {
    return _0x59580a("⁉️ Please insert a song/video name.");
  }
  try {
    const _0x78f812 = await yts(_0xe570ef.join(" "));
    const _0x2c1653 = _0x78f812.videos;
    if (_0x2c1653.length === 0) {
      return _0x59580a("⭕ No videos found.");
    }
    const _0x459a98 = _0x2c1653[0].url;
    const _0x5af7ff = await fetch(BaseUrl + "/api/download/ytmp4?url=" + encodeURIComponent(_0x459a98) + "&apikey=" + giftedapikey);
    const _0x3b69f5 = await _0x5af7ff.json();
    if (_0x3b69f5.status === 200 && _0x3b69f5.success) {
      const _0x8564e6 = _0x3b69f5.result.download_url;
      await _0x43608a.sendMessage(_0x246c76, {
        'image': {
          'url': _0x2c1653[0].thumbnail
        },
        'caption': "━━━━━━━━━━━━━━━\n⚖️ 『 *𝐋𝐔𝐂𝐊𝐘* 』\n💡 *𝐋𝐔𝐂𝐊𝐘 𝐌𝐃 𝐌𝐄𝐃𝐈𝐀* \n👤 I'm so sad but I'm lose artist name\n━━━━━━━━━━━━━━━"
      }, {
        'quoted': _0x5ddcc9
      });
      await _0x43608a.sendMessage(_0x246c76, {
        'video': {
          'url': _0x8564e6
        },
        'mimetype': "video/mp4"
      }, {
        'quoted': _0x5ddcc9
      });
      _0x59580a("✅ Downloaded Successfully BY Lucky Md");
    } else {
      _0x59580a("❌ Failed to download the video.");
    }
  } catch (_0x487250) {
    console.error("Error:", _0x487250);
    _0x59580a("🚫 An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "play",
  'categorie': "Music",
  'reaction': '🎧'
}, async (_0x5a2f72, _0x48087c, _0x242194) => {
  const {
    ms: _0x1eb161,
    repondre: _0x3adfb5,
    arg: _0x12a314
  } = _0x242194;
  if (!_0x12a314[0]) {
    return _0x3adfb5("⁉️ Please insert a song name.");
  }
  try {
    const _0x230e37 = await yts(_0x12a314.join(" "));
    const _0x215553 = _0x230e37.videos;
    if (_0x215553.length === 0) {
      return _0x3adfb5("⭕ No audio found.");
    }
    const _0x1dda6f = _0x215553[0].url;
    const _0x15847d = await fetch(BaseUrl + "/api/download/ytmp3?url=" + encodeURIComponent(_0x1dda6f) + "&apikey=" + giftedapikey);
    const _0x2c3cff = await _0x15847d.json();
    if (_0x2c3cff.status === 200 && _0x2c3cff.success) {
      const _0x5938bf = _0x2c3cff.result.download_url;
      await _0x48087c.sendMessage(_0x5a2f72, {
        'image': {
          'url': _0x215553[0].thumbnail
        },
        'caption': "━━━━━━━━━━━━━━━\n⚖️ 『 *𝐋𝐔𝐂𝐊𝐘* 』\n💡 *𝐋𝐔𝐂𝐊𝐘 𝐌𝐃 𝐌𝐄𝐃𝐈𝐀* \n👤 I'm so sad but I'm lose artist name\n━━━━━━━━━━━━━━━"
      }, {
        'quoted': _0x1eb161
      });
      await _0x48087c.sendMessage(_0x5a2f72, {
        'audio': {
          'url': _0x5938bf
        },
        'mimetype': "audio/mp4"
      }, {
        'quoted': _0x1eb161
      });
      _0x3adfb5("✅ Downloaded Successfully By Lucky Md");
    } else {
      _0x3adfb5("❌ Failed to download audio. Try again later.");
    }
  } catch (_0x2bfc0f) {
    console.error("Error:", _0x2bfc0f);
    _0x3adfb5("🚫 An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "mp3",
  'categorie': "Music",
  'reaction': '🎧'
}, async (_0x5a2f72, _0x48087c, _0x242194) => {
  const {
    ms: _0x1eb161,
    repondre: _0x3adfb5,
    arg: _0x12a314
  } = _0x242194;
  if (!_0x12a314[0]) {
    return _0x3adfb5("⁉️ Please insert a song name.");
  }
  try {
    const _0x230e37 = await yts(_0x12a314.join(" "));
    const _0x215553 = _0x230e37.videos;
    if (_0x215553.length === 0) {
      return _0x3adfb5("⭕ No audio found.");
    }
    const _0x1dda6f = _0x215553[0].url;
    const _0x15847d = await fetch(BaseUrl + "/api/download/ytmp3?url=" + encodeURIComponent(_0x1dda6f) + "&apikey=" + giftedapikey);
    const _0x2c3cff = await _0x15847d.json();
    if (_0x2c3cff.status === 200 && _0x2c3cff.success) {
      const _0x5938bf = _0x2c3cff.result.download_url;
      await _0x48087c.sendMessage(_0x5a2f72, {
        'image': {
          'url': _0x215553[0].thumbnail
        },
        'caption': "━━━━━━━━━━━━━━━\n⚖️ 『 *𝐋𝐔𝐂𝐊𝐘* 』\n💡 *𝐋𝐔𝐂𝐊𝐘 𝐌𝐃 𝐌𝐄𝐃𝐈𝐀* \n👤 I'm so sad but I'm lose artist name\n━━━━━━━━━━━━━━━"
      }, {
        'quoted': _0x1eb161
      });
      await _0x48087c.sendMessage(_0x5a2f72, {
        'audio': {
          'url': _0x5938bf
        },
        'mimetype': "audio/mp4"
      }, {
        'quoted': _0x1eb161
      });
      _0x3adfb5("✅ Downloaded Successfully By Lucky Md");
    } else {
      _0x3adfb5("❌ Failed to download audio. Try again later.");
    }
  } catch (_0x2bfc0f) {
    console.error("Error:", _0x2bfc0f);
    _0x3adfb5("🚫 An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "lucky-mp3",
  'categorie': "Music",
  'reaction': '🎧'
}, async (_0x5a2f72, _0x48087c, _0x242194) => {
  const {
    ms: _0x1eb161,
    repondre: _0x3adfb5,
    arg: _0x12a314
  } = _0x242194;
  if (!_0x12a314[0]) {
    return _0x3adfb5("⁉️ Please insert a song name.");
  }
  try {
    const _0x230e37 = await yts(_0x12a314.join(" "));
    const _0x215553 = _0x230e37.videos;
    if (_0x215553.length === 0) {
      return _0x3adfb5("⭕ No audio found.");
    }
    const _0x1dda6f = _0x215553[0].url;
    const _0x15847d = await fetch(BaseUrl + "/api/download/ytmp3?url=" + encodeURIComponent(_0x1dda6f) + "&apikey=" + giftedapikey);
    const _0x2c3cff = await _0x15847d.json();
    if (_0x2c3cff.status === 200 && _0x2c3cff.success) {
      const _0x5938bf = _0x2c3cff.result.download_url;
      await _0x48087c.sendMessage(_0x5a2f72, {
        'image': {
          'url': _0x215553[0].thumbnail
        },
        'caption': "━━━━━━━━━━━━━━━\n⚖️ 『 *𝐋𝐔𝐂𝐊𝐘* 』\n💡 *𝐋𝐔𝐂𝐊𝐘 𝐌𝐃 𝐌𝐄𝐃𝐈𝐀* \n👤 I'm so sad but I'm lose artist name\n━━━━━━━━━━━━━━━"
      }, {
        'quoted': _0x1eb161
      });
      await _0x48087c.sendMessage(_0x5a2f72, {
        'audio': {
          'url': _0x5938bf
        },
        'mimetype': "audio/mp4"
      }, {
        'quoted': _0x1eb161
      });
      _0x3adfb5("✅ Downloaded Successfully By Lucky Md");
    } else {
      _0x3adfb5("❌ Failed to download audio. Try again later.");
    }
  } catch (_0x2bfc0f) {
    console.error("Error:", _0x2bfc0f);
    _0x3adfb5("🚫 An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Music",
  'reaction': '🎸'
}, async (_0x5fbcae, _0x127b13, _0x54b141) => {
  const {
    ms: _0x465547,
    repondre: _0x3febab,
    arg: _0x4ccb4f
  } = _0x54b141;
  if (!_0x4ccb4f[0]) {
    return _0x3febab("⁉️ Please insert a song name.");
  }
  try {
    const _0x56a69b = await yts(_0x4ccb4f.join(" "));
    const _0x528529 = _0x56a69b.videos;
    if (_0x528529.length === 0) {
      return _0x3febab("⭕ No audio found.");
    }
    const _0x3f250c = _0x528529[0].url;
    const _0x27115b = await fetch(BaseUrl + "/api/download/ytmp3?url=" + encodeURIComponent(_0x3f250c) + "&apikey=" + giftedapikey);
    const _0x1c3b78 = await _0x27115b.json();
    if (_0x1c3b78.status === 200 && _0x1c3b78.success) {
      const _0x1a0016 = _0x1c3b78.result.download_url;
      await _0x127b13.sendMessage(_0x5fbcae, {
        'image': {
          'url': _0x528529[0].thumbnail
        },
        'caption': "━━━━━━━━━━━━━━━\n⚖️ 『 *𝐋𝐔𝐂𝐊𝐘* 』\n💡 *𝐋𝐔𝐂𝐊𝐘 𝐌𝐃 𝐌𝐄𝐃𝐈𝐀* \n👤 I'm so sad but I'm lose artist name\n━━━━━━━━━━━━━━━"
      }, {
        'quoted': _0x465547
      });
      await _0x127b13.sendMessage(_0x5fbcae, {
        'document': {
          'url': _0x1a0016
        },
        'mimetype': "audio/mp4"
      }, {
        'quoted': _0x465547
      });
      _0x3febab("✅ Downloaded Successfully by Lucky Md");
    } else {
      _0x3febab("❌ Failed to download audio. Try again later.");
    }
  } catch (_0x110822) {
    console.error("Error:", _0x110822);
    _0x3febab("🚫 An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "audio-document",
  'categorie': "Music",
  'reaction': '🎸'
}, async (_0x5fbcae, _0x127b13, _0x54b141) => {
  const {
    ms: _0x465547,
    repondre: _0x3febab,
    arg: _0x4ccb4f
  } = _0x54b141;
  if (!_0x4ccb4f[0]) {
    return _0x3febab("⁉️ Please insert a song name.");
  }
  try {
    const _0x56a69b = await yts(_0x4ccb4f.join(" "));
    const _0x528529 = _0x56a69b.videos;
    if (_0x528529.length === 0) {
      return _0x3febab("⭕ No audio found.");
    }
    const _0x3f250c = _0x528529[0].url;
    const _0x27115b = await fetch(BaseUrl + "/api/download/ytmp3?url=" + encodeURIComponent(_0x3f250c) + "&apikey=" + giftedapikey);
    const _0x1c3b78 = await _0x27115b.json();
    if (_0x1c3b78.status === 200 && _0x1c3b78.success) {
      const _0x1a0016 = _0x1c3b78.result.download_url;
      await _0x127b13.sendMessage(_0x5fbcae, {
        'image': {
          'url': _0x528529[0].thumbnail
        },
        'caption': "━━━━━━━━━━━━━━━\n⚖️ 『 *𝐋𝐔𝐂𝐊𝐘* 』\n💡 *𝐋𝐔𝐂𝐊𝐘 𝐌𝐃 𝐌𝐄𝐃𝐈𝐀* \n👤 I'm so sad but I'm lose artist name\n━━━━━━━━━━━━━━━"
      }, {
        'quoted': _0x465547
      });
      await _0x127b13.sendMessage(_0x5fbcae, {
        'document': {
          'url': _0x1a0016
        },
        'mimetype': "audio/mp4"
      }, {
        'quoted': _0x465547
      });
      _0x3febab("✅ Downloaded Successfully by Lucky Md");
    } else {
      _0x3febab("❌ Failed to download audio. Try again later.");
    }
  } catch (_0x110822) {
    console.error("Error:", _0x110822);
    _0x3febab("🚫 An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "videodoc",
  'categorie': "Music",
  'reaction': '🎥'
}, async (_0x246c76, _0x43608a, _0x7dc04e) => {
  const {
    ms: _0x5ddcc9,
    repondre: _0x59580a,
    arg: _0xe570ef
  } = _0x7dc04e;
  if (!_0xe570ef[0]) {
    return _0x59580a("⁉️ Please insert a song/video name.");
  }
  try {
    const _0x78f812 = await yts(_0xe570ef.join(" "));
    const _0x2c1653 = _0x78f812.videos;
    if (_0x2c1653.length === 0) {
      return _0x59580a("⭕ No videos found.");
    }
    const _0x459a98 = _0x2c1653[0].url;
    const _0x5af7ff = await fetch(BaseUrl + "/api/download/ytmp4?url=" + encodeURIComponent(_0x459a98) + "&apikey=" + giftedapikey);
    const _0x3b69f5 = await _0x5af7ff.json();
    if (_0x3b69f5.status === 200 && _0x3b69f5.success) {
      const _0x8564e6 = _0x3b69f5.result.download_url;
      await _0x43608a.sendMessage(_0x246c76, {
        'image': {
          'url': _0x2c1653[0].thumbnail
        },
        'caption': "━━━━━━━━━━━━━━━\n⚖️ 『 *𝐋𝐔𝐂𝐊𝐘* 』\n💡 *𝐋𝐔𝐂𝐊𝐘 𝐌𝐃 𝐌𝐄𝐃𝐈𝐀* \n👤 I'm so sad but I'm lose artist name\n━━━━━━━━━━━━━━━"
      }, {
        'quoted': _0x5ddcc9
      });
      await _0x43608a.sendMessage(_0x246c76, {
        'document': {
          'url': _0x8564e6
        },
        'mimetype': "video/mp4"
      }, {
        'quoted': _0x5ddcc9
      });
      _0x59580a("✅ Downloaded Successfully BY Lucky Md");
    } else {
      _0x59580a("❌ Failed to download the video.");
    }
  } catch (_0x487250) {
    console.error("Error:", _0x487250);
    _0x59580a("🚫 An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "video-document",
  'categorie': "Music",
  'reaction': '🎥'
}, async (_0x246c76, _0x43608a, _0x7dc04e) => {
  const {
    ms: _0x5ddcc9,
    repondre: _0x59580a,
    arg: _0xe570ef
  } = _0x7dc04e;
  if (!_0xe570ef[0]) {
    return _0x59580a("⁉️ Please insert a song/video name.");
  }
  try {
    const _0x78f812 = await yts(_0xe570ef.join(" "));
    const _0x2c1653 = _0x78f812.videos;
    if (_0x2c1653.length === 0) {
      return _0x59580a("⭕ No videos found.");
    }
    const _0x459a98 = _0x2c1653[0].url;
    const _0x5af7ff = await fetch(BaseUrl + "/api/download/ytmp4?url=" + encodeURIComponent(_0x459a98) + "&apikey=" + giftedapikey);
    const _0x3b69f5 = await _0x5af7ff.json();
    if (_0x3b69f5.status === 200 && _0x3b69f5.success) {
      const _0x8564e6 = _0x3b69f5.result.download_url;
      await _0x43608a.sendMessage(_0x246c76, {
        'image': {
          'url': _0x2c1653[0].thumbnail
        },
        'caption': "━━━━━━━━━━━━━━━\n⚖️ 『 *𝐋𝐔𝐂𝐊𝐘* 』\n💡 *𝐋𝐔𝐂𝐊𝐘 𝐌𝐃 𝐌𝐄𝐃𝐈𝐀* \n👤 I'm so sad but I'm lose artist name\n━━━━━━━━━━━━━━━"
      }, {
        'quoted': _0x5ddcc9
      });
      await _0x43608a.sendMessage(_0x246c76, {
        'document': {
          'url': _0x8564e6
        },
        'mimetype': "video/mp4"
      }, {
        'quoted': _0x5ddcc9
      });
      _0x59580a("✅ Downloaded Successfully BY Lucky Md");
    } else {
      _0x59580a("❌ Failed to download the video.");
    }
  } catch (_0x487250) {
    console.error("Error:", _0x487250);
    _0x59580a("🚫 An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "mp4",
  'categorie': "Music",
  'reaction': '🎥'
}, async (_0x246c76, _0x43608a, _0x7dc04e) => {
  const {
    ms: _0x5ddcc9,
    repondre: _0x59580a,
    arg: _0xe570ef
  } = _0x7dc04e;
  if (!_0xe570ef[0]) {
    return _0x59580a("⁉️ Please insert a song/video name.");
  }
  try {
    const _0x78f812 = await yts(_0xe570ef.join(" "));
    const _0x2c1653 = _0x78f812.videos;
    if (_0x2c1653.length === 0) {
      return _0x59580a("⭕ No videos found.");
    }
    const _0x459a98 = _0x2c1653[0].url;
    const _0x5af7ff = await fetch(BaseUrl + "/api/download/ytmp4?url=" + encodeURIComponent(_0x459a98) + "&apikey=" + giftedapikey);
    const _0x3b69f5 = await _0x5af7ff.json();
    if (_0x3b69f5.status === 200 && _0x3b69f5.success) {
      const _0x8564e6 = _0x3b69f5.result.download_url;
      await _0x43608a.sendMessage(_0x246c76, {
        'image': {
          'url': _0x2c1653[0].thumbnail
        },
        'caption': "━━━━━━━━━━━━━━━\n⚖️ 『 *𝐋𝐔𝐂𝐊𝐘* 』\n💡 *𝐋𝐔𝐂𝐊𝐘 𝐌𝐃 𝐌𝐄𝐃𝐈𝐀* \n👤 I'm so sad but I'm lose artist name\n━━━━━━━━━━━━━━━"
      }, {
        'quoted': _0x5ddcc9
      });
      await _0x43608a.sendMessage(_0x246c76, {
        'video': {
          'url': _0x8564e6
        },
        'mimetype': "video/mp4"
      }, {
        'quoted': _0x5ddcc9
      });
      _0x59580a("✅ Downloaded Successfully BY Lucky Md");
    } else {
      _0x59580a("❌ Failed to download the video.");
    }
  } catch (_0x487250) {
    console.error("Error:", _0x487250);
    _0x59580a("🚫 An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "lucky-mp4",
  'categorie': "Music",
  'reaction': '🎥'
}, async (_0x246c76, _0x43608a, _0x7dc04e) => {
  const {
    ms: _0x5ddcc9,
    repondre: _0x59580a,
    arg: _0xe570ef
  } = _0x7dc04e;
  if (!_0xe570ef[0]) {
    return _0x59580a("⁉️ Please insert a song/video name.");
  }
  try {
    const _0x78f812 = await yts(_0xe570ef.join(" "));
    const _0x2c1653 = _0x78f812.videos;
    if (_0x2c1653.length === 0) {
      return _0x59580a("⭕ No videos found.");
    }
    const _0x459a98 = _0x2c1653[0].url;
    const _0x5af7ff = await fetch(BaseUrl + "/api/download/ytmp4?url=" + encodeURIComponent(_0x459a98) + "&apikey=" + giftedapikey);
    const _0x3b69f5 = await _0x5af7ff.json();
    if (_0x3b69f5.status === 200 && _0x3b69f5.success) {
      const _0x8564e6 = _0x3b69f5.result.download_url;
      await _0x43608a.sendMessage(_0x246c76, {
        'image': {
          'url': _0x2c1653[0].thumbnail
        },
        'caption': "━━━━━━━━━━━━━━━\n⚖️ 『 *𝐋𝐔𝐂𝐊𝐘* 』\n💡 *𝐋𝐔𝐂𝐊𝐘 𝐌𝐃 𝐌𝐄𝐃𝐈𝐀* \n👤 I'm so sad but I'm lose artist name\n━━━━━━━━━━━━━━━"
      }, {
        'quoted': _0x5ddcc9
      });
      await _0x43608a.sendMessage(_0x246c76, {
        'video': {
          'url': _0x8564e6
        },
        'mimetype': "video/mp4"
      }, {
        'quoted': _0x5ddcc9
      });
      _0x59580a("✅ Downloaded Successfully BY Lucky Md");
    } else {
      _0x59580a("❌ Failed to download the video.");
    }
  } catch (_0x487250) {
    console.error("Error:", _0x487250);
    _0x59580a("🚫 An error occurred while processing your request.");
  }
});-
zokou({
  'nomCom': "mp4-doc",
  'categorie': "Music",
  'reaction': '🎥'
}, async (_0x246c76, _0x43608a, _0x7dc04e) => {
  const {
    ms: _0x5ddcc9,
    repondre: _0x59580a,
    arg: _0xe570ef
  } = _0x7dc04e;
  if (!_0xe570ef[0]) {
    return _0x59580a("⁉️ Please insert a song/video name.");
  }
  try {
    const _0x78f812 = await yts(_0xe570ef.join(" "));
    const _0x2c1653 = _0x78f812.videos;
    if (_0x2c1653.length === 0) {
      return _0x59580a("⭕ No videos found.");
    }
    const _0x459a98 = _0x2c1653[0].url;
    const _0x5af7ff = await fetch(BaseUrl + "/api/download/ytmp4?url=" + encodeURIComponent(_0x459a98) + "&apikey=" + giftedapikey);
    const _0x3b69f5 = await _0x5af7ff.json();
    if (_0x3b69f5.status === 200 && _0x3b69f5.success) {
      const _0x8564e6 = _0x3b69f5.result.download_url;
      await _0x43608a.sendMessage(_0x246c76, {
        'image': {
          'url': _0x2c1653[0].thumbnail
        },
        'caption': "━━━━━━━━━━━━━━━\n⚖️ 『 *𝐋𝐔𝐂𝐊𝐘* 』\n💡 *𝐋𝐔𝐂𝐊𝐘 𝐌𝐃 𝐌𝐄𝐃𝐈𝐀* \n👤 I'm so sad but I'm lose artist name\n━━━━━━━━━━━━━━━"
      }, {
        'quoted': _0x5ddcc9
      });
      await _0x43608a.sendMessage(_0x246c76, {
        'document': {
          'url': _0x8564e6
        },
        'mimetype': "video/mp4"
      }, {
        'quoted': _0x5ddcc9
      });
      _0x59580a("✅ Downloaded Successfully BY Lucky Md");
    } else {
      _0x59580a("❌ Failed to download the video.");
    }
  } catch (_0x487250) {
    console.error("Error:", _0x487250);
    _0x59580a("🚫 An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "mp3-doc",
  'categorie': "Music",
  'reaction': '🎸'
}, async (_0x5fbcae, _0x127b13, _0x54b141) => {
  const {
    ms: _0x465547,
    repondre: _0x3febab,
    arg: _0x4ccb4f
  } = _0x54b141;
  if (!_0x4ccb4f[0]) {
    return _0x3febab("⁉️ Please insert a song name.");
  }
  try {
    const _0x56a69b = await yts(_0x4ccb4f.join(" "));
    const _0x528529 = _0x56a69b.videos;
    if (_0x528529.length === 0) {
      return _0x3febab("⭕ No audio found.");
    }
    const _0x3f250c = _0x528529[0].url;
    const _0x27115b = await fetch(BaseUrl + "/api/download/ytmp3?url=" + encodeURIComponent(_0x3f250c) + "&apikey=" + giftedapikey);
    const _0x1c3b78 = await _0x27115b.json();
    if (_0x1c3b78.status === 200 && _0x1c3b78.success) {
      const _0x1a0016 = _0x1c3b78.result.download_url;
      await _0x127b13.sendMessage(_0x5fbcae, {
        'image': {
          'url': _0x528529[0].thumbnail
        },
        'caption': "━━━━━━━━━━━━━━━\n⚖️ 『 *𝐋𝐔𝐂𝐊𝐘* 』\n💡 *𝐋𝐔𝐂𝐊𝐘 𝐌𝐃 𝐌𝐄𝐃𝐈𝐀* \n👤 I'm so sad but I'm lose artist name\n━━━━━━━━━━━━━━━"
      }, {
        'quoted': _0x465547
      });
      await _0x127b13.sendMessage(_0x5fbcae, {
        'document': {
          'url': _0x1a0016
        },
        'mimetype': "audio/mp4"
      }, {
        'quoted': _0x465547
      });
      _0x3febab("✅ Downloaded Successfully by Lucky Md");
    } else {
      _0x3febab("❌ Failed to download audio. Try again later.");
    }
  } catch (_0x110822) {
    console.error("Error:", _0x110822);
    _0x3febab("🚫 An error occurred while processing your request.");
  }
});
