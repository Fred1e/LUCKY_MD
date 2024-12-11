const { zokou } = require('../framework/zokou');
const { getData } = require('../bdd/northdiv');
const s = require("../set");

const dbUrl = s.DB;


function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

zokou(
  {
    nomCom: 'northdamian👤',
    categorie: 'NORTH🐺🔴'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;
    let client;
    try {
      const data = await getData('1');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `.                     *👤𝗜𝗡𝗙𝗢𝗦 𝗗𝗘 𝗝𝗢𝗨𝗘𝗨𝗥𝗦👤*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
◇ *Pseudo👤*: ${data.e1}
◇ *Position Continentale🌍:* ${data.e23}
◇ *Division🛡️*: ${data.e2}
◇ *Points de talent XP⭐*: ${data.e10}⭐
◇ *Rang 🎖️*:${data.e4}
◇ *Classe🏆*: ${data.e3}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Golds🧭*: ${data.e5} G🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *NΞO points🔸*:  ${data.e9}🔸 
◇ *Coupons🎟*:  ${data.e8}🎟
◇ *Gift Box🎁*:${data.e7} 🎁

                             *🏆𝗣𝗔𝗟𝗠𝗔𝗥𝗘𝗦🏆*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🎴𝗖𝗔𝗥𝗗𝗦🎴*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
${data.e17}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🔷𝗡Ξ𝗢🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/850ad81f1b22ee98d4b2f.jpg' }, caption: mesg }, { quoted: ms });
       } else {
       const proConfig = {
                connectionString: dbUrl,
                ssl: {
                    rejectUnauthorized: false,
                },
            };

            const { Pool } = require('pg');
            const pool = new Pool(proConfig);
            client = await pool.connect();

            if (superUser) {
                let colonnesJoueur = {
                    pseudo: "e1",
                    division: "e2",
                    classe: "e3",
                    rang_exp: "e4",
                    golds: "e5",
                    neocoins: "e6",
                    gift_box: "e7",
                    coupons: "e8",
                    np: "e9",
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
                    globes: "e22",
                    pos: "e23"
                };

                let updates = [];
                let i = 0;

                while (i < arg.length) {
                    let object = arg[i];
                    let signe = arg[i + 1];
                    let valeur = arg[i + 2];
                    let texte = [];
                    i += 2;

                    // Collecte tout le texte jusqu'à ce qu'un mot clé soit rencontré
                    while (i < arg.length && !colonnesJoueur[arg[i]]) {
                        texte.push(arg[i]);
                        i++;
                    }

                    let colonneObjet = colonnesJoueur[object];
                    let newValue;
                    let oldValue;

                    if (signe === '+' || signe === '-') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 1`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        newValue = eval(`${oldValue} ${signe} ${valeur}`);
                    } else if (signe === '=' || signe === 'add' || signe === 'supp') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 1`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        if(signe === '=') {
                            newValue = `${texte.join(' ')}`;
                        } else if (signe === 'add') {
                            newValue = `${oldValue} ${texte.join(' ')}`;
                        } else if (signe === 'supp') {
                            const regex = new RegExp(`\\b${normalizeText(texte.join(' '))}\\b`, 'gi');
                            newValue = normalizeText(oldValue).replace(regex, '').trim();
                        }
                    } else {
                        console.log("Signe invalide.");
                        repondre('Une erreur est survenue. Veuillez entrer correctement les données.');
                        return;
                    }

                    updates.push({ colonneObjet, newValue, oldValue, object });
                }

                try {
                    await client.query('BEGIN');

                    for (const update of updates) {
                        const query = `UPDATE northdiv SET ${update.colonneObjet} = $1 WHERE id = 1`;
                        await client.query(query, [update.newValue]);
                    }

                    await client.query('COMMIT');

                    const messages = updates.map(update => `⚙ Object: ${update.object}\n💵 Ancienne Valeur: ${update.oldValue}\n💵 Nouvelle Valeur: ${update.newValue}`).join('\n\n');
                    await repondre(`Données du joueur mises à jour pour:\n\n${messages}`);
                } catch (error) {
                    await client.query('ROLLBACK');
                    console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
                    repondre('Une erreur est survenue lors de la mise à jour des données. Veuillez réessayer');
                } finally {
                    client.release();
                }
            } else {
                repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');
            }
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
        repondre('Une erreur est survenue. Veuillez réessayer');
    } finally {
        if (client) {
            client.release();
        }
    }
  }
);
zokou(
  {
    nomCom: 'northlily👤',
    categorie: 'NORTH🐺🔴'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;
     let client;
    try {
      const data = await getData('2');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `.                     *👤𝗜𝗡𝗙𝗢𝗦 𝗗𝗘 𝗝𝗢𝗨𝗘𝗨𝗥𝗦👤*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
◇ *Pseudo👤*: ${data.e1}
◇ *Position Continentale🌍:* ${data.e23}
◇ *Division🛡️*: ${data.e2}
◇ *Points de talent XP⭐*: ${data.e10}⭐
◇ *Rang 🎖️*:${data.e4}
◇ *Classe🏆*: ${data.e3}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Golds🧭*: ${data.e5} G🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *NΞO points🔸*:  ${data.e9}🔸 
◇ *Coupons🎟*:  ${data.e8}🎟
◇ *Gift Box🎁*:${data.e7} 🎁

                             *🏆𝗣𝗔𝗟𝗠𝗔𝗥𝗘𝗦🏆*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🎴𝗖𝗔𝗥𝗗𝗦🎴*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
${data.e17}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🔷𝗡Ξ𝗢🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/d48f1975b8076ba215a92.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        const proConfig = {
                connectionString: dbUrl,
                ssl: {
                    rejectUnauthorized: false,
                },
            };

            const { Pool } = require('pg');
            const pool = new Pool(proConfig);
            client = await pool.connect();

            if (superUser) {
                let colonnesJoueur = {
                    pseudo: "e1",
                    division: "e2",
                    classe: "e3",
                    rang: "e4",
                    golds: "e5",
                    neocoins: "e6",
                    gift_box: "e7",
                    coupons: "e8",
                    np: "e9",
                    talent: "e10",
                    victoires: "e12",
                    defaites: "e13",
                    trophees: "e14",
                    tos: "e15",
                    awards: "e16",
                    cards: "e17",
                    globes: "e22", 
                    pos: "e23"
                };

                let updates = [];
                let i = 0;

                while (i < arg.length) {
                    let object = arg[i];
                    let signe = arg[i + 1];
                    let valeur = arg[i + 2];
                    let texte = [];
                    i += 2;

                    // Collecte tout le texte jusqu'à ce qu'un mot clé soit rencontré
                    while (i < arg.length && !colonnesJoueur[arg[i]]) {
                        texte.push(arg[i]);
                        i++;
                    }

                    let colonneObjet = colonnesJoueur[object];
                    let newValue;
                    let oldValue;

                    if (signe === '+' || signe === '-') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 2`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        newValue = eval(`${oldValue} ${signe} ${valeur}`);
                    } else if (signe === '=' || signe === 'add' || signe === 'supp') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 2`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        if(signe === '=') {
                            newValue = `${texte.join(' ')}`;
                        } else if (signe === 'add') {
                            newValue = `${oldValue} ${texte.join(' ')}`;
                        } else if (signe === 'supp') {
                            const regex = new RegExp(`\\b${normalizeText(texte.join(' '))}\\b`, 'gi');
                            newValue = normalizeText(oldValue).replace(regex, '').trim();
                        }
                    } else {
                        console.log("Signe invalide.");
                        repondre('Une erreur est survenue. Veuillez entrer correctement les données.');
                        return;
                    }

                    updates.push({ colonneObjet, newValue, oldValue, object });
                }

                try {
                    await client.query('BEGIN');

                    for (const update of updates) {
                        const query = `UPDATE northdiv SET ${update.colonneObjet} = $1 WHERE id = 2`;
                        await client.query(query, [update.newValue]);
                    }

                    await client.query('COMMIT');

                    const messages = updates.map(update => `⚙ Object: ${update.object}\n💵 Ancienne Valeur: ${update.oldValue}\n💵 Nouvelle Valeur: ${update.newValue}`).join('\n\n');
                    await repondre(`Données du joueur mises à jour pour:\n\n${messages}`);
                } catch (error) {
                    await client.query('ROLLBACK');
                    console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
                    repondre('Une erreur est survenue lors de la mise à jour des données. Veuillez réessayer');
                } finally {
                    client.release();
                }
            } else {
                repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');
            }
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
        repondre('Une erreur est survenue. Veuillez réessayer');
    } finally {
        if (client) {
            client.release();
        }
    }
  }
);

/*zokou(
  {
    nomCom: 'northadorieru👤',
    categorie: 'NORTH🐺🔴'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;
    let client;
    try {
      const data = await getData('3');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `.                     *👤𝗜𝗡𝗙𝗢𝗦 𝗗𝗘 𝗝𝗢𝗨𝗘𝗨𝗥𝗦👤*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
◇ *Pseudo👤*: ${data.e1}
◇ *Position Continentale🌍:* ${data.e23}
◇ *Division🛡️*: ${data.e2}
◇ *Points de talent XP⭐*: ${data.e10}⭐
◇ *Rang 🎖️*:${data.e4}
◇ *Classe🏆*: ${data.e3}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Golds🧭*: ${data.e5} G🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *NΞO points🔸*:  ${data.e9}🔸 
◇ *Coupons🎟*:  ${data.e8}🎟
◇ *Gift Box🎁*:${data.e7} 🎁

                             *🏆𝗣𝗔𝗟𝗠𝗔𝗥𝗘𝗦🏆*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🎴𝗖𝗔𝗥𝗗𝗦🎴*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
${data.e17}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🔷𝗡Ξ𝗢🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/33d75752a2f4d645f836a.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        const proConfig = {
                connectionString: dbUrl,
                ssl: {
                    rejectUnauthorized: false,
                },
            };

            const { Pool } = require('pg');
            const pool = new Pool(proConfig);
            client = await pool.connect();

            if (superUser) {
                let colonnesJoueur = {
                    pseudo: "e1",
                    division: "e2",
                    classe: "e3",
                    rang: "e4",
                    golds: "e5",
                    neocoins: "e6",
                    gift_box: "e7",
                    coupons: "e8",
                    np: "e9",
                    talent: "e10",
                    victoires: "e12",
                    defaites: "e13",
                    trophees: "e14",
                    tos: "e15",
                    awards: "e16",
                    cards: "e17",
                    globes: "e22", 
                    pos: "e23"
                };

                let updates = [];
                let i = 0;

                while (i < arg.length) {
                    let object = arg[i];
                    let signe = arg[i + 1];
                    let valeur = arg[i + 2];
                    let texte = [];
                    i += 2;

                    // Collecte tout le texte jusqu'à ce qu'un mot clé soit rencontré
                    while (i < arg.length && !colonnesJoueur[arg[i]]) {
                        texte.push(arg[i]);
                        i++;
                    }

                    let colonneObjet = colonnesJoueur[object];
                    let newValue;
                    let oldValue;

                    if (signe === '+' || signe === '-') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 3`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        newValue = eval(`${oldValue} ${signe} ${valeur}`);
                    } else if (signe === '=' || signe === 'add' || signe === 'supp') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 3`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        if(signe === '=') {
                            newValue = `${texte.join(' ')}`;
                        } else if (signe === 'add') {
                            newValue = `${oldValue} ${texte.join(' ')}`;
                        } else if (signe === 'supp') {
                            const regex = new RegExp(`\\b${normalizeText(texte.join(' '))}\\b`, 'gi');
                            newValue = normalizeText(oldValue).replace(regex, '').trim();
                        }
                    } else {
                        console.log("Signe invalide.");
                        repondre('Une erreur est survenue. Veuillez entrer correctement les données.');
                        return;
                    }

                    updates.push({ colonneObjet, newValue, oldValue, object });
                }

                try {
                    await client.query('BEGIN');

                    for (const update of updates) {
                        const query = `UPDATE northdiv SET ${update.colonneObjet} = $1 WHERE id = 3`;
                        await client.query(query, [update.newValue]);
                    }

                    await client.query('COMMIT');

                    const messages = updates.map(update => `⚙ Object: ${update.object}\n💵 Ancienne Valeur: ${update.oldValue}\n💵 Nouvelle Valeur: ${update.newValue}`).join('\n\n');
                    await repondre(`Données du joueur mises à jour pour:\n\n${messages}`);
                } catch (error) {
                    await client.query('ROLLBACK');
                    console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
                    repondre('Une erreur est survenue lors de la mise à jour des données. Veuillez réessayer');
                } finally {
                    client.release();
                }
            } else {
                repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');
            }
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
        repondre('Une erreur est survenue. Veuillez réessayer');
    } finally {
        if (client) {
            client.release();
        }
    }
  }
);*/

zokou(
  {
    nomCom: 'norththanatos👤',
    categorie: 'NORTH🐺🔴'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;
    let client;
    try {
      const data = await getData('4');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `.                     *👤𝗜𝗡𝗙𝗢𝗦 𝗗𝗘 𝗝𝗢𝗨𝗘𝗨𝗥𝗦👤*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
◇ *Pseudo👤*: ${data.e1}
◇ *Position Continentale🌍:* ${data.e23}
◇ *Division🛡️*: ${data.e2}
◇ *Points de talent XP⭐*: ${data.e10}⭐
◇ *Rang 🎖️*:${data.e4}
◇ *Classe🏆*: ${data.e3}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Golds🧭*: ${data.e5} G🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *NΞO points🔸*:  ${data.e9}🔸 
◇ *Coupons🎟*:  ${data.e8}🎟
◇ *Gift Box🎁*:${data.e7} 🎁

                             *🏆𝗣𝗔𝗟𝗠𝗔𝗥𝗘𝗦🏆*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🎴𝗖𝗔𝗥𝗗𝗦🎴*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
${data.e17}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🔷𝗡Ξ𝗢🔝*`; 
    zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/56f8a1ed8a2390a5debf6.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        const proConfig = {
                connectionString: dbUrl,
                ssl: {
                    rejectUnauthorized: false,
                },
            };

            const { Pool } = require('pg');
            const pool = new Pool(proConfig);
            client = await pool.connect();

            if (superUser) {
                let colonnesJoueur = {
                    pseudo: "e1",
                    division: "e2",
                    classe: "e3",
                    rang: "e4",
                    golds: "e5",
                    neocoins: "e6",
                    gift_box: "e7",
                    coupons: "e8",
                    np: "e9",
                    talent: "e10",
                    victoires: "e12",
                    defaites: "e13",
                    trophees: "e14",
                    tos: "e15",
                    awards: "e16",
                    cards: "e17",
                    globes: "e22", 
                    pos: "e23"
                };

                let updates = [];
                let i = 0;

                while (i < arg.length) {
                    let object = arg[i];
                    let signe = arg[i + 1];
                    let valeur = arg[i + 2];
                    let texte = [];
                    i += 2;

                    // Collecte tout le texte jusqu'à ce qu'un mot clé soit rencontré
                    while (i < arg.length && !colonnesJoueur[arg[i]]) {
                        texte.push(arg[i]);
                        i++;
                    }

                    let colonneObjet = colonnesJoueur[object];
                    let newValue;
                    let oldValue;

                    if (signe === '+' || signe === '-') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 4`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        newValue = eval(`${oldValue} ${signe} ${valeur}`);
                    } else if (signe === '=' || signe === 'add' || signe === 'supp') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 4`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        if(signe === '=') {
                            newValue = `${texte.join(' ')}`;
                        } else if (signe === 'add') {
                            newValue = `${oldValue} ${texte.join(' ')}`;
                        } else if (signe === 'supp') {
                            const regex = new RegExp(`\\b${normalizeText(texte.join(' '))}\\b`, 'gi');
                            newValue = normalizeText(oldValue).replace(regex, '').trim();
                        }
                    } else {
                        console.log("Signe invalide.");
                        repondre('Une erreur est survenue. Veuillez entrer correctement les données.');
                        return;
                    }

                    updates.push({ colonneObjet, newValue, oldValue, object });
                }

                try {
                    await client.query('BEGIN');

                    for (const update of updates) {
                        const query = `UPDATE northdiv SET ${update.colonneObjet} = $1 WHERE id = 4`;
                        await client.query(query, [update.newValue]);
                    }

                    await client.query('COMMIT');

                    const messages = updates.map(update => `⚙ Object: ${update.object}\n💵 Ancienne Valeur: ${update.oldValue}\n💵 Nouvelle Valeur: ${update.newValue}`).join('\n\n');
                    await repondre(`Données du joueur mises à jour pour:\n\n${messages}`);
                } catch (error) {
                    await client.query('ROLLBACK');
                    console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
                    repondre('Une erreur est survenue lors de la mise à jour des données. Veuillez réessayer');
                } finally {
                    client.release();
                }
            } else {
                repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');
            }
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
        repondre('Une erreur est survenue. Veuillez réessayer');
    } finally {
        if (client) {
            client.release();
        }
    }
  }
);

zokou(
  {
    nomCom: 'northkazuta👤',
    categorie: 'NORTH🐺🔴'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;
     let client;
    try {
      const data = await getData('5');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `.                     *👤𝗜𝗡𝗙𝗢𝗦 𝗗𝗘 𝗝𝗢𝗨𝗘𝗨𝗥𝗦👤*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
◇ *Pseudo👤*: ${data.e1}
◇ *Position Continentale🌍:* ${data.e23}
◇ *Division🛡️*: ${data.e2}
◇ *Points de talent XP⭐*: ${data.e10}⭐
◇ *Rang 🎖️*:${data.e4}
◇ *Classe🏆*: ${data.e3}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Golds🧭*: ${data.e5} G🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *NΞO points🔸*:  ${data.e9}🔸 
◇ *Coupons🎟*:  ${data.e8}🎟
◇ *Gift Box🎁*:${data.e7} 🎁

                             *🏆𝗣𝗔𝗟𝗠𝗔𝗥𝗘𝗦🏆*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🎴𝗖𝗔𝗥𝗗𝗦🎴*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
${data.e17}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🔷𝗡Ξ𝗢🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/473bd0c7659ce1b082383.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        const proConfig = {
                connectionString: dbUrl,
                ssl: {
                    rejectUnauthorized: false,
                },
            };

            const { Pool } = require('pg');
            const pool = new Pool(proConfig);
            client = await pool.connect();

            if (superUser) {
                let colonnesJoueur = {
                    pseudo: "e1",
                    division: "e2",
                    classe: "e3",
                    rang: "e4",
                    golds: "e5",
                    neocoins: "e6",
                    gift_box: "e7",
                    coupons: "e8",
                    np: "e9",
                    talent: "e10",
                    victoires: "e12",
                    defaites: "e13",
                    trophees: "e14",
                    tos: "e15",
                    awards: "e16",
                    cards: "e17",
                    globes: "e22", 
                    pos: "e23"
                };

                let updates = [];
                let i = 0;

                while (i < arg.length) {
                    let object = arg[i];
                    let signe = arg[i + 1];
                    let valeur = arg[i + 2];
                    let texte = [];
                    i += 2;

                    // Collecte tout le texte jusqu'à ce qu'un mot clé soit rencontré
                    while (i < arg.length && !colonnesJoueur[arg[i]]) {
                        texte.push(arg[i]);
                        i++;
                    }

                    let colonneObjet = colonnesJoueur[object];
                    let newValue;
                    let oldValue;

                    if (signe === '+' || signe === '-') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 5`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        newValue = eval(`${oldValue} ${signe} ${valeur}`);
                    } else if (signe === '=' || signe === 'add' || signe === 'supp') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 5`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        if(signe === '=') {
                            newValue = `${texte.join(' ')}`;
                        } else if (signe === 'add') {
                            newValue = `${oldValue} ${texte.join(' ')}`;
                        } else if (signe === 'supp') {
                            const regex = new RegExp(`\\b${normalizeText(texte.join(' '))}\\b`, 'gi');
                            newValue = normalizeText(oldValue).replace(regex, '').trim();
                        }
                    } else {
                        console.log("Signe invalide.");
                        repondre('Une erreur est survenue. Veuillez entrer correctement les données.');
                        return;
                    }

                    updates.push({ colonneObjet, newValue, oldValue, object });
                }

                try {
                    await client.query('BEGIN');

                    for (const update of updates) {
                        const query = `UPDATE northdiv SET ${update.colonneObjet} = $1 WHERE id = 5`;
                        await client.query(query, [update.newValue]);
                    }

                    await client.query('COMMIT');

                    const messages = updates.map(update => `⚙ Object: ${update.object}\n💵 Ancienne Valeur: ${update.oldValue}\n💵 Nouvelle Valeur: ${update.newValue}`).join('\n\n');
                    await repondre(`Données du joueur mises à jour pour:\n\n${messages}`);
                } catch (error) {
                    await client.query('ROLLBACK');
                    console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
                    repondre('Une erreur est survenue lors de la mise à jour des données. Veuillez réessayer');
                } finally {
                    client.release();
                }
            } else {
                repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');
            }
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
        repondre('Une erreur est survenue. Veuillez réessayer');
    } finally {
        if (client) {
            client.release();
        }
    }
  }
);

// supp 6 Lord of apocalyse
/*zokou(
  {
    nomCom: 'northkanzen👤',
    categorie: 'NORTH🐺🔴'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;
     let client;
    try {
      const data = await getData('7');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `.                     *👤𝗜𝗡𝗙𝗢𝗦 𝗗𝗘 𝗝𝗢𝗨𝗘𝗨𝗥𝗦👤*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
◇ *Pseudo👤*: ${data.e1}
◇ *Position Continentale🌍:* ${data.e23}
◇ *Division🛡️*: ${data.e2}
◇ *Points de talent XP⭐*: ${data.e10}⭐
◇ *Rang 🎖️*:${data.e4}
◇ *Classe🏆*: ${data.e3}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Golds🧭*: ${data.e5} G🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *NΞO points🔸*:  ${data.e9}🔸 
◇ *Coupons🎟*:  ${data.e8}🎟
◇ *Gift Box🎁*:${data.e7} 🎁

                             *🏆𝗣𝗔𝗟𝗠𝗔𝗥𝗘𝗦🏆*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🎴𝗖𝗔𝗥𝗗𝗦🎴*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
${data.e17}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🔷𝗡Ξ𝗢🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/e521acd5939414d8d12c5.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        const proConfig = {
                connectionString: dbUrl,
                ssl: {
                    rejectUnauthorized: false,
                },
            };

            const { Pool } = require('pg');
            const pool = new Pool(proConfig);
            client = await pool.connect();

            if (superUser) {
                let colonnesJoueur = {
                    pseudo: "e1",
                    division: "e2",
                    classe: "e3",
                    rang: "e4",
                    golds: "e5",
                    neocoins: "e6",
                    gift_box: "e7",
                    coupons: "e8",
                    np: "e9",
                    talent: "e10",
                    victoires: "e12",
                    defaites: "e13",
                    trophees: "e14",
                    tos: "e15",
                    awards: "e16",
                    cards: "e17",
                    globes: "e22", 
                    pos: "e23"
                };

                let updates = [];
                let i = 0;

                while (i < arg.length) {
                    let object = arg[i];
                    let signe = arg[i + 1];
                    let valeur = arg[i + 2];
                    let texte = [];
                    i += 2;

                    // Collecte tout le texte jusqu'à ce qu'un mot clé soit rencontré
                    while (i < arg.length && !colonnesJoueur[arg[i]]) {
                        texte.push(arg[i]);
                        i++;
                    }

                    let colonneObjet = colonnesJoueur[object];
                    let newValue;
                    let oldValue;

                    if (signe === '+' || signe === '-') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 7`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        newValue = eval(`${oldValue} ${signe} ${valeur}`);
                    } else if (signe === '=' || signe === 'add' || signe === 'supp') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 7`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        if(signe === '=') {
                            newValue = `${texte.join(' ')}`;
                        } else if (signe === 'add') {
                            newValue = `${oldValue} ${texte.join(' ')}`;
                        } else if (signe === 'supp') {
                            const regex = new RegExp(`\\b${normalizeText(texte.join(' '))}\\b`, 'gi');
                            newValue = normalizeText(oldValue).replace(regex, '').trim();
                        }
                    } else {
                        console.log("Signe invalide.");
                        repondre('Une erreur est survenue. Veuillez entrer correctement les données.');
                        return;
                    }

                    updates.push({ colonneObjet, newValue, oldValue, object });
                }

                try {
                    await client.query('BEGIN');

                    for (const update of updates) {
                        const query = `UPDATE northdiv SET ${update.colonneObjet} = $1 WHERE id = 7`;
                        await client.query(query, [update.newValue]);
                    }

                    await client.query('COMMIT');

                    const messages = updates.map(update => `⚙ Object: ${update.object}\n💵 Ancienne Valeur: ${update.oldValue}\n💵 Nouvelle Valeur: ${update.newValue}`).join('\n\n');
                    await repondre(`Données du joueur mises à jour pour:\n\n${messages}`);
                } catch (error) {
                    await client.query('ROLLBACK');
                    console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
                    repondre('Une erreur est survenue lors de la mise à jour des données. Veuillez réessayer');
                } finally {
                    client.release();
                }
            } else {
                repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');
            }
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
        repondre('Une erreur est survenue. Veuillez réessayer');
    } finally {
        if (client) {
            client.release();
        }
    }
  }
);*/

zokou(
  {
    nomCom: 'northainz👤',
    categorie: 'NORTH🐺🔴'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;
    let client;
    try {
      const data = await getData('8');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `.                     *👤𝗜𝗡𝗙𝗢𝗦 𝗗𝗘 𝗝𝗢𝗨𝗘𝗨𝗥𝗦👤*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
◇ *Pseudo👤*: ${data.e1}
◇ *Position Continentale🌍:* ${data.e23}
◇ *Division🛡️*: ${data.e2}
◇ *Points de talent XP⭐*: ${data.e10}⭐
◇ *Rang 🎖️*:${data.e4}
◇ *Classe🏆*: ${data.e3}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Golds🧭*: ${data.e5} G🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *NΞO points🔸*:  ${data.e9}🔸 
◇ *Coupons🎟*:  ${data.e8}🎟
◇ *Gift Box🎁*:${data.e7} 🎁

                             *🏆𝗣𝗔𝗟𝗠𝗔𝗥𝗘𝗦🏆*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🎴𝗖𝗔𝗥𝗗𝗦🎴*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
${data.e17}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🔷𝗡Ξ𝗢🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/1d119ca4b803209e84fa4.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        const proConfig = {
                connectionString: dbUrl,
                ssl: {
                    rejectUnauthorized: false,
                },
            };

            const { Pool } = require('pg');
            const pool = new Pool(proConfig);
            client = await pool.connect();

            if (superUser) {
                let colonnesJoueur = {
                    pseudo: "e1",
                    division: "e2",
                    classe: "e3",
                    rang: "e4",
                    golds: "e5",
                    neocoins: "e6",
                    gift_box: "e7",
                    coupons: "e8",
                    np: "e9",
                    talent: "e10",
                    victoires: "e12",
                    defaites: "e13",
                    trophees: "e14",
                    tos: "e15",
                    awards: "e16",
                    cards: "e17",
                    globes: "e22", 
                    pos: "e23"
                };

                let updates = [];
                let i = 0;

                while (i < arg.length) {
                    let object = arg[i];
                    let signe = arg[i + 1];
                    let valeur = arg[i + 2];
                    let texte = [];
                    i += 2;

                    // Collecte tout le texte jusqu'à ce qu'un mot clé soit rencontré
                    while (i < arg.length && !colonnesJoueur[arg[i]]) {
                        texte.push(arg[i]);
                        i++;
                    }

                    let colonneObjet = colonnesJoueur[object];
                    let newValue;
                    let oldValue;

                    if (signe === '+' || signe === '-') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 8`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        newValue = eval(`${oldValue} ${signe} ${valeur}`);
                    } else if (signe === '=' || signe === 'add' || signe === 'supp') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 8`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        if(signe === '=') {
                            newValue = `${texte.join(' ')}`;
                        } else if (signe === 'add') {
                            newValue = `${oldValue} ${texte.join(' ')}`;
                        } else if (signe === 'supp') {
                            const regex = new RegExp(`\\b${normalizeText(texte.join(' '))}\\b`, 'gi');
                            newValue = normalizeText(oldValue).replace(regex, '').trim();
                        }
                    } else {
                        console.log("Signe invalide.");
                        repondre('Une erreur est survenue. Veuillez entrer correctement les données.');
                        return;
                    }

                    updates.push({ colonneObjet, newValue, oldValue, object });
                }

                try {
                    await client.query('BEGIN');

                    for (const update of updates) {
                        const query = `UPDATE northdiv SET ${update.colonneObjet} = $1 WHERE id = 8`;
                        await client.query(query, [update.newValue]);
                    }

                    await client.query('COMMIT');

                    const messages = updates.map(update => `⚙ Object: ${update.object}\n💵 Ancienne Valeur: ${update.oldValue}\n💵 Nouvelle Valeur: ${update.newValue}`).join('\n\n');
                    await repondre(`Données du joueur mises à jour pour:\n\n${messages}`);
                } catch (error) {
                    await client.query('ROLLBACK');
                    console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
                    repondre('Une erreur est survenue lors de la mise à jour des données. Veuillez réessayer');
                } finally {
                    client.release();
                }
            } else {
                repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');
            }
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
        repondre('Une erreur est survenue. Veuillez réessayer');
    } finally {
        if (client) {
            client.release();
        }
    }
  }
);

// supp killer 9
zokou(
  {
    nomCom: 'northrukia👤',
    categorie: 'NORTH🐺🔴'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;
    let client;
    try {
      const data = await getData('10');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `.                     *👤𝗜𝗡𝗙𝗢𝗦 𝗗𝗘 𝗝𝗢𝗨𝗘𝗨𝗥𝗦👤*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
◇ *Pseudo👤*: ${data.e1}
◇ *Position Continentale🌍:* ${data.e23}
◇ *Division🛡️*: ${data.e2}
◇ *Points de talent XP⭐*: ${data.e10}⭐
◇ *Rang 🎖️*:${data.e4}
◇ *Classe🏆*: ${data.e3}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Golds🧭*: ${data.e5} G🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *NΞO points🔸*:  ${data.e9}🔸 
◇ *Coupons🎟*:  ${data.e8}🎟
◇ *Gift Box🎁*:${data.e7} 🎁

                             *🏆𝗣𝗔𝗟𝗠𝗔𝗥𝗘𝗦🏆*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🎴𝗖𝗔𝗥𝗗𝗦🎴*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
${data.e17}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🔷𝗡Ξ𝗢🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/1979a11043529f6ce2bc5.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        const proConfig = {
                connectionString: dbUrl,
                ssl: {
                    rejectUnauthorized: false,
                },
            };

            const { Pool } = require('pg');
            const pool = new Pool(proConfig);
            client = await pool.connect();

            if (superUser) {
                let colonnesJoueur = {
                    pseudo: "e1",
                    division: "e2",
                    classe: "e3",
                    rang: "e4",
                    golds: "e5",
                    neocoins: "e6",
                    gift_box: "e7",
                    coupons: "e8",
                    np: "e9",
                    talent: "e10",
                    victoires: "e12",
                    defaites: "e13",
                    trophees: "e14",
                    tos: "e15",
                    awards: "e16",
                    cards: "e17",
                    globes: "e22", 
                    pos: "e23"
                };

                let updates = [];
                let i = 0;

                while (i < arg.length) {
                    let object = arg[i];
                    let signe = arg[i + 1];
                    let valeur = arg[i + 2];
                    let texte = [];
                    i += 2;

                    // Collecte tout le texte jusqu'à ce qu'un mot clé soit rencontré
                    while (i < arg.length && !colonnesJoueur[arg[i]]) {
                        texte.push(arg[i]);
                        i++;
                    }

                    let colonneObjet = colonnesJoueur[object];
                    let newValue;
                    let oldValue;

                    if (signe === '+' || signe === '-') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 10`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        newValue = eval(`${oldValue} ${signe} ${valeur}`);
                    } else if (signe === '=' || signe === 'add' || signe === 'supp') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 10`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        if(signe === '=') {
                            newValue = `${texte.join(' ')}`;
                        } else if (signe === 'add') {
                            newValue = `${oldValue} ${texte.join(' ')}`;
                        } else if (signe === 'supp') {
                            const regex = new RegExp(`\\b${normalizeText(texte.join(' '))}\\b`, 'gi');
                            newValue = normalizeText(oldValue).replace(regex, '').trim();
                        }
                    } else {
                        console.log("Signe invalide.");
                        repondre('Une erreur est survenue. Veuillez entrer correctement les données.');
                        return;
                    }

                    updates.push({ colonneObjet, newValue, oldValue, object });
                }

                try {
                    await client.query('BEGIN');

                    for (const update of updates) {
                        const query = `UPDATE northdiv SET ${update.colonneObjet} = $1 WHERE id = 10`;
                        await client.query(query, [update.newValue]);
                    }

                    await client.query('COMMIT');

                    const messages = updates.map(update => `⚙ Object: ${update.object}\n💵 Ancienne Valeur: ${update.oldValue}\n💵 Nouvelle Valeur: ${update.newValue}`).join('\n\n');
                    await repondre(`Données du joueur mises à jour pour:\n\n${messages}`);
                } catch (error) {
                    await client.query('ROLLBACK');
                    console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
                    repondre('Une erreur est survenue lors de la mise à jour des données. Veuillez réessayer');
                } finally {
                    client.release();
                }
            } else {
                repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');
            }
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
        repondre('Une erreur est survenue. Veuillez réessayer');
    } finally {
        if (client) {
            client.release();
        }
    }
  }
);

zokou(
  {
    nomCom: 'northor👤',
    categorie: 'NORTH🐺🔴'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;
    let client;
    try {
      const data = await getData('11');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `.                     *👤𝗜𝗡𝗙𝗢𝗦 𝗗𝗘 𝗝𝗢𝗨𝗘𝗨𝗥𝗦👤*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
◇ *Pseudo👤*: ${data.e1}
◇ *Position Continentale🌍:* ${data.e23}
◇ *Division🛡️*: ${data.e2}
◇ *Points de talent XP⭐*: ${data.e10}⭐
◇ *Rang 🎖️*:${data.e4}
◇ *Classe🏆*: ${data.e3}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Golds🧭*: ${data.e5} G🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *NΞO points🔸*:  ${data.e9}🔸 
◇ *Coupons🎟*:  ${data.e8}🎟
◇ *Gift Box🎁*:${data.e7} 🎁

                             *🏆𝗣𝗔𝗟𝗠𝗔𝗥𝗘𝗦🏆*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🎴𝗖𝗔𝗥𝗗𝗦🎴*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
${data.e17}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🔷𝗡Ξ𝗢🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/de942d6d04a11aa1002ae.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        const proConfig = {
                connectionString: dbUrl,
                ssl: {
                    rejectUnauthorized: false,
                },
            };

            const { Pool } = require('pg');
            const pool = new Pool(proConfig);
            client = await pool.connect();

            if (superUser) {
                let colonnesJoueur = {
                    pseudo: "e1",
                    division: "e2",
                    classe: "e3",
                    rang: "e4",
                    golds: "e5",
                    neocoins: "e6",
                    gift_box: "e7",
                    coupons: "e8",
                    np: "e9",
                    talent: "e10",
                    victoires: "e12",
                    defaites: "e13",
                    trophees: "e14",
                    tos: "e15",
                    awards: "e16",
                    cards: "e17",
                    globes: "e22", 
                    pos: "e23"
                };

                let updates = [];
                let i = 0;

                while (i < arg.length) {
                    let object = arg[i];
                    let signe = arg[i + 1];
                    let valeur = arg[i + 2];
                    let texte = [];
                    i += 2;

                    // Collecte tout le texte jusqu'à ce qu'un mot clé soit rencontré
                    while (i < arg.length && !colonnesJoueur[arg[i]]) {
                        texte.push(arg[i]);
                        i++;
                    }

                    let colonneObjet = colonnesJoueur[object];
                    let newValue;
                    let oldValue;

                    if (signe === '+' || signe === '-') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 11`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        newValue = eval(`${oldValue} ${signe} ${valeur}`);
                    } else if (signe === '=' || signe === 'add' || signe === 'supp') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 11`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        if(signe === '=') {
                            newValue = `${texte.join(' ')}`;
                        } else if (signe === 'add') {
                            newValue = `${oldValue} ${texte.join(' ')}`;
                        } else if (signe === 'supp') {
                            const regex = new RegExp(`\\b${normalizeText(texte.join(' '))}\\b`, 'gi');
                            newValue = normalizeText(oldValue).replace(regex, '').trim();
                        }
                    } else {
                        console.log("Signe invalide.");
                        repondre('Une erreur est survenue. Veuillez entrer correctement les données.');
                        return;
                    }

                    updates.push({ colonneObjet, newValue, oldValue, object });
                }

                try {
                    await client.query('BEGIN');

                    for (const update of updates) {
                        const query = `UPDATE northdiv SET ${update.colonneObjet} = $1 WHERE id = 11`;
                        await client.query(query, [update.newValue]);
                    }

                    await client.query('COMMIT');

                    const messages = updates.map(update => `⚙ Object: ${update.object}\n💵 Ancienne Valeur: ${update.oldValue}\n💵 Nouvelle Valeur: ${update.newValue}`).join('\n\n');
                    await repondre(`Données du joueur mises à jour pour:\n\n${messages}`);
                } catch (error) {
                    await client.query('ROLLBACK');
                    console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
                    repondre('Une erreur est survenue lors de la mise à jour des données. Veuillez réessayer');
                } finally {
                    client.release();
                }
            } else {
                repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');
            }
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
        repondre('Une erreur est survenue. Veuillez réessayer');
    } finally {
        if (client) {
            client.release();
        }
    }
  }
);

zokou(
  {
    nomCom: 'northaruto👤',
    categorie: 'NORTH🐺🔴'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;
     let client;
    try {
      const data = await getData('12');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `.                     *👤𝗜𝗡𝗙𝗢𝗦 𝗗𝗘 𝗝𝗢𝗨𝗘𝗨𝗥𝗦👤*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
◇ *Pseudo👤*: ${data.e1}
◇ *Position Continentale🌍:* ${data.e23}
◇ *Division🛡️*: ${data.e2}
◇ *Points de talent XP⭐*: ${data.e10}⭐
◇ *Rang 🎖️*:${data.e4}
◇ *Classe🏆*: ${data.e3}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Golds🧭*: ${data.e5} G🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *NΞO points🔸*:  ${data.e9}🔸 
◇ *Coupons🎟*:  ${data.e8}🎟
◇ *Gift Box🎁*:${data.e7} 🎁

                             *🏆𝗣𝗔𝗟𝗠𝗔𝗥𝗘𝗦🏆*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🎴𝗖𝗔𝗥𝗗𝗦🎴*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
${data.e17}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🔷𝗡Ξ𝗢🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/219e7e8d796b7b4e1ec9d.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        const proConfig = {
                connectionString: dbUrl,
                ssl: {
                    rejectUnauthorized: false,
                },
            };

            const { Pool } = require('pg');
            const pool = new Pool(proConfig);
            client = await pool.connect();

            if (superUser) {
                let colonnesJoueur = {
                    pseudo: "e1",
                    division: "e2",
                    classe: "e3",
                    rang: "e4",
                    golds: "e5",
                    neocoins: "e6",
                    gift_box: "e7",
                    coupons: "e8",
                    np: "e9",
                    talent: "e10",
                    victoires: "e12",
                    defaites: "e13",
                    trophees: "e14",
                    tos: "e15",
                    awards: "e16",
                    cards: "e17",
                    globes: "e22", 
                    pos: "e23"
                };

                let updates = [];
                let i = 0;

                while (i < arg.length) {
                    let object = arg[i];
                    let signe = arg[i + 1];
                    let valeur = arg[i + 2];
                    let texte = [];
                    i += 2;

                    // Collecte tout le texte jusqu'à ce qu'un mot clé soit rencontré
                    while (i < arg.length && !colonnesJoueur[arg[i]]) {
                        texte.push(arg[i]);
                        i++;
                    }

                    let colonneObjet = colonnesJoueur[object];
                    let newValue;
                    let oldValue;

                    if (signe === '+' || signe === '-') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 12`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        newValue = eval(`${oldValue} ${signe} ${valeur}`);
                    } else if (signe === '=' || signe === 'add' || signe === 'supp') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 12`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        if(signe === '=') {
                            newValue = `${texte.join(' ')}`;
                        } else if (signe === 'add') {
                            newValue = `${oldValue} ${texte.join(' ')}`;
                        } else if (signe === 'supp') {
                            const regex = new RegExp(`\\b${normalizeText(texte.join(' '))}\\b`, 'gi');
                            newValue = normalizeText(oldValue).replace(regex, '').trim();
                        }
                    } else {
                        console.log("Signe invalide.");
                        repondre('Une erreur est survenue. Veuillez entrer correctement les données.');
                        return;
                    }

                    updates.push({ colonneObjet, newValue, oldValue, object });
                }

                try {
                    await client.query('BEGIN');

                    for (const update of updates) {
                        const query = `UPDATE northdiv SET ${update.colonneObjet} = $1 WHERE id = 12`;
                        await client.query(query, [update.newValue]);
                    }

                    await client.query('COMMIT');

                    const messages = updates.map(update => `⚙ Object: ${update.object}\n💵 Ancienne Valeur: ${update.oldValue}\n💵 Nouvelle Valeur: ${update.newValue}`).join('\n\n');
                    await repondre(`Données du joueur mises à jour pour:\n\n${messages}`);
                } catch (error) {
                    await client.query('ROLLBACK');
                    console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
                    repondre('Une erreur est survenue lors de la mise à jour des données. Veuillez réessayer');
                } finally {
                    client.release();
                }
            } else {
                repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');
            }
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
        repondre('Une erreur est survenue. Veuillez réessayer');
    } finally {
        if (client) {
            client.release();
        }
    }
  }
);

zokou(
  {
    nomCom: 'northeoza👤',
    categorie: 'NORTH🐺🔴'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;
     let client;
    try {
      const data = await getData('13');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `.                     *👤𝗜𝗡𝗙𝗢𝗦 𝗗𝗘 𝗝𝗢𝗨𝗘𝗨𝗥𝗦👤*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
◇ *Pseudo👤*: ${data.e1}
◇ *Position Continentale🌍:* ${data.e23}
◇ *Division🛡️*: ${data.e2}
◇ *Points de talent XP⭐*: ${data.e10}⭐
◇ *Rang 🎖️*:${data.e4}
◇ *Classe🏆*: ${data.e3}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Golds🧭*: ${data.e5} G🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *NΞO points🔸*:  ${data.e9}🔸 
◇ *Coupons🎟*:  ${data.e8}🎟
◇ *Gift Box🎁*:${data.e7} 🎁

                             *🏆𝗣𝗔𝗟𝗠𝗔𝗥𝗘𝗦🏆*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🎴𝗖𝗔𝗥𝗗𝗦🎴*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
${data.e17}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🔷𝗡Ξ𝗢🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/4fc0cc36b556d4c7ad4d9.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        const proConfig = {
                connectionString: dbUrl,
                ssl: {
                    rejectUnauthorized: false,
                },
            };

            const { Pool } = require('pg');
            const pool = new Pool(proConfig);
            client = await pool.connect();

            if (superUser) {
                let colonnesJoueur = {
                    pseudo: "e1",
                    division: "e2",
                    classe: "e3",
                    rang: "e4",
                    golds: "e5",
                    neocoins: "e6",
                    gift_box: "e7",
                    coupons: "e8",
                    np: "e9",
                    talent: "e10",
                    victoires: "e12",
                    defaites: "e13",
                    trophees: "e14",
                    tos: "e15",
                    awards: "e16",
                    cards: "e17",
                    globes: "e22", 
                    pos: "e23"
                };

                let updates = [];
                let i = 0;

                while (i < arg.length) {
                    let object = arg[i];
                    let signe = arg[i + 1];
                    let valeur = arg[i + 2];
                    let texte = [];
                    i += 2;

                    // Collecte tout le texte jusqu'à ce qu'un mot clé soit rencontré
                    while (i < arg.length && !colonnesJoueur[arg[i]]) {
                        texte.push(arg[i]);
                        i++;
                    }

                    let colonneObjet = colonnesJoueur[object];
                    let newValue;
                    let oldValue;

                    if (signe === '+' || signe === '-') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 13`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        newValue = eval(`${oldValue} ${signe} ${valeur}`);
                    } else if (signe === '=' || signe === 'add' || signe === 'supp') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 13`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        if(signe === '=') {
                            newValue = `${texte.join(' ')}`;
                        } else if (signe === 'add') {
                            newValue = `${oldValue} ${texte.join(' ')}`;
                        } else if (signe === 'supp') {
                            const regex = new RegExp(`\\b${normalizeText(texte.join(' '))}\\b`, 'gi');
                            newValue = normalizeText(oldValue).replace(regex, '').trim();
                        }
                    } else {
                        console.log("Signe invalide.");
                        repondre('Une erreur est survenue. Veuillez entrer correctement les données.');
                        return;
                    }

                    updates.push({ colonneObjet, newValue, oldValue, object });
                }

                try {
                    await client.query('BEGIN');

                    for (const update of updates) {
                        const query = `UPDATE northdiv SET ${update.colonneObjet} = $1 WHERE id = 13`;
                        await client.query(query, [update.newValue]);
                    }

                    await client.query('COMMIT');

                    const messages = updates.map(update => `⚙ Object: ${update.object}\n💵 Ancienne Valeur: ${update.oldValue}\n💵 Nouvelle Valeur: ${update.newValue}`).join('\n\n');
                    await repondre(`Données du joueur mises à jour pour:\n\n${messages}`);
                } catch (error) {
                    await client.query('ROLLBACK');
                    console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
                    repondre('Une erreur est survenue lors de la mise à jour des données. Veuillez réessayer');
                } finally {
                    client.release();
                }
            } else {
                repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');
            }
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
        repondre('Une erreur est survenue. Veuillez réessayer');
    } finally {
        if (client) {
            client.release();
        }
    }
  }
);

zokou(
  {
    nomCom: 'northlone👤',
    categorie: 'NORTH🐺🔴'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;
     let client;
    try {
      const data = await getData('14');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `.                     *👤𝗜𝗡𝗙𝗢𝗦 𝗗𝗘 𝗝𝗢𝗨𝗘𝗨𝗥𝗦👤*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
◇ *Pseudo👤*: ${data.e1}
◇ *Position Continentale🌍:* ${data.e23}
◇ *Division🛡️*: ${data.e2}
◇ *Points de talent XP⭐*: ${data.e10}⭐
◇ *Rang 🎖️*:${data.e4}
◇ *Classe🏆*: ${data.e3}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Golds🧭*: ${data.e5} G🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *NΞO points🔸*:  ${data.e9}🔸 
◇ *Coupons🎟*:  ${data.e8}🎟
◇ *Gift Box🎁*:${data.e7} 🎁

                             *🏆𝗣𝗔𝗟𝗠𝗔𝗥𝗘𝗦🏆*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  
*💫Neo Awards*: ${data.e16}   *🎖️Globes*: ${data.e22}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🎴𝗖𝗔𝗥𝗗𝗦🎴*
▓ ▓ ▓ ▓▓▓▓▓▓ ▓▓▓ ▓ ▓
${data.e17}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                       *🔷𝗡Ξ𝗢🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/5901ab31b72ad80f1c498.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        const proConfig = {
                connectionString: dbUrl,
                ssl: {
                    rejectUnauthorized: false,
                },
            };

            const { Pool } = require('pg');
            const pool = new Pool(proConfig);
            client = await pool.connect();

            if (superUser) {
                let colonnesJoueur = {
                    pseudo: "e1",
                    division: "e2",
                    classe: "e3",
                    rang: "e4",
                    golds: "e5",
                    neocoins: "e6",
                    gift_box: "e7",
                    coupons: "e8",
                    np: "e9",
                    talent: "e10",
                    victoires: "e12",
                    defaites: "e13",
                    trophees: "e14",
                    tos: "e15",
                    awards: "e16",
                    cards: "e17",
                    globes: "e22", 
                    pos: "e23"
                };

                let updates = [];
                let i = 0;

                while (i < arg.length) {
                    let object = arg[i];
                    let signe = arg[i + 1];
                    let valeur = arg[i + 2];
                    let texte = [];
                    i += 2;

                    // Collecte tout le texte jusqu'à ce qu'un mot clé soit rencontré
                    while (i < arg.length && !colonnesJoueur[arg[i]]) {
                        texte.push(arg[i]);
                        i++;
                    }

                    let colonneObjet = colonnesJoueur[object];
                    let newValue;
                    let oldValue;

                    if (signe === '+' || signe === '-') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 14`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        newValue = eval(`${oldValue} ${signe} ${valeur}`);
                    } else if (signe === '=' || signe === 'add' || signe === 'supp') {
                        const query = `SELECT ${colonneObjet} FROM northdiv WHERE id = 14`; 
                        const result = await client.query(query);
                        oldValue = result.rows[0][colonneObjet];
                        if(signe === '=') {
                            newValue = `${texte.join(' ')}`;
                        } else if (signe === 'add') {
                            newValue = `${oldValue} ${texte.join(' ')}`;
                        } else if (signe === 'supp') {
                            const regex = new RegExp(`\\b${normalizeText(texte.join(' '))}\\b`, 'gi');
                            newValue = normalizeText(oldValue).replace(regex, '').trim();
                        }
                    } else {
                        console.log("Signe invalide.");
                        repondre('Une erreur est survenue. Veuillez entrer correctement les données.');
                        return;
                    }

                    updates.push({ colonneObjet, newValue, oldValue, object });
                }

                try {
                    await client.query('BEGIN');

                    for (const update of updates) {
                        const query = `UPDATE northdiv SET ${update.colonneObjet} = $1 WHERE id = 14`;
                        await client.query(query, [update.newValue]);
                    }

                    await client.query('COMMIT');

                    const messages = updates.map(update => `⚙ Object: ${update.object}\n💵 Ancienne Valeur: ${update.oldValue}\n💵 Nouvelle Valeur: ${update.newValue}`).join('\n\n');
                    await repondre(`Données du joueur mises à jour pour:\n\n${messages}`);
                } catch (error) {
                    await client.query('ROLLBACK');
                    console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
                    repondre('Une erreur est survenue lors de la mise à jour des données. Veuillez réessayer');
                } finally {
                    client.release();
                }
            } else {
                repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');
            }
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
        repondre('Une erreur est survenue. Veuillez réessayer');
    } finally {
        if (client) {
            client.release();
        }
    }
  }
);

