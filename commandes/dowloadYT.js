const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "play",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x553541, _0x3542d7, _0x536ebb) => {
  const {
    ms: _0xf0f09,
    repondre: _0x143995,
    arg: _0x3d80b6
  } = _0x536ebb;
  if (!_0x3d80b6[0]) {
    _0x143995("Please insert a song name.");
    return;
  }
  try {
    let _0x1a24ee = _0x3d80b6.join(" ");
    let _0x3088e2 = [];
    const _0x2aaae8 = await yts(_0x1a24ee);
    _0x3088e2 = _0x2aaae8.videos;
    if (_0x3088e2 && _0x3088e2.length > 0) {
      const _0x35cfe6 = _0x3088e2[0].url;
      const _0xc513c1 = await fetch("https://api.giftedtech.my.id/api/download/ytmp3?url=" + encodeURIComponent(_0x35cfe6) + "&apikey=" + "gifted");
      const _0x35fc2f = await _0xc513c1.json();
      if (_0x35fc2f.status === 200 && _0x35fc2f.success) {
        const _0x42270d = _0x35fc2f.result.download_url;
        const _0x1afcd1 = {
          'image': {
            'url': _0x3088e2[0].thumbnail
          },
          'caption': "LUCKY MD MUSIC DOWLODER\n\n╭━━━━••••⊷••───•∞•\n┊ *Title:* " + _0x3088e2[0].title + "\n┊ *Quality:* mp3 (320kbps)\n┊ *Duration:* " + _0x3088e2[0].timestamp + "\n┊ *Viewers:* " + _0x3088e2[0].views + "\n┊ *Uploaded:* " + _0x3088e2[0].ago + "\n┊ *Artist:* " + _0x3088e2[0].author.name + "\n╰━━━━••••⊷••───•∞•\n❖ *Direct YtLink:* " + _0x35cfe6 + "\n\n╭───•••∞•••━━━━──••\nMade By FrediEzra\n╰───•••∞•••━━━━──••"
        };
        await _0x3542d7.sendMessage(_0x553541, _0x1afcd1, {
          'quoted': _0xf0f09
        });
        await _0x3542d7.sendMessage(_0x553541, {
          'audio': {
            'url': _0x42270d
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0xf0f09
        });
        _0x143995("*SUCCESSFUL DOWLOADED BY LUCKY MD*...");
      } else {
        _0x143995("Failed to download audio. Please try again later.");
      }
    } else {
      _0x143995("No audio found.");
    }
  } catch (_0x4cb778) {
    console.error("Error from API:", _0x4cb778);
    _0x143995("An error occurred while searching or downloading the audio." + _0x4cb778);
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x21cd5b, _0x5a8163, _0x30afa0) => {
  const {
    ms: _0x1ec728,
    repondre: _0x441d2d,
    arg: _0x23ffe4
  } = _0x30afa0;
  if (!_0x23ffe4[0]) {
    _0x441d2d("Please insert a song name.");
    return;
  }
  try {
    let _0x36a995 = _0x23ffe4.join(" ");
    let _0x2e073d = [];
    const _0x336ec9 = await yts(_0x36a995);
    _0x2e073d = _0x336ec9.videos;
    if (_0x2e073d && _0x2e073d.length > 0) {
      const _0x2802ea = _0x2e073d[0].url;
      const _0x1de769 = await fetch("https://api.giftedtech.my.id/api/download/ytmp3?url=" + encodeURIComponent(_0x2802ea) + "&apikey=" + "gifted");
      const _0x303b32 = await _0x1de769.json();
      if (_0x303b32.status === 200 && _0x303b32.success) {
        const _0x4b00a7 = _0x303b32.result.download_url;
        const _0x42120f = {
          'image': {
            'url': _0x2e073d[0].thumbnail
          },
          'caption': "LUCKY MD SONG DOWLOADER\n\n╭━━━━••••⊷••───•∞•\n┊ *Title:* " + _0x2e073d[0].title + "\n┊ *Quality:* mp3 (320kbps)\n┊ *Duration:* " + _0x2e073d[0].timestamp + "\n┊ *Viewers:* " + _0x2e073d[0].views + "\n┊ *Uploaded:* " + _0x2e073d[0].ago + "\n┊ *Artist:* " + _0x2e073d[0].author.name + "\n╰━━━━••••⊷••───•∞•\n❁ *Direct YtLink:* " + _0x2802ea + "\n\n╭───•••∞•••━━━━──••\nMade By FrediEzra\n╰───•••∞•••━━━━──••"
        };
        await _0x5a8163.sendMessage(_0x21cd5b, _0x42120f, {
          'quoted': _0x1ec728
        });
        await _0x5a8163.sendMessage(_0x21cd5b, {
          'document': {
            'url': _0x4b00a7
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x1ec728
        });
        _0x441d2d("*SUCCESSFUL DOWLOADED BY LUCKY MD*...");
      } else {
        _0x441d2d("Failed to download audio. Please try again later.");
      }
    } else {
      _0x441d2d("No audio found.");
    }
  } catch (_0x3590c1) {
    console.error("Error from API:", _0x3590c1);
    _0x441d2d("An error occurred while searching or downloading the audio." + _0x3590c1);
  }
});
zokou({
  'nomCom': "video",
  'categorie': "Download",
  'reaction': '🎬'
}, async (_0x4cd451, _0x26eaa4, _0x27def3) => {
  const {
    ms: _0x38072b,
    repondre: _0x423915,
    arg: _0x1511d3
  } = _0x27def3;
  if (!_0x1511d3[0]) {
    _0x423915("Please insert a song/video name.");
    return;
  }
  try {
    let _0x1be6b8 = _0x1511d3.join(" ");
    let _0x2e9784 = [];
    const _0x3fae5f = await yts(_0x1be6b8);
    _0x2e9784 = _0x3fae5f.videos;
    if (_0x2e9784 && _0x2e9784.length > 0) {
      const _0x291265 = _0x2e9784[0].url;
      const _0x194755 = await fetch("https://api.giftedtech.my.id/api/download/ytmp4?url=" + encodeURIComponent(_0x291265) + "&apikey=" + "gifted");
      const _0x3c9bda = await _0x194755.json();
      if (_0x3c9bda.status === 200 && _0x3c9bda.success) {
        const _0x1edad2 = _0x3c9bda.result.download_url;
        const _0x2e97ec = {
          'image': {
            'url': _0x2e9784[0].thumbnail
          },
          'caption': "LUCKY MD VIDEO DOWLOADER\n\n╭━━━━••••⊷••───•∞•\n┊ *Title:* " + _0x2e9784[0].title + "\n┊ *Quality:* 720p-HD\n┊ *Duration:* " + _0x2e9784[0].timestamp + "\n┊ *Viewers:* " + _0x2e9784[0].views + "\n┊ *Uploaded:* " + _0x2e9784[0].ago + "\n┊ *Artist:* " + _0x2e9784[0].author.name + "\n╰━━━━••••⊷••───•∞•\n✺ *Direct YtLink:* " + _0x291265 + "\n\n╭───•••∞•••━━━━──••\nMade By FrediEzra\n╰───•••∞•••━━━━──••"
        };
        await _0x26eaa4.sendMessage(_0x4cd451, _0x2e97ec, {
          'quoted': _0x38072b
        });
        await _0x26eaa4.sendMessage(_0x4cd451, {
          'video': {
            'url': _0x1edad2
          },
          'caption': "*YOUR VIDEO GENERATING BY LUCKY MD*",
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x38072b
        });
        _0x423915("*SUCCESSFUL DOWLOADED BY LUCKY MD*...");
      } else {
        _0x423915("Failed to download the video. Please try again later.");
      }
    } else {
      _0x423915("No videos found.");
    }
  } catch (_0x244cc3) {
    console.error("Error from API:", _0x244cc3);
    _0x423915("An error occurred while searching or downloading the video." + _0x244cc3);
  }
});
zokou({
  'nomCom': "videodoc",
  'categorie': "Download",
  'reaction': '💽'
}, async (_0x5098cf, _0x1c2876, _0x4e72b0) => {
  const {
    ms: _0x5beb5d,
    repondre: _0x1b668c,
    arg: _0x369a36
  } = _0x4e72b0;
  if (!_0x369a36[0]) {
    _0x1b668c("Please insert a song/video name.");
    return;
  }
  try {
    let _0x50cfc0 = _0x369a36.join(" ");
    let _0x215b79 = [];
    const _0x5e9fc0 = await yts(_0x50cfc0);
    _0x215b79 = _0x5e9fc0.videos;
    if (_0x215b79 && _0x215b79.length > 0) {
      const _0x283dca = _0x215b79[0].url;
      const _0x5a1a2b = await fetch("https://api.giftedtech.my.id/api/download/ytmp4?url=" + encodeURIComponent(_0x283dca) + "&apikey=" + "gifted");
      const _0x4b74b7 = await _0x5a1a2b.json();
      if (_0x4b74b7.status === 200 && _0x4b74b7.success) {
        const _0x5db1e5 = _0x4b74b7.result.download_url;
        const _0x189063 = {
          'image': {
            'url': _0x215b79[0].thumbnail
          },
          'caption': "LUCKY MD VIDEODOCS DOWLOADER\n\n╭━━━━••••⊷••───•∞•\n┊ *Title:* " + _0x215b79[0].title + "\n┊ *Quality:* 720p-HD\n┊ *Duration:* " + _0x215b79[0].timestamp + "\n┊ *Viewers:* " + _0x215b79[0].views + "\n┊ *Uploaded:* " + _0x215b79[0].ago + "\n┊ *Artist:* " + _0x215b79[0].author.name + "\n╰━━━━••••⊷••───•∞•\n✣ *Direct YtLink:* " + _0x283dca + "\n\n╭───•••∞•••━━━━──••\nMade By FrediEzra\n╰───•••∞•••━━━━──••"
        };
        await _0x1c2876.sendMessage(_0x5098cf, _0x189063, {
          'quoted': _0x5beb5d
        });
        await _0x1c2876.sendMessage(_0x5098cf, {
          'document': {
            'url': _0x5db1e5
          },
          'caption': "*VIDEODOCS GENERATED BY LUCKY MD*",
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x5beb5d
        });
        _0x1b668c("*SUCCESSFUL DOWLOADED BY LUCKY MD*...");
      } else {
        _0x1b668c("Failed to download the video. Please try again later.");
      }
    } else {
      _0x1b668c("No videos found.");
    }
  } catch (_0x4480dc) {
    console.error("Error from API:", _0x4480dc);
    _0x1b668c("An error occurred while searching or downloading the video." + _0x4480dc);
  }
});
