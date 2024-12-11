const { zokou } = require('../framework/zokou');
const fs = require('fs');
const users = require('../fredie255/northdiv');
const s = require("../set");
const dbUrl = s.DB;

const generateRandomNumbers = (min, max, count) => {
  const numbers = new Set();
  while (numbers.size < count) {
    numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return Array.from(numbers);
};

const generateRewards = () => {
  const rewards = ['10🔷', '50.000 G🧭', '10🎟'];
  return rewards.sort(() => 0.5 - Math.random()).slice(0, 3);
};

zokou(
  {
    nomCom: 'roulette',
    reaction: '🎰',
    categorie: 'LUCKY_GAMES🎰'
  },
  async (origineMessage, zk, commandeOptions) => {
    const { ms, repondre, auteurMessage, auteurMsgRepondu, msgRepondu, arg } = commandeOptions;
    try {
      // Vérifier si le message provient des groupes spécifiés
      const authorizedChats = [
  '120363024647909493@g.us',
  '120363307444088356@g.us',
  '22651463203@s.whatsapp.net',
  '22605463559@s.whatsapp.net'
];
      if (authorizedChats.includes(origineMessage)) {
      const user = users.find(item => item.id === auteurMessage);
        let client;
        if (user) {
          const proConfig = {
            connectionString: dbUrl,
            ssl: {
              rejectUnauthorized: false,
            },
          };

          const { Pool } = require('pg');
          const pool = new Pool(proConfig);
          client = await pool.connect();
          
          // Exécuter la requête pour récupérer les valeurs souhaitées
          const result_np = await client.query(user.get_np);
          const result_nc = await client.query(user.get_nc);
          const result_golds = await client.query(user.get_golds);
          const result_coupons = await client.query(user.get_coupons);

          let valeur_np = result_np.rows[0][user.cln_np];
          let valeur_nc = result_nc.rows[0][user.cln_nc];
          let valeur_golds = result_golds.rows[0][user.cln_golds];
          let valeur_coupons = result_coupons.rows[0][user.cln_coupons];

          let numbers = generateRandomNumbers(0, 50, 50);
          let winningNumbers = generateRandomNumbers(0, 50, 3);
          let rewards = generateRewards();
          //repondre(winningNumbers.join(', '));
          let liena = 'https://telegra.ph/file/9a411be3bf362bd0bcea4.jpg';
          let msga = `*🎰TRY YOUR LUCK🥳 !!*
▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬🎉🎉🎉
Play number roulette and get a reward for the correct number you choose from the *⃣ 5️0️⃣*. *⚠️you have 2 attempts and to play you must pay 2🔶*
▔▔🎊▔🎊▔🎊▔▔🎊▔▔🎊▔🎊▔🎊
*\`${numbers.join(', ')}\`*
▔▔🎊▔🎊▔🎊▔▔🎊▔▔🎊▔🎊▔🎊
▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬🎉🎉🎉
*\`+Cadeaux\`* (🎁 To See The Possible Rewards)

*🎊Do You Want To Try Your Luck?* (1min)
✅: \`Oui\`
❌: \`Non\``; // Texte complet

          await zk.sendMessage(origineMessage, { image: { url: liena }, caption: msga }, { quoted: ms });

          const getConfirmation = async (attempt = 1) => {
            if (attempt > 3) {
              await repondre('*❌ Game Cancelled : Too Many Atempts.*');
              throw new Error('TooManyAttempts');
            }

            try {
              const rep = await zk.awaitForMessage({
                sender: auteurMessage,
                chatJid: origineMessage,
                timeout: 60000 // 60 secondes
              });

              let response;
              try {
                response = rep.message.extendedTextMessage.text;
              } catch {
                response = rep.message.conversation;
              }

              if (response.toLowerCase() === 'oui') {
                return true;
              } else if (response.toLowerCase() === 'non') {
                await repondre('Jeu annulé.');
                throw new Error('GameCancelledByUser');
              } else {
                await repondre('Veuillez répondre par Oui ou Non.');
                return await getConfirmation(attempt + 1);
              }
            } catch (error) {
              if (error.message === 'Timeout') {
                await repondre('*❌ Délai d\'attente expiré*');
                throw error;
              } else {
                throw error;
              }
            }
          };

          let confirmation;
          try {
            confirmation = await getConfirmation();
            if (valeur_np < 1) {
              return  repondre('Insufficient number of Neo points');
            } else {
              await client.query(user.upd_np, [valeur_np - 1]);   
              //repondre('np retiré');
            }
          } catch (error) {
            return; // Gestion de l'erreur, jeu annulé
          }

          const getChosenNumber = async (isSecondChance = false, attempt = 1) => {
            if (attempt > 3) {
              await repondre('*❌ Game cancelled : Too many attempts.*');
              throw new Error('TooManyAttempts');
            }

            let msg = isSecondChance 
              ? '🎊😃: *You have a second chance! Choose another number. You have 1 min ⚠️* (Reply to this message)'
              : '🎊😃: *Choose a number. You have 1 min ⚠️ * (Reply to this message)';
            let lien = isSecondChance 
              ? 'https://i.ibb.co/SPY5b86/image.jpg'
              : 'https://telegra.ph/file/9a411be3bf362bd0bcea4.jpg';

            await zk.sendMessage(origineMessage, { image: { url: lien }, caption: msg }, { quoted: ms });

            try {
              const rep = await zk.awaitForMessage({
                sender: auteurMessage,
                chatJid: origineMessage,
                timeout: 60000 // 60 secondes
              });

              let chosenNumber;
              try {
                chosenNumber = rep.message.extendedTextMessage.text;
              } catch {
                chosenNumber = rep.message.conversation;
              }

              chosenNumber = parseInt(chosenNumber);

              if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 50) {
                await repondre('Please choose one of the numbers offered.');
                return await getChosenNumber(isSecondChance, attempt + 1);
              }

              return chosenNumber;
            } catch (error) {
              if (error.message === 'Timeout') {
                await repondre('*❌ Délai d\'attente expiré*');
                throw error;
              } else {
                throw error;
              }
            }
          };

          const checkWinningNumber = async (isSecondChance = false, number) => {
            if (winningNumbers.includes(number)) {
              let rewardIndex = winningNumbers.indexOf(number);
              let reward = rewards[rewardIndex];
              let msgc = `🎊🥳😍 ▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬*✅EXCELLENT! It was the right number ${reward}! Go ahead you can still earn more ▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬😍🥳🎊`; // Message de victoire
              let lienc = 'https://telegra.ph/file/dc157f349cd8045dff559.jpg';

              switch (reward) {
                case '10🔷':
                  await client.query(user.upd_nc, [valeur_nc + 10]);
                  break;
                case '50.000 G🧭':
                  await client.query(user.upd_golds, [valeur_golds + 50000]);
                  break;
                case '10🎟':
                  await client.query(user.upd_coupons, [valeur_coupons + 10]);
                  break;
                default:
                  await repondre('Unknown reward');
              }

              return { success: true, message: msgc, image: lienc };
            } else {
              if (isSecondChance) {
                // Message d'échec final après la deuxième tentative
                let msgd = `😫😖💔 ▭▬▭▬▭▬▭▬▭▬▭▬❌NO! It was the wrong number! Too bad you were almost there💔▭▬▭▬▭▬▭▬▭▬▭▬😫😖💔`;
                let liend = 'https://telegra.ph/file/222cefbcd18ba50012d05.jpg';
                return { success: false, message: msgd, image: liend };
              } else {
                // Ne rien envoyer après le premier échec
                return { success: false, message: null, image: null };
              }
            }
          };

          try {
            const chosenNumber1 = await getChosenNumber();
            const result1 = await checkWinningNumber(false, chosenNumber1);

            if (result1.success) {
              await zk.sendMessage(origineMessage, { image: { url: result1.image }, caption: result1.message }, { quoted: ms });
            } else {
              // Si échec à la première tentative, proposer une deuxième chance
              if (result1.message) {
                await zk.sendMessage(origineMessage, { image: { url: result1.image }, caption: result1.message }, { quoted: ms });
              }

              try {
                const chosenNumber2 = await getChosenNumber(true);
                const result2 = await checkWinningNumber(true, chosenNumber2);

                if (result2.success) {
                  await zk.sendMessage(origineMessage, { image: { url: result2.image }, caption: result2.message }, { quoted: ms });
                } else {
                  if (result2.message) {
                    await zk.sendMessage(origineMessage, { image: { url: result2.image }, caption: result2.message }, { quoted: ms });
                  }
                }
              } catch (error) {
                return; // Erreur ou délai expiré lors de la deuxième chance
              }
            }
          } catch (error) {
            return; // Gestion de l'erreur ou délai expiré
          }
        } else { repondre("Votre identifiant n'existe pas") 
        }
        } else {
          return repondre("Commande non autorisée pour ce chat.");
      }
    } catch (error) {
      console.error('Erreur', error);
    }
  }
);
