const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "play",
  'categorie': "Download",
  'reaction': '📀'
}, async (_0x408fda, _0x2dc0dc, _0x5c7314) => {
  const {
    ms: _0x4a8017,
    repondre: _0x56ef0e,
    arg: _0x4bee26
  } = _0x5c7314;
  if (!_0x4bee26[0]) {
    _0x56ef0e("Please insert a song name.");
    return;
  }
  try {
    let _0x20af5a = _0x4bee26.join(" ");
    let _0x5a9529 = [];
    const _0x3590e5 = await yts(_0x20af5a);
    _0x5a9529 = _0x3590e5.videos;
    if (_0x5a9529 && _0x5a9529.length > 0) {
      const _0x5a1309 = _0x5a9529[0].url;
      const _0x184ce6 = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url=" + encodeURIComponent(_0x5a1309) + "&apikey=" + "giftedtechk");
      const _0x348194 = await _0x184ce6.json();
      if (_0x348194.status === 200 && _0x348194.success) {
        const _0x4f57db = _0x348194.result.download_url;
        const _0xfecd81 = {
          'image': {
            'url': _0x5a9529[0].thumbnail
          },
          'caption': "*LUCKY_MD MEDIA PLAYER*\n\n╭━━━━━━⊷⊷⊷⊷━━━━━⊛\n┊✺ *Title:* " + _0x348194.result.title + "\n┊✺ *Quality:* " + _0x348194.result.type + "\n┊✺ *Duration:* " + _0x5a9529[0].timestamp + "\n┊✺ *Viewers:* " + _0x5a9529[0].views + "\n┊✺ *Uploaded:* " + _0x5a9529[0].ago + "\n┊✺ *Artist:* " + _0x5a9529[0].author.name + "\n╰━━━━━━⊷⊷⊷⊷━━━━━⊛\n❖ *Direct YtLink:* " + _0x5a1309 + "\n┌━━══━━☆✞✞☆━━══━━⊷\n┃ *_Powered by FredieTechSir._*\n└━━══━━☆✞✞☆━━══━━⊷"
        };
        await _0x2dc0dc.sendMessage(_0x408fda, _0xfecd81, {
          'quoted': _0x4a8017
        });
        await _0x2dc0dc.sendMessage(_0x408fda, {
          'audio': {
            'url': _0x4f57db
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x4a8017
        });
      } else {
        _0x56ef0e("Failed to download audio. Please try again later.");
      }
    } else {
      _0x56ef0e("No audio found.");
    }
  } catch (_0x2c7a93) {
    console.error("Error from API:", _0x2c7a93);
    _0x56ef0e("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "songs",
  'categorie': "Download",
  'reaction': '📀'
}, async (_0x454db3, _0xc9ed1, _0x15e164) => {
  const {
    ms: _0x1fdf22,
    repondre: _0x5c3fd8,
    arg: _0x40dcce
  } = _0x15e164;
  if (!_0x40dcce[0]) {
    _0x5c3fd8("Please insert a song name.");
    return;
  }
  try {
    let _0x349d1c = _0x40dcce.join(" ");
    let _0x10b3e4 = [];
    const _0x323720 = await yts(_0x349d1c);
    _0x10b3e4 = _0x323720.videos;
    if (_0x10b3e4 && _0x10b3e4.length > 0) {
      const _0x1c0a5a = _0x10b3e4[0].url;
      const _0x3e26ab = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url=" + encodeURIComponent(_0x1c0a5a) + "&apikey=" + "giftedtechk");
      const _0x5cdfa4 = await _0x3e26ab.json();
      if (_0x5cdfa4.status === 200 && _0x5cdfa4.success) {
        const _0x34d021 = _0x5cdfa4.result.download_url;
        const _0x3910d4 = {
          'image': {
            'url': _0x10b3e4[0].thumbnail
          },
          'caption': "*LUCKY_MD SONG MED PLAYER*\n\n╭━━━━━━⊷⊷⊷⊷━━━━━⊛\n┊✺ *Title:* " + _0x5cdfa4.result.title + "\n┊✺ *Quality:* " + _0x5cdfa4.result.type + "\n┊✺ *Duration:* " + _0x10b3e4[0].timestamp + "\n┊✺ *Viewers:* " + _0x10b3e4[0].views + "\n┊✺ *Uploaded:* " + _0x10b3e4[0].ago + "\n┊✺ *Artist:* " + _0x10b3e4[0].author.name + "\n╰━━━━━━⊷⊷⊷⊷━━━━━⊛\n❁ *Direct YtLink:* " + _0x1c0a5a + "\n┌━━══━━☆✞✞☆━━══━━⊷\n┃ *_Powered by FredieTechSir._*\n└━━══━━☆✞✞☆━━══━━⊷"
        };
        await _0xc9ed1.sendMessage(_0x454db3, _0x3910d4, {
          'quoted': _0x1fdf22
        });
        await _0xc9ed1.sendMessage(_0x454db3, {
          'document': {
            'url': _0x34d021
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x1fdf22
        });
      } else {
        _0x5c3fd8("Failed to download audio. Please try again later.");
      }
    } else {
      _0x5c3fd8("No audio found.");
    }
  } catch (_0x5eea1a) {
    console.error("Error from API:", _0x5eea1a);
    _0x5c3fd8("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "video",
  'categorie': "Download",
  'reaction': '📺'
}, async (_0x3c4ffd, _0x4c5f12, _0x5ef565) => {
  const {
    ms: _0x584be0,
    repondre: _0x3cc528,
    arg: _0x2173e8
  } = _0x5ef565;
  if (!_0x2173e8[0]) {
    _0x3cc528("Please insert a song/video name.");
    return;
  }
  try {
    let _0x683d96 = _0x2173e8.join(" ");
    let _0x48f868 = [];
    const _0x1d78a2 = await yts(_0x683d96);
    _0x48f868 = _0x1d78a2.videos;
    if (_0x48f868 && _0x48f868.length > 0) {
      const _0x543783 = _0x48f868[0].url;
      const _0x919954 = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp4?url=" + encodeURIComponent(_0x543783) + "&apikey=" + "giftedtechk");
      const _0x2d9fda = await _0x919954.json();
      if (_0x2d9fda.status === 200 && _0x2d9fda.success) {
        const _0x137743 = _0x2d9fda.result.download_url;
        const _0x38f1ae = {
          'image': {
            'url': _0x48f868[0].thumbnail
          },
          'caption': "*LUCKY_MD MEDIA PLAYER*\n\n╭━━━━━━⊷⊷⊷⊷━━━━━⊛\n┊✺ *Title:* " + _0x2d9fda.result.title + "\n┊✺ *Quality:* " + _0x2d9fda.result.type + "\n┊✺ *Duration:* " + _0x48f868[0].timestamp + "\n┊✺ *Viewers:* " + _0x48f868[0].views + "\n┊✺ *Uploaded:* " + _0x48f868[0].ago + "\n┊✺ *Artist:* " + _0x48f868[0].author.name + "\n╰━━━━━━⊷⊷⊷⊷━━━━━⊛\n☆ *Direct YtLink:* " + _0x543783 + "\n┌━━══━━☆✞✞☆━━══━━⊷\n┃ *_Powered by FredieTechSir._*\n└━━══━━☆✞✞☆━━══━━⊷"
        };
        await _0x4c5f12.sendMessage(_0x3c4ffd, _0x38f1ae, {
          'quoted': _0x584be0
        });
        await _0x4c5f12.sendMessage(_0x3c4ffd, {
          'video': {
            'url': _0x137743
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x584be0
        });
      } else {
        _0x3cc528("Failed to download the video. Please try again later.");
      }
    } else {
      _0x3cc528("No videos found.");
    }
  } catch (_0x1f54a7) {
    console.error("Error from API:", _0x1f54a7);
    _0x3cc528("An error occurred while searching or downloading the video.");
  }
});
zokou({
  'nomCom': "videodoc",
  'categorie': "Download",
  'reaction': '📺'
}, async (_0x3c3e1d, _0x5281d8, _0x3af123) => {
  const {
    ms: _0x5b4ec3,
    repondre: _0xa1c8ee,
    arg: _0x4be378
  } = _0x3af123;
  if (!_0x4be378[0]) {
    _0xa1c8ee("Please insert a song/video name.");
    return;
  }
  try {
    let _0x28f810 = _0x4be378.join(" ");
    let _0x371c53 = [];
    const _0x2a3771 = await yts(_0x28f810);
    _0x371c53 = _0x2a3771.videos;
    if (_0x371c53 && _0x371c53.length > 0) {
      const _0x446412 = _0x371c53[0].url;
      const _0x416bf5 = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp4?url=" + encodeURIComponent(_0x446412) + "&apikey=" + "giftedtechk");
      const _0xcc9cfa = await _0x416bf5.json();
      if (_0xcc9cfa.status === 200 && _0xcc9cfa.success) {
        const _0x33c23d = _0xcc9cfa.result.download_url;
        const _0x395d35 = {
          'image': {
            'url': _0x371c53[0].thumbnail
          },
          'caption': "*LUCKY_MD MEDIE PLAYER*\n\n╭━━━━━━⊷⊷⊷⊷━━━━━⊛\n┊✺ *Title:* " + _0xcc9cfa.result.title + "\n┊✺ *Quality:* " + _0xcc9cfa.result.type + "\n┊✺ *Duration:* " + _0x371c53[0].timestamp + "\n┊✺ *Viewers:* " + _0x371c53[0].views + "\n┊✺ *Uploaded:* " + _0x371c53[0].ago + "\n┊✺ *Artist:* " + _0x371c53[0].author.name + "\n╰━━━━━━⊷⊷⊷⊷━━━━━⊛\n✞ *Direct YtLink:* " + _0x446412 + "\n┌━━══━━☆✞✞☆━━══━━⊷\n┃ *_Powered by FredieTechSir._*\n└━━══━━☆✞✞☆━━══━━⊷"
        };
        await _0x5281d8.sendMessage(_0x3c3e1d, _0x395d35, {
          'quoted': _0x5b4ec3
        });
        await _0x5281d8.sendMessage(_0x3c3e1d, {
          'document': {
            'url': _0x33c23d
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x5b4ec3
        });
      } else {
        _0xa1c8ee("Failed to download the video. Please try again later.");
      }
    } else {
      _0xa1c8ee("No videos found.");
    }
  } catch (_0x181410) {
    console.error("Error from API:", _0x181410);
    _0xa1c8ee("An error occurred while searching or downloading the video.");
  }
});
