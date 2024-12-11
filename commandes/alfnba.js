const { zokou } = require('../framework/zokou');
const { getData } = require('../fredie255/nba');
const s = require("../set");

const dbUrl = s.DB;


zokou(
  {
    nomCom: 'western1',
    categorie: 'NBA'
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
        let mesg = `*𝗡𝗕𝗔𝟮𝗞🏀⭕𝗪𝗘𝗦𝗧𝗘𝗥𝗡 𝗖𝗢𝗡𝗙𝗘𝗥𝗘𝗡𝗖𝗘 𝟭🔴*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e1}
*🏀User*: ${data.e2}
*🏀Budget*: ${data.e3}$
*🏀NBACoins⭕*: ${data.e4}⭕
*🏀Trophées*: ${data.e5}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e6}
*🏀User*: ${data.e7}
*🏀Budget*: ${data.e8}$
*🏀NBACoins⭕*: ${data.e9}⭕
*🏀Trophées*: ${data.e10}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e11}
*🏀User*: ${data.e12}
*🏀Budget*: ${data.e13}$
*🏀NBACoins⭕*: ${data.e14}⭕
*🏀Trophées*: ${data.e15}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e16}
*🏀User*: ${data.e17}
*🏀Budget*: ${data.e18}$
*🏀NBACoins⭕*: ${data.e19}⭕
*🏀Trophées*: ${data.e20}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e21}
*🏀User*: ${data.e22}
*🏀Budget*: ${data.e23}$
*🏀NBACoins⭕*: ${data.e24}⭕
*🏀Trophées*: ${data.e25}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e26}
*🏀User*: ${data.e27}
*🏀Budget*: ${data.e28}$
*🏀NBACoins⭕*: ${data.e29}⭕
*🏀Trophées*: ${data.e30}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e31}
*🏀User*: ${data.e32}
*🏀Budget*: ${data.e33}$
*🏀NBACoins⭕*: ${data.e34}⭕
*🏀Trophées*: ${data.e35}🏆


░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                  *𝟮𝗸🏀⭕🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/ca4e89ec3912644614dc5.jpg' }, caption: mesg }, { quoted: ms });
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
    case "Team1":
      colonnesJoueur = {
        team: "e1",
        user: "e2",
        budget: "e3",
        nbacoins: "e4",
        trophees: "e5",
      };
        break;
              
    case "Team2":
      colonnesJoueur = {
        team: "e6",
        user: "e7",
        budget: "e8",
        nbacoins: "e9",
        trophees: "e10",
      };
        break;
              
    case "Team3":
      colonnesJoueur = {
        team: "e11",
        user: "e12",
        budget: "e13",
        nbacoins: "e14",
        trophees: "e15",
      };
        break;
              
    case "Team4":
      colonnesJoueur = {
        team: "e16",
        user: "e17",
        budget: "e18",
        nbacoins: "e19",
        trophees: "e20",
      };
        break;
              
    case "Team5":
      colonnesJoueur = {
        team: "e21",
        user: "e22",
        budget: "e23",
        nbacoins: "e24",
        trophees: "e25",
      };
        break;
              
    case "Team6":
      colonnesJoueur = {
        team: "e26",
        user: "e27",
        budget: "e28",
        nbacoins: "e29",
        trophees: "e30",
      };
        break;
              
    case "Team7":
      colonnesJoueur = {
        team: "e31",
        user: "e32",
        budget: "e33",
        nbacoins: "e34",
        trophees: "e35",
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
            const query = `UPDATE nba SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 1`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE nba
            SET ${colonneObjet} = $1
            WHERE id = 1
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *Team/User*: ${texte}`);
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
    nomCom: 'western2',
    categorie: 'NBA'
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
        let mesg = `*𝗡𝗕𝗔𝟮𝗞🏀⭕𝗪𝗘𝗦𝗧𝗘𝗥𝗡 𝗖𝗢𝗡𝗙𝗘𝗥𝗘𝗡𝗖𝗘 𝟮🔴*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e1}
*🏀User*: ${data.e2}
*🏀Budget*: ${data.e3}$
*🏀NBACoins⭕*: ${data.e4}⭕
*🏀Trophées*: ${data.e5}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e6}
*🏀User*: ${data.e7}
*🏀Budget*: ${data.e8}$
*🏀NBACoins⭕*: ${data.e9}⭕
*🏀Trophées*: ${data.e10}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e11}
*🏀User*: ${data.e12}
*🏀Budget*: ${data.e13}$
*🏀NBACoins⭕*: ${data.e14}⭕
*🏀Trophées*: ${data.e15}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e16}
*🏀User*: ${data.e17}
*🏀Budget*: ${data.e18}$
*🏀NBACoins⭕*: ${data.e19}⭕
*🏀Trophées*: ${data.e20}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e21}
*🏀User*: ${data.e22}
*🏀Budget*: ${data.e23}$
*🏀NBACoins⭕*: ${data.e24}⭕
*🏀Trophées*: ${data.e25}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e26}
*🏀User*: ${data.e27}
*🏀Budget*: ${data.e28}$
*🏀NBACoins⭕*: ${data.e29}⭕
*🏀Trophées*: ${data.e30}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e31}
*🏀User*: ${data.e32}
*🏀Budget*: ${data.e33}$
*🏀NBACoins⭕*: ${data.e34}⭕
*🏀Trophées*: ${data.e35}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e36}
*🏀User*: ${data.e37}
*🏀Budget*: ${data.e38}$
*🏀NBACoins⭕*: ${data.e39}⭕
*🏀Trophées*: ${data.e40}🏆

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                  *𝟮𝗸🏀⭕🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/ca4e89ec3912644614dc5.jpg' }, caption: mesg }, { quoted: ms });
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
    case "Team1":
      colonnesJoueur = {
        team: "e1",
        user: "e2",
        budget: "e3",
        nbacoins: "e4",
        trophees: "e5",
      };
        break;
              
    case "Team2":
      colonnesJoueur = {
        team: "e6",
        user: "e7",
        budget: "e8",
        nbacoins: "e9",
        trophees: "e10",
      };
        break;
              
    case "Team3":
      colonnesJoueur = {
        team: "e11",
        user: "e12",
        budget: "e13",
        nbacoins: "e14",
        trophees: "e15",
      };
        break;
              
    case "Team4":
      colonnesJoueur = {
        team: "e16",
        user: "e17",
        budget: "e18",
        nbacoins: "e19",
        trophees: "e20",
      };
        break;
              
    case "Team5":
      colonnesJoueur = {
        team: "e21",
        user: "e22",
        budget: "e23",
        nbacoins: "e24",
        trophees: "e25",
      };
        break;
              
    case "Team6":
      colonnesJoueur = {
        team: "e26",
        user: "e27",
        budget: "e28",
        nbacoins: "e29",
        trophees: "e30",
      };
        break;
              
    case "Team7":
      colonnesJoueur = {
        team: "e31",
        user: "e32",
        budget: "e33",
        nbacoins: "e34",
        trophees: "e35",
      };
        break;
              
    case "Team8":
      colonnesJoueur = {
        team: "e36",
        user: "e37",
        budget: "e38",
        nbacoins: "e39",
        trophees: "e40",
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
            const query = `UPDATE nba SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 2`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE nba
            SET ${colonneObjet} = $1
            WHERE id = 2
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *Team/User*: ${texte}`);
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
    nomCom: 'eastern1',
    categorie: 'NBA'
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
        let mesg = `*𝗡𝗕𝗔𝟮𝗞🏀⭕𝗘𝗔𝗦𝗧𝗘𝗥𝗡 𝗖𝗢𝗡𝗙𝗘𝗥𝗘𝗡𝗖𝗘 𝟭🔴*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e1}
*🏀User*: ${data.e2}
*🏀Budget*: ${data.e3}$
*🏀NBACoins⭕*: ${data.e4}⭕
*🏀Trophées*: ${data.e5}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e6}
*🏀User*: ${data.e7}
*🏀Budget*: ${data.e8}$
*🏀NBACoins⭕*: ${data.e9}⭕
*🏀Trophées*: ${data.e10}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e11}
*🏀User*: ${data.e12}
*🏀Budget*: ${data.e13}$
*🏀NBACoins⭕*: ${data.e14}⭕
*🏀Trophées*: ${data.e15}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e16}
*🏀User*: ${data.e17}
*🏀Budget*: ${data.e18}$
*🏀NBACoins⭕*: ${data.e19}⭕
*🏀Trophées*: ${data.e20}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e21}
*🏀User*: ${data.e22}
*🏀Budget*: ${data.e23}$
*🏀NBACoins⭕*: ${data.e24}⭕
*🏀Trophées*: ${data.e25}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e26}
*🏀User*: ${data.e27}
*🏀Budget*: ${data.e28}$
*🏀NBACoins⭕*: ${data.e29}⭕
*🏀Trophées*: ${data.e30}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e31}
*🏀User*: ${data.e32}
*🏀Budget*: ${data.e33}$
*🏀NBACoins⭕*: ${data.e34}⭕
*🏀Trophées*: ${data.e35}🏆


░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                  *𝟮𝗸🏀⭕🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/9d779d08b7a1b45cc9eab.jpg' }, caption: mesg }, { quoted: ms });
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
    case "Team1":
      colonnesJoueur = {
        team: "e1",
        user: "e2",
        budget: "e3",
        nbacoins: "e4",
        trophees: "e5",
      };
        break;
              
    case "Team2":
      colonnesJoueur = {
        team: "e6",
        user: "e7",
        budget: "e8",
        nbacoins: "e9",
        trophees: "e10",
      };
        break;
              
    case "Team3":
      colonnesJoueur = {
        team: "e11",
        user: "e12",
        budget: "e13",
        nbacoins: "e14",
        trophees: "e15",
      };
        break;
              
    case "Team4":
      colonnesJoueur = {
        team: "e16",
        user: "e17",
        budget: "e18",
        nbacoins: "e19",
        trophees: "e20",
      };
        break;
              
    case "Team5":
      colonnesJoueur = {
        team: "e21",
        user: "e22",
        budget: "e23",
        nbacoins: "e24",
        trophees: "e25",
      };
        break;
              
    case "Team6":
      colonnesJoueur = {
        team: "e26",
        user: "e27",
        budget: "e28",
        nbacoins: "e29",
        trophees: "e30",
      };
        break;
              
    case "Team7":
      colonnesJoueur = {
        team: "e31",
        user: "e32",
        budget: "e33",
        nbacoins: "e34",
        trophees: "e35",
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
            const query = `UPDATE nba SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 3`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE nba
            SET ${colonneObjet} = $1
            WHERE id = 3
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *Team/User*: ${texte}`);
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
    nomCom: 'eastern2',
    categorie: 'NBA'
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
        let mesg = `*𝗡𝗕𝗔𝟮𝗞🏀⭕𝗘𝗔𝗦𝗧𝗘𝗥𝗡 𝗖𝗢𝗡𝗙𝗘𝗥𝗘𝗡𝗖𝗘 𝟮🔴*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e1}
*🏀User*: ${data.e2}
*🏀Budget*: ${data.e3}$
*🏀NBACoins⭕*: ${data.e4}⭕
*🏀Trophées*: ${data.e5}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e6}
*🏀User*: ${data.e7}
*🏀Budget*: ${data.e8}$
*🏀NBACoins⭕*: ${data.e9}⭕
*🏀Trophées*: ${data.e10}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e11}
*🏀User*: ${data.e12}
*🏀Budget*: ${data.e13}$
*🏀NBACoins⭕*: ${data.e14}⭕
*🏀Trophées*: ${data.e15}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e16}
*🏀User*: ${data.e17}
*🏀Budget*: ${data.e18}$
*🏀NBACoins⭕*: ${data.e19}⭕
*🏀Trophées*: ${data.e20}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e21}
*🏀User*: ${data.e22}
*🏀Budget*: ${data.e23}$
*🏀NBACoins⭕*: ${data.e24}⭕
*🏀Trophées*: ${data.e25}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e26}
*🏀User*: ${data.e27}
*🏀Budget*: ${data.e28}$
*🏀NBACoins⭕*: ${data.e29}⭕
*🏀Trophées*: ${data.e30}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e31}
*🏀User*: ${data.e32}
*🏀Budget*: ${data.e33}$
*🏀NBACoins⭕*: ${data.e34}⭕
*🏀Trophées*: ${data.e35}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏀Team*: ${data.e36}
*🏀User*: ${data.e37}
*🏀Budget*: ${data.e38}$
*🏀NBACoins⭕*: ${data.e39}⭕
*🏀Trophées*: ${data.e40}🏆

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                  *𝟮𝗸🏀⭕🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/9d779d08b7a1b45cc9eab.jpg' }, caption: mesg }, { quoted: ms });
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
    case "Team1":
      colonnesJoueur = {
        team: "e1",
        user: "e2",
        budget: "e3",
        nbacoins: "e4",
        trophees: "e5",
      };
        break;
              
    case "Team2":
      colonnesJoueur = {
        team: "e6",
        user: "e7",
        budget: "e8",
        nbacoins: "e9",
        trophees: "e10",
      };
        break;
              
    case "Team3":
      colonnesJoueur = {
        team: "e11",
        user: "e12",
        budget: "e13",
        nbacoins: "e14",
        trophees: "e15",
      };
        break;
              
    case "Team4":
      colonnesJoueur = {
        team: "e16",
        user: "e17",
        budget: "e18",
        nbacoins: "e19",
        trophees: "e20",
      };
        break;
              
    case "Team5":
      colonnesJoueur = {
        team: "e21",
        user: "e22",
        budget: "e23",
        nbacoins: "e24",
        trophees: "e25",
      };
        break;
              
    case "Team6":
      colonnesJoueur = {
        team: "e26",
        user: "e27",
        budget: "e28",
        nbacoins: "e29",
        trophees: "e30",
      };
        break;
              
    case "Team7":
      colonnesJoueur = {
        team: "e31",
        user: "e32",
        budget: "e33",
        nbacoins: "e34",
        trophees: "e35",
      };
        break;
              
    case "Team8":
      colonnesJoueur = {
        team: "e36",
        user: "e37",
        budget: "e38",
        nbacoins: "e39",
        trophees: "e40",
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
            const query = `UPDATE nba SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 4`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE nba
            SET ${colonneObjet} = $1
            WHERE id = 4
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *Team/User*: ${texte}`);
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
