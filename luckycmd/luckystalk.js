const {
  ezra
} = require("../fredi/ezra");
const axios = require("axios");
ezra({
  'nomCom': "tiktokstalk",
  'reaction': '🔍',
  'categorie': 'Search'
}, async (_0x1e47b1, _0x297e3a, _0x39a877) => {
  const {
    repondre: _0x43ea2d,
    arg: _0x347799
  } = _0x39a877;
  const _0x4a93be = _0x347799.join(" ");
  if (!_0x4a93be) {
    return _0x43ea2d("Please specify the username.");
  }
  try {
    const _0x44fe90 = await axios.get("https://www.noobs-api.000.pe/dipto/tiktokinfo?userName=" + encodeURIComponent(_0x4a93be));
    if (_0x44fe90.status !== 0xc8 || !_0x44fe90.data) {
      return _0x43ea2d("Invalid username.");
    }
    const _0x32d7c0 = _0x44fe90.data;
    const _0x521589 = "\n┌──「 *LUCKY TIKTOK STALK* \n▢ *🔖Name:* " + (_0x32d7c0.full_name || "Unknown") + "\n▢ *🔖Username:* " + (_0x32d7c0.username || "Unknown") + "\n▢ *👥Followers:* " + (_0x32d7c0.followers || 'Unknown') + "\n▢ *🫂Following:* " + (_0x32d7c0.following || "Unknown") + "\n▢ *📌Bio:* " + (_0x32d7c0.biography || "No Bio") + "\n▢ *🔗 External Link:* " + (_0x32d7c0.external_url || "No Link") + "\n▢ *🔗 Profile Link:* https://tiktok.com/@" + (_0x32d7c0.username || "unknown") + "\n└────────────";
    await _0x43ea2d(_0x521589);
  } catch (_0x23f4e8) {
    console.error(_0x23f4e8);
    await _0x43ea2d("An error occurred.");
  }
});
ezra({
  'nomCom': "instastalk",
  'reaction': '🔎',
  'categorie': 'Search'
}, async (_0x2947e0, _0xa3d214, _0x55e3bd) => {
  const {
    repondre: _0x46ffbd,
    arg: _0x934f38
  } = _0x55e3bd;
  const _0x4cfa0b = _0x934f38.join(" ");
  if (!_0x4cfa0b) {
    return _0x46ffbd("Please specify the username.");
  }
  try {
    const _0x4bf64e = await axios.get("https://www.noobs-api.000.pe/dipto/instainfo?username=" + encodeURIComponent(_0x4cfa0b));
    if (_0x4bf64e.status !== 0xc8 || !_0x4bf64e.data) {
      return _0x46ffbd("Invalid username.");
    }
    const _0x6778ca = _0x4bf64e.data;
    const _0x5831e4 = "\n┌──「 *LUCKY INSTAGRAM STALK* \n▢ *🔖Name:* " + (_0x6778ca.full_name || "Unknown") + "\n▢ *🔖Username:* " + (_0x6778ca.username || 'Unknown') + "\n▢ *👥Followers:* " + (_0x6778ca.followers || "Unknown") + "\n▢ *🫂Following:* " + (_0x6778ca.following || "Unknown") + "\n▢ *📌Bio:* " + (_0x6778ca.biography || "No Bio") + "\n▢ *🔗 External Link:* " + (_0x6778ca.external_url || "No Link") + "\n▢ *🔗 Profile Link:* https://instagram.com/" + (_0x6778ca.username || "unknown") + "\n└────────────";
    await _0x46ffbd(_0x5831e4);
  } catch (_0x4acc99) {
    console.error(_0x4acc99);
    await _0x46ffbd("An error occurred.");
  }
});
ezra({
  'nomCom': "channelstalk",
  'reaction': '🔎',
  'categorie': "Search"
}, async (_0x534ece, _0x38dfe4, _0x4c8dcb) => {
  const {
    repondre: _0x49a05d,
    arg: _0x71564d
  } = _0x4c8dcb;
  const _0x4bdff2 = _0x71564d.join(" ");
  if (!_0x4bdff2) {
    return _0x49a05d("Please specify the username.");
  }
  try {
    const _0x4b5ee8 = await axios.get("https://api.giftedtechnexus.co.ke/api/stalk/wachannel?url=" + encodeURIComponent(_0x4bdff2));
    if (_0x4b5ee8.status !== 0xc8 || !_0x4b5ee8.data) {
      return _0x49a05d("Invalid link.");
    }
    const _0x17b4dd = _0x4b5ee8.data;
    const _0x4e19a3 = "\n┌──「 *LUCKY CHANNEL STALK* \n▢ *🔖Name:* " + (_0x17b4dd.full_name || "Unknown") + "\n▢ *👥Followers:* " + (_0x17b4dd.followers || "Unknown") + "\n▢ *📌Bio:* " + (_0x17b4dd.biography || "No Bio") + "\n▢ *🔗 External Link:* " + (_0x17b4dd.external_url || "No Link") + "\n▢ *🔗 Profile Link:* https://whatsapp.com/" + (_0x17b4dd.username || 'unknown') + "\n└────────────";
    await _0x49a05d(_0x4e19a3);
  } catch (_0x3d4b0e) {
    console.error(_0x3d4b0e);
    await _0x49a05d("An error occurred.");
  }
});
ezra({
  'nomCom': "gitstalk",
  'reaction': '🔎',
  'categorie': "Search"
}, async (_0x541ff5, _0x4ea3ae, _0x162c2d) => {
  const {
    repondre: _0x3532f7,
    arg: _0x1fe390
  } = _0x162c2d;
  const _0x4a8370 = _0x1fe390.join(" ");
  if (!_0x4a8370) {
    return _0x3532f7("Please specify the username.");
  }
  try {
    const _0x29f96b = await axios.get("https://api.maskser.me/api/info/githubstalk?user=" + encodeURIComponent(_0x4a8370));
    if (_0x29f96b.status !== 0xc8 || !_0x29f96b.data) {
      return _0x3532f7("Invalid username.");
    }
    const _0x3a8847 = _0x29f96b.data;
    const _0x589718 = "\n❴ *°LUCKY-MD GITHUB STALKER°* ❵\n│\n│♦️ Name: " + (_0x3a8847.name || "N/A") + "\n│🔖 Username: " + _0x3a8847.login + "\n│✨ Bio: " + (_0x3a8847.bio || "N/A") + "\n│🏢 Company: " + (_0x3a8847.company || "N/A") + "\n│📍 Location: " + (_0x3a8847.location || "N/A") + "\n│📧 Email: " + (_0x3a8847.email || "N/A") + "\n│📰 Blog: " + (_0x3a8847.blog || 'N/A') + "\n│🔓 Public Repos: " + _0x3a8847.public_repos + "\n│👪 Followers: " + _0x3a8847.followers + "\n│🫶 Following: " + _0x3a8847.following + "\n╭───────────────────◆\n│ *_Powered by fredie tech._*\n╰────────────────────◆";
    await _0x3532f7(_0x589718);
  } catch (_0x222e9a) {
    console.error(_0x222e9a);
    await _0x3532f7("An error occurred.");
  }
});
ezra({
  'nomCom': "twitterstalk",
  'reaction': '🔎',
  'categorie': 'Search'
}, async (_0x3b28b1, _0x54d1a5, _0x16ffb5) => {
  const {
    repondre: _0x3c5209,
    arg: _0x57f8c3
  } = _0x16ffb5;
  const _0x42b75d = _0x57f8c3.join(" ");
  if (!_0x42b75d) {
    return _0x3c5209("Please specify the username.");
  }
  try {
    const _0x18a206 = await axios.get("https://www.noobs-api.000.pe/dipto/twitterinfo?username=" + encodeURIComponent(_0x42b75d));
    if (_0x18a206.status !== 0xc8 || !_0x18a206.data) {
      return _0x3c5209("Invalid username.");
    }
    const _0xce9c5c = _0x18a206.data;
    const _0x17a511 = "\n┌──「 *LUCKY TWITTER STALK* \n▢ *🔖Name:* " + (_0xce9c5c.full_name || 'Unknown') + "\n▢ *🔖Username:* " + (_0xce9c5c.username || "Unknown") + "\n▢ *👥Followers:* " + (_0xce9c5c.followers || 'Unknown') + "\n▢ *🫂Following:* " + (_0xce9c5c.following || "Unknown") + "\n▢ *📌Bio:* " + (_0xce9c5c.biography || "No Bio") + "\n▢ *🔗 External Link:* " + (_0xce9c5c.external_url || "No Link") + "\n▢ *🔗 Profile Link:* https://x.com/" + (_0xce9c5c.username || 'unknown') + "\n└────────────";
    await _0x3c5209(_0x17a511);
  } catch (_0x22e08f) {
    console.error(_0x22e08f);
    await _0x3c5209("An error occurred.");
  }
});
ezra({
  'nomCom': "facebookstalk",
  'reaction': '🚗',
  'categorie': 'Search'
}, async (_0x270238, _0x2b2fbb, _0x3a1961) => {
  const {
    repondre: _0x1f5321,
    arg: _0x59ae3b
  } = _0x3a1961;
  const _0x36299f = _0x59ae3b.join(" ");
  if (!_0x36299f) {
    return _0x1f5321("Please specify the Facebook token.");
  }
  try {
    const _0x29642f = await axios.get("https://www.noobs-api.000.pe/dipto/fbinfo?accestoken=" + encodeURIComponent(_0x36299f));
    if (_0x29642f.status !== 0xc8 || !_0x29642f.data) {
      return _0x1f5321("Invalid Facebook token.");
    }
    const _0x309fdb = _0x29642f.data;
    const _0x2dae21 = "\n┌──「 *LUCKY FACEBOOK STALK* \n▢ *🔖Name:* " + (_0x309fdb.full_name || 'Unknown') + "\n▢ *🔖Username:* " + (_0x309fdb.username || 'Unknown') + "\n▢ *👥Followers:* " + (_0x309fdb.followers || "Unknown") + "\n▢ *🫂Following:* " + (_0x309fdb.following || "Unknown") + "\n▢ *📌Bio:* " + (_0x309fdb.biography || "No Bio") + "\n▢ *🔗 External Link:* " + (_0x309fdb.external_url || "No Link") + "\n▢ *🔗 Profile Link:* https://facebook.com/" + (_0x309fdb.username || "unknown") + "\n└────────────";
    await _0x1f5321(_0x2dae21);
  } catch (_0xe9b3f7) {
    console.error(_0xe9b3f7);
    await _0x1f5321("An error occurred.");
  }
});
