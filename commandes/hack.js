const { zokou } = require("../framework/zokou");
const conf = require("../set");
const commandes = require("../path/to/commandes"); // Import the commandes object

// Sleep function to delay execution
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

zokou(
  {
    nomCom: "list2",
    fromMe: "mode",
    desc: "Show All Commands",
    dontAddCommandList: true,
    categorie: "Menu", 
  },
  async (message, match, { prefix }) => {
    let menu = "\t\t```Command List```\n";
    
    // Assuming commandes.commands is an array of command objects
    const commands = commandes.commands
      .filter(command => command.nomCom && !command.dontAddCommandList)
      .map(command => ({
        cmd: command.nomCom.toString().split(/\W+/)[1],
        desc: command.desc || ""
      }))
      .sort((a, b) => a.cmd.localeCompare(b.cmd));

    commands.forEach(({ cmd, desc }, index) => {
      menu += `\`\`\`${index + 1}. ${cmd.trim()}\`\`\`\n`;
      if (desc) menu += `Use: \`\`\`${desc}\`\`\`\n\n`;
    });

    await message.reply(menu);
  }
);

// Export the module if necessary
// module.exports = { someExport: someValue }; // Adjust according to your needs
