const { zokou } = require('../framework/zokou');
const { getData } = require('../fredie255/fredi2ezra');
const s = require("../set");

const dbUrl = s.DB;

zokou(
  {
    nomCom: 'kemael',
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
        let mesg = `*💠Ξ𝗟𝗬𝗦𝗜𝗨𝗠𝟮𝟭𝟲𝟮*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
⬕ *🎮Pseudo*: KAROSU🥉
⬕ *👤User*: ${data.e1}
⬕ *🌐Cyber capacité*: ${data.e2}
⬕ *💠Ξcoins*: ${data.e3}💠
⬕ *🌟SP*: ${data.e4}
⬕ *🎮Game Pass*: ${data.e5} *EP*
═══════════
         *◢❮❮❮ 🌐𝗦𝗞𝗜𝗟𝗟𝗦🌐 ❯❯❯❯◣*
 *⬕🌍Exploration🥉*: ${data.e6}    *⚙️Crafting🥉*: ${data.e7}
 *👊🏼Combat🥉*: ${data.e8}       *🛞Conduite🥉*: ${data.e9}

          *◢❮❮❮ 🌐𝗦𝗧𝗔𝗧𝗦🌐 ❯❯❯❯◣*
🙂: ${data.e10}%  ❤️: ${data.e11}% 💠: ${data.e12}% 🫀: ${data.e13}%
═══════════
*🎒𝗜𝗻𝘃𝗲𝗻𝘁𝗮𝗶𝗿𝗲:(7Max)*
▪${data.e14}

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔     *⏧⎔𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗜𝗻 𝗣𝗿𝗼𝗰𝗲𝘀𝘀♻️...*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/4aac7ca1bb98da8c5a3bc.jpg' }, caption: mesg }, { quoted: ms });
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
    case "Kemael":
      colonnesJoueur = {
        user: "e1",
        capacité: "e2",
        ecoins: "e3",
        sp: "e4",
        game_pass: "e5",
        exploration: "e6",
        crafting: "e7",
        combat: "e8",
        conduite: "e9",
        moral: "e10",
        life: "e11",
        voïd: "e12",
        sta: "e13",
        inventaire: "e14",
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
            const query = `UPDATE fredi2ezra SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 1`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredi2ezra
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
    nomCom: 'abdiel',
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
        let mesg = `*💠Ξ𝗟𝗬𝗦𝗜𝗨𝗠𝟮𝟭𝟲𝟮*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
⬕ *🎮Pseudo*: JONES🥉
⬕ *👤User*: ${data.e1}
⬕ *🌐Cyber capacité*: ${data.e2}
⬕ *💠Ξcoins*: ${data.e3}💠
⬕ *🌟SP*: ${data.e4}
⬕ *🎮Game Pass*: ${data.e5} *EP*
═══════════
         *◢❮❮❮ 🌐𝗦𝗞𝗜𝗟𝗟𝗦🌐 ❯❯❯❯◣*
 *⬕🌍Exploration🥉*: ${data.e6}    *⚙️Crafting🥉*: ${data.e7}
 *👊🏼Combat🥉*: ${data.e8}       *🛞Conduite🥉*: ${data.e9}

          *◢❮❮❮ 🌐𝗦𝗧𝗔𝗧𝗦🌐 ❯❯❯❯◣*
🙂: ${data.e10}%  ❤️: ${data.e11}% 💠: ${data.e12}% 🫀: ${data.e13}%
═══════════
*🎒𝗜𝗻𝘃𝗲𝗻𝘁𝗮𝗶𝗿𝗲:(7Max)*
▪${data.e14}

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔     *⏧⎔𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗜𝗻 𝗣𝗿𝗼𝗰𝗲𝘀𝘀♻️...*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/c4fb6d4b7e85a5b02fe32.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
     //   const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
        user: "e1",
        capacité: "e2",
        ecoins: "e3",
        sp: "e4",
        game_pass: "e5",
        exploration: "e6",
        crafting: "e7",
        combat: "e8",
        conduite: "e9",
        moral: "e10",
        life: "e11",
        voïd: "e12",
        sta: "e13",
        inventaire: "e14",
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
            const query = `UPDATE fredi2ezra SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 2`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredi2ezra
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
  });

zokou(
  {
    nomCom: 'goldy',
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
        let mesg = `*💠Ξ𝗟𝗬𝗦𝗜𝗨𝗠𝟮𝟭𝟲𝟮*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
⬕ *🎮Pseudo*: David G. STORM🥉
⬕ *👤User*: ${data.e1}
⬕ *🌐Cyber capacité*: ${data.e2}
⬕ *💠Ξcoins*: ${data.e3}💠
⬕ *🌟SP*: ${data.e4}
⬕ *🎮Game Pass*: ${data.e5} *EP*
═══════════
         *◢❮❮❮ 🌐𝗦𝗞𝗜𝗟𝗟𝗦🌐 ❯❯❯❯◣*
 *⬕🌍Exploration🥉*: ${data.e6}    *⚙️Crafting🥉*: ${data.e7}
 *👊🏼Combat🥉*: ${data.e8}       *🛞Conduite🥉*: ${data.e9}

          *◢❮❮❮ 🌐𝗦𝗧𝗔𝗧𝗦🌐 ❯❯❯❯◣*
🙂: ${data.e10}%  ❤️: ${data.e11}% 💠: ${data.e12}% 🫀: ${data.e13}%
═══════════
*🎒𝗜𝗻𝘃𝗲𝗻𝘁𝗮𝗶𝗿𝗲:(7Max)*
▪${data.e14}

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔     *⏧⎔𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗜𝗻 𝗣𝗿𝗼𝗰𝗲𝘀𝘀♻️...*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/9489041b40152020e3bda.jpg' }, caption: mesg }, { quoted: ms });
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
    case "Goldy":
      colonnesJoueur = {
        user: "e1",
        capacité: "e2",
        ecoins: "e3",
        sp: "e4",
        game_pass: "e5",
        exploration: "e6",
        crafting: "e7",
        combat: "e8",
        conduite: "e9",
        moral: "e10",
        life: "e11",
        voïd: "e12",
        sta: "e13",
        inventaire: "e14",
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
            const query = `UPDATE fredi2ezra SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 3`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredi2ezra
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
    nomCom: 'aether',
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
        let mesg = `*💠Ξ𝗟𝗬𝗦𝗜𝗨𝗠𝟮𝟭𝟲𝟮*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
⬕ *🎮Pseudo*: ÆTHER🥉
⬕ *👤User*: ${data.e1}
⬕ *🌐Cyber capacité*: ${data.e2}
⬕ *💠Ξcoins*: ${data.e3}💠
⬕ *🌟SP*: ${data.e4}
⬕ *🎮Game Pass*: ${data.e5} *EP*
═══════════
         *◢❮❮❮ 🌐𝗦𝗞𝗜𝗟𝗟𝗦🌐 ❯❯❯❯◣*
 *⬕🌍Exploration🥉*: ${data.e6}    *⚙️Crafting🥉*: ${data.e7}
 *👊🏼Combat🥉*: ${data.e8}       *🛞Conduite🥉*: ${data.e9}

          *◢❮❮❮ 🌐𝗦𝗧𝗔𝗧𝗦🌐 ❯❯❯❯◣*
🙂: ${data.e10}%  ❤️: ${data.e11}% 💠: ${data.e12}% 🫀: ${data.e13}%
═══════════
*🎒𝗜𝗻𝘃𝗲𝗻𝘁𝗮𝗶𝗿𝗲:(7Max)*
▪${data.e14}

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔     *⏧⎔𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗜𝗻 𝗣𝗿𝗼𝗰𝗲𝘀𝘀♻️...*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/11c0fdd7da811dc6f5b82.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
     //   const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Aether":
      colonnesJoueur = {
        user: "e1",
        capacité: "e2",
        ecoins: "e3",
        sp: "e4",
        game_pass: "e5",
        exploration: "e6",
        crafting: "e7",
        combat: "e8",
        conduite: "e9",
        moral: "e10",
        life: "e11",
        voïd: "e12",
        sta: "e13",
        inventaire: "e14",
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
            const query = `UPDATE fredi2ezra SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 4`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredi2ezra
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
    nomCom: 'solomoe',
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
        let mesg = `*💠Ξ𝗟𝗬𝗦𝗜𝗨𝗠𝟮𝟭𝟲𝟮*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
⬕ *🎮Pseudo*: Scarlet KING🥉
⬕ *👤User*: ${data.e1}
⬕ *🌐Cyber capacité*: ${data.e2}
⬕ *💠Ξcoins*: ${data.e3}💠
⬕ *🌟SP*: ${data.e4}
⬕ *🎮Game Pass*: ${data.e5} *EP*
═══════════
         *◢❮❮❮ 🌐𝗦𝗞𝗜𝗟𝗟𝗦🌐 ❯❯❯❯◣*
 *⬕🌍Exploration🥉*: ${data.e6}    *⚙️Crafting🥉*: ${data.e7}
 *👊🏼Combat🥉*: ${data.e8}       *🛞Conduite🥉*: ${data.e9}

          *◢❮❮❮ 🌐𝗦𝗧𝗔𝗧𝗦🌐 ❯❯❯❯◣*
🙂: ${data.e10}%  ❤️: ${data.e11}% 💠: ${data.e12}% 🫀: ${data.e13}%
═══════════
*🎒𝗜𝗻𝘃𝗲𝗻𝘁𝗮𝗶𝗿𝗲:(7Max)*
▪${data.e14}

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔     *⏧⎔𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗜𝗻 𝗣𝗿𝗼𝗰𝗲𝘀𝘀♻️...*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/79bacf19ff0818e4b7ad4.jpg' }, caption: mesg }, { quoted: ms });
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
    case "SoloMoe":
      colonnesJoueur = {
        user: "e1",
        capacité: "e2",
        ecoins: "e3",
        sp: "e4",
        game_pass: "e5",
        exploration: "e6",
        crafting: "e7",
        combat: "e8",
        conduite: "e9",
        moral: "e10",
        life: "e11",
        voïd: "e12",
        sta: "e13",
        inventaire: "e14",
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
            const query = `UPDATE fredi2ezra SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 5`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredi2ezra
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

zokou(
  {
    nomCom: 'thanatos',
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
        let mesg = `*💠Ξ𝗟𝗬𝗦𝗜𝗨𝗠𝟮𝟭𝟲𝟮*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
⬕ *🎮Pseudo*: SWAT🥉
⬕ *👤User*: ${data.e1}
⬕ *🌐Cyber capacité*: ${data.e2}
⬕ *💠Ξcoins*: ${data.e3}💠
⬕ *🌟SP*: ${data.e4}
⬕ *🎮Game Pass*: ${data.e5} *EP*
═══════════
         *◢❮❮❮ 🌐𝗦𝗞𝗜𝗟𝗟𝗦🌐 ❯❯❯❯◣*
 *⬕🌍Exploration🥉*: ${data.e6}    *⚙️Crafting🥉*: ${data.e7}
 *👊🏼Combat🥉*: ${data.e8}       *🛞Conduite🥉*: ${data.e9}

          *◢❮❮❮ 🌐𝗦𝗧𝗔𝗧𝗦🌐 ❯❯❯❯◣*
🙂: ${data.e10}%  ❤️: ${data.e11}% 💠: ${data.e12}% 🫀: ${data.e13}%
═══════════
*🎒𝗜𝗻𝘃𝗲𝗻𝘁𝗮𝗶𝗿𝗲:(7Max)*
▪${data.e14}

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔     *⏧⎔𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗜𝗻 𝗣𝗿𝗼𝗰𝗲𝘀𝘀♻️...*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/5fa2936d44020e96bcbd1.jpg' }, caption: mesg }, { quoted: ms });
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
    case "Thanatos":
      colonnesJoueur = {
        user: "e1",
        capacité: "e2",
        ecoins: "e3",
        sp: "e4",
        game_pass: "e5",
        exploration: "e6",
        crafting: "e7",
        combat: "e8",
        conduite: "e9",
        moral: "e10",
        life: "e11",
        voïd: "e12",
        sta: "e13",
        inventaire: "e14",
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
            const query = `UPDATE fredi2ezra SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 6`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredi2ezra
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

zokou(
  {
    nomCom: 'damian',
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
        let mesg = `*💠Ξ𝗟𝗬𝗦𝗜𝗨𝗠𝟮𝟭𝟲𝟮*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
⬕ *🎮Pseudo*: Death MINDER🥉
⬕ *👤User*: ${data.e1}
⬕ *🌐Cyber capacité*: ${data.e2}
⬕ *💠Ξcoins*: ${data.e3}💠
⬕ *🌟SP*: ${data.e4}
⬕ *🎮Game Pass*: ${data.e5} *EP*
═══════════
         *◢❮❮❮ 🌐𝗦𝗞𝗜𝗟𝗟𝗦🌐 ❯❯❯❯◣*
 *⬕🌍Exploration🥉*: ${data.e6}    *⚙️Crafting🥉*: ${data.e7}
 *👊🏼Combat🥉*: ${data.e8}       *🛞Conduite🥉*: ${data.e9}

          *◢❮❮❮ 🌐𝗦𝗧𝗔𝗧𝗦🌐 ❯❯❯❯◣*
🙂: ${data.e10}%  ❤️: ${data.e11}% 💠: ${data.e12}% 🫀: ${data.e13}%
═══════════
*🎒𝗜𝗻𝘃𝗲𝗻𝘁𝗮𝗶𝗿𝗲:(7Max)*
▪${data.e14}

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔     *⏧⎔𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗜𝗻 𝗣𝗿𝗼𝗰𝗲𝘀𝘀♻️...*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/63cd5e5aa16fc17702b35.jpg' }, caption: mesg }, { quoted: ms });
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
    case "Damian":
      colonnesJoueur = {
        user: "e1",
        capacité: "e2",
        ecoins: "e3",
        sp: "e4",
        game_pass: "e5",
        exploration: "e6",
        crafting: "e7",
        combat: "e8",
        conduite: "e9",
        moral: "e10",
        life: "e11",
        voïd: "e12",
        sta: "e13",
        inventaire: "e14",
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
            const query = `UPDATE fredi2ezra SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 7`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredi2ezra
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

zokou(
  {
    nomCom: 'yûblasq',
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
        let mesg = `*💠Ξ𝗟𝗬𝗦𝗜𝗨𝗠𝟮𝟭𝟲𝟮*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
⬕ *🎮Pseudo*: Yû BLASQ🥉
⬕ *👤User*: ${data.e1}
⬕ *🌐Cyber capacité*: ${data.e2}
⬕ *💠Ξcoins*: ${data.e3}💠
⬕ *🌟SP*: ${data.e4}
⬕ *🎮Game Pass*: ${data.e5} *EP*
═══════════
         *◢❮❮❮ 🌐𝗦𝗞𝗜𝗟𝗟𝗦🌐 ❯❯❯❯◣*
 *⬕🌍Exploration🥉*: ${data.e6}    *⚙️Crafting🥉*: ${data.e7}
 *👊🏼Combat🥉*: ${data.e8}       *🛞Conduite🥉*: ${data.e9}

          *◢❮❮❮ 🌐𝗦𝗧𝗔𝗧𝗦🌐 ❯❯❯❯◣*
🙂: ${data.e10}%  ❤️: ${data.e11}% 💠: ${data.e12}% 🫀: ${data.e13}%
═══════════
*🎒𝗜𝗻𝘃𝗲𝗻𝘁𝗮𝗶𝗿𝗲:(7Max)*
▪${data.e14}

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔     *⏧⎔𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗜𝗻 𝗣𝗿𝗼𝗰𝗲𝘀𝘀♻️...*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/f1def400cf130e8d72408.jpg' }, caption: mesg }, { quoted: ms });
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
    case "Yû":
      colonnesJoueur = {
        user: "e1",
        capacité: "e2",
        ecoins: "e3",
        sp: "e4",
        game_pass: "e5",
        exploration: "e6",
        crafting: "e7",
        combat: "e8",
        conduite: "e9",
        moral: "e10",
        life: "e11",
        voïd: "e12",
        sta: "e13",
        inventaire: "e14",
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
            const query = `UPDATE fredi2ezra SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 8`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredi2ezra
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
    nomCom: 'lord',
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
        let mesg = `*💠Ξ𝗟𝗬𝗦𝗜𝗨𝗠𝟮𝟭𝟲𝟮*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
⬕ *🎮Pseudo*: The LOA🥉
⬕ *👤User*: ${data.e1}
⬕ *🌐Cyber capacité*: ${data.e2}
⬕ *💠Ξcoins*: ${data.e3}💠
⬕ *🌟SP*: ${data.e4}
⬕ *🎮Game Pass*: ${data.e5} *EP*
═══════════
         *◢❮❮❮ 🌐𝗦𝗞𝗜𝗟𝗟𝗦🌐 ❯❯❯❯◣*
 *⬕🌍Exploration🥉*: ${data.e6}    *⚙️Crafting🥉*: ${data.e7}
 *👊🏼Combat🥉*: ${data.e8}       *🛞Conduite🥉*: ${data.e9}

          *◢❮❮❮ 🌐𝗦𝗧𝗔𝗧𝗦🌐 ❯❯❯❯◣*
🙂: ${data.e10}%  ❤️: ${data.e11}% 💠: ${data.e12}% 🫀: ${data.e13}%
═══════════
*🎒𝗜𝗻𝘃𝗲𝗻𝘁𝗮𝗶𝗿𝗲:(7Max)*
▪${data.e14}

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔     *⏧⎔𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗜𝗻 𝗣𝗿𝗼𝗰𝗲𝘀𝘀♻️...*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/64887cc915c2ac1c92df1.jpg' }, caption: mesg }, { quoted: ms });
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
    case "Lord":
      colonnesJoueur = {
        user: "e1",
        capacité: "e2",
        ecoins: "e3",
        sp: "e4",
        game_pass: "e5",
        exploration: "e6",
        crafting: "e7",
        combat: "e8",
        conduite: "e9",
        moral: "e10",
        life: "e11",
        voïd: "e12",
        sta: "e13",
        inventaire: "e14",
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
            const query = `UPDATE fredi2ezra SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 9`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredi2ezra
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
    nomCom: 'bads',
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
        let mesg = `*💠Ξ𝗟𝗬𝗦𝗜𝗨𝗠𝟮𝟭𝟲𝟮*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
⬕ *🎮Pseudo*: Ken McBads🥉
⬕ *👤User*: ${data.e1}
⬕ *🌐Cyber capacité*: ${data.e2}
⬕ *💠Ξcoins*: ${data.e3}💠
⬕ *🌟SP*: ${data.e4}
⬕ *🎮Game Pass*: ${data.e5} *EP*
═══════════
         *◢❮❮❮ 🌐𝗦𝗞𝗜𝗟𝗟𝗦🌐 ❯❯❯❯◣*
 *⬕🌍Exploration🥉*: ${data.e6}    *⚙️Crafting🥉*: ${data.e7}
 *👊🏼Combat🥉*: ${data.e8}       *🛞Conduite🥉*: ${data.e9}

          *◢❮❮❮ 🌐𝗦𝗧𝗔𝗧𝗦🌐 ❯❯❯❯◣*
🙂: ${data.e10}%  ❤️: ${data.e11}% 💠: ${data.e12}% 🫀: ${data.e13}%
═══════════
*🎒𝗜𝗻𝘃𝗲𝗻𝘁𝗮𝗶𝗿𝗲:(7Max)*
▪${data.e14}

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔     *⏧⎔𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗜𝗻 𝗣𝗿𝗼𝗰𝗲𝘀𝘀♻️...*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/cdd083779cd742e29d63d.jpg' }, caption: mesg }, { quoted: ms });
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
        user: "e1",
        capacité: "e2",
        ecoins: "e3",
        sp: "e4",
        game_pass: "e5",
        exploration: "e6",
        crafting: "e7",
        combat: "e8",
        conduite: "e9",
        moral: "e10",
        life: "e11",
        voïd: "e12",
        sta: "e13",
        inventaire: "e14",
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
            const query = `UPDATE fredi2ezra SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 10`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredi2ezra
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


zokou(
  {
    nomCom: 'nash',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('11');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*💠Ξ𝗟𝗬𝗦𝗜𝗨𝗠𝟮𝟭𝟲𝟮*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
⬕ *🎮Pseudo*: Tengen🥉
⬕ *👤User*: ${data.e1}
⬕ *🌐Cyber capacité*: ${data.e2}
⬕ *💠Ξcoins*: ${data.e3}💠
⬕ *🌟SP*: ${data.e4}
⬕ *🎮Game Pass*: ${data.e5} *EP*
═══════════
         *◢❮❮❮ 🌐𝗦𝗞𝗜𝗟𝗟𝗦🌐 ❯❯❯❯◣*
 *⬕🌍Exploration🥉*: ${data.e6}    *⚙️Crafting🥉*: ${data.e7}
 *👊🏼Combat🥉*: ${data.e8}       *🛞Conduite🥉*: ${data.e9}

          *◢❮❮❮ 🌐𝗦𝗧𝗔𝗧𝗦🌐 ❯❯❯❯◣*
🙂: ${data.e10}%  ❤️: ${data.e11}% 💠: ${data.e12}% 🫀: ${data.e13}%
═══════════
*🎒𝗜𝗻𝘃𝗲𝗻𝘁𝗮𝗶𝗿𝗲:(7Max)*
▪${data.e14}

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔     *⏧⎔𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗜𝗻 𝗣𝗿𝗼𝗰𝗲𝘀𝘀♻️...*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/b308557f2245f295e2991.jpg' }, caption: mesg }, { quoted: ms });
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
    case "Nash":
      colonnesJoueur = {
        user: "e1",
        capacité: "e2",
        ecoins: "e3",
        sp: "e4",
        game_pass: "e5",
        exploration: "e6",
        crafting: "e7",
        combat: "e8",
        conduite: "e9",
        moral: "e10",
        life: "e11",
        voïd: "e12",
        sta: "e13",
        inventaire: "e14",
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
            const query = `UPDATE fredi2ezra SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 11`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE fredi2ezra
            SET ${colonneObjet} = $1
            WHERE id = 11
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
