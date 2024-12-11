const { zokou } = require('../framework/zokou');
const { getData } = require('../fredie255/fredcentral');
const s = require("../set");

const dbUrl = s.DB;


/*zokou(
  {
    nomCom: 'centralabdiel👤',
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
        let mesg = `◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸 
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *Points de talent: ${data.e10}⭐* 
*✅Clean games*:  ${data.e18}  *❌Mauvais PA:* ${data.e19}                        
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/adcc175fdbbb640b47bdc.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
       // const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Abdiel":
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
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
        Clean_games: "e18",
        Mauvais_pa: "e19",
        Close_combat: "e20",
        Attaques: "e21",
        globes: "e22"
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE fredcentral SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 1`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredcentral
            SET ${colonneObjet} = $1
            WHERE id = 1
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });


zokou(
  {
    nomCom: 'centralcovid👤',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('2');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸 
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *Points de talent: ${data.e10}⭐* 
*✅Clean games*:  ${data.e18}  *❌Mauvais PA:* ${data.e19}                        
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/2d6e0cb68518359cd81e7.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
       // const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Covid":
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
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
        Clean_games: "e18",
        Mauvais_pa: "e19",
        Close_combat: "e20",
        Attaques: "e21",
        globes: "e22"
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE fredcentral SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 2`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredcentral
            SET ${colonneObjet} = $1
            WHERE id = 2
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });*/


zokou(
  {
    nomCom: 'centralyuan👤',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('3');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸 
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *Points de talent: ${data.e10}⭐* 
*✅Clean games*:  ${data.e18}  *❌Mauvais PA:* ${data.e19}                        
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/a8c59126191a188b428b6.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
       // const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Yuan":
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
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
        Clean_games: "e18",
        Mauvais_pa: "e19",
        Close_combat: "e20",
        Attaques: "e21",
        globes: "e22"
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE fredcentral SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 3`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredcentral
            SET ${colonneObjet} = $1
            WHERE id = 3
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });

zokou(
  {
    nomCom: 'centralmakima👤',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('8');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸 
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *Points de talent: ${data.e10}⭐* 
*✅Clean games*:  ${data.e18}  *❌Mauvais PA:* ${data.e19}                        
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/fdd73d041d1cd05d82aa2.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
       // const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Makima":
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
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
        Clean_games: "e18",
        Mauvais_pa: "e19",
        Close_combat: "e20",
        Attaques: "e21",
        globes: "e22"
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE fredcentral SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 8`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredcentral
            SET ${colonneObjet} = $1
            WHERE id = 8
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });

zokou(
  {
    nomCom: 'centralobito👤',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('9');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸 
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *Points de talent: ${data.e10}⭐* 
*✅Clean games*:  ${data.e18}  *❌Mauvais PA:* ${data.e19}                        
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/337004ee5ae1b2e337c5d.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
       // const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Obito":
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
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
        Clean_games: "e18",
        Mauvais_pa: "e19",
        Close_combat: "e20",
        Attaques: "e21",
        globes: "e22"
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE fredcentral SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 9`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredcentral
            SET ${colonneObjet} = $1
            WHERE id = 9
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });

zokou(
  {
    nomCom: 'centralrudeus👤',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('10');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸 
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *Points de talent: ${data.e10}⭐* 
*✅Clean games*:  ${data.e18}  *❌Mauvais PA:* ${data.e19}                        
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/83f08871e4ca1f691b697.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
       // const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Rudeus":
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
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
        Clean_games: "e18",
        Mauvais_pa: "e19",
        Close_combat: "e20",
        Attaques: "e21",
        globes: "e22"
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE fredcentral SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 10`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredcentral
            SET ${colonneObjet} = $1
            WHERE id = 10
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });

/*zokou(
  {
    nomCom: 'centralbads👤',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('3');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸 
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *Points de talent: ${data.e10}⭐* 
*✅Clean games*:  ${data.e18}  *❌Mauvais PA:* ${data.e19}                        
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/ba6008a4f780ee5b470bd.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
       // const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Bads":
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
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
        Clean_games: "e18",
        Mauvais_pa: "e19",
        Close_combat: "e20",
        Attaques: "e21",
        globes: "e22"
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE fredcentral SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 3`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredcentral
            SET ${colonneObjet} = $1
            WHERE id = 3
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });
*/

zokou(
  {
    nomCom: 'centralirito👤',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('4');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸 
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *Points de talent: ${data.e10}⭐* 
*✅Clean games*:  ${data.e18}  *❌Mauvais PA:* ${data.e19}                        
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/76b7ee244a55b4450447e.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
       // const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Irito":
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
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
        Clean_games: "e18",
        Mauvais_pa: "e19",
        Close_combat: "e20",
        Attaques: "e21",
        globes: "e22"
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE fredcentral SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 4`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredcentral
            SET ${colonneObjet} = $1
            WHERE id = 4
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });

zokou(
  {
    nomCom: 'centralhakuji👤',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('5');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸 
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *Points de talent: ${data.e10}⭐* 
*✅Clean games*:  ${data.e18}  *❌Mauvais PA:* ${data.e19}                        
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/63ccec4a92ecc2839f6c2.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
       // const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Hakuji":
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
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
        Clean_games: "e18",
        Mauvais_pa: "e19",
        Close_combat: "e20",
        Attaques: "e21",
        globes: "e22"
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE fredcentral SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 5`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredcentral
            SET ${colonneObjet} = $1
            WHERE id = 5
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });

/*
zokou(
  {
    nomCom: 'centralyuki👤',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('6');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸 
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *Points de talent: ${data.e10}⭐* 
*✅Clean games*:  ${data.e18}  *❌Mauvais PA:* ${data.e19}                        
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/2272e17d85e096f136451.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
      //  const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Yuki":
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
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
        Clean_games: "e18",
        Mauvais_pa: "e19",
        Close_combat: "e20",
        Attaques: "e21",
        globes: "e22"
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE fredcentral SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 6`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredcentral
            SET ${colonneObjet} = $1
            WHERE id = 6
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });
*/

zokou(
  {
    nomCom: 'centralhazlay👤',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('7');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸 
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *Points de talent: ${data.e10}⭐* 
*✅Clean games*:  ${data.e18}  *❌Mauvais PA:* ${data.e19}                        
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/a667b7fab7a455e1b74f9.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
       // const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Hazlay":
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
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
        Clean_games: "e18",
        Mauvais_pa: "e19",
        Close_combat: "e20",
        Attaques: "e21",
        globes: "e22"
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE fredcentral SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 7`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredcentral
            SET ${colonneObjet} = $1
            WHERE id = 7
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });
