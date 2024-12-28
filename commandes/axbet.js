"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "1xbet", reaction: "🎉", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Promo order entered !");
    
    let z = '🎊 Welcome to l\'world of betting with 1xbet ! 🎊\n\n';
    let d = 'Use the promo code *FIXD1* to benefit from exclusive offers and maximize your winnings !\n';
    let encouragement = 'Don't miss this chance, join us now and bet with confidence !\n';
    
    let img = 'https://iili.io/2OjZF4e.jpg';
    
    
    let varmess = z + d + encouragement;
    
    
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
});

console.log("Promo order ready !");
