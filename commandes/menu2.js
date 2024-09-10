const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
❂━━══❖ _*LUCKY MD*_ ❖══━━❂
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
❂━━━━════❖═══━━━━❂
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
  ╭──━━━━══➻══━━━━✣
  ┃➳ *my owner* : ${s.OWNER_NAME}
  ┃➳ *commander* : ${nomAuteurMessage} 
  ┃➳ *date *: ${date}
  ┃➳ *prefix* : ${s.PREFIXE}
  ┃➳ *worktype* : ${mode} mode
  ┃➳ *plugin* : ${cm.length} 
  ┃➳ *rom* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
  ┃➳ *running on* : ${os.platform()}
  ┃➳ *theme* : *FREDI*
  ╰──━━━━══➻══━━━━✣ ${readmore}
 ▒▓10% 
 ▒▓▓20%    *FREDI*
 ▒▓▓▓30%   *TECH* 
 ▒▓▓▓▓40%   *SIR* 
 ▒▓▓▓▓▓50% 
 ▒▓▓▓▓▓▓60% 
 ▒▓▓▓▓▓▓▓70% 
 ▒▓▓▓▓▓▓▓▓80%
 ▒▓▓▓▓▓▓▓▓▓90% 
 ▒▓▓▓▓▓▓▓▓▓▓100% ${readmore}
 *ALL COMMAND ADDED✔️!* 

 ❂━━━━═════❖════━━━━❂
  ╭──━━━━══➻══━━━━❂
  ┃⦿ _*LUCKY MD 2024*_
  ╰──━━━━══➻══━━━━❂`;
    
let menuMsg = `

❂━━━━═════❖════━━━━❂
 ▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓
 ╭──━━━━══⊷══━━━━➻
 ┃▓ *Lucky Md v7 COMMADS*
 ╰──━━━━══⊷══━━━━➻
 ▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒ ${readmore}
`;

    for (const cat in coms) {
        menuMsg += `╭─━━══❖ _*${cat}*_ ❖══━━━⦿`;
        for (const cmd of coms[cat]) {
            menuMsg += `
┃➻ *${cmd}*`;
        }
        menuMsg += `
╰─━━═════━━⊷⊷➳➻➳
✣━━━━═══•∞•═══━━━━✣
 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 
        ғʀᴇᴅɪᴇ ᴛᴇᴄʜ sɪʀ
❖━━━━═══•∞•═══━━━━❖ \n`
    }

    menuMsg += `  ✣━━═══⦿•∞•❂═══━━━❖
    ┃▓ *powered by Fredie Tech*
    ❖━━═══❂•∞•⦿═══━━━✣

    ▒▒▒▒▒▒▒▒▒▒▒
    ▒▓▓▓▓▓▓▓▓▓▒
    ▒▓▓▒▒▒▒▒▒▒▒
    ▒▓▓▒▒▒▒▒▒▒▒
    ▒▓▓▓▓▓▓▓▓▓▒
    ▒▓▓▒▒▒▒▒▒▒▒
    ▒▓▓▒▒▒▒▒▒▒▒
    ▒▓▓▒▒▒▒▒▒▒▒
    ▒▒▒▒▒▒▒▒▒▒▒

    ▓▓▓▓▓▓▓▓▓▓▓
    ▓▒▒▒▒▒▒▒▓▓▓
    ▓▒▒▓▓▓▓▒▒▓▓
    ▓▒▒▓▓▓▓▓▒▒▓
    ▓▒▒▓▓▓▓▒▒▓▓
    ▓▒▒▓▓▓▒▒▓▓▓
    ▓▒▒▒▒▒▒▓▓▓▓
    ▓▒▒▓▓▓▓▒▒▓▓
    ▓▒▒▓▓▓▓▓▒▒▓
    ▓▓▓▓▓▓▓▓▓▓▓

    ▒▒▒▒▒▒▒▒▒▒▒
    ▒▓▓▓▓▓▓▓▓▓▒
    ▒▓▓▒▒▒▒▒▒▒▒
    ▒▓▓▓▓▓▓▓▓▒▒
    ▒▓▓▒▒▒▒▒▒▒▒
    ▒▓▓▓▓▓▓▓▓▓▒
    ▒▒▒▒▒▒▒▒▒▒▒▒

    ▓▓▓▓▓▓▓▓▓▓▓
    ▓▒▒▒▒▓▓▓▓▓▓
    ▓▒▒▓▓▒▒▓▓▓▓
    ▓▒▒▓▓▓▒▒▓▓▓
    ▓▒▒▓▓▓▓▒▒▓▓
    ▓▒▒▓▓▓▓▓▒▒▓
    ▓▒▒▓▓▓▓▒▒▓▓
    ▓▒▒▒▒▒▒▓▓▓▓
    ▓▓▓▓▓▓▓▓▓▓▓
    
    ▒▒▒▒▒▒▒▒▒▒▒
    ▒▒▒▒▓▓▓▒▒▒▒
    ▒▒▒▒▓▓▓▒▒▒▒   
    ▒▒▒▒▓▓▓▒▒▒▒   
    ▒▒▒▒▓▓▓▒▒▒▒   
    ▒▒▒▒▓▓▓▒▒▒▒
    ▒▒▒▒▓▓▓▒▒▒▒
    ▒▒▒▒▒▒▒▒▒▒▒

    > _®FredieTech info_
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Luckymd*, déveloper Fredie Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Luckymd*, déveloper Fredie Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
