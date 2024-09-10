"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "tempmail", reaction: "😏", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*LUCKY_MD* Temporary emails,Powered by *FredieTech* \n\n ' + "Click the links below to create unlimited TEMPORARY Emails. Powered by *FredieTech.*\n\n";
    let d = ' 1️⃣ https://tempumail.com\n\n 2️⃣ https://etempmail.com\n\n 3️⃣ https://ghostmail.one\n\n 4️⃣ https://tempmailid.com';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/187cfa2365d88ffe98fec.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
