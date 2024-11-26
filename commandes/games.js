const {zokou} = require("../framework/zokou");
const axios = require('axios');



zokou({
    nomCom: "chifumi",
    categorie: "Games",
    reaction: "📺"
  },
  async (origineMessage, zk, commandeOptions) => {
    const { repondre, ms, auteurMessage, auteurMsgRepondu, msgRepondu , arg , idBot } = commandeOptions;

    if (msgRepondu) {
        zk.sendMessage(origineMessage, {
            text: `@${auteurMessage.split('@')[0]} invite @${auteurMsgRepondu.split('@')[0]} Pour jouer au jeu de chifoumi (Pierre-feuille-ciseaux);
Pour accepter le défi, tapez oui`,
            mentions: [auteurMessage, auteurMsgRepondu]
        });

        try {
            const repinv = await zk.awaitForMessage({
                sender: auteurMsgRepondu,
                chatJid: origineMessage,
                timeout: 30000 // 30 secondes
            });
   console.log(repinv) ;

            if (repinv.message.conversation.toLowerCase() === 'oui' || repinv.message.extendedTextMessage.text.toLowerCase() === 'oui' ) {

              let msg1 = `*joueur 1 :* @${auteurMsgRepondu.split('@')[0]}
*joueur 2 :* @${auteurMessage.split('@')[0]}

*Regle :* Le jeu va bientot debute , vous avez 1min maxi seconde pour faire un choix dans ma discussion  priver chacun son tours ;`
                
      zk.sendMessage(origineMessage,{text : msg1,mentions : [auteurMessage, auteurMsgRepondu]} ) ;

      let msg2 = `Vous avez droit a 3 choix ;

   pierre
   papier
   ciseaux

 Veillez envoyez votre choix`
 let players = [auteurMessage,auteurMsgRepondu] ;
let choix = [] ;

 try {
  
        for (const player of players) {
        
         zk.sendMessage(origineMessage,{ text : `@${player.split("@")[0]} Veillez vous diriger dans cette discussion pour faire un choix https://wa.me/${idBot.split('@')[0]} ` , mentions : [player]})
            zk.sendMessage(player,{text : msg2}) ;
             
          const msgrecu =  await zk.awaitForMessage({
                sender: player,
                chatJid: player,
                timeout: 30000 // 30 secondes
            });
           console.log('voici le message de' + ' ' + player)
     console.log(msgrecu)

            choix.push(msgrecu.message.extendedTextMessage.text.toLowerCase()) ;
         
        }

        console.log(choix)
  const choixPossibles = ["pierre", "papier", "ciseaux"];    
  
  const choixJoueur1 = choix[0] ;
const choixJoueur2 = choix[1] ;


if (!choixPossibles.includes(choixJoueur1) || !choixPossibles.includes(choixJoueur2)) {
    // Gérez le cas où les choix ne sont pas valides
    zk.sendMessage(origineMessage,{ text : `*joueur 1 :* @${auteurMsgRepondu.split('@')[0]}
*joueur 2 :* @${auteurMessage.split('@')[0]}

*resultat :* l'un ou les deux choix ne sont pas valides.`, mentions : [auteurMessage, auteurMsgRepondu] });

} else if (choixJoueur1 === choixJoueur2) {
    // C'est une égalité
    zk.sendMessage(origineMessage,{ text : `*joueur 1 :* @${auteurMsgRepondu.split('@')[0]} a choisi(e) *${choixJoueur2}* 
*joueur 2 :* @${auteurMessage.split('@')[0]} a choisi(e) *${choixJoueur1}*

resultat : il y'a donc match nul` , mentions : [auteurMessage, auteurMsgRepondu] });
} else if (
    (choixJoueur1 === "pierre" && choixJoueur2 === "ciseaux") ||
    (choixJoueur1 === "papier" && choixJoueur2 === "pierre") ||
    (choixJoueur1 === "ciseaux" && choixJoueur2 === "papier")
) {
    // Joueur 1 gagne
    zk.sendMessage(origineMessage,{ text : `*joueur 1 :* @${auteurMsgRepondu.split('@')[0]} a choisi(e) *${choixJoueur2}* 
*joueur 2 :* @${auteurMessage.split('@')[0]} a choisi(e) *${choixJoueur1}*

*resultat :* @${auteurMessage.split('@')[0]} remporte la partie ` ,mentions : [auteurMessage, auteurMsgRepondu] });
} else {
    // Joueur 2 gagne
    zk.sendMessage(origineMessage,{ text : `*joueur 1 :* @${auteurMsgRepondu.split('@')[0]} a choisi(e) *${choixJoueur2}* 
*joueur 2 :* @${auteurMessage.split('@')[0]} a choisi(e) *${choixJoueur1}*

*resultat :* @${auteurMsgRepondu.split('@')[0]} remporte la partie ` , mentions : [auteurMessage, auteurMsgRepondu] });
}

           } catch (error) {
            if (error.message === 'Timeout') {
                // Le temps d'attente est écoulé
                zk.sendMessage(origineMessage,{ text : `*joueur 1 :* @${auteurMsgRepondu.split('@')[0]}
*joueur 2 :* @${auteurMessage.split('@')[0]}

*resultat :* nos joueurs ont mis trop de temps pour ce decider ;
Par consequent , le jeu est annuler` , mentions : [auteurMessage, auteurMsgRepondu]});
            } else {
                // Gérez d'autres erreurs ici si nécessaire
                console.error(error);
            }
           }
        
           } else {
                repondre('invitation refuse') ;
            }
            

        } catch (error) {
            if (error.message === 'Timeout') {
                // Le temps d'attente est écoulé
                zk.sendMessage(origineMessage,{ text : `@${auteurMsgRepondu.split('@')[0]} a mis trop de temps pour repondre a l'invitation de @${auteurMessage.split('@')[0]} ;
Par consequent , le jeu est annuler`, mentions : [auteurMessage, auteurMsgRepondu]});
            } else {
                // Gérez d'autres erreurs ici si nécessaire
                console.error(error);
            }
        }
    }
});


zokou(
    { nomCom: "quizz", categorie: "Games", reaction: "👨🏿‍💻" },
    async (origineMessage, zk, commandeOptions) => {
        const { repondre, auteurMessage } = commandeOptions;

        try {
         let quizz = await axios.get("https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=1&difficulty=facile") ;

         
   let msg = `     Hacking-Quizz-Games

*Categorie :* ${quizz.data.quizzes[0].category}
*Question :* ${quizz.data.quizzes[0].question}\n\n*Propositon de reponses :*\n`
    
let Answers =[] ;
       for (const reponse of quizz.data.quizzes[0].badAnswers) {
        
         Answers.push(reponse)
     
       } ;

       Answers.push(quizz.data.quizzes[0].answer) ;
    
      async function shuffleArray(array) {
        const shuffledArray = array.slice(); // Copie du tableau d'origine
      
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
      
        return shuffledArray;
      } ;
 
 let choix = await shuffleArray(Answers) ;

 for (let i = 0; i < choix.length; i++) {
    msg += `*${i + 1} :* ${choix[i]}\n`;
}


     msg+= `
Entrez le chiffre de votre choix`
             
       repondre(msg) ;

       let rep = await  zk.awaitForMessage({
        sender: auteurMessage,
        chatJid : origineMessage,
        timeout: 15000 // 30 secondes
    });
   let repse ;  
    try {
        repse = rep.message.extendedTextMessage.text
    } catch {
        repse = rep.message.conversation
    } ;

    if (choix[repse - 1 ] == quizz.data.quizzes[0].answer ) {

        repondre("Bravo vous avez trouvez la bonne reponse ;")
    } else {

        repondre("Erreur fin du quizz")
    }

        } catch (error) {
            console.log(error);
        }
    }
);
