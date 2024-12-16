const {
  mediafireDl
} = require("../framework/dl/Function");
const {
  zokou
} = require("../framework/zokou");
const getFBInfo = require("@xaviabot/fb-downloader");
const {
  default: axios
} = require("axios");
const {
  ndown
} = require('nayan-media-downloader');

zokou({
  'nomCom': "math",
  'categorie': "Finance"
}, async (_0xf3a067, _0x3071c5, _0x245f4e) => {
  const {
    ms: _0x5cb1f4,
    repondre: _0x207e24,
    arg: _0x991204
  } = _0x245f4e;
  const _0x513081 = _0x991204.join(" ").replace(/\s+/g, '');
  if (!/^[0-9+\-*/().]+$/.test(_0x513081)) {
    return _0x207e24("Invalid input. Please use a valid format like '1+1' or '2*3+5/2'.");
  }
  try {
    const _0x54e619 = eval(_0x513081);
    if (!isFinite(_0x54e619)) {
      return _0x207e24("Error: Division by zero or other invalid operation.");
    }
    _0x3071c5.sendMessage(_0xf3a067, {
      'text': "The result is: " + _0x54e619
    }, {
      'quoted': _0x5cb1f4
    })['catch'](_0x5976c3 => _0x207e24("Error sending the result"));
  } catch (_0x1c11b8) {
    return _0x207e24("Invalid expression. Please ensure you are using valid mathematical operators.");
  }
});

zokou({
  'nomCom': "xvideo",
  'categorie': "NewDl",
  'aliases': ["xxx", "porn", "xxxnx"]
}, async (_0x1d733c, _0x1dc12c, _0x412a75) => {
  const {
    ms: _0x57a0e9,
    repondre: _0x495960,
    arg: _0x513e24
  } = _0x412a75;
  let _0x2f7b0f = _0x513e24.join(" ");
  const _0x112c4b = {
    'xvid': "https://example.com/xvid",
    'porn': "https://example.com/porn",
    'xxxnx': "https://example.com/xxxnx"
  };
  if (_0x112c4b[_0x2f7b0f]) {
    _0x2f7b0f = _0x112c4b[_0x2f7b0f];
  }
  if (!_0x513e24[0x0]) {
    _0x495960("Please insert an *X Video Link* for *LUCKY_MD* to download");
    return;
  }
  try {
    const _0x93fc79 = await fetch('https://api.prabath-md.tech/api/xvdl?url=' + encodeURIComponent(_0x2f7b0f));
    const _0x215fdd = await _0x93fc79.json();
    if (_0x215fdd && _0x215fdd.data && _0x215fdd.data.download) {
      const _0x5be68e = _0x215fdd.data.download;
      _0x1dc12c.sendMessage(_0x1d733c, {
        'video': {
          'url': _0x5be68e
        },
        'caption': "Here is your 18+ Video.\n_╰►DOWNLOADED BY_ *LUCKY_MD*",
        'gifPlayback': false
      }, {
        'quoted': _0x57a0e9
      });
    } else {
      _0x495960("No downloadable link found for the provided URL.");
    }
  } catch (_0x4528e2) {
    _0x495960("I am unable to download your media.\n" + _0x4528e2.message);
  }
});

zokou({
  'nomCom': "gdrive",
  'categorie': 'NewDl'
}, async (_0x57a607, _0x130367, _0x2e4136) => {
  const {
    ms: _0x4e04bd,
    repondre: _0x3922ef,
    arg: _0x2580ea
  } = _0x2e4136;
  const _0xcd0660 = _0x2580ea.join(" ");
  if (!_0xcd0660) {
    return _0x3922ef("Please insert a Google Drive link!");
  }
  if (!_0xcd0660.includes('drive.google.com')) {
    return _0x3922ef("That is not a Google Drive link!");
  }
  try {
    const _0x6db48e = await fetch("https://api-smd.onrender.com/api/gdrive?url=" + _0xcd0660);
    if (!_0x6db48e.ok) {
      throw new Error("Network response was not ok.");
    }
    const _0x5d51f9 = await _0x6db48e.json();
    await _0x3922ef("*LUCKY_MD* is downloading media from Google Drive. Please wait...");
    if (_0x5d51f9 && _0x5d51f9.downloadUrl) {
      const _0x220152 = _0x5d51f9.downloadUrl;
      const _0x517f02 = _0x5d51f9.mimetype.split('/')[0x0];
      if (_0x517f02 === "audio" || _0x517f02 === "video" || _0x517f02 === "image") {
        await _0x130367.sendMessage(_0x57a607, {
          [_0x517f02]: {
            'url': _0x220152
          },
          'caption': '*' + _0x5d51f9.fileName + "*\n\n> *POWERED BY LUCKY_MD*"
        }, {
          'quoted': _0x4e04bd
        });
      } else {
        const _0x17bad4 = _0x5d51f9.fileName.split('.').pop();
        await _0x130367.sendMessage(_0x57a607, {
          'document': {
            'url': _0x220152,
            'filename': _0x5d51f9.fileName
          },
          'caption': _0x17bad4.toUpperCase() + ": *" + _0x5d51f9.fileName + "*\n\n> *POWERED BY LUCKY_MD*"
        }, {
          'quoted': _0x4e04bd
        });
      }
    } else {
      await _0x3922ef("Failed to retrieve the media. Please try again later.");
    }
  } catch (_0x558608) {
    console.error("Error fetching media:", _0x558608);
    await _0x3922ef("Failed to retrieve the media. Please try again later.");
  }
});

zokou({
  'nomCom': "npm",
  'categorie': 'NewDl',
  'aliases': ['npmstalk', 'npstalk', "pmstalk"]
}, async (_0xbde2f6, _0x19a172, _0x21b91b) => {
  const {
    ms: _0x5ef25f,
    repondre: _0x1103bb,
    arg: _0x36ee25
  } = _0x21b91b;
  const _0x2d1eac = _0x36ee25.join(" ");
  if (!_0x2d1eac) {
    return _0x1103bb("Please provide a package name to search for.");
  }
  try {
    const _0x2c80f0 = "https://api.prabath-md.tech/api/npmsearch?q=" + encodeURIComponent(_0x2d1eac);
    const _0x4fbe6c = await axios.get(_0x2c80f0);
    const _0x2ecb21 = _0x4fbe6c.data;
    if (_0x2ecb21 && _0x2ecb21.data && _0x2ecb21.data.data) {
      const {
        name: _0x1a065d,
        description: _0xa0741,
        version: _0x1f8f89,
        packageLink: _0x3ca668,
        downloadLink: _0x42c30e,
        publishedDate: _0x669dfa,
        owner: _0x4dde79,
        homepage: _0x2cd9f9,
        license: _0x5e5a75,
        readme: _0xfb2d79
      } = _0x2ecb21.data.data;
      const _0x50bbfd = "*LUCKY_MD NPM STALKER*:\n\n" + ("*Name:* " + _0x1a065d + "\n*Owner:* " + _0x4dde79 + "\n*Version:* " + _0x1f8f89 + "\n") + ("*Published:* " + _0x669dfa + "\n*Description:* " + _0xa0741 + "\n") + ("*Package Link:* " + _0x3ca668 + "\n*Download Link:* " + _0x42c30e + "\n") + ("*Homepage:* " + _0x2cd9f9 + "\n*License:* " + _0x5e5a75 + "\n") + ("*Readme:* " + (_0xfb2d79 || 'N/A') + "\n\n> POWERED BY © FREDI EZRA");
      await _0x19a172.sendMessage(_0xbde2f6, {
        'text': _0x50bbfd
      }, {
        'quoted': _0x5ef25f
      });
    } else {
      throw new Error("Invalid response from the API.");
    }
  } catch (_0x43e5ec) {
    console.error("Error getting API response:", _0x43e5ec.message);
    await _0x1103bb("Error getting response from the API.");
  }
});

zokou({
  'nomCom': "fetch",
  'categorie': "NewDl",
  'aliases': ["check", 'try']
}, async (_0x34e935, _0x726ab, _0x295c2d) => {
  const {
    ms: _0x449a3e,
    repondre: _0x356671,
    arg: _0x3dfafe
  } = _0x295c2d;
  let _0x5d7675 = _0x3dfafe.join(" ");
  if (!/^https?:\/\//.test(_0x5d7675)) {
    return _0x356671("Start the *URL* with http:// or https://");
  }
  try {
    const _0x2cc4d4 = new URL(_0x5d7675);
    const _0x13de0d = '' + _0x2cc4d4.origin + _0x2cc4d4.pathname + '?' + _0x2cc4d4.searchParams.toString();
    const _0x1ec58c = await fetch(_0x13de0d);
    if (!_0x1ec58c.ok) {
      return _0x356671("Failed to fetch the URL. Status: " + _0x1ec58c.status + " " + _0x1ec58c.statusText);
    }
    const _0x129025 = _0x1ec58c.headers.get('content-length');
    if (_0x129025 && parseInt(_0x129025) > 104857600) {
      return _0x356671("Content-Length exceeds the limit: " + _0x129025);
    }
    const _0x2730c2 = _0x1ec58c.headers.get('content-type');
    console.log('Content-Type:', _0x2730c2);
    if (/image\/.*/.test(_0x2730c2)) {
      await _0x726ab.sendMessage(_0x34e935, {
        'image': {
          'url': _0x13de0d
        },
        'caption': "> > *POWERED BY LUCKY_MD*"
      }, {
        'quoted': _0x449a3e
      });
      return;
    } else {
      if (/video\/.*/.test(_0x2730c2)) {
        await _0x726ab.sendMessage(_0x34e935, {
          'video': {
            'url': _0x13de0d
          },
          'caption': "> > *POWERED BY LUCKY_MD*"
        }, {
          'quoted': _0x449a3e
        });
        return;
      } else {
        if (/text|json/.test(_0x2730c2)) {
          let _0x52b911 = Buffer.from(await _0x1ec58c.arrayBuffer());
          try {
            const _0x3cc237 = JSON.parse(_0x52b911);
            console.log("Parsed JSON:", _0x3cc237);
            _0x52b911 = JSON.stringify(_0x3cc237, null, 0x2);
          } catch (_0x4de044) {
            console.error("Error parsing JSON:", _0x4de044);
            _0x52b911 = _0x52b911.toString();
          } finally {
            _0x356671(_0x52b911.slice(0x0, 0x10000));
          }
        } else {
          await _0x726ab.sendMessage(_0x34e935, {
            'document': {
              'url': _0x13de0d
            },
            'caption': "> > *POWERED BY LUCKY_MD*"
          }, {
            'quoted': _0x449a3e
          });
        }
      }
    }
  } catch (_0x334d2e) {
    console.error("Error fetching data:", _0x334d2e.message);
    _0x356671("Error fetching data: " + _0x334d2e.message);
  }
});

zokou({
  'nomCom': 'blackpink',
  'aliases': ["bpink"],
  'categorie': 'NewDl'
}, async (_0x33e7a9, _0x50d4ba, _0x197db4) => {
  const {
    ms: _0x2d5548,
    repondre: _0xf96ca9,
    arg: _0x15abe7
  } = _0x197db4;
  if (_0x15abe7[0x0]) {
    _0xf96ca9("This command doesn't require any arguments. Just type the command to get 5 random Blackpink images!");
    return;
  }
  try {
    const _0x5e8806 = await fetch("https://raw.githubusercontent.com/arivpn/dbase/master/kpop/blekping.txt");
    const _0x45fc32 = await _0x5e8806.text();
    const _0x386758 = _0x45fc32.split("\n");
    const _0x47561d = _0x386758.filter(_0x120bbd => _0x120bbd.trim() !== '');
    if (_0x47561d.length < 0x5) {
      _0xf96ca9("There aren't enough images available at the moment. Please try again later.");
      return;
    }
    const _0x62c2a6 = [];
    while (_0x62c2a6.length < 0x5) {
      const _0xf4546c = _0x47561d[Math.floor(Math.random() * _0x47561d.length)];
      if (!_0x62c2a6.includes(_0xf4546c)) {
        _0x62c2a6.push(_0xf4546c);
      }
    }
    await _0x50d4ba.sendMessage(_0x33e7a9, {
      'text': "LUCKY_MD is sending you 5 BLACKPINK IMAGES"
    }, {
      'quoted': _0x2d5548
    });
    for (const _0x2eb0cd of _0x62c2a6) {
      await _0x50d4ba.sendMessage(_0x33e7a9, {
        'image': {
          'url': _0x2eb0cd
        },
        'caption': "_╰►DOWNLOADED BY_ *LUCKY_MD*"
      }, {
        'quoted': _0x2d5548
      });
    }
    await _0x50d4ba.sendMessage(_0x33e7a9, {
      'text': "SUCCESSFULLY SENT THE 5 IMAGES ✅"
    }, {
      'quoted': _0x2d5548
    });
  } catch (_0x2f8d29) {
    _0xf96ca9("A fatal error has occurred... \n " + _0x2f8d29.message);
  }
});
