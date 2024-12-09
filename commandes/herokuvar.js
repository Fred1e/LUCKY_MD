const {
  zokou
} = require("../framework/zokou");
const s = require("../set");
zokou({
  'nomCom': "deployinfo",
  'categorie': "HEROKU"
}, async (_0x39ad1b, _0x4fc601, _0x380e13) => {
  const {
    repondre: _0x319135,
    superUser: _0x37b1dd
  } = _0x380e13;
  if (!_0x37b1dd) {
    _0x319135("Only the bot creator or bot owner can use this command!");
    return;
  }
  try {
    const _0x47a464 = require("heroku-client");
    const _0x238056 = new _0x47a464({
      'token': s.HEROKU_API_KEY
    });
    let _0x1639e3 = "/apps/" + s.HEROKU_APP_NAME;
    const _0x19de2c = await _0x238056.get(_0x1639e3);
    const _0x5f1e8d = "App *" + _0x19de2c.name + "* was last deployed on *" + _0x19de2c.updated_at + '*.';
    _0x319135(_0x5f1e8d);
  } catch (_0x149c54) {
    _0x319135("Error fetching deployment info: " + _0x149c54.message);
  }
});
zokou({
  'nomCom': "releases",
  'categorie': "HEROKU"
}, async (_0x3d14ac, _0x551b08, _0x2ebebc) => {
  const {
    repondre: _0x49d70f,
    superUser: _0x2b3bcd
  } = _0x2ebebc;
  if (!_0x2b3bcd) {
    _0x49d70f("Only the bot creator or bot owner can use this command!");
    return;
  }
  try {
    const _0x9e3e54 = require("heroku-client");
    const _0xdc8745 = new _0x9e3e54({
      'token': s.HEROKU_API_KEY
    });
    let _0x1e3b90 = "/apps/" + s.HEROKU_APP_NAME;
    const _0x3248f7 = await _0xdc8745.get(_0x1e3b90 + "/releases");
    let _0x118c45 = "App Release History:\n\n";
    _0x3248f7.slice(0, 5).forEach(_0xe8bae5 => {
      _0x118c45 += "- Version: " + _0xe8bae5.version + "\n - Description: " + _0xe8bae5.description + "\n - Created At: " + _0xe8bae5.created_at + "\n\n\n";
    });
    _0x49d70f(_0x118c45);
  } catch (_0x5a676b) {
    _0x49d70f("Error fetching releases: " + _0x5a676b.message);
  }
});
zokou({
  'nomCom': "restart-bot",
  'categorie': "HEROKU"
}, async (_0x1dabf9, _0x26c3e4, _0x15ca61) => {
  const {
    repondre: _0x253694,
    superUser: _0x17e5a2
  } = _0x15ca61;
  if (!_0x17e5a2) {
    _0x253694("Only the bot creator or bot owner can use this command!");
    return;
  }
  try {
    const _0x1aab9a = require("heroku-client");
    const _0x246bad = new _0x1aab9a({
      'token': s.HEROKU_API_KEY
    });
    let _0x48aaae = "/apps/" + s.HEROKU_APP_NAME;
    await _0x246bad["delete"](_0x48aaae + "/dynos");
    _0x253694("The bot is restarting. Please wait a moment...");
  } catch (_0x45cd15) {
    _0x253694("Error while restarting the bot: " + _0x45cd15.message);
  }
});
zokou({
  'nomCom': "deletevar",
  'categorie': "HEROKU"
}, async (_0xd5786b, _0x352d7f, _0x2f415e) => {
  const {
    repondre: _0x334f5e,
    superUser: _0x22945d,
    arg: _0xfed436
  } = _0x2f415e;
  if (!_0x22945d) {
    _0x334f5e("Only the bot creator or bot owner can use this command!");
    return;
  }
  if (!_0xfed436[0]) {
    _0x334f5e("Please specify the variable name to delete. Usage: delvar VARIABLE_NAME");
    return;
  }
  const _0x5c16b4 = _0xfed436[0].trim();
  if (!/^[A-Z_]+$/.test(_0x5c16b4)) {
    _0x334f5e("Variable name must be in capital letters (e.g., API_KEY).");
    return;
  }
  try {
    const _0x3d0312 = require("heroku-client");
    const _0x401549 = new _0x3d0312({
      'token': s.HEROKU_API_KEY
    });
    let _0x575d30 = "/apps/" + s.HEROKU_APP_NAME;
    await _0x401549.patch(_0x575d30 + "/config-vars", {
      'body': {
        [_0x5c16b4]: null
      }
    });
    await _0x334f5e("Heroku variable *" + _0x5c16b4 + "* has been deleted successfully! The bot will now restart.");
    setTimeout(() => {
      _0x334f5e("The bot has restarted due to the change in environment variables.");
    }, 5000);
  } catch (_0x4d1661) {
    _0x334f5e("Error while deleting variable: " + _0x4d1661.message);
  }
});
zokou({
  'nomCom': "addnewvar",
  'categorie': "HEROKU"
}, async (_0xd42398, _0x24a664, _0x28ad93) => {
  const {
    repondre: _0x4eef61,
    superUser: _0x50b07d,
    arg: _0x16d3d3
  } = _0x28ad93;
  if (!_0x50b07d) {
    _0x4eef61("Only the bot creator or bot owner can use this command!");
    return;
  }
  if (!_0x16d3d3[0] || !_0x16d3d3.join('').includes('=')) {
    _0x4eef61("Invalid format. Usage: addvar VARIABLE_NAME=VALUE\nExample: addvar API_KEY=abcdef123456");
    return;
  }
  const _0x36a9f7 = _0x16d3d3.join(" ");
  const _0x42621f = _0x36a9f7.split('=')[0].trim();
  const _0x1c16de = _0x36a9f7.split('=')[1].trim();
  if (!/^[A-Z_]+$/.test(_0x42621f)) {
    _0x4eef61("Variable name must be in capital letters (e.g., API_KEY).");
    return;
  }
  if (!_0x42621f || !_0x1c16de) {
    _0x4eef61("Both variable name and value must be provided.");
    return;
  }
  try {
    const _0x31af13 = require("heroku-client");
    const _0x1008fa = new _0x31af13({
      'token': s.HEROKU_API_KEY
    });
    let _0x1d2f65 = "/apps/" + s.HEROKU_APP_NAME;
    await _0x1008fa.patch(_0x1d2f65 + "/config-vars", {
      'body': {
        [_0x42621f]: _0x1c16de
      }
    });
    await _0x4eef61("Heroku variable *" + _0x42621f + "* has been added successfully! The bot will now restart.");
    setTimeout(() => {
      _0x4eef61("The bot has restarted due to the change in environment variables.");
    }, 5000);
  } catch (_0x17984d) {
    _0x4eef61("Error while adding variable: " + _0x17984d.message);
  }
});
zokou({
  'nomCom': "getnewvar",
  'categorie': "HEROKU"
}, async (_0x45d902, _0x238ac4, _0x269a38) => {
  const {
    ms: _0x543b77,
    repondre: _0x2a77ba,
    superUser: _0x4a3054,
    arg: _0x41b130
  } = _0x269a38;
  if (!_0x4a3054) {
    _0x2a77ba("Only bot creator or bot owner can use this command!");
    return;
  }
  ;
  if (!_0x41b130[0] || !_0x41b130.join('').split('=')) {
    _0x2a77ba("Bad format ; This is the Example of using This command:\nSetvar OWNER_NAME=FrediEzra");
    return;
  }
  ;
  const _0xde3f12 = _0x41b130.join(" ");
  const _0x1954e6 = require("heroku-client");
  const _0x2d26ae = new _0x1954e6({
    'token': s.HEROKU_API_KEY
  });
  let _0x2d0234 = "/apps/" + s.HEROKU_APP_NAME;
  await _0x2d26ae.patch(_0x2d0234 + "/config-vars", {
    'body': {
      [_0xde3f12.split('=')[0]]: _0xde3f12.split('=')[1]
    }
  });
  await _0x2a77ba("That Heroku var is changing,The bot is Rebooting....");
});
zokou({
  'nomCom': "getallvar",
  'categorie': "HEROKU"
}, async (_0x2e8484, _0x1c9c2e, _0x5a7b4e) => {
  const {
    ms: _0x16feb0,
    repondre: _0x368d4d,
    superUser: _0x3f2aea,
    arg: _0x1ca7c5
  } = _0x5a7b4e;
  if (!_0x3f2aea) {
    _0x368d4d("only mods can use this commande");
    return;
  }
  ;
  const _0x58eafd = require("heroku-client");
  const _0x4061b1 = new _0x58eafd({
    'token': s.HEROKU_API_KEY
  });
  let _0x3ec384 = "/apps/" + s.HEROKU_APP_NAME;
  let _0x1cf334 = await _0x4061b1.get(_0x3ec384 + "/config-vars");
  let _0x170cc9 = "*LUCKY-MD HEROKU VARIABLES*\n\n";
  for (vr in _0x1cf334) {
    _0x170cc9 += "⚡ *" + vr + "* " + "= " + _0x1cf334[vr] + "\n";
  }
  _0x368d4d(_0x170cc9);
});
zokou({
  'nomCom': "getvarshr",
  'categorie': "HEROKU"
}, async (_0x51197f, _0x2b5e00, _0x67ef2b) => {
  const {
    ms: _0x2a5c0d,
    repondre: _0x5e1d96,
    superUser: _0x2f229f,
    arg: _0x3f8b58
  } = _0x67ef2b;
  if (!_0x2f229f) {
    _0x5e1d96("Only Mods can use this command");
    return;
  }
  ;
  if (!_0x3f8b58[0]) {
    _0x5e1d96("insert the variable name in capital letter");
    return;
  }
  ;
  try {
    const _0x53e4ca = require("heroku-client");
    const _0xd37bbe = new _0x53e4ca({
      'token': s.HEROKU_API_KEY
    });
    let _0x4296ac = "/apps/" + s.HEROKU_APP_NAME;
    let _0x2e3e44 = await _0xd37bbe.get(_0x4296ac + "/config-vars");
    for (vr in _0x2e3e44) {
      if (_0x3f8b58.join(" ") === vr) {
        return _0x5e1d96(vr + "= " + _0x2e3e44[vr]);
      }
    }
  } catch (_0x234296) {
    _0x5e1d96("Error" + _0x234296);
  }
});
zokou({
  'nomCom': "updates",
  'categorie': "HEROKU"
}, async (_0x3481f8, _0x5a4ea2, _0x15bcc3) => {
  const {
    repondre: _0x1fe04b,
    superUser: _0x40f68d
  } = _0x15bcc3;
  if (!_0x40f68d) {
    _0x1fe04b("Only Mods can use this command");
    return;
  }
  try {
    const _0x1bcdf6 = require("axios");
    const _0x25480e = require("heroku-client");
    const _0x40891d = new _0x25480e({
      'token': s.HEROKU_API_KEY
    });
    const _0x390355 = "/apps/" + s.HEROKU_APP_NAME;
    const _0xf87a8e = await _0x1bcdf6.get("https://api.github.com/repos/Rovic-Pet/Test/commits/main");
    const _0x9110d5 = _0xf87a8e.data.sha;
    const _0xe577bc = await _0x40891d.get(_0x390355 + "/config-vars");
    const _0xb8b94 = _0xe577bc.body.LATEST_COMMIT_SHA;
    if (_0x9110d5 !== _0xb8b94) {
      await _0x40891d.post(_0x390355 + "/builds", {
        'body': {
          'source_blob': {
            'url': "https://api.github.com/repos/Rovic-Pet/Test/tarball/main",
            'version': _0x9110d5
          }
        }
      });
      await _0x40891d.patch(_0x390355 + "/config-vars", {
        'body': {
          'LATEST_COMMIT_SHA': _0x9110d5
        }
      });
      _0x1fe04b("New commit found! Bot is updating from the GitHub repository. Please wait a moment...");
    } else {
      _0x1fe04b("No new commits found. The bot is up-to-date.");
    }
  } catch (_0x266822) {
    _0x1fe04b("Error: " + _0x266822.message);
  }
});
