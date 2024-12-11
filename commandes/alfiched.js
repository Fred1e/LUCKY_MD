const { zokou } = require('../framework/zokou');
const { getData1 } = require('../fredie255/alfred');
const { getData2 } = require('../fredie255/alfred');
const { getData3 } = require('../fredie255/alfred');
const { getData4 } = require('../fredie255/alfred');
const { getData5 } = require('../fredie255/alfred');
const { getData6 } = require('../fredie255/alfred');
const { getData7 } = require('../fredie255/alfred');
const { getData8 } = require('../fredie255/alfred');
const { getData9 } = require('../fredie255/alfred');
const { getData10 } = require('../fredie255/alfred');
const { getData11 } = require('../fredie255/alfred');
const { getData12 } = require('../fredie255/alfred');

zokou(
  {
    nomCom: 'north1',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData1();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `.*𝗡𝗢𝗥𝗧𝗛 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🐺🔴*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Lily KÏNGS🇨🇬
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟*: ${data.r5}🎟
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r37}/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9} *🌟TOS*: ${data.r10} *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Damian KÏNGS🇨🇬
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟*: ${data.r17}🎟
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r38}/5
*Records*: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
*🏆Trophées*: ${data.r21} *🌟TOS*: ${data.r22} *💫Awards*: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: 
◇ *Rang XP🔰*: Joueur Classé🎮
◇ *Golds🧭*: 50.000🧭
◇ *NEOcoins🔹*: 0🔷
◇ *Gift Box🎁*: 0🎁
◇ *Coupons🎟*: 0🎟
◇ *NEO PASS🔸*: 0🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: 0 Victoires✅/ 0 Défaites❌
*🏆Trophées*: 0  *🌟TOS*: 0  *💫Awards*: 0
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
         *🔷𝗡Ξ𝗢24🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/UP1ubll.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Lily":
      colonnesJoueur = {
        rang_xp: "r1",
        golds: "r2",
        neocoins: "r3",
        gift_box: "r4",
        coupons: "r5",
        neo_pass: "r6",
        victoires: "r7",
        defaites: "r8",
        trophees: "r9",
        tos: "r10",
        awards: "r11",
        cards: "r12",
        note: "r37",
      };
      break;
    case "Damian":
      colonnesJoueur = {
        rang_xp: "r13",
        golds: "r14",
        neocoins: "r15",
        gift_box: "r16",
        coupons: "r17",
        neo_pass: "r18",
        victoires: "r19",
        defaites: "r20",
        trophees: "r21",
        tos: "r22",
        awards: "r23",
        cards: "r24",
        note: "r38",
      };
      break;
    /*case "":
      colonnesJoueur = {
        rang_xp: "r25",
        golds: "r26",
        neocoins: "r27",
        gift_box: "r28",
        coupons: "r29",
        neo_pass: "r30",
        victoires: "r31",
        defaites: "r32",
        trophees: "r33",
        tos: "r34",
        awards: "r35",
        cards: "r36",
        note: "r39",
      };
      break;*/
    default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE alfred SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 1`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfred
            SET ${colonneObjet} = $1
            WHERE id = 1
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP/NOTE*: ${texte}`);
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
    nomCom: 'north2',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData2();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.*𝗡𝗢𝗥𝗧𝗛 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🐺🔴*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Lord A. KÏNGS🇹🇬
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟*: ${data.r5}🎟
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r37}/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9} *🌟TOS*: ${data.r10} *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Ainz OG KÏNGS🇧🇫
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟*: ${data.r17}🎟
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r38}/5
*Records*: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
*🏆Trophées*: ${data.r21} *🌟TOS*: ${data.r22} *💫Awards*: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Seijin YUJI🇸🇳
◇ *Rang XP🔰*: ${data.r25}
◇ *Golds🧭*: ${data.r26}🧭
◇ *NEOcoins🔹*: ${data.r27}🔷
◇ *Gift Box🎁*: ${data.r28}🎁
◇ *Coupons🎟*: ${data.r29}🎟
◇ *NEO PASS🔸*: ${data.r30}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r39}/5
*Records*: ${data.r31} Victoires✅/ ${data.r32} Défaites❌
*🏆Trophées*: ${data.r33} *🌟TOS*: ${data.r34} *💫Awards*: ${data.r35}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r36}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
         *🔷𝗡Ξ𝗢24🏆🔝*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/UP1ubll.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
        rang_xp: "r1",
        golds: "r2",
        neocoins: "r3",
        gift_box: "r4",
        coupons: "r5",
        neo_pass: "r6",
        victoires: "r7",
        defaites: "r8",
        trophees: "r9",
        tos: "r10",
        awards: "r11",
        cards: "r12",
        note: "r37",
      };
      break;
    case "Ainz":
      colonnesJoueur = {
        rang_xp: "r13",
        golds: "r14",
        neocoins: "r15",
        gift_box: "r16",
        coupons: "r17",
        neo_pass: "r18",
        victoires: "r19",
        defaites: "r20",
        trophees: "r21",
        tos: "r22",
        awards: "r23",
        cards: "r24",
        note: "r38",
      };
      break;
    case "Seijin":
      colonnesJoueur = {
        rang_xp: "r25",
        golds: "r26",
        neocoins: "r27",
        gift_box: "r28",
        coupons: "r29",
        neo_pass: "r30",
        victoires: "r31",
        defaites: "r32",
        trophees: "r33",
        tos: "r34",
        awards: "r35",
        cards: "r36",
        note: "r39",
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
            const query = `UPDATE alfred SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 2`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfred
            SET ${colonneObjet} = $1
            WHERE id = 2
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP/NOTE*: ${texte}`);
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
    nomCom: 'north3',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData3();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.*𝗡𝗢𝗥𝗧𝗛 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🐺🔴*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Thanatos Gold King🇧🇫
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟️*: ${data.r5}🎟️
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r37}/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9} *🌟TOS*: ${data.r10} *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Adorieru🇹🇩
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟️*: ${data.r17}🎟️
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r38}/5
*Records*: ${data.r19} Victoires✅/ ${data.r20}  Défaites❌
*🏆Trophées*: ${data.r21} *🌟TOS*: ${data.r22} *💫Awards*: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Aïna STAR🇨🇬
◇ *Rang XP🔰*: ${data.r25}
◇ *Golds🧭*: ${data.r26}🧭
◇ *NEOcoins🔹*: ${data.r27}🔷
◇ *Gift Box🎁*: ${data.r28}🎁
◇ *Coupons🎟*: ${data.r29}🎟
◇ *NEO PASS🔸*: ${data.r30}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r39}/5
*Records*: ${data.r31} Victoires✅/ ${data.r32} Défaites❌
*🏆Trophées*: ${data.r33} *🌟TOS*: ${data.r34} *💫Awards*: ${data.r35}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r36}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
 *🔷𝗡Ξ𝗢24🏆🔝*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/UP1ubll.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
                rang_xp: "r1",
                golds: "r2",
                neocoins: "r3",
                gift_box: "r4",
                coupons: "r5",
                neo_pass: "r6",
                victoires: "r7",
                defaites: "r8",
                trophees: "r9",
                tos: "r10",
                awards: "r11",
                cards: "r12",
                note: "r37",
              };
              break;
            case "Adorieru":
              colonnesJoueur = {
                rang_xp: "r13",
                golds: "r14",
                neocoins: "r15",
                gift_box: "r16",
                coupons: "r17",
                neo_pass: "r18",
                victoires: "r19",
                defaites: "r20",
                trophees: "r21",
                tos: "r22",
                awards: "r23",
                cards: "r24",
                note: "r38",
              };
              break;
           case "Aïna":
      colonnesJoueur = {
        rang_xp: "r25",
        golds: "r26",
        neocoins: "r27",
        gift_box: "r28",
        coupons: "r29",
        neo_pass: "r30",
        victoires: "r31",
        defaites: "r32",
        trophees: "r33",
        tos: "r34",
        awards: "r35",
        cards: "r36",
        note: "r39",
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
            const query = `UPDATE alfred SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 3`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfred
            SET ${colonneObjet} = $1
            WHERE id = 3
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP/NOTE*: ${texte}`);
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
    nomCom: 'east1',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData4();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.*𝗘𝗔𝗦𝗧 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🦅🟢*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Atsushi KÏNGS🇨🇲 
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟️*: ${data.r5}🎟️
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r37}/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9} *🌟TOS*: ${data.r10} *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: White KÏNGS🇨🇮 
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟️*: ${data.r17}🎟️
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r38}/5
*Records*: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
*🏆Trophées*: ${data.r21} *🌟TOS*: ${data.r22} *💫Awards*: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Kemael🇨🇮
◇ *Rang XP🔰*: ${data.r25}
◇ *Golds🧭*: ${data.r26}🧭
◇ *NEOcoins🔹*: ${data.r27}🔷
◇ *Gift Box🎁*: ${data.r28}🎁
◇ *Coupons🎟️*: ${data.r29}🎟️
◇ *NEO PASS🔸*: ${data.r30}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r39}/5
*Records*: ${data.r31} Victoires✅/ ${data.r32} Défaites❌
*🏆Trophées*: ${data.r33} *🌟TOS*: ${data.r34} *💫Awards*: ${data.r35}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r36}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
   *🔷𝗡Ξ𝗢24🏆🔝*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/EashJkj.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
          case "Atsushi":
      colonnesJoueur = {
        rang_xp: "r1",
        golds: "r2",
        neocoins: "r3",
        gift_box: "r4",
        coupons: "r5",
        neo_pass: "r6",
        victoires: "r7",
        defaites: "r8",
        trophees: "r9",
        tos: "r10",
        awards: "r11",
        cards: "r12",
        note: "r37",
      };
      break;
    case "White":
      colonnesJoueur = {
        rang_xp: "r13",
        golds: "r14",
        neocoins: "r15",
        gift_box: "r16",
        coupons: "r17",
        neo_pass: "r18",
        victoires: "r19",
        defaites: "r20",
        trophees: "r21",
        tos: "r22",
        awards: "r23",
        cards: "r24",
        note: "r38",
      };
      break;
    case "Kemael":
      colonnesJoueur = {
        rang_xp: "r25",
        golds: "r26",
        neocoins: "r27",
        gift_box: "r28",
        coupons: "r29",
        neo_pass: "r30",
        victoires: "r31",
        defaites: "r32",
        trophees: "r33",
        tos: "r34",
        awards: "r35",
        cards: "r36",
        note: "r39",
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
            const query = `UPDATE alfred SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 4`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE luckymd
            SET ${colonneObjet} = $1
            WHERE id = 4
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP/NOTE*: ${texte}`);
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
    nomCom: 'east2',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData5();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.*𝗘𝗔𝗦𝗧 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🦅🟢*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Hinata Hyuga🇨🇮
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟️*: ${data.r5}🎟️
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r37}/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9} *🌟TOS*: ${data.r10} *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Goldy Shogun🇹🇬
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟️*: ${data.r17}🎟️
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r38}/5
*Records*: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
*🏆Trophées*: ${data.r21} *🌟TOS*: ${data.r22} *💫Awards*: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Utsune Infinity🇨🇲
◇ *Rang XP🔰*: ${data.r25}
◇ *Golds🧭*: ${data.r26}🧭
◇ *NEOcoins🔹*: ${data.r27}🔷
◇ *Gift Box🎁*: ${data.r28}🎁
◇ *Coupons🎟️*: ${data.r29}🎟️
◇ *NEO PASS🔸*: ${data.r30}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r39}/5
*Records*: ${data.r31} Victoires✅/ ${data.r32} Défaites❌
*🏆Trophées*: ${data.r33} *🌟TOS*: ${data.r34} *💫Awards*: ${data.r35}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r36}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
        *🔷𝗡Ξ𝗢24🏆🔝*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/EashJkj.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Hinata":
      colonnesJoueur = {
        rang_xp: "r1",
        golds: "r2",
        neocoins: "r3",
        gift_box: "r4",
        coupons: "r5",
        neo_pass: "r6",
        victoires: "r7",
        defaites: "r8",
        trophees: "r9",
        tos: "r10",
        awards: "r11",
        cards: "r12",
        note: "r37",
      };
      break;
    case "Goldy":
      colonnesJoueur = {
        rang_xp: "r13",
        golds: "r14",
        neocoins: "r15",
        gift_box: "r16",
        coupons: "r17",
        neo_pass: "r18",
        victoires: "r19",
        defaites: "r20",
        trophees: "r21",
        tos: "r22",
        awards: "r23",
        cards: "r24",
        note: "r38",
      };
      break;
    case "Utsune":
      colonnesJoueur = {
        rang_xp: "r25",
        golds: "r26",
        neocoins: "r27",
        gift_box: "r28",
        coupons: "r29",
        neo_pass: "r30",
        victoires: "r31",
        defaites: "r32",
        trophees: "r33",
        tos: "r34",
        awards: "r35",
        cards: "r36",
        note: "r39",
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
            const query = `UPDATE alfred SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 5`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfred
            SET ${colonneObjet} = $1
            WHERE id = 5
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP/NOTE*: ${texte}`);
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
    nomCom: 'east3',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData6();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.*𝗘𝗔𝗦𝗧 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🦅🟢*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Adam GENESIS🇨🇮
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟️*: ${data.r5}🎟️
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r37}/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9} *🌟TOS*: ${data.r10} *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Altheos AETHERIA🇨🇮
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟️*: ${data.r17}🎟️
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r38}/5
*Records*: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
*🏆Trophées*: ${data.r21} *🌟TOS*: ${data.r22} *💫Awards*: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: ZEPHYR🇨🇮
◇ *Rang XP🔰*: ${data.r25}
◇ *Golds🧭*: ${data.r26}🧭
◇ *NEOcoins🔹*: ${data.r27}🔷
◇ *Gift Box🎁*: ${data.r28}🎁
◇ *Coupons🎟️*: ${data.r29}🎟️
◇ *NEO PASS🔸*: ${data.r30}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r39}/5
*Records*: ${data.r31} Victoires✅/ ${data.r32} Défaites❌
*🏆Trophées*: ${data.r33} *🌟TOS*: ${data.r34} *💫Awards*: ${data.r35}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r36} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
        *🔷𝗡Ξ𝗢24🏆🔝*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/EashJkj.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Adam":
      colonnesJoueur = {
        rang_xp: "r1",
        golds: "r2",
        neocoins: "r3",
        gift_box: "r4",
        coupons: "r5",
        neo_pass: "r6",
        victoires: "r7",
        defaites: "r8",
        trophees: "r9",
        tos: "r10",
        awards: "r11",
        cards: "r12",
        note: "r37",
      };
      break;
    case "Altheos":
      colonnesJoueur = {
        rang_xp: "r13",
        golds: "r14",
        neocoins: "r15",
        gift_box: "r16",
        coupons: "r17",
        neo_pass: "r18",
        victoires: "r19",
        defaites: "r20",
        trophees: "r21",
        tos: "r22",
        awards: "r23",
        cards: "r24",
        note: "r38",
      };
      break;
    case "Zephyr":
      colonnesJoueur = {
        rang_xp: "r25",
        golds: "r26",
        neocoins: "r27",
        gift_box: "r28",
        coupons: "r29",
        neo_pass: "r30",
        victoires: "r31",
        defaites: "r32",
        trophees: "r33",
        tos: "r34",
        awards: "r35",
        cards: "r36",
        note: "r39",
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
            const query = `UPDATE alfred SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 6`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfred
            SET ${colonneObjet} = $1
            WHERE id = 6
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP/NOTE*: ${texte}`);
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
    nomCom: 'west1',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData7();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.*𝗪𝗘𝗦𝗧 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🦁🔵*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Æther GENESIS🇬🇦
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟️*: ${data.r5}🎟️
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r37}/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9} *🌟TOS*: ${data.r10} *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: SoloMoe A. KÏNGS🇸🇳
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟️*: ${data.r17}🎟️
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r38}/5
*Records*: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
*🏆Trophées*: ${data.r21} *🌟TOS*: ${data.r22} *💫Awards*: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: 
◇ *Rang XP🔰*: Joueur Classé🎮
◇ *Golds🧭*: 50.000🧭
◇ *NEOcoins🔹*: 0🔷
◇ *Gift Box🎁*: 0🎁
◇ *Coupons🎟️*: 0🎟️
◇ *NEO PASS🔸*: 0🔸
░░░░░░░░░░░░░░
*Note*: ⭐⭐⭐3.5/5
*Records*: 0 Victoires✅/ 0 Défaites❌
*🏆Trophées*: 0 *🌟TOS*: 0 *💫Awards*: 0
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*:
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
         *🔷𝗡Ξ𝗢24🏆🔝*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/crAlkxv.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
        rang_xp: "r1",
        golds: "r2",
        neocoins: "r3",
        gift_box: "r4",
        coupons: "r5",
        neo_pass: "r6",
        victoires: "r7",
        defaites: "r8",
        trophees: "r9",
        tos: "r10",
        awards: "r11",
        cards: "r12",
        note: "r37",
      };
      break;
    case "SoloMoe":
      colonnesJoueur = {
        rang_xp: "r13",
        golds: "r14",
        neocoins: "r15",
        gift_box: "r16",
        coupons: "r17",
        neo_pass: "r18",
        victoires: "r19",
        defaites: "r20",
        trophees: "r21",
        tos: "r22",
        awards: "r23",
        cards: "r24",
        note: "r38",
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
            const query = `UPDATE alfred SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 7`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfred
            SET ${colonneObjet} = $1
            WHERE id = 7
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP/NOTE*: ${texte}`);
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
    nomCom: 'west2',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData8();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.*𝗪𝗘𝗦𝗧 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🦁🔵*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Hajime NEXUS🇨🇲
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟*: ${data.r5}🎟
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r37}/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9} *🌟TOS*: ${data.r10} *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Vanitas G. KÏNGS🇸🇳
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟*: ${data.r17}🎟
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r38}/5
*Records*: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
*🏆Trophées*: ${data.r21} *🌟TOS*: ${data.r22} *💫Awards*: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Nash ASTRAL🇨🇲
◇ *Rang XP🔰*: ${data.r25}
◇ *Golds🧭*: ${data.r26}🧭
◇ *NEOcoins🔹*: ${data.r27}🔷
◇ *Gift Box🎁*: ${data.r28}🎁
◇ *Coupons🎟*: ${data.r29}🎟
◇ *NEO PASS🔸*: ${data.r30}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r39}/5
*Records*: ${data.r31} Victoires✅/ ${data.r32} Défaites❌
*🏆Trophées*: ${data.r33} *🌟TOS*: ${data.r34} *💫Awards*: ${data.r35}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r36} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
         *🔷𝗡Ξ𝗢24🏆🔝*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/crAlkxv.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Hajime":
      colonnesJoueur = {
        rang_xp: "r1",
        golds: "r2",
        neocoins: "r3",
        gift_box: "r4",
        coupons: "r5",
        neo_pass: "r6",
        victoires: "r7",
        defaites: "r8",
        trophees: "r9",
        tos: "r10",
        awards: "r11",
        cards: "r12",
        note: "r37",
      };
      break;
    case "Vanitas":
      colonnesJoueur = {
        rang_xp: "r13",
        golds: "r14",
        neocoins: "r15",
        gift_box: "r16",
        coupons: "r17",
        neo_pass: "r18",
        victoires: "r19",
        defaites: "r20",
        trophees: "r21",
        tos: "r22",
        awards: "r23",
        cards: "r24",
        note: "r38",
      };
      break;
    case "Nash":
      colonnesJoueur = {
        rang_xp: "r25",
        golds: "r26",
        neocoins: "r27",
        gift_box: "r28",
        coupons: "r29",
        neo_pass: "r30",
        victoires: "r31",
        defaites: "r32",
        trophees: "r33",
        tos: "r34",
        awards: "r35",
        cards: "r36",
        note: "r39",
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
            const query = `UPDATE alfred SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 8`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfred
            SET ${colonneObjet} = $1
            WHERE id = 8
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP/NOTE*: ${texte}`);
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
    nomCom: 'west3',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData9();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.*𝗪𝗘𝗦𝗧 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🦁🔵*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Lloyd MEGUMI🇬🇦
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟*: ${data.r5}🎟
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r37}/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9} *🌟TOS*: ${data.r10} *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: 
◇ *Rang XP🔰*: Joueur Classé🎮
◇ *Golds🧭*: 50.000🧭
◇ *NEOcoins🔹*: 0🔷
◇ *Gift Box🎁*: 0🎁
◇ *Coupons🎟️*: 0🎟️
◇ *NEO PASS🔸*: 0🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: 0 Victoires✅/ 0 Défaites❌
*🏆Trophées*: 0 *🌟TOS*: 0 *💫Awards*: 0
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: 
◇ *Rang XP🔰*: Joueur Classé🎮
◇ *Golds🧭*: 50.000🧭
◇ *NEOcoins🔹*: 0🔷
◇ *Gift Box🎁*: 0🎁
◇ *Coupons🎟️*: 0🎟️
◇ *NEO PASS🔸*: 0🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: 0 Victoires✅/ 0 Défaites❌
*🏆Trophées*: 0 *🌟TOS*: 0 *💫Awards*: 0
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
        *🔷𝗡Ξ𝗢24🏆🔝*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/crAlkxv.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Lloyd":
      colonnesJoueur = {
        rang_xp: "r1",
        golds: "r2",
        neocoins: "r3",
        gift_box: "r4",
        coupons: "r5",
        neo_pass: "r6",
        victoires: "r7",
        defaites: "r8",
        trophees: "r9",
        tos: "r10",
        awards: "r11",
        cards: "r12",
        note: "r37",
      };
      break;
    /*case "Vanitas":
      colonnesJoueur = {
        rang_xp: "r13",
        golds: "r14",
        neocoins: "r15",
        gift_box: "r16",
        coupons: "r17",
        neo_pass: "r18",
        victoires: "r19",
        defaites: "r20",
        trophees: "r21",
        tos: "r22",
        awards: "r23",
        cards: "r24",
        note: "r38",
      };
      break;
    case "Nash":
      colonnesJoueur = {
        rang_xp: "r25",
        golds: "r26",
        neocoins: "r27",
        gift_box: "r28",
        coupons: "r29",
        neo_pass: "r30",
        victoires: "r31",
        defaites: "r32",
        trophees: "r33",
        tos: "r34",
        awards: "r35",
        cards: "r36",
        note: "r39",
      };
      break;*/         
    default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
          }   

          const colonneObjet = colonnesJoueur[object];
          const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE alfred SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 9`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfred
            SET ${colonneObjet} = $1
            WHERE id = 9
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP/NOTE*: ${texte}`);
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
    nomCom: 'central1',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData10();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.*𝗖𝗘𝗡𝗧𝗥𝗔𝗟 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🐯🟠*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: BADS🇨🇬
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟*: ${data.r5}🎟
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r37}/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9} *🌟TOS*: ${data.r10} *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: TEMPEST🇨🇲
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟*: ${data.r17}🎟
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r38}/5
*Records*: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
*🏆Trophées*: ${data.r21} *🌟TOS*: ${data.r22} *💫Awards*: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*:
◇ *Rang XP🔰*: Joueur classé🎮
◇ *Golds🧭*: 50000🧭
◇ *NEOcoins🔹*: 0🔷
◇ *Gift Box🎁*: 0🎁
◇ *Coupons🎟*: 0🎟
◇ *NEO PASS🔸*: 0🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: 0 Victoires✅/ 0 Défaites❌
*🏆Trophées*: 0 *🌟TOS*: 0 *💫Awards*: 0
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
         *🔷𝗡Ξ𝗢24🏆🔝*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/H5FiyEQ.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
        rang_xp: "r1",
        golds: "r2",
        neocoins: "r3",
        gift_box: "r4",
        coupons: "r5",
        neo_pass: "r6",
        victoires: "r7",
        defaites: "r8",
        trophees: "r9",
        tos: "r10",
        awards: "r11",
        cards: "r12",
        note: "r37",
      };
      break;
    case "Tempest":
      colonnesJoueur = {
        rang_xp: "r13",
        golds: "r14",
        neocoins: "r15",
        gift_box: "r16",
        coupons: "r17",
        neo_pass: "r18",
        victoires: "r19",
        defaites: "r20",
        trophees: "r21",
        tos: "r22",
        awards: "r23",
        cards: "r24",
        note: "r38",
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
            const query = `UPDATE alfred SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 10`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfred
            SET ${colonneObjet} = $1
            WHERE id = 10
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP/NOTE*: ${texte}`);
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
    nomCom: 'central2',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData11();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.*𝗖𝗘𝗡𝗧𝗥𝗔𝗟 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🐯🟠*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Covid SAMA🇨🇬
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟*: ${data.r5}🎟
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r37}/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9} *🌟TOS*: ${data.r10} *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: Dark KING🇹🇬
◇ *Rang XP🔰*: ${data.r13}
◇ *Golds🧭*: ${data.r14}🧭
◇ *NEOcoins🔹*: ${data.r15}🔷
◇ *Gift Box🎁*: ${data.r16}🎁
◇ *Coupons🎟*: ${data.r17}🎟
◇ *NEO PASS🔸*: ${data.r18}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r38}/5
*Records*: ${data.r19} Victoires✅/ ${data.r20} Défaites❌
*🏆Trophées*: ${data.r21} *🌟TOS*: ${data.r22} *💫Awards*: ${data.r23}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r24}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: ABDIEL🇹🇬
◇ *Rang XP🔰*: ${data.r25}
◇ *Golds🧭*: ${data.r26}🧭
◇ *NEOcoins🔹*: ${data.r27}🔷
◇ *Gift Box🎁*: ${data.r28}🎁
◇ *Coupons🎟*: ${data.r29}🎟
◇ *NEO PASS🔸*: ${data.r30}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r39}/5
*Records*: ${data.r31} Victoires✅/ ${data.r32} Défaites❌
*🏆Trophées*: ${data.r33} *🌟TOS*: ${data.r34} *💫Awards*: ${data.r35}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r36} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
         *🔷𝗡Ξ𝗢24🏆🔝*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/H5FiyEQ.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
        rang_xp: "r1",
        golds: "r2",
        neocoins: "r3",
        gift_box: "r4",
        coupons: "r5",
        neo_pass: "r6",
        victoires: "r7",
        defaites: "r8",
        trophees: "r9",
        tos: "r10",
        awards: "r11",
        cards: "r12",
        note: "r37",
      };
      break;
    case "Dark":
      colonnesJoueur = {
        rang_xp: "r13",
        golds: "r14",
        neocoins: "r15",
        gift_box: "r16",
        coupons: "r17",
        neo_pass: "r18",
        victoires: "r19",
        defaites: "r20",
        trophees: "r21",
        tos: "r22",
        awards: "r23",
        cards: "r24",
        note: "r38",
      };
      break;
    case "Abdiel":
      colonnesJoueur = {
        rang_xp: "r25",
        golds: "r26",
        neocoins: "r27",
        gift_box: "r28",
        coupons: "r29",
        neo_pass: "r30",
        victoires: "r31",
        defaites: "r32",
        trophees: "r33",
        tos: "r34",
        awards: "r35",
        cards: "r36",
        note: "r39",
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
            const query = `UPDATE alfred SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 11`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfred
            SET ${colonneObjet} = $1
            WHERE id = 11
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP/NOTE*: ${texte}`);
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
    nomCom: 'central3',
    categorie: 'luckymd'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData12();
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

     if (!arg || arg.length === 0) {
        let mesg = `.*𝗖𝗘𝗡𝗧𝗥𝗔𝗟 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡🐯🟠*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: Astral NIGHT🇨🇲
◇ *Rang XP🔰*: ${data.r1}
◇ *Golds🧭*: ${data.r2}🧭
◇ *NEOcoins🔹*: ${data.r3}🔷
◇ *Gift Box🎁*: ${data.r4}🎁
◇ *Coupons🎟*: ${data.r5}🎟
◇ *NEO PASS🔸*: ${data.r6}🔸
░░░░░░░░░░░░░░
*Note*: ${data.r37}/5
*Records*: ${data.r7} Victoires✅/ ${data.r8} Défaites❌
*🏆Trophées*: ${data.r9} *🌟TOS*: ${data.r10} *💫Awards*: ${data.r11}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: ${data.r12} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*:
◇ *Rang XP🔰*: Joueur classé🎮
◇ *Golds🧭*: 50000🧭
◇ *NEOcoins🔹*: 0🔷
◇ *Gift Box🎁*: 0🎁
◇ *Coupons🎟*: 0🎟
◇ *NEO PASS🔸*: 0🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: 0 Victoires✅/ 0 Défaites❌
*🏆Trophées*: 0 *🌟TOS*: 0 *💫Awards*: 0
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

◇ *Pseudo👤*: 
◇ *Rang XP🔰*: Joueur Classé🎮
◇ *Golds🧭*: 50.000🧭
◇ *NEOcoins🔹*: 0🔷
◇ *Gift Box🎁*: 0🎁
◇ *Coupons🎟*: 0🎟
◇ *NEO PASS🔸*: 0🔸
░░░░░░░░░░░░░░
*Note*: ⭐1/5
*Records*: 0 Victoires✅/ 0 Défaites❌
*🏆Trophées*: 0 *🌟TOS*: 0 *💫Awards*: 0
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(15 max)*: 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
         *🔷𝗡Ξ𝗢24🏆🔝*`;
          zk.sendMessage(dest, { image: { url: 'https://i.imgur.com/H5FiyEQ.jpg' }, caption: mesg }, { quoted: ms });
      } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
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
    case "Astral":
      colonnesJoueur = {
        rang_xp: "r1",
        golds: "r2",
        neocoins: "r3",
        gift_box: "r4",
        coupons: "r5",
        neo_pass: "r6",
        victoires: "r7",
        defaites: "r8",
        trophees: "r9",
        tos: "r10",
        awards: "r11",
        cards: "r12",
        note: "r37",
      };
      break;
    /*case "":
      colonnesJoueur = {
        rang_xp: "r13",
        golds: "r14",
        neocoins: "r15",
        gift_box: "r16",
        coupons: "r17",
        neo_pass: "r18",
        victoires: "r19",
        defaites: "r20",
        trophees: "r21",
        tos: "r22",
        awards: "r23",
        cards: "r24",
        note: "r38",
      };
      break;*/
    default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
          }   

          const colonneObjet = colonnesJoueur[object];
          const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE alfred SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 12`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE alfred
            SET ${colonneObjet} = $1
            WHERE id = 12
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE CARDS/RANG_XP/NOTE*: ${texte}`);
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
          
