const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


zokou({ nomCom: 'ping',
    desc: 'To check ping',
    Categorie: 'General',
    reaction: '🚀', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    const { start} = new Date().getTime()
    return repondre('_*𝐋𝐮𝐜𝐤𝐲 𝐕𝟓 𝐫𝐞𝐬𝐩𝐨𝐧𝐝 𝐬𝐩𝐞𝐞𝐝 𝐢𝐬*_\n ```' +10980+ '``` *`m/s`*') 
    const { end } = new Date().getTime()
    await zok.sendMessage('*Pong!*\n ```' + (end - start) + '``` *ms*')
  }
)
