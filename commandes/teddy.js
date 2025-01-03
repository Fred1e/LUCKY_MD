const axios = require("axios");
const {zokou} = require("../framework/zokou");
const traduire = require("../framework/traduction");
const {Sticker ,StickerTypes}= require('wa-sticker-formatter');


zokou({
    nomCom: "teddy",    
    categorie: "fun",    
    info: "cute teddy",   
    on: "text" ,
    nomFichier: __filename,
},async(citel,match , zk, commandeOptions) => {
  let isteddy = text ==="teddy"?true : citel.isPublic && match.toLowerCase().includes("teddy") ? true : ""       
      if (isteddy && !teddyM[citel.id]) {
      teddyM[citel.id] =true;
      let teddy = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈']
      const { key } = await citel.reply( `(\\_/)\n( •.•)\n/>🤍`)
      for (let i = 0; i < teddy.length; i++) {
        await sleep(500);
        await citel.reply(`(\\_/)\n( •.•)\n/>${teddy[i]}`, { edit: key })             
      } 
    }

})