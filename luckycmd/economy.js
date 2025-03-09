const { ezra } = require('../fredi/ezra'); // Ensure this module is correctly imported
const Config = require('../set');           // Your configuration file
const eco = require('discord-mongoose-economy');  // Economy module

// Connect to MongoDB if applicable (assumes you have a global variable isMongodb and mongodb connection string)
let economyConnected = false;
try {
  // Replace "isMongodb" and "mongodb" with your actual connection check and string
  if (global.isMongodb && global.mongodb) { 
    economyConnected = eco.connect(global.mongodb);
    console.log("Connected with Discord economy (Lucky MD)!");
  }
} catch (e) { 
  economyConnected = false; 
  console.error("Economy connection failed:", e);
}

const sck = require('../luckydatabase/groupdb'); // Adjust the path if needed

// ---------------------------
// DAILY COMMAND
// ---------------------------
ezra({
  nomCom: "daily",
  desc: "Claim your daily gold in Lucky MD.",
  categorie: "economy",
  reaction: "💲",
}, async (dest, zk, commandeOptions) => {
  // Destructure needed options (ensure these values are available in your Lucky MD context)
  const { message, reply, arg } = commandeOptions;
  
  try {
    // Retrieve group economy settings from your database (sck)
    let groupData = await sck.findOne({ id: message.chat }) || {};
    if (groupData.economy === "false") return reply("Economy is not active in this group.");
    
    // Check if the command is used in a group – replace with your actual check
    if (!message.isGroup) return reply("This command is only available in group chats.");
    
    // Join command arguments for daily message; default message if none provided
    let dailyMsg = (arg && arg.length > 0) ? arg.join(' ') : 'No message provided';
    
    // Claim daily reward (500 units, adjustable)
    const daily = await eco.daily(message.sender, "Lucky", 500);
    if (daily.cd) {
      return reply(`🧧 You already claimed your daily reward. Come back in ${daily.cdL}.`);
    } else {
      return reply(`You claimed your daily reward of ${daily.amount} 🪙 today!`);
    }
  } catch (e) {
    console.error("Error in daily command:", e);
  }
});

// ---------------------------
// RESET WALLET COMMAND
// ---------------------------
ezra({
  nomCom: "resetwallet",
  desc: "Reset the wallet of the quoted user.",
  categorie: "economy",
  reaction: "💷"
}, async (dest, zk, commandeOptions) => {
  const { message, reply } = commandeOptions;
  try {
    // Fetch or create group data
    let groupData = await sck.findOne({ id: message.chat }) || await sck.new({ id: message.chat });
    if (groupData.economy === "false") return message.reply("Economy is not active in this group.");
    
    // Only allow if sender is the creator/owner; adjust this check with your actual logic
    if (!message.isCreator) return message.reply("This command is reserved for the owner.");
    
    // Get the target user (from mentioned JID or context)
    let targetUser = message.mentionedJid ? message.mentionedJid[0] : message.msg.contextInfo?.participant;
    if (!targetUser) return message.reply("Please mention a user to reset their wallet.");
    
    // Retrieve target user's balance and deduct entire wallet amount
    const balance = await eco.balance(targetUser, "Lucky");
    await eco.deduct(targetUser, "Lucky", balance.wallet);
    return message.reply(`User @${targetUser.split('@')[0]} has been reset. Their wallet is now empty.`);
  } catch (e) {
    console.error("Error in resetwallet command:", e);
  }
});

// ---------------------------
// CAPACITY/UPGRADE COMMAND
// ---------------------------
ezra({
  nomCom: "capacity",
  desc: "Update bank capacity.",
  categorie: "economy",
  reaction: "💷"
}, async (dest, zk, commandeOptions) => {
  const { message, reply, match } = commandeOptions;
  try {
    let groupData = await sck.findOne({ id: message.chat }) || await sck.new({ id: message.chat });
    if (groupData.economy === "false") return message.reply("Economy is not active in this group.");
    if (!message.isGroup) return message.reply("This command is only available in group chats.");
    if (!match) return message.reply(`Usage: ${global.prefix || '!'}capacity <value>`);
    
    // Parse capacity upgrade value (example: 1 for 1000 capacity, 2 for 100000, 3 for 10000000)
    let value = match.trim();
    let numericValue = parseInt(value);
    const targetUser = message.mentionedJid ? message.mentionedJid[0] : message.msg.contextInfo?.participant;
    if (!targetUser) return message.reply("Please mention a user.");
    
    const balance = await eco.balance(targetUser, "Lucky");
    switch (value) {
      case '1000':
      case '1':
        if (balance.wallet < 100) return message.reply("You need to pay 100 🪙 to upgrade bank capacity to 1000.");
        await eco.deduct(targetUser, "Lucky", 100);
        await eco.giveCapacity(targetUser, "Lucky", 1000);
        return message.reply(`Bank capacity upgraded to 1000 for @${targetUser.split('@')[0]}.`);
      case '100000':
      case '2':
        if (balance.wallet < 1000) return message.reply("You need to pay 1000 🪙 to upgrade bank capacity to 100000.");
        await eco.deduct(targetUser, "Lucky", 1000);
        await eco.giveCapacity(targetUser, "Lucky", 100000);
        return message.reply(`Bank capacity upgraded to 100000 for @${targetUser.split('@')[0]}.`);
      case '10000000':
      case '3':
        if (balance.wallet < 10000) return message.reply("You need to pay 10000 🪙 to upgrade bank capacity to 10000000.");
        await eco.deduct(targetUser, "Lucky", 10000);
        await eco.giveCapacity(targetUser, "Lucky", 10000000);
        return message.reply(`Bank capacity upgraded to 10000000 for @${targetUser.split('@')[0]}.`);
      default:
        return message.reply("Invalid capacity option provided.");
    }
  } catch (e) {
    console.error("Error in capacity command:", e);
  }
});

// ---------------------------
// DEPOSIT COMMAND
// ---------------------------
ezra({
  nomCom: "deposit",
  desc: "Deposit gold to your bank.",
  categorie: "economy",
  reaction: "💷"
}, async (dest, zk, commandeOptions) => {
  const { message, reply, match } = commandeOptions;
  try {
    let groupData = await sck.findOne({ id: message.chat }) || {};
    if (groupData.economy === "false") return message.reply("Economy is not active in this group.");
    if (!match) return message.reply("Please specify an amount to deposit.");
    
    const amount = parseInt(match.trim());
    const deposit = await eco.deposit(message.sender, "Lucky", amount);
    if (deposit.noten) return message.reply("You don't have enough funds in your wallet.");
    return message.reply(`Successfully deposited ${deposit.amount} 🪙 to your bank.`);
  } catch (e) {
    console.error("Error in deposit command:", e);
  }
});

// ---------------------------
// LEADERBOARD COMMAND (lb)
// ---------------------------
ezra({
  nomCom: "lb",
  desc: "Check the economy leaderboard.",
  categorie: "economy",
  reaction: "💷"
}, async (dest, zk, commandeOptions) => {
  const { message, reply } = commandeOptions;
  try {
    const leaderboard = await eco.lb("Lucky", 10);
    let str = `*Top ${leaderboard.length} users:*\n`;
    let mentions = [];
    for (let i = 0; i < leaderboard.length; i++) {
      let name = message.bot.getName(leaderboard[i].userID);
      str += `*${i+1}.* ${name} (@${leaderboard[i].userID.split('@')[0]}) - Wallet: ${leaderboard[i].wallet}, Bank: ${leaderboard[i].bank}\n\n`;
      mentions.push(leaderboard[i].userID);
    }
    return message.reply(str, { mentions });
  } catch (e) {
    console.error("Error in leaderboard command:", e);
  }
});

// ---------------------------
// TRANSFER COMMAND
// ---------------------------
ezra({
  nomCom: "transfer",
  desc: "Transfer gold from your wallet to another user.",
  categorie: "economy",
  reaction: "💷"
}, async (dest, zk, commandeOptions) => {
  const { message, reply, match } = commandeOptions;
  try {
    let groupData = await sck.findOne({ id: message.chat }) || {};
    if (groupData.economy === "false") return message.reply("Economy is not active in this group.");
    if (!match) return message.reply(`Usage: ${global.prefix || '!'}transfer <amount> @user`);
    
    const args = match.trim().split(" ");
    if (args.length < 2) return message.reply("Please provide both the amount and the user.");
    
    const amount = parseInt(args[0]);
    const targetUser = message.mentionedJid ? message.mentionedJid[0] : message.msg.contextInfo?.participant;
    if (!targetUser) return message.reply("Please mention a valid user.");
    
    const senderBalance = await eco.balance(message.sender, "Lucky");
    if (senderBalance.wallet < amount) return message.reply("Insufficient funds.");
    
    await eco.deduct(message.sender, "Lucky", amount);
    await eco.give(targetUser, "Lucky", amount);
    return message.reply(`Successfully transferred ${amount} 🪙.`);
  } catch (e) {
    console.error("Error in transfer command:", e);
  }
});

// ---------------------------
// WALLET COMMAND
// ---------------------------
ezra({
  nomCom: "wallet",
  desc: "Show your current wallet balance.",
  categorie: "economy",
  reaction: "💷"
}, async (dest, zk, commandeOptions) => {
  const { message, reply } = commandeOptions;
  try {
    let groupData = await sck.findOne({ id: message.chat }) || await sck.new({ id: message.chat });
    if (groupData.economy === "false") return message.reply("Economy is not active in this group.");
    
    const balance = await eco.balance(message.sender, "Lucky");
    return message.reply(`*${message.pushName}'s Wallet:*\n${balance.wallet} 🪙`);
  } catch (e) {
    console.error("Error in wallet command:", e);
  }
});

// ---------------------------
// GIVE COMMAND
// ---------------------------
ezra({
  nomCom: "give",
  desc: "Add money to a user's wallet (admin only).",
  categorie: "economy",
  reaction: "💷"
}, async (dest, zk, commandeOptions) => {
  const { message, reply, match } = commandeOptions;
  try {
    // Only allow if sender is creator/owner
    if (!message.isCreator) return message.reply("Only the owner can use this command.");
    
    const targetUser = message.mentionedJid ? message.mentionedJid[0] : message.msg?.contextInfo?.participant;
    if (!targetUser) return message.reply("Please mention a user to add money.");
    
    const amount = parseInt(match.split(' ')[0]);
    await eco.give(targetUser, "Lucky", amount);
    return message.reply(`Added ${amount} 🪙 to @${targetUser.split('@')[0]}'s wallet.`);
  } catch (e) {
    console.error("Error in give command:", e);
  }
});

// ---------------------------
// BANK COMMAND
// ---------------------------
ezra({
  nomCom: "bank",
  desc: "Show your bank balance and capacity.",
  categorie: "economy",
  reaction: "💷"
}, async (dest, zk, commandeOptions) => {
  const { message, reply } = commandeOptions;
  try {
    let groupData = await sck.findOne({ id: message.chat }) || await sck.new({ id: message.chat });
    if (groupData.economy === "false") return message.reply("Economy is not active in this group.");
    
    const balance = await eco.balance(message.sender, "Lucky");
    return message.reply(`Bank: ${balance.bank} / Capacity: ${balance.bankCapacity}`);
  } catch (e) {
    console.error("Error in bank command:", e);
  }
});

// ---------------------------
// WITHDRAW COMMAND
// ---------------------------
ezra({
  nomCom: "withdraw",
  desc: "Withdraw money from your bank account to your wallet.",
  categorie: "economy",
  reaction: "💷"
}, async (dest, zk, commandeOptions) => {
  const { message, reply, match } = commandeOptions;
  try {
    let groupData = await sck.findOne({ id: message.chat }) || {};
    if (groupData.economy === "false") return message.reply("Economy is not active in this group.");
    if (!match) return message.reply("Please specify an amount to withdraw.");
    
    const amount = parseInt(match.trim());
    const withdraw = await eco.withdraw(message.sender, "Lucky", amount);
    if (withdraw.noten) return message.reply("Insufficient funds in bank.");
    await eco.give(message.sender, "Lucky", amount);
    return message.reply(`Successfully withdrew ${amount} 🪙 from your bank.`);
  } catch (e) {
    console.error("Error in withdraw command:", e);
  }
});

// ---------------------------
// GAMBLE COMMAND
// ---------------------------
ezra({
  nomCom: "gamble",
  desc: "Gamble an amount of money.",
  categorie: "economy",
  reaction: "💷"
}, async (dest, zk, commandeOptions) => {
  const { message, reply, match } = commandeOptions;
  try {
    if (!match) return message.reply("Usage: gamble <amount> <direction>");
    let [amountStr, direction] = match.trim().split(" ");
    const amount = parseInt(amountStr);
    if (!amount || !direction) return message.reply("Please provide a valid amount and direction (left, right, up, down).");
    
    const balance = await eco.balance(message.sender, "Lucky");
    if (balance.wallet < amount) return message.reply("You don't have enough funds to gamble.");
    
    // Simulate gambling: 50% chance to win double, else lose the amount.
    const win = Math.random() < 0.5;
    if (win) {
      await eco.give(message.sender, "Lucky", amount);
      return message.reply(`Congratulations! You won ${amount * 2} 🪙!`);
    } else {
      await eco.deduct(message.sender, "Lucky", amount);
      return message.reply(`Sorry, you lost ${amount} 🪙.`);
    }
  } catch (e) {
    console.error("Error in gamble command:", e);
  }
});

// ---------------------------
// SLOT MACHINE COMMAND (slot2 and slot)
// ---------------------------
ezra({
  nomCom: "slot2",
  desc: "Play the slot machine game.",
  categorie: "economy",
  reaction: "💷"
}, async (dest, zk, commandeOptions) => {
  const { message, reply, match } = commandeOptions;
  try {
    let groupData = await sck.findOne({ id: message.chat }) || {};
    if (groupData.economy === "false") return message.reply("Economy is not active in this group.");
    // For this game, only allow play during weekends (placeholder check)
    const today = new Date();
    if (![0, 5, 6].includes(today.getDay())) {
      return message.reply("Slot machine can only be played on Friday, Saturday, or Sunday.");
    }
    if (!match) return message.reply("Please specify an amount to gamble with.");
    const amount = parseInt(match.trim());
    const balance = await eco.balance(message.sender, "Lucky");
    if (balance.wallet < amount) return message.reply("You don't have enough funds in your wallet.");
    
    // Simulate slot machine result
    const fruits = ['🍎', '🍌', '🍒', '🍇'];
    const result = [fruits[Math.floor(Math.random()*fruits.length)],
                    fruits[Math.floor(Math.random()*fruits.length)],
                    fruits[Math.floor(Math.random()*fruits.length)]];
    let win = (result[0] === result[1] && result[1] === result[2]);
    if (win) {
      await eco.give(message.sender, "Lucky", amount * 2);
      return message.reply(`Slot Result: ${result.join(' ')}\nJackpot! You won ${amount*2} 🪙.`);
    } else {
      await eco.deduct(message.sender, "Lucky", amount);
      return message.reply(`Slot Result: ${result.join(' ')}\nBetter luck next time, you lost ${amount} 🪙.`);
    }
  } catch (e) {
    console.error("Error in slot2 command:", e);
  }
});

// A similar command for "slot" can be added as needed.
