


const { ezra } = require("../fredi/ezra");
const s = require("../set");
const fs = require('fs');
const Heroku = require('heroku-client');

// Function to get a description of an environment variable
function getDescriptionFromEnv(varName) {
  const filePath = "./app.json";
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const config = JSON.parse(fileContent);
  return config.env[varName]?.description || "The environment variable description was not found.";
}

// Anti-call function setup
ezra({
  nomCom: 'anticall',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner. or Lucky owner* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "anticall yes" to enable or "anticall no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.ANTI_CALL = 'yes';  // Enable Anti-Call
      responseMessage = 'Anti-call has been enabled.';
      break;

    case "no":
      s.ANTI_CALL = 'no';  // Disable Anti-Call
      responseMessage = 'Anti-call has been disabled.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'anticall yes' or 'anticall no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});


ezra({
  nomCom: 'autoreact',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "autoreact yes" to enable or "autoreact no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.AUTO_REACT = 'yes';  // Enable Areact
      responseMessage = 'Areact has been enabled.';
      break;

    case "no":
      s.AUTO_REACT = 'no';  // Disable Areact
      responseMessage = 'Autoreaction has been disabled.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'autoreact yes' or 'autoreact no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

ezra({
  nomCom: 'autoreadstatus',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "autoreadstatus yes" to enable or "autoreadstatus no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.AUTO_READ_STATUS = 'yes';  // Enable auroread status
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.AUTO_READ_STATUS = 'no';  // Disable autoread status
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'autoreadstatus yes' or 'autoreadstatus no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});
ezra({
  nomCom: 'antidelete',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "antidelete yes" to enable or "antidelete no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.ANTI_DELETE_MESSAGE = 'yes';  // Enable Antidelete
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.ANTI_DELETE_MESSAGE = 'no';  // Disable antidelete
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'antidelete yes' or 'antidelete no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

ezra({
  nomCom: 'autodownloadstatus',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "downloadstatus yes" to enable or "downloadstatus no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.AUTO_DOWNLOAD_STATUS = 'yes';  // Enable Autodownloadstatus
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.AUTO_DOWNLOAD_STATUS = 'no';  // Disable autodownload status
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'autodownloadstatus yes' or 'autodownloadstatus no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

ezra({
  nomCom: 'startingmessage',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "startingmessage yes" to enable or "startingmessage no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.STARTING_BOT_MESSAGE = 'yes';  // Enable startingmessage
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.STARTING_BOT_MESSAGE = 'no';  // Disable startmessage
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'startingmessage yes' or 'startingmessage no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

ezra({
  nomCom: 'autoreadmessage',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "autoreadmessage yes" to enable or "autoreadmessage no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.AUTO_READ = 'yes';  // Enable Autoread
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.AUTO_READ = 'no';  // Disable read message
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'auyoreadmessage yes' or auto'readmessage no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

ezra({
  nomCom: 'pm-permit',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "pm-permit yes" to enable or "pm-permit no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.PM_PERMIT = 'yes';  // Enable pm
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.PM_PERMIT = 'no';  // Disable pm
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'pm-permit yes' or 'pm-permit no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});
ezra({
  nomCom: 'autosavecontact',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "autosavecontact yes" to enable or "autosavecontact no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.AUTO_SAVE_CONTACTS = 'yes';  // Enable autosavecontact
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.AUTO_SAVE_CONTACTS = 'no';  // Disable autosavecontact
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'autosavecontact yes' or 'autosavecontact no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});
ezra({
  nomCom: 'autoreply',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "autoreply yes" to enable or "autoreply no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.AUTO_REPLY = 'yes';  // Enable autoreply
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.AUTO_REPLY = 'no';  // Disable autoreply
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'autoreply yes' or 'autoreply no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

ezra({
  nomCom: 'autobio',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "autobio yes" to enable or "autobio no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.AUTO_BIO = 'yes';  // Enable autobio
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.AUTO_BIO = 'no';  // Disable autobio
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'autobio yes' or 'autobio no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

ezra({
  nomCom: 'publicmode',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "publicmode yes" to enable or "publicmode no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.PUBLIC_MODE = 'yes';  // Enable Publicmode
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.PUBLIC_MODE = 'no';  // Disable Publicmode
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'publicmode yes' or 'publicmode no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

ezra({
  nomCom: 'autorecord',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "autorecord yes" to enable or "autorecord no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.ETAT = '3';  // Enable Autorecord
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.ETAT = 'no';  // Disable Autorecord
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'autorecord yes' or 'autorecord no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

ezra({
  nomCom: 'autotyping',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "autotyping yes" to enable or "autotyping no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.ETAT = '2';  // Enable Autotyping
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.ETAT = 'no';  // Disable Autotyping
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'autotyping yes' or 'autotyping no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

ezra({
  nomCom: 'alwaysonline',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "alwaysonline yes" to enable or "alwaysonline no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.ETAT = '1';  // Enable Alwaysonline
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.ETAT = 'no';  // Disable Alwaysonline
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'alwaysonline yes' or 'alwaysonline no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

ezra({
  nomCom: 'privatemode',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "privatemode yes" to enable or "privatemode no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.MODE = 'no';  // Enable Autodownloadstatus
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.MODE = 'yes';  // Disable public
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'privatemode yes' or 'privatemode no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});
ezra({
  nomCom: 'autoreactstatus',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "autoreactstatus yes" to enable or "autoreactstatus no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.AUTO_REACT_STATUS = 'no';  // Enable Autoreactstatus
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.AUTO_REACT_TATUS = 'yes';  // Disable Autoreactstatus
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'autoreactstatus yes' or 'autoreactstatus no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});
ezra({
  nomCom: 'audioreply',
  categorie: "LUCKY-SETTING"
}, async (chatId, zk, context) => {
  const { ms, repondre, superUser, auteurMessage, arg } = context;

  // Check if the command is issued by the owner
  if (!superUser) {
    return repondre("*This command is restricted to the bot owner or Lucky owner.* 🤦,,idiot");
  }

  // Validate user input and respond accordingly
  if (!arg[0]) {
    return repondre('Instructions:\n\nType "audioreply yes" to enable or "audioreply no" to disable.');
  }

  const option = arg.join(' ').toLowerCase();
  switch (option) {
    case "yes":
      s.AUDIO_REPLY = 'no';  // Enable Audioreply
      responseMessage = ' has been enabled successfully.';
      break;

    case "no":
      s.AUDIO_REPLY = 'yes';  // Disable audioreply
      responseMessage = ' has been disabled successfully.';
      break;

    default:
      return repondre("Please don't invent an option. Type 'audioreply yes' or 'audioreply no'.");
  }

  // Send the response message to the user
  try {
    await zk.sendMessage(chatId, { text: responseMessage }, { quoted: ms });
  } catch (error) {
    console.error("Error processing your request:", error);
    await zk.sendMessage(chatId, { text: 'Error processing your request.' }, { quoted: ms });
  }
});

ezra({
  nomCom: 'setting',
  categorie: "LUCKY-SETTING"
}, async (chatId, messagingService, context) => {
  const { ms, repondre, superUser, auteurMessage } = context;
  
  if (!superUser) {
    repondre("This command is for my owner only!");
    return;
  }

  const settingsOptions = [
    { nom: "ANTI_DELETE_MMESSAGE", choix: ['yes', "no"] },
    { nom: "AUTO_BIO", choix: ['yes', 'no'] },
    { nom: "AUDIO_REPLY", choix: ['yes', 'no'] },
    { nom: "AUTO_SAVE_CONTACTS", choix: ['yes', 'no'] },
    { nom: "ANTICALL", choix: ['yes', 'no'] },
    { nom: "AUTO_REACT", choix: ['yes', "no"] },
    { nom: "AUTO_READ_STATUS", choix: ['yes', "no"] },
    { nom: 'AUTO_DOWLOAD_STATUS', choix: ['yes', "no"] },
    { nom: "PM_PERMIT", choix: ['yes', "no"] },
    { nom: 'PUBLIC_MODE', choix: ["yes", "no"] },
    { nom: "STARTING_BOT_MESSAGE", choix: ['on', "off"] },
    { nom: "AUTO_READ_MESSAGES", choix: ['on', "off"] },
    { nom: 'PRESENCE', choix: ["online", "typing", 'recording'] }
  ];

  let settingsMenu = "╭──────༺♡༻──────╮\n  Lucky-Md Settings\n╰──────༺♡༻──────╯\n\n";
  settingsOptions.forEach((option, index) => {
    settingsMenu += `${index + 1}- *${option.nom}*\n`;
  });
  settingsMenu += "\n*Please choose a variable by its number*";

  const initialMessage = await messagingService.sendMessage(chatId, { text: settingsMenu }, { quoted: ms });
  console.log(initialMessage);

  // Await user choice for a setting
  const userChoice = await messagingService.awaitForMessage({
    chatJid: chatId,
    sender: auteurMessage,
    timeout: 60000,
    filter: msg => msg.message.extendedTextMessage?.contextInfo.stanzaId === initialMessage.key.id &&
                    msg.message.extendedTextMessage.text > 0 &&
                    msg.message.extendedTextMessage.text <= settingsOptions.length
  });

  const selectedOption = settingsOptions[userChoice.message.extendedTextMessage.text - 1];
  let settingsDetail = `╭──────༺♡༻──────╮\n  Lucky-Md settings\n╰──────༺♡༻──────╯\n\n`;
  settingsDetail += `*Variable Name* : ${selectedOption.nom}\n`;
  settingsDetail += `*Description* : ${getDescriptionFromEnv(selectedOption.nom)}\n\n`;
  settingsDetail += "┌────── ⋆⋅☆⋅⋆ ──────┐\n\n";
  selectedOption.choix.forEach((choice, index) => {
    settingsDetail += `* *${index + 1}* => ${choice}\n`;
  });
  settingsDetail += "\n└────── ⋆⋅☆⋅⋆ ──────┘\n\n*Now reply to this message with the number that matches your choice.*";

  const choiceMessage = await messagingService.sendMessage(chatId, { text: settingsDetail }, { quoted: userChoice });
  
  // Await user choice for the option
  const userOptionChoice = await messagingService.awaitForMessage({
    chatJid: chatId,
    sender: auteurMessage,
    timeout: 60000,
    filter: msg => msg.message.extendedTextMessage?.contextInfo.stanzaId === choiceMessage.key.id &&
                    msg.message.extendedTextMessage.text > 0 &&
                    msg.message.extendedTextMessage.text <= selectedOption.choix.length
  });

  const heroku = new Heroku({ token: s.HEROKU_API_KEY });
  await heroku.patch(`/apps/${s.HEROKU_APP_NAME}/config-vars`, {
    body: {
      [selectedOption.nom]: selectedOption.choix[userOptionChoice.message.extendedTextMessage.text - 1]
    }
  });

  repondre("That Heroku variable is changing, The bot is restarting....");
});

// Function to change Heroku environment variables
function changevars(commandName, varName) {
  ezra({
    nomCom: commandName,
    categorie: 'LUCKY-SETTING'
  }, async (chatId, messagingService, context) => {
    const { arg, superUser, repondre } = context;
    
    if (!superUser) {
      repondre("This command is for my owner only!");
      return;
    }

    if (!s.HEROKU_APP_NAME || !s.HEROKU_API_KEY) {
      repondre("Fill in the HEROKU_APP_NAME and HEROKU_API_KEY environment variables");
      return;
    }

    if (!arg[0]) {
      repondre(getDescriptionFromEnv(varName));
      return;
    }

    const heroku = new Heroku({ token: s.HEROKU_API_KEY });
    await heroku.patch(`/apps/${s.HEROKU_APP_NAME}/config-vars`, {
      body: {
        [varName]: arg.join(" ")
      }
    });

    repondre("That Heroku variable is changing, The bot is restarting....");
  });
}

changevars("setprefix", "PREFIXES");
changevars("menulinks", "BOT_MENU_LINKS");