const {
  exec
} = require("child_process");
const {
  ezra
} = require("../fredi/ezra");
const {
  Sticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  ajouterOuMettreAJourJid,
  mettreAJourAction,
  verifierEtatJid
} = require('../luckydatabase/antilien');
const {
  atbajouterOuMettreAJourJid,
  atbverifierEtatJid
} = require('../luckydatabase/antibot');
const {
  search,
  download
} = require('aptoide-scraper');
const fs = require('fs-extra');
const conf = require("../set");
const {
  default: axios
} = require("axios");
const {
  getBinaryNodeChild,
  getBinaryNodeChildren
} = require("@whiskeysockets/baileys")['default'];
  ezra({
  'nomCom': 'add',
  'categorie': "Group",
  'reaction': '🪄'
}, async (_0x24f18e, _0x4375b2, _0x500bd4) => {
  let {
    repondre: _0x132613,
    verifAdmin: _0x2dac04,
    msgRepondu: _0x5e0fe4,
    infosGroupe: _0x554e14,
    auteurMsgRepondu: _0x10e456,
    verifGroupe: _0x44fbb9,
    auteurMessage: _0x416a0c,
    superUser: _0x1ad6e8,
    idBot: _0x3a1d08,
    arg: _0x3e9fea
  } = _0x500bd4;
  if (!_0x44fbb9) {
    return _0x132613("*This command works in groups only!*");
  }
  if (!_0x1ad6e8) {
    _0x132613("You are too weak to do that");
    return;
    }
    ;
  if (!_0x2dac04) {
    _0x132613("You are not an admin here!");
    return;
  }
  ;
  let _0x1fd727;
  try {
    _0x1fd727 = await _0x4375b2.groupMetadata(_0x24f18e);
  } catch (_0x23156a) {
    return _0x132613("Failed to fetch group metadata.");
  }
  let _0xc8dec2 = _0x1fd727.participants;
  if (!_0x3e9fea[0x0]) {
    return _0x132613("Provide number to be added. Example:\nadd 2557XXXXX801");
  }
  let _0x4cb0cb = _0x3e9fea.join(" ");
  const _0x5abc4d = _0xc8dec2.map(_0xd268e8 => _0xd268e8.id);
  let _0xee4f6b = [];
  let _0x4ae008 = [];
  try {
    const _0x190ed5 = await Promise.all(_0x4cb0cb.split(',').map(_0xd59024 => _0xd59024.replace(/[^0-9]/g, '')).filter(_0x50909e => _0x50909e.length > 0x4 && _0x50909e.length < 0x14).map(async _0x59d2ca => [_0x59d2ca, await _0x4375b2.onWhatsApp(_0x59d2ca + "@s.whatsapp.net")]));
    _0x190ed5.forEach(([_0xd9f32a, _0x2639c9]) => {
      const _0x1a902c = _0xd9f32a + "@s.whatsapp.net";
      if (_0x5abc4d.includes(_0x1a902c)) {
        _0x4ae008.push(_0x1a902c);
      } else if (_0x2639c9[0x0]?.["exists"]) {
        _0xee4f6b.push(_0xd9f32a + "@c.us");
      }
    });
  } catch (_0x13e463) {
    return _0x132613("Error validating phone numbers.");
  }
  for (const _0x4eef69 of _0x4ae008) {
    _0x132613("That user is already in this group!");
  }
  let _0x366035;
  try {
    if (_0xee4f6b.length > 0x0) {
      _0x366035 = await _0x4375b2.query({
        'tag': 'iq',
        'attrs': {
          'type': 'set',
          'xmlns': "w:g2",
          'to': _0x24f18e
        },
        'content': _0xee4f6b.map(_0x2bfc5b => ({
          'tag': "add",
          'attrs': {},
          'content': [{
            'tag': "participant",
            'attrs': {
              'jid': _0x2bfc5b
    }
              }]
        }))
      });
      for (const _0x3c35cc of _0xee4f6b) {
        _0x132613("Successfully added @" + _0x3c35cc.split('@')[0x0]);
      }
    }
  } catch (_0x4e3a9f) {
    return _0x132613("Failed to add user to the group!");
  }
  let _0x3f6faa;
  try {
    _0x3f6faa = await _0x4375b2.profilePictureUrl(_0x24f18e, "image")["catch"](() => "https://files.catbox.moe/xee8ol.jpg");
  } catch (_0x6d1bf4) {
    _0x3f6faa = "https://files.catbox.moe/xee8ol.jpg";
  }
  let _0x4d0c6a = Buffer.alloc(0x0);
  if (_0x3f6faa) {
    try {
      const _0x54d4d5 = await fetch(_0x3f6faa);
      if (_0x54d4d5.ok) {
        _0x4d0c6a = await _0x54d4d5.buffer();
      } else {
        console.error("Failed to fetch profile picture:", _0x54d4d5.statusText);
      }
    } catch (_0x3cebff) {
      console.error("Error fetching profile picture:", _0x3cebff);
    }
  }
  const _0x9b3264 = _0x366035?.["content"]["find"](_0x494271 => _0x494271.tag === "add");
  const _0x267a0b = _0x9b3264?.["content"]['filter'](_0x265691 => _0x265691.attrs.error == 0x193);
  let _0x36611d;
  try {
    _0x36611d = await _0x4375b2.groupInviteCode(_0x24f18e);
  } catch (_0x1031b3) {
    return _0x132613("Failed to generate group invite code.");
  }
  for (const _0x116dc4 of _0x267a0b || []) {
    const _0x4766bc = _0x116dc4.attrs.jid;
    const _0x5488b4 = _0x116dc4.content.find(_0x31f672 => _0x31f672.tag === "add_request");
    const _0x4f92a4 = _0x5488b4.attrs.code;
    const _0x19afe6 = _0x5488b4.attrs.expiration;
    const _0x794f96 = "I cannot add @" + _0x4766bc.split('@')[0x0] + " due to privacy settings, Let me send an invite link instead.";
    await _0x132613(_0x794f96);
    let _0x599fb8 = "You have been invited to join the group " + _0x1fd727.subject + ":\n\nhttps://chat.whatsapp.com/" + _0x36611d + "\n\n*POWERRD BY LUCKY_MD*";
    await _0x4375b2.sendMessage(_0x4766bc, {
      'image': {
        'url': _0x3f6faa
      },
      'caption': _0x599fb8
    }, {
      'quoted': _0x5e0fe4
    });
  }
});

ezra({
  'nomCom': "broadcast",
  'aliases': ['bc', "cast"],
  'reaction': '📑',
  'categorie': 'General'
}, async (_0x323461, _0x4cdb8c, _0x4c87e6) => {
  const {
    ms: _0x54b6b4,
    repondre: _0xb269b7,
    arg: _0x17b399,
    nomAuteurMessage: _0x271224,
    superUser: _0x291ccf
  } = _0x4c87e6;
  let _0x1360fc = _0x17b399.join(" ");
  if (!_0x17b399[0x0]) {
    _0xb269b7("After the command *broadcast*, type your message to be sent to all groups you are in🕯️,,,.");
    return;
  }
  if (!_0x291ccf) {
    _0xb269b7("hey you!! fuck off i can't broadcast your message");
    return;
  }
  let _0x52c320 = await _0x4cdb8c.groupFetchAllParticipating();
  let _0x254221 = Object.entries(_0x52c320).slice(0x0).map(_0x35bfa1 => _0x35bfa1[0x1]);
  let _0x115598 = _0x254221.map(_0x6b0f9 => _0x6b0f9.id);
  await _0xb269b7("*LUCKY_MD is sending this message to all groups you are in*...");
  for (let _0x398282 of _0x115598) {
    let _0x25a35f = "‼️‼️LUCKY_𝐌𝐃 𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓️‼️️‼️\n\n❗*message* : " + _0x1360fc + "\n\n️‼️ *Author*: " + _0x271224;
    await _0x4cdb8c.sendMessage(_0x398282, {
      'image': {
        'url': "https://i.imgur.com/hRP6xPl.jpeg"
      },
      'caption': '' + _0x25a35f
    });
  }
});

ezra({
  'nomCom': "disap-off",
  'categorie': "Group",
  'reaction': '😇'
}, async (_0x1f053f, _0x40fcb7, _0x521ba1) => {
  const {
    ms: _0x4f524c,
    repondre: _0x331c17,
    arg: _0x2634cc,
    verifGroupe: _0x579411,
    nomGroupe: _0x441450,
    infosGroupe: _0x9588f8,
    nomAuteurMessage: _0x28b6f4,
    verifAdmin: _0x256b35,
    superUser: _0x29b8fc
  } = _0x521ba1;
  if (!_0x579411) {
    _0x331c17("This command works in groups only");
    return;
  }
  ;
  if (!_0x256b35) {
    _0x331c17("You are not an admin here!");
    return;
  }
  ;
  await _0x40fcb7.groupToggleEphemeral(_0x1f053f, 0x0);
  _0x331c17("Dissapearing messages successfully turned off!");
});

ezra({
  'nomCom': "disap",
  'categorie': "Group",
  'reaction': '😇'
}, async (_0x541352, _0x3aeb98, _0x44eb36) => {
  const {
    ms: _0x193b28,
    repondre: _0x59b8c1,
    arg: _0x28473d,
    verifGroupe: _0xc3435d,
    nomGroupe: _0x4683a9,
    infosGroupe: _0x5c3552,
    nomAuteurMessage: _0x309bce,
    verifAdmin: _0x2ed7b0,
    superUser: _0x3fd9b9
  } = _0x44eb36;
  if (!_0xc3435d) {
    _0x59b8c1("This command works in groups only");
    return;
  }
  ;
  if (!_0x2ed7b0) {
    _0x59b8c1("You are not an admin here!");
    return;
  }
  ;
  _0x59b8c1("*Do you want to turn on disappearing messages?*\n\nIf yes type _*disap1* for messages to disappear after 1 day._\n_or *disap7* for messages to disappear after 7 days._\n_or *disap90* for messages to disappear after 90 days._\n\n To turn in off, type *disap-off*");
});

ezra({
  'nomCom': "req",
  'categorie': 'Group',
  'reaction': '😇'
}, async (_0x3f37d6, _0x3d6273, _0x16b776) => {
  const {
    ms: _0xb9a750,
    repondre: _0x31754e,
    arg: _0x12666e,
    verifGroupe: _0x28f964,
    nomGroupe: _0x53e2e0,
    infosGroupe: _0x3bff2d,
    nomAuteurMessage: _0x400ed4,
    verifAdmin: _0x24be95,
    superUser: _0x557f97
  } = _0x16b776;
  if (!_0x28f964) {
    _0x31754e("This command works in groups only");
    return;
  }
  ;
  if (!_0x24be95) {
    _0x31754e("You are not an admin here, what will you do if there are pending requests?!");
    return;
  }
  ;
  const _0x47a8dc = await _0x3d6273.groupRequestParticipantsList(_0x3f37d6);
  if (_0x47a8dc.length === 0x0) {
    return _0x31754e("there are no pending join requests.");
  }
  let _0x4143c3 = '';
  _0x47a8dc.forEach((_0x153f0a, _0x52939c) => {
    _0x4143c3 += '+' + _0x153f0a.jid.split('@')[0x0];
    if (_0x52939c < _0x47a8dc.length - 0x1) {
      _0x4143c3 += "\n";
    }
  });
  _0x3d6273.sendMessage(_0x3f37d6, {
    'text': "Pending Participants:- 🕓\n" + _0x4143c3 + "\n\nUse the command approve or reject to approve or reject these join requests."
  });
  _0x31754e(_0x4143c3);
});

ezra({
  'nomCom': 'disap90',
  'categorie': "Group",
  'reaction': '😇'
}, async (_0x58e845, _0x202cf5, _0x2bdac3) => {
  const {
    ms: _0x57db2c,
    repondre: _0x5f3128,
    arg: _0x3d77a8,
    verifGroupe: _0x2c2a4b,
    nomGroupe: _0x257f19,
    infosGroupe: _0x3f3b71,
    nomAuteurMessage: _0x37fb1a,
    verifAdmin: _0x51a02a,
    superUser: _0xcdccad
  } = _0x2bdac3;
  if (!_0x2c2a4b) {
    _0x5f3128("This command works in groups only");
    return;
  }
  ;
  if (!_0x51a02a) {
    _0x5f3128("You are not an admin here!");
    return;
  }
  ;
  await _0x202cf5.groupToggleEphemeral(_0x58e845, 0x76a700);
  _0x58e845("Dissapearing messages successfully turned on for 90 days!");
});

ezra({
  'nomCom': "reject",
  'aliases': ["rejectall", "rej", "reject-all"],
  'categorie': "Group",
  'reaction': '😇'
}, async (_0x1ca2e8, _0x2c301e, _0x483ebc) => {
  const {
    repondre: _0x241d6c,
    verifGroupe: _0x599a8e,
    verifAdmin: _0x377b7b
  } = _0x483ebc;
  if (!_0x599a8e) {
    _0x241d6c("This command works in groups only");
    return;
  }
  if (!_0x377b7b) {
    _0x241d6c("You are not an admin here!");
    return;
  }
  const _0x131a72 = await _0x2c301e.groupRequestParticipantsList(_0x1ca2e8);
  if (_0x131a72.length === 0x0) {
    return _0x241d6c("There are no pending join requests for this group.");
  }
  for (const _0x1d01ca of _0x131a72) {
    const _0x24fec1 = await _0x2c301e.groupRequestParticipantsUpdate(_0x1ca2e8, [_0x1d01ca.jid], "reject");
    console.log(_0x24fec1);
  }
  _0x241d6c("All pending join requests have been rejected.");
});

ezra({
  'nomCom': 'disap7',
  'categorie': "Group",
  'reaction': '😇'
}, async (_0xdb7461, _0x152ba7, _0x3f9021) => {
  const {
    ms: _0x1f5ca5,
    repondre: _0x22ec79,
    arg: _0x9e9021,
    verifGroupe: _0x1828ed,
    nomGroupe: _0x1e981d,
    infosGroupe: _0x21cc83,
    nomAuteurMessage: _0x29176e,
    verifAdmin: _0x533a23,
    superUser: _0x247ddd
  } = _0x3f9021;
  if (!_0x1828ed) {
    _0x22ec79("This command works in groups only");
    return;
  }
  ;
  if (!_0x533a23) {
    _0x22ec79("You are not an admin here!");
    return;
  }
  ;
  await _0x152ba7.groupToggleEphemeral(_0xdb7461, 0x93a80);
  _0xdb7461("Dissapearing messages successfully turned on for 7 days!");
});

ezra({
  'nomCom': "disap1",
  'categorie': "Group",
  'reaction': '🪄'
}, async (_0x5c9d47, _0x445664, _0x4266de) => {
  const {
    ms: _0x5a95d5,
    repondre: _0x569e5a,
    arg: _0x2f6dd1,
    verifGroupe: _0x5ad8b0,
    nomGroupe: _0x3cb0f5,
    infosGroupe: _0x1da057,
    nomAuteurMessage: _0x20e12e,
    verifAdmin: _0x1906b2,
    superUser: _0x2fe79c
  } = _0x4266de;
  if (!_0x5ad8b0) {
    _0x569e5a("This command works in groups only");
    return;
  }
  ;
  if (!_0x1906b2) {
    _0x569e5a("You are not an admin here!");
    return;
  }
  ;
  await _0x445664.groupToggleEphemeral(_0x5c9d47, 0x15180);
  _0x5c9d47("Dissapearing messages successfully turned on for 24 hours");
});

ezra({
  'nomCom': 'approve',
  'aliases': ["approve-all", "accept"],
  'categorie': "Group",
  'reaction': '🔎'
}, async (_0x43946b, _0x2c3517, _0x3f224a) => {
  const {
    repondre: _0x298913,
    verifGroupe: _0x208f8e,
    verifAdmin: _0x43a6a3
  } = _0x3f224a;
  if (!_0x208f8e) {
    _0x298913("This command works in groups only");
    return;
  }
  if (!_0x43a6a3) {
    _0x298913("You are not an admin here!");
    return;
  }
  const _0x2bc3fc = await _0x2c3517.groupRequestParticipantsList(_0x43946b);
  if (_0x2bc3fc.length === 0x0) {
    return _0x298913("There are no pending join requests.");
  }
  for (const _0x5dcd51 of _0x2bc3fc) {
    const _0x9a395b = await _0x2c3517.groupRequestParticipantsUpdate(_0x43946b, [_0x5dcd51.jid], 'approve');
    console.log(_0x9a395b);
  }
  _0x298913("All pending participants have been approved to join by Lucky md.");
});

ezra({
  'nomCom': "vcf",
  'aliases': ["savecontact", "savecontacts"],
  'categorie': "Group",
  'reaction': '♻️'
}, async (_0x1ec21c, _0xbcbdad, _0x341fdd) => {
  const {
    repondre: _0x2e5b52,
    verifGroupe: _0x1214da,
    verifAdmin: _0xb6471,
    ms: _0x48a83b
  } = _0x341fdd;
  const _0x511dab = require('fs');
  if (!_0xb6471) {
    _0x2e5b52("You are not an admin here!");
    return;
  }
  if (!_0x1214da) {
    _0x2e5b52("This command works in groups only");
    return;
  }
  try {
    let _0x38463f = await _0xbcbdad.groupMetadata(_0x1ec21c);
    const _0x267c2d = await _0x38463f.participants;
    let _0x4a6ecd = '';
    for (let _0x269fcd of _0x267c2d) {
      let _0x23a8f8 = _0x269fcd.id.split('@')[0x0];
      let _0x5838c2 = _0x269fcd.name || _0x269fcd.notify || "[LUCKY] +" + _0x23a8f8;
      _0x4a6ecd += "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x5838c2 + "\nTEL;type=CELL;type=VOICE;waid=" + _0x23a8f8 + ':+' + _0x23a8f8 + "\nEND:VCARD\n";
    }
    await _0x2e5b52("A moment, *LUCKY-MD* is compiling " + _0x267c2d.length + " contacts into a vcf...");
    await _0x511dab.writeFileSync("./contacts.vcf", _0x4a6ecd.trim());
    await _0xbcbdad.sendMessage(_0x1ec21c, {
      'document': _0x511dab.readFileSync("./contacts.vcf"),
      'mimetype': "text/vcard",
      'fileName': _0x38463f.subject + '.Vcf',
      'caption': "VCF for " + _0x38463f.subject + "\nTotal Contacts: " + _0x267c2d.length + "\n*KEEP USING LUCKY_MD*"
    }, {
      'ephemeralExpiration': 0x15180,
      'quoted': _0x48a83b
    });
    _0x511dab.unlinkSync('./contacts.vcf');
  } catch (_0x525d8e) {
    console.error("Error while creating or sending VCF:", _0x525d8e.message || _0x525d8e);
    _0x2e5b52("An error occurred while creating or sending the VCF. Please try again.");
  }
});

ezra({
  'nomCom': 'invite',
  'aliases': ["link"],
  'categorie': 'Group',
  'reaction': '🪄'
}, async (_0x5b6e86, _0x75673b, _0x387b7e) => {
  const {
    repondre: _0x89d41d,
    nomGroupe: _0x200b30,
    nomAuteurMessage: _0x3fb091,
    verifGroupe: _0x57ef89
  } = _0x387b7e;
  if (!_0x57ef89) {
    _0x89d41d("*This command works in groups only!*");
    return;
  }
  try {
    const _0x35f332 = await _0x75673b.groupInviteCode(_0x5b6e86);
    const _0x1ccce3 = "https://chat.whatsapp.com/" + _0x35f332;
    const _0x5e291d = "Hello " + _0x3fb091 + ", here is the group link of " + _0x200b30 + ":\n\nClick Here To Join: " + _0x1ccce3;
    _0x89d41d(_0x5e291d);
  } catch (_0x926163) {
    console.error("Error fetching group invite link:", _0x926163.message || _0x926163);
    _0x89d41d("An error occurred while fetching the group invite link. Please try again.");
  }
});

ezra({  
  'nomCom': 'revoke',
  'categorie': 'Group'
}, async (_0x5cf31f, _0x499fc5, _0x27df3d) => {
  const {
    arg: _0x1cbe7c,
    repondre: _0x1e4f60,
    verifGroupe: _0x5201ec,
    verifAdmin: _0x5ad84b
  } = _0x27df3d;
  if (!_0x5ad84b) {
    _0x1e4f60("for admins.");
    return;
  }
  ;
  if (!_0x5201ec) {
    _0x1e4f60("This command is only allowed in groups.");
  }
  ;
  await _0x499fc5.groupRevokeInvite(_0x5cf31f);
  _0x1e4f60("group link revoked.");
});

ezra({
  'nomCom': "antiword",
  'categorie': 'Group',
  'reaction': '🔗'
}, async (_0x22f58b, _0x4939d7, _0x4e7551) => {
  var {
    repondre: _0x2be765,
    arg: _0x95d0ab,
    verifGroupe: _0x4f0817,
    superUser: _0x1f04d1,
    verifAdmin: _0x177ce1
  } = _0x4e7551;
  if (!_0x4f0817) {
    return _0x2be765("*This command is for groups only*");
  }
  if (_0x1f04d1 || _0x177ce1) {
    const _0x547558 = await verifierEtatJid(_0x22f58b);
    try {
      if (!_0x95d0ab || !_0x95d0ab[0x0] || _0x95d0ab === " ") {
        _0x2be765("antiword on to activate the anti-word feature\nantiword off to deactivate the anti-word feature\nantiword action/remove to directly remove the sender without notice\nantiword action/warn to give warnings\nantiword action/delete to remove the word without any sanctions\n\nPlease note that by default, the anti-word feature is set to delete.");
        return;
      }
      ;
      if (_0x95d0ab[0x0] === 'on') {
        if (_0x547558) {
          _0x2be765("the antiword is already activated for this group");
        } else {
          await ajouterOuMettreAJourJid(_0x22f58b, "oui");
          _0x2be765("the antiword is activated successfully");
        }
      } else {
        if (_0x95d0ab[0x0] === "off") {
          if (_0x547558) {
            await ajouterOuMettreAJourJid(_0x22f58b, "non");
            _0x2be765("The antiword has been successfully deactivated");
          } else {
            _0x2be765("antiword is not activated for this group");
          }
        } else {
          if (_0x95d0ab.join('').split('/')[0x0] === 'action') {
            let _0x77788f = _0x95d0ab.join('').split('/')[0x1].toLowerCase();
            if (_0x77788f == 'remove' || _0x77788f == "warn" || _0x77788f == "delete") {
              await mettreAJourAction(_0x22f58b, _0x77788f);
              _0x2be765("The anti-word action has been updated to " + _0x95d0ab.join('').split('/')[0x1]);
            } else {
              _0x2be765("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x2be765("antiword on to activate the anti-word feature\nantiword off to deactivate the anti-word feature\nantiword action/remove to directly remove the word sender without notice\nantiword action/warn to give warnings\nantiword action/delete to remove the word without any sanctions\n\nPlease note that by default, the anti-word feature is set to delete.");
          }
        }
      }
    } catch (_0x22a8b1) {
      _0x2be765(_0x22a8b1);
    }
  } else {
    _0x2be765("You are not entitled to this order");
  }
});

ezra({
  'nomCom': "antilink-all",
  'categorie': "Group",
  'reaction': '🕯️'
}, async (_0x18daac, _0x290184, _0x4bd034) => {
  const {
    repondre: _0x71952,
    arg: _0x4c86b9,
    verifGroupe: _0x28df8c,
    superUser: _0x47db3b,
    verifAdmin: _0x2b18e5
  } = _0x4bd034;
  if (!_0x28df8c) {
    return _0x71952("*This Command works in Groups Only*");
  }
  if (_0x47db3b || _0x2b18e5) {
    const _0x4ffabd = await verifierEtatJid(_0x18daac);
    try {
      if (!_0x4c86b9 || !_0x4c86b9[0x0].trim()) {
        _0x71952("Type `antilink-all on` to activate the antilink-all feature\nor `antilink-all off` to deactivate the antilink-all feature\nThen `antilink-all action/remove` to directly remove the link without notice\nor `antilink-all action/warn` to give warnings\nor `antilink-all action/delete` to remove the link without any sanctions\n\nPlease note that by default, the antilink-all feature is set to delete.");
        return;
      }
      const [_0x145c89, _0x261fa8] = _0x4c86b9.join(" ").split('/');
      if (_0x145c89 === 'on') {
        if (_0x4ffabd) {
          _0x71952("Antilink-all is already activated for this group.");
        } else {
          await ajouterOuMettreAJourJid(_0x18daac, "oui");
          _0x71952("The antilink-all feature has been activated successfully.");
        }
      } else {
        if (_0x145c89 === "off") {
          if (_0x4ffabd) {
            await ajouterOuMettreAJourJid(_0x18daac, "non");
            _0x71952("The antilink-all feature has been successfully deactivated.");
          } else {
            _0x71952("Antilink-all is not activated for this group.");
          }
        } else {
          if (_0x145c89 === 'action') {
            const _0x38775d = _0x261fa8.toLowerCase();
            if (["remove", "warn", "delete"].includes(_0x38775d)) {
              await mettreAJourAction(_0x18daac, _0x38775d);
              _0x71952("The anti-link action has been updated to " + _0x38775d + '.');
            } else {
              _0x71952("The only actions available are `warn`, `remove`, and `delete`.");
            }
          } else {
            _0x71952("Type `antilink-all on` to activate the antilink-all feature\nor `antilink-all off` to deactivate the antilink-all feature\nor `antilink-all action/remove` to directly remove the link without notice\nor `antilink-all action/warn` to give warnings\nor `antilink-all action/delete` to remove the link without any sanctions\n\nPlease note that by default, the antilink-all feature is set to delete.\n\n*KEEP USING LUCKY_MD*");
          }
        }
      }
    } catch (_0x5483c0) {
      _0x71952("Error: " + _0x5483c0.message);
    }
  } else {
    _0x71952("You are not allowed to use this command.");
  }
});

