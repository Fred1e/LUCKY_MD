const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

zokou({ nomCom: "menu", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");
    let coms = {};
    let mode = "public";

    if ((s.MODE).toLowerCase() !== "yes") {
        mode = "private";
    }

    cm.map((com) => {
        if (!coms[com.categorie]) {
            coms[com.categorie] = [];
        }
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `
╭━━━━✧LUCKY-MD✧━━━━❖\n┃❁┌────••••────⊷\n┃❁│• *User :*  " + s.OWNER_NAME + "\n┃❁│• *Prefix :* " + s.PREFIXES + " \n┃❁│• *Commands :* " + _0x5663a1.length + "  \n┃❁│• *Time :* " + _0x515c87 + "\n┃❁│• *Date :* " + _0x1fabd7 + " \n┃❁│• *Mode :* " + _0x2443e9 + "\n┃❁│• *Time Zone :* " + s.TZ + "\n┃❁│• *Total Users :* " + _0x1654b0 + "  \n┃❁│• *Ram :* " + format(os.totalmem() - os.freemem()) + "/" + format(os.totalmem()) + " \n┃❁│• *Uptime :* " + runtime(process.uptime()) + " \n┃❁└────••••────⊷\n╰━━━━✧To-GOD✧━━━━◆ \n\n${readmore}

┊🪄🎄ғʀᴇᴅɪᴇᴛᴇᴄʜ ᴛᴇᴀᴍ ᴡɪsʜ ʏᴏᴜ ᴍᴀʀʀʏ ᴄʜʀɪsᴛᴍᴀs🎄 🪄
`;

    let menuMsg = `𝙻𝚞𝚌𝚔𝚢 𝙼𝚍 𝙲𝚖𝚍`;
    
    for (const cat in coms) {
        menuMsg += `
❁━━〔 *${cat}* 〕━━❁
╭━━══••══━━••⊷
║◆┊ `;
        for (const cmd of coms[cat]) {
            menuMsg += `          
║◆┊ ${s.PREFIXE}  *${cmd}*`;    
        }
        menuMsg += `
║◆┊
╰─━━═••═━━••⊷`;
    }
    
    menuMsg += `
> Made By ғʀᴇᴅɪᴇ ᴛᴇᴄʜ\n`;

    try {
        const senderName = nomAuteurMessage || message.from;  // Use correct variable for sender name
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [senderName],
                externalAdReply: {
                    title: "LUCKY MD",
                    body: "coded by Freddie",
                    thumbnailUrl: "https://files.catbox.moe/7irwqn.jpeg",
                    sourceUrl: "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (error) {
        console.error("Menu error: ", error);
        repondre("🥵🥵 Menu error: " + error);
    }
});
