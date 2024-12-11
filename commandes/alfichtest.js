const { zokou } = require('../framework/zokou');
const { getData } = require('../fredie255/fichetest');
const s = require("../set");

const dbUrl = s.DB;


zokou(
  {
    nomCom: 'testsheet',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('1');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*🔷LUCKY ALL STARS🌟*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Nickname👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Class🏆*: ${data.e3}
◇ *Rank XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *LUCKYcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *LUCK PASS🔸*: ${data.e9}🔸
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *🧠Talent RP(𝗤𝗶): ${data.e10}⛦*                       
 *📊Last Season Note: ${data.e11}⏫*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Defeats❌
*🏆Trophies*: ${data.e14}  *🌟 TOS*: ${data.e15}  *💫Awards*: ${data.e16}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(20 max)*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷LUCKY SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://files.catbox.moe/7irwqn.jpeg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
        //const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
    let colonnesJoueur;
          
          switch (joueur) {
    case "White":
      colonnesJoueur = {
        pseudo: "e1",
        division: "e2",
        classe: "e3",
        rang_exp: "e4",
        golds: "e5",
        neocoins: "e6",
        gift_box: "e7",
        coupons: "e8",
        neopass: "e9",
        talent: "e10",
        note: "e11",
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
      };
        break;
          default:
      console.log("Unrecognized Player Name.");
              repondre(`player: ${joueur} Not recognized`);
              return; 
        }

    let updates = arg.slice(1).join(' ').split(',');

    updates.forEach(update => {
        let [object, signe, valeur] = update.trim().split(' ');

        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

        // Construct and execute the update query for each update
        if (colonneObjet && (signe === '+' || signe === '-' || signe === '=')) {
            const query = `UPDATE fichetest SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 1`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour pour ${object}`);
            await repondre(`Updated Player Data\n👤 *PLAYER*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALUE*: ${signe}${valeur}\n*NEW BALANCE*: ${solde}`);
        } else {
            console.log("Unrecognized object name or invalid sign.");
            repondre(`An error has occurred. Please enter the data correctly.`);
        }
    });
} else {
    console.log("The message does not match the expected format.");
    repondre(`The message format is incorrect.`);
  }
