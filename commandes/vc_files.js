const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 


zokou({ nomCom: 'vcf',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '📄', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_please wait..._*`) 

   


  }
);


zokou({ nomCom: 'getallmembers',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '♻️', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_getting all members_*`) 

   


  }
);



zokou({ nomCom: 'channel',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🐞', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f`) 

   


  }
);


zokou({ nomCom: 'channel1',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🚀', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`top here to join my second channel https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f`) 

   


  }
);


zokou({ nomCom: 'update',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '⚙️', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_lucky md is running on its latest vision_*`) 

   


  }
);


zokou({ nomCom: 'vision',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🔎', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_lucky md v7_*`) 

   


  }
);


  
zokou({ nomCom: 'luckygc',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '♻️', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`top a link to join lucky md group https://chat.whatsapp.com/HdrwMccSFIaB5Zi7s9BzN9`) 

   


  }
)


zokou({ nomCom: 'FredieTech',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🐅', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`╭──────────────➳
                │➳ *Mr Fredi All Info For Support As And Help*
                _*Support channel by follow*_ ;https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f
                _*Join Our WhatsApp group*_ ;https://chat.whatsapp.com/HdrwMccSFIaB5Zi7s9BzN9
                _*WhatsApp Contact As*_ ;Https://wa.me/255752593977 
                _*WhatsApp Bot Fork And Star*_ ;https://github.com/Fred1e/LUCKY_MD
                _*Telegram Group*_ ;https://t.me/+u3zlb5y6OfxhOTdk
                _*Telegram Channel*_ ;https://t.me/FredieTech_BusinessPlace
                _*Telegram Bot*_ ;Https://t.me/@fredidurry_bot
                _*Telegram Contact As*_ ; t.me/freditech 
                _*Instagram*_ ;https://www.instagram.com/fredi.simba.tz
                _*Facebook*_ ;https://www.facebook.com/profile.php?id=61553209932337&mibextid=ZbWKwL
                _*YouTube Channel Subscribe For Tutorial*_ ;https://www.youtube.com/@freeonlinetvT1
                 *THANK YOU FOR CHOOSING LUCKY MD*
                 ╰───────────────➳`) 

   


  }
)
