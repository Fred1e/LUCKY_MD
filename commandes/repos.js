const axios = require("axios");
const moment = require("moment-timezone");
const {
  zokou
} = require(__dirname + "/../framework/zokou");
let dynamicForks = 5000;
const fetchGitHubRepoDetails = async () => {
  try {
    const _0x1c6838 = await axios.get("https://api.github.com/repos/Fred1e/LUCKY_MD");
    const {
      name: _0x4ae93b,
      stargazers_count: _0x27ef27,
      watchers_count: _0x2237c0,
      open_issues_count: _0x5424db,
      forks_count: _0x4c9398,
      owner: _0x38cd9a
    } = _0x1c6838.data;
    dynamicForks += _0x4c9398;
    return {
      'name': _0x4ae93b,
      'stars': _0x27ef27,
      'watchers': _0x2237c0,
      'issues': _0x5424db,
      'forks': dynamicForks,
      'owner': _0x38cd9a.login,
      'url': _0x1c6838.data.html_url
    };
  } catch (_0x5d335a) {
    console.error("Error fetching GitHub repository details:", _0x5d335a);
    return null;
  }
};
const commands = ["git", "repo", "mchuga", "frezra", "ezrafre", "last", "Liverpool", "script", 'cs'];
commands.forEach(_0x30efd7 => {
  zokou({
    'nomCom': _0x30efd7,
    'categorie': "GitHub"
  }, async (_0x3247d3, _0x23108e, _0x3c706d) => {
    let {
      repondre: _0xb6c54d
    } = _0x3c706d;
    const _0xec02f3 = await fetchGitHubRepoDetails();
    if (!_0xec02f3) {
      _0xb6c54d("âŒ Failed to fetch GitHub repository information.");
      return;
    }
    const {
      name: _0x2f3ef9,
      stars: _0x104bd8,
      watchers: _0x517909,
      issues: _0x571494,
      forks: _0x83a01e,
      owner: _0x1b991d,
      url: _0x35610a
    } = _0xec02f3;
    const _0x203945 = moment().tz("Africa/Dodoma").format("DD/MM/YYYY HH:mm:ss");
    const _0x1cd310 = "\n😉 *" + _0x2f3ef9 + " REPO INFO* 😋\n\n👊 *Name:* " + _0x2f3ef9 + "\n🎖️ *Stars:* " + _0x104bd8.toLocaleString() + "\n🥂 *Forks:* " + _0x83a01e.toLocaleString() + "\n👁️ *Watchers:* " + _0x517909.toLocaleString() + "\n‼️ *Open Issues:* " + _0x571494.toLocaleString() + "\n🧑‍💻 *Owner:* " + _0x1b991d + "\n\n⌚ *Fetched on:* " + _0x203945 + "\n\n🔗 *Repo Link:* " + _0x35610a + "\n\n⚒️ Created By *ғʀᴇᴅɪᴇᴢʀᴀ255*\n\nStay using and follow my updates!";
    try {
      await _0x23108e.sendMessage(_0x3247d3, {
        'text': _0x1cd310,
        'contextInfo': {
          'externalAdReply': {
            'title': "🤝 Stay Updated with Fredi Ezra",
            'body': "Tap here for the latest updates!",
            'thumbnailUrl': "https://files.catbox.moe/7irwqn.jpeg",
            'mediaType': 0x1,
            'renderLargerThumbnail': true,
            'mediaUrl': "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
            'sourceUrl': "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f"
          }
        }
      });
    } catch (_0x2ec752) {
      console.error("âŒ Error sending GitHub info:", _0x2ec752);
      _0xb6c54d("âŒ Error sending GitHub info: " + _0x2ec752.message);
    }
  });
});
