const {ezra} = require("../fredi/ezra");
const axios = require('axios');



ezra({
    nomCom: "chifumi",
    categorie: "Games",
    reaction: "🪫"
  },
  async (origineMessage, zk, commandeOptions) => {
    const { repondre, ms, auteurMessage, auteurMsgRepondu, msgRepondu , arg , idBot } = commandeOptions;

    if (msgRepondu) {
        zk.sendMessage(origineMessage, {
            text: `@${auteurMessage.split('@')[0]} invite @${auteurMsgRepondu.split('@')[0]} To play the game of chifoumi (rock-paper-scissors);
To accept the challenge, type yes`,
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

              let msg1 = `*player 1 :* @${auteurMsgRepondu.split('@')[0]}
*player 2 :* @${auteurMessage.split('@')[0]}

*Ruler :* The game will start soon, you have 1 minute maxi second to make a choice in my discussion, deprive everyone of their turn ;`
                
      zk.sendMessage(origineMessage,{text : msg1,mentions : [auteurMessage, auteurMsgRepondu]} ) ;

      let msg2 = `You have the right to 3 choices ;

   rock
   paper
   scissors 

 Please send your choice`
 let players = [auteurMessage,auteurMsgRepondu] ;
let choix = [] ;

 try {
  
        for (const player of players) {
        
         zk.sendMessage(origineMessage,{ text : `@${player.split("@")[0]} Please head to this discussion to make a choice https://wa.me/${idBot.split('@')[0]} ` , mentions : [player]})
            zk.sendMessage(player,{text : msg2}) ;
             
          const msgrecu =  await zk.awaitForMessage({
                sender: player,
                chatJid: player,
                timeout: 30000 // 30 secondes
            });
           console.log('here is the message from' + ' ' + player)
     console.log(msgrecu)

            choix.push(msgrecu.message.extendedTextMessage.text.toLowerCase()) ;
         
        }

        console.log(choix)
  const choixPossibles = ["rock", "paper", "scissors"];    
  
  const choixJoueur1 = choix[0] ;
const choixJoueur2 = choix[1] ;


if (!choixPossibles.includes(choixJoueur1) || !choixPossibles.includes(choixJoueur2)) {
    // Gérez le cas où les choix ne sont pas valides
    zk.sendMessage(origineMessage,{ text : `*player 1 :* @${auteurMsgRepondu.split('@')[0]}
*player 2 :* @${auteurMessage.split('@')[0]}

*results :* one or both choices are invalid.`, mentions : [auteurMessage, auteurMsgRepondu] });

} else if (choixJoueur1 === choixJoueur2) {
    // C'est une égalité
    zk.sendMessage(origineMessage,{ text : `*player 1 :* @${auteurMsgRepondu.split('@')[0]} a choisi(e) *${choixJoueur2}* 
*player 2 :* @${auteurMessage.split('@')[0]} a choisi(e) *${choixJoueur1}*

results : so there is a draw` , mentions : [auteurMessage, auteurMsgRepondu] });
} else if (
    (choixJoueur1 === "rock" && choixJoueur2 === "scissors") ||
    (choixJoueur1 === "paper" && choixJoueur2 === "rock") ||
    (choixJoueur1 === "scissors" && choixJoueur2 === "paper")
) {
    // Joueur 1 gagne
    zk.sendMessage(origineMessage,{ text : `*player 1 :* @${auteurMsgRepondu.split('@')[0]} a selected(e) *${choixJoueur2}* 
*player 2 :* @${auteurMessage.split('@')[0]} a selected(e) *${choixJoueur1}*

*result :* @${auteurMessage.split('@')[0]} wins the game ` ,mentions : [auteurMessage, auteurMsgRepondu] });
} else {
    // Joueur 2 gagne
    zk.sendMessage(origineMessage,{ text : `*player 1 :* @${auteurMsgRepondu.split('@')[0]} a selected(e) *${choixJoueur2}* 
*player 2 :* @${auteurMessage.split('@')[0]} a selected(e) *${choixJoueur1}*

*result :* @${auteurMsgRepondu.split('@')[0]} wins the game ` , mentions : [auteurMessage, auteurMsgRepondu] });
}

           } catch (error) {
            if (error.message === 'Timeout') {
                // Le temps d'attente est écoulé
                zk.sendMessage(origineMessage,{ text : `*player 1 :* @${auteurMsgRepondu.split('@')[0]}
*player 2 :* @${auteurMessage.split('@')[0]}

*result :* our players took too long to decide;our players took too long to decide;
Therefore, the game is canceledTherefore, the game is canceled` , mentions : [auteurMessage, auteurMsgRepondu]});
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
                zk.sendMessage(origineMessage,{ text : `@${auteurMsgRepondu.split('@')[0]} took too long to respond to the invitation from @${auteurMessage.split('@')[0]} ;
Therefore, the game is canceled`, mentions : [auteurMessage, auteurMsgRepondu]});
            } else {
                // Gérez d'autres erreurs ici si nécessaire
                console.error(error);
            }
        }
    }
});


ezra(
    { nomCom: "quizz", categorie: "Games", reaction: "🎮" },
    async (origineMessage, zk, commandeOptions) => {
        const { repondre, auteurMessage } = commandeOptions;

        try {
         let quizz = await axios.get("https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=1&difficulty=facile") ;

         
   let msg = `     Lucky-Quizz-Games

*Category :* ${quizz.data.quizzes[0].category}
*Question :* ${quizz.data.quizzes[0].question}\n\n*Suggested answers :*\n`
    
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
Enter the number of your choice`
             
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

        repondre("Congratulations, you found the right answer. ;")
    } else {

        repondre("Error end of quiz")
    }

        } catch (error) {
            console.log(error);
        }
    }
);
