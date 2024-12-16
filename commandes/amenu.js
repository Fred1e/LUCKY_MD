const axios = require("axios");
const {
  ezra
} = require(__dirname + '/../fredi/ezra');
const {
  format
} = require(__dirname + '/../fredi/mesfonctions');
const os = require('os');
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const styles = {
  0xa: {
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    'a': 'ᴀ',
    'b': 'ʙ',
    'c': 'ᴄ',
    'd': 'ᴅ',
    'e': 'ᴇ',
    'f': 'ғ',
    'g': 'ɢ',
    'h': 'ʜ',
    'i': 'ɪ',
    'j': 'ᴊ',
    'k': 'ᴋ',
    'l': 'ʟ',
    'm': 'ᴍ',
    'n': 'ɴ',
    'o': 'ᴏ',
    'p': 'ᴘ',
    'q': 'ϙ',
    'r': 'ʀ',
    's': 's',
    't': 'ᴛ',
    'u': 'ᴜ',
    'v': 'v',
    'w': 'ᴡ',
    'x': 'x',
    'y': 'ʏ',
    'z': 'ᴢ',
    'A': 'ᴀ',
    'B': 'ʙ',
    'C': 'ᴄ',
    'D': 'ᴅ',
    'E': 'ᴇ',
    'F': 'ғ',
    'G': 'ɢ',
    'H': 'ʜ',
    'I': 'ɪ',
    'J': 'ᴊ',
    'K': 'ᴋ',
    'L': 'ʟ',
    'M': 'ᴍ',
    'N': 'ɴ',
    'O': 'ᴏ',
    'P': 'ᴘ',
    'Q': 'ϙ',
    'R': 'ʀ',
    'S': 's',
    'T': 'ᴛ',
    'U': 'ᴜ',
    'V': 'v',
    'W': 'ᴡ',
    'X': 'x',
    'Y': 'ʏ',
    'Z': 'ᴢ'
  }
};
const applyStyle = (_0x134f71, _0x10e051) => {
  const _0x2ebd83 = styles[_0x10e051];
  return _0x134f71.split('').map(_0x5df056 => _0x2ebd83[_0x5df056] || _0x5df056).join('');
};
const more = String.fromCharCode(0x200e);
const readmore = more.repeat(0xfa1);
const runtime = function (_0x591a8f) {
  _0x591a8f = Number(_0x591a8f);
  var _0x4889a9 = Math.floor(_0x591a8f / 86400);
  var _0x39e03f = Math.floor(_0x591a8f % 86400 / 0xe10);
  var _0x59749d = Math.floor(_0x591a8f % 0xe10 / 0x3c);
  var _0x487520 = Math.floor(_0x591a8f % 0x3c);
  var _0x3dee11 = _0x4889a9 > 0x0 ? _0x4889a9 + (_0x4889a9 == 0x1 ? " day, " : " d, ") : '';
  var _0x263dac = _0x39e03f > 0x0 ? _0x39e03f + (_0x39e03f == 0x1 ? " hour, " : " h, ") : '';
  var _0x74ac55 = _0x59749d > 0x0 ? _0x59749d + (_0x59749d == 0x1 ? " minute, " : " m, ") : '';
  var _0x170e15 = _0x487520 > 0x0 ? _0x487520 + (_0x487520 == 0x1 ? " second" : " s") : '';
  return _0x3dee11 + _0x263dac + _0x74ac55 + _0x170e15;
};
const fetchGitHubStats = async () => {
  try {
    const _0x463b55 = await axios.get("https://api.github.com/repos/Fred1e/LUCKY_MD");
    const _0xfc7f94 = _0x463b55.data.forks_count;
    const _0x4d3a3a = _0x463b55.data.stargazers_count;
    const _0x2c35d6 = _0xfc7f94 * 0x2 + _0x4d3a3a * 0x2;
    return {
      'forks': _0xfc7f94,
      'stars': _0x4d3a3a,
      'totalUsers': _0x2c35d6
    };
  } catch (_0x1ddfb2) {
    console.error("Error fetching GitHub stats:", _0x1ddfb2);
    return {
      'forks': 0x0,
      'stars': 0x0,
      'totalUsers': 0x0
    };
  }
};
ezra({
  'nomCom': "menu",
  'categorie': "General"
}, async (_0x4517d6, _0x339d30, _0x5d76bb) => {
  let {
    ms: _0x1d59bc,
    repondre: _0x244187,
    prefixe: _0x4a45d3,
    nomAuteurMessage: _0x562fad
  } = _0x5d76bb;
  let {
    cm: _0x22ad72
  } = require(__dirname + "/../fredi/ezra");
  var _0x406c88 = {};
  var _0x3c2244 = "public";
  if (s.MODE.toLocaleLowerCase() != "public") {
    _0x3c2244 = 'Private';
  }
  _0x22ad72.map(async (_0x57af5e, _0x5e9c49) => {
    const _0x225ccc = _0x57af5e.categorie.toUpperCase();
    if (!_0x406c88[_0x225ccc]) {
      _0x406c88[_0x225ccc] = [];
    }
    _0x406c88[_0x225ccc].push(_0x57af5e.nomCom.toUpperCase());
  });
  moment.tz.setDefault(s.TZ);
  const _0x56e63a = moment().format('HH:mm:ss');
  const _0x5a4788 = moment().format("DD/MM/YYYY");
  const _0x247268 = moment().hour();
  let _0x8b5488 = "Good Night";
  if (_0x247268 >= 0x0 && _0x247268 <= 0xb) {
    _0x8b5488 = "Good Morning";
  } else {
    if (_0x247268 >= 0xc && _0x247268 <= 0x10) {
      _0x8b5488 = "Good Afternoon";
    } else {
      if (_0x247268 >= 0x10 && _0x247268 <= 0x15) {
        _0x8b5488 = "Good Evening";
      } else if (_0x247268 >= 0x15 && _0x247268 <= 0x17) {
        _0x8b5488 = "Good Night";
      }
    }
  }
  const {
    totalUsers: _0x49849e
  } = await fetchGitHubStats();
  const _0x15b49d = _0x49849e.toLocaleString();
  let _0x5b71b7 = "\n*" + _0x8b5488 + " " + _0x562fad + "*\n\n╭────✧LUCKY_MD✧────◆\n┃❃╭──────────────\n┃❃│ *User :*  " + s.OWNER_NAME + "\n┃❃│ *Prefix :* " + s.PREFIXES + " \n┃❃│ *Time :* " + _0x56e63a + "\n┃❃│ *Date :* " + _0x5a4788 + " \n┃❃│ *Mode :* " + _0x3c2244 + "\n┃❃│ *Time Zone :* " + s.TZ + "\n┃❃│ *Total Users :* " + _0x15b49d + "  \n┃❃│ *Ram :* " + format(os.totalmem() - os.freemem()) + '/' + format(os.totalmem()) + " \n┃❃│ *Uptime :* " + runtime(process.uptime()) + " \n┃❃╰───────────────\n╰─────✧To-GOD✧─────◆ \n\n";
  let _0xdb265e = "*◇ LUCKY_MD COMMANDS ◇*\n\n" + readmore;
  const _0x43936d = Object.keys(_0x406c88).sort();
  let _0x20e229 = 0x1;
  for (const _0x2d5030 of _0x43936d) {
    _0xdb265e += "\n*╭──❒⁠⁠⁠⁠ " + applyStyle(_0x2d5030.toUpperCase(), 0xa) + " ❒⁠⁠⁠⁠━━─⊷*\n│╭────────────";
    const _0x57d200 = _0x406c88[_0x2d5030].sort();
    for (const _0x43fc7b of _0x57d200) {
      _0xdb265e += " \n││ " + _0x20e229++ + ". " + applyStyle(_0x43fc7b, 0xa);
    }
    _0xdb265e += "\n│╰───────────\n╰══════════════⊷\n";
  }
  _0xdb265e += readmore + "\n◇ *THE LUCKY MULTI DEVICE* ◇\n\n   *Released: 22.7.2024*\n   \n _Thanks For choosing LUCKY_MD_\n\n  Created by *Fredi Ezra ©²0²⁴* \n  \n     *KEEP USING LUCKY_MD*\n";
  try {
    await _0x339d30.sendMessage(_0x4517d6, {
      'text': _0x5b71b7 + _0xdb265e,
      'contextInfo': {
        'mentionedJid': [_0x562fad],
        'externalAdReply': {
          'title': "THE FLASH MULTI DEVICE",
          'body': "POWERED BY FREDI EZRA",
          'thumbnailUrl': "https://i.imgur.com/ecRS5BQ.jpeg",
          'sourceUrl': "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
          'mediaType': 0x1,
          'renderLargerThumbnail': true
        }
      }
    });
  } catch (_0x354ca3) {
    console.log("🥵🥵 Menu erreur " + _0x354ca3);
    _0x244187("🥵🥵 Menu erreur " + _0x354ca3);
  }
});
