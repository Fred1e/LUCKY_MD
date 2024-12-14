const {
  zokou
} = require("../framework/zokou");
const bot-ownersGame = [{
  'bot': "Lucky-Md",
  'owner': 'FrediEzra'
}, {
   'bot': "Fredi-Md",
  'owner': 'FrediEzra'
}, {
  'bot': "Frecyber-Md",
  'owner': 'FrediEzra'
}, {
   'bot': "Fredi-Md-V1",
  'owner': 'FrediEzra'
}, {
   'bot': "Bmw-Md",
  'owner': 'Ibrahim-Adams'
}, {
   'bot': "Bmw-Mxd",
  'owner': 'Ibrahim-Adams'
}, {
   'bot': "Black-Panther-Mxd",
  'owner': 'Ibrahim-Adams'
}, {
  'bot': "Black-Panther-Md",
  'owner': 'Ibrahim-Adams'
}, {
  'bot': "Mac-Md",
  'owner': 'Ibrahim-Adams'
}, {
 'bot': "Zokou-Md",
  'owner': 'Djalega8000'
}, {
   'bot': "Neon-Md",
  'owner': 'Ainz'
}, {
  'bot': "Ovl-Md",
  'owner': 'Ainz'
}, {
   'bot': "Flash-Md",
  'owner': 'France-King'
}, {
  'bot': "Giftedtech-Md",
  'owner': 'Mouricedevs'
}, {
   'bot': "Suhai-Md",
  'owner': 'SuhailTech'
}, {
   'bot': "Keith-Md",
  'owner': 'Keithkeizzah'
}, {
   'bot': "Alpha-Md",
  'owner': 'Keithkeizzah'
}, {
   'bot': "Beltah-Md",
  'owner': 'Beltahtech'
}, {
   'bot': "Barak-Md-V1",
  'owner': 'Baraka-Bega'
}, {
   'bot': "Baraka-Button-Bot",
  'owner': 'Baraka-Bega'
}, {
   'bot': "Baraka-Normal-Bot",
  'owner': 'Baraka-Bega'
}, {
   'bot': "Venocyber-Md",
  'owner': 'Kingjux'
}, {
   'bot': "Dullah-Md",
  'owner': 'Abdallahsalimjuma'
}, {
   'bot': "Scorpion-Md",
  'owner': 'Abdallahsalimjuma'
}, {
   'bot': "Yesser-Md",
  'owner': 'YesserTech'
}, {
   'bot': "Boniphace-Md",
  'owner': 'BoniphaceTec'
}, {
   'bot': "Hans-Md",
  'owner': 'HansTech'
}, {
   'bot': "Timnasa-Md",
  'owner': 'Timoth-Timnasa'
}, {
   'bot': "Hacking-Md",
  'owner': 'thomas'
}, {
   'bot': "Cyberion-Spark-x",
  'owner': 'CarlyTech'
}, {
   'bot': "Andbad-Md",
  'owner': 'Mr-Andbad'
}, {
   'bot': "Leonard-Md",
  'owner': 'LeonardTech'
}, {
   'bot': "Anywa-Md",
  'owner': 'AnywayTech'
}, {
   'bot': "SLG-Md",
  'owner': 'sglTech'
}, {
   'bot': "Ethix-Md",
  'owner': 'EthixTech'
}, {
   'bot': "Joel-Md",
  'owner': 'Mr-Joel'
}, {
   'bot': "Lucky-Md",
  'owner': 'FrediEzra'
}, {
zokou({
  'nomCom': "guessowner",
  'categorie': "Games"
}, async (_0x4d7648, _0x864b53, _0x44ebdc) => {
  const {
    ms: _0x18517b,
    repondre: _0x474575,
    prefixe: _0x134a54
  } = _0x44ebdc;
  const _0x4744fb = bot-ownersGame[Math.floor(Math.random() * bot-ownersGame.length)];
  await _0x864b53.sendMessage(_0x4d7648, {
    'text': "👤 Guess the owner of this bot: " + _0x4744fb.country + "\n\nYou have 30 seconds to guess!"
  }, {
    'quoted': _0x18517b
  });
  const _0x1acc69 = async (_0x37e5cf, _0xbf3a82, _0x3e1079) => {
    return _0x37e5cf.toLowerCase() === _0x4744fb.capital.toLowerCase() ? (await _0x864b53.sendMessage(_0x4d7648, {
      'text': "✅ Correct! The owner is " + _0x4744fb.owner + '.'
    }, {
      'quoted': _0xbf3a82
    }), true) : _0x3e1079 === 0x1 ? (await _0x864b53.sendMessage(_0x4d7648, {
      'text': "❌ Wrong answer! You have one more try."
    }, {
      'quoted': _0xbf3a82
    }), false) : (await _0x864b53.sendMessage(_0x4d7648, {
      'text': "⏳ Time's up! The correct answer was: " + _0x4744fb.owner
    }, {
      'quoted': _0xbf3a82
    }), true);
  };
  const _0x594193 = _0x5bdfda => new Promise(_0x2eb2d6 => setTimeout(_0x2eb2d6, _0x5bdfda));
  await _0x594193(0x2710);
  const _0x357047 = {
    'text': 'exampleUserResponse',
    'message': _0x18517b
  };
  if (!(await _0x1acc69('exampleUserResponse', _0x357047.message, 0x1))) {
    await _0x594193(0x3e8);
    await _0x864b53.sendMessage(_0x4d7648, {
      'text': "You now have 10 seconds to make another guess!"
    }, {
      'quoted': _0x18517b
    });
    await _0x594193(0x2710);
    const _0x3ba42a = {
      'text': "exampleUserResponse",
      'message': _0x18517b
    };
    await _0x1acc69("exampleUserResponse", _0x3ba42a.message, 0x2);
  } else {
    await _0x864b53.sendMessage(_0x4d7648, {
      'text': "Try, you might get this!"
    }, {
      'quoted': _0x18517b
    });
  }
});