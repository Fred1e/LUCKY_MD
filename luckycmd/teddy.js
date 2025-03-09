const { ezra } = require('../fredi/ezra');

// For Lucky MD, we use a simple object to store per-chat state.
let teddyState = {};

ezra({
  nomCom: "teddy",
  type: "fun",
  info: "Cute teddy command for Lucky MD project",
  on: "text",
  filename: __filename,
}, async (dest, zk, commandeOptions) => {
  // Destructure common values from commandeOptions
  const { message, reply, match } = commandeOptions;
  
  // Check trigger condition: if the message contains "teddy" (case-insensitive)
  let triggerTeddy = (match && match.toLowerCase().includes("teddy"));
  
  // Use message.chat as a unique key per group/chat
  if (triggerTeddy && !teddyState[message.chat]) {
    // Mark this chat as active to prevent repeated spamming
    teddyState[message.chat] = true;
    
    // Define an array of cute teddy emojis and symbols
    let teddyEmojis = [
      '❤', '💕', '😻', '🧡', '💛', '💚', '💙', '🖤', '❣', '💞',
      '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗',
      '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈'
    ];
    
    // Send an initial reply with a cute ASCII teddy
    const { key } = await reply(`(\\_/)\n( •.•)\n/>🤍`);
    
    // Loop through the teddy emojis, updating the message every 500ms
    for (let i = 0; i < teddyEmojis.length; i++) {
      await sleep(500);
      await reply(`(\\_/)\n( •.•)\n/>${teddyEmojis[i]}`, { edit: key });
    }
    
    // Reset state so the command can be triggered again later
    teddyState[message.chat] = false;
  }
});
