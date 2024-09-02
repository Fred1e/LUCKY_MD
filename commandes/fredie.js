const {
  zokou
} = require("../framework/zokou");
const {
  getAllSudoNumbers,
  isSudoTableNotEmpty
} = require("../bdd/sudo");
const conf = require("../set");
zokou({
  'nomCom': "problem",
  'categorie': 'General',
  'reaction': "⚙️"
}, async (_0x1b06c5, _0x54bb8b, _0x2358bf) => {
  const {
    ms: _0x2aecc0,
    mybotpic: _0x43a6e2
  } = _0x2358bf;
  const _0x21b56d = [{
     "*Mr Fredi All Info For Support As And Help*" 
               'nom': "_*Support channel by follow*_" 
               'numero':"https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f" 
               'nom': "_*Join Our WhatsApp group*_" 
               'numero':"https://chat.whatsapp.com/HdrwMccSFIaB5Zi7s9BzN9" 
               'nom': "_*WhatsApp Contact As*_" 
               'numero':"Https://wa.me/255752593977" 
               'nom': "_*WhatsApp Bot Fork And Star*_" 
               'numero':"https://github.com/Fred1e/LUCKY_MD" 
               'nom': "_*Telegram Group*_" 
               'numero':"https://t.me/+u3zlb5y6OfxhOTdk" 
               'nom': "_*Telegram Channel*_" 
               'numero':"https://t.me/FredieTech_BusinessPlace" 
               'nom': "_*Telegram Bot*_" 
               'numero':"Https://t.me/@fredidurry_bot" 
               'nom': "_*Telegram Contact As*_" 
               'numero':"t.me/freditech" 
               'nom': "_*Instagram*_" 
                 'numero':"https://www.instagram.com/fredi.simba.tz" 
               'nom': "_*Facebook*_" 
               'numero':"https://www.facebook.com/profile.php?id=61553209932337&mibextid=ZbWKwL" 
               'nom': "_*YouTube Channel Subscribe For Tutorial*_" 
               'numero':"https://www.youtube.com/@freeonlinetvT1" 
                  "❍━━━━━━━━━━━━━━━❍"
                 "*THANK YOU FOR CHOOSING LUCKY MD*"     
                 }];
  let _0x2d5c7e = "╭──────────❍ Hello👋  *I'm Lucky Md Wa Bot* \nThe Following Info Are For  *LUCKY_MD* Owner, \nYou Can Ask Them Anything Regarding Lucky Bot \nFollow Our Channel For More Tech :https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f \n*KEEP USING LUCKY MD*╰─────────❍ :\n\n";
  for (const _0x14eeec of _0x21b56d) {
    _0x2d5c7e += "❍━━━━━━━━━━━━━━━━❍ \n(●) " + _0x14eeec.nom + " : Connect With + _0x14eeec.numero + "\n";
  }
  var _0x11d31d = _0x43a6e2();
  if (_0x11d31d.match(/\.(mp4|gif)$/i)) {
    try {
      _0x54bb8b.sendMessage(_0x1b06c5, {
        'video': {
          'url': _0x11d31d
        },
        'caption': _0x2d5c7e
      }, {
        'quoted': _0x2aecc0
      });
    } catch (_0x55af9c) {
      console.log("🥵🥵 Menu erreur " + _0x55af9c);
      repondre("🥵🥵 Menu erreur " + _0x55af9c);
    }
  } else {
    if (_0x11d31d.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x54bb8b.sendMessage(_0x1b06c5, {
          'image': {
            'url': _0x11d31d
          },
          'caption': _0x2d5c7e
        }, {
          'quoted': _0x2aecc0
        });
      } catch (_0x39b1ed) {
        console.log("🥵🥵 Menu erreur " + _0x39b1ed);
        repondre("🥵🥵 Menu erreur " + _0x39b1ed);
      }
    } else {
      repondre(_0x11d31d);
      repondre("link error");
    }
  }
});
