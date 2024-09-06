const { zokou } = require("../framework/zokou");
const conf = require("../set");

// Sleep function to delay execution
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

command(
 {
  pattern: "list2",
  fromMe: mode,
  desc: "Show All Commands",
  dontAddCommandList: true,
 },
 async (message, match, { prefix }) => {
  let menu = "\t\t```Command List```\n";
  const commands = plugins.commands
   .filter(command => command.pattern && !command.dontAddCommandList)
   .map(command => ({ cmd: command.pattern.toString().split(/\W+/)[1], desc: command.desc || "" }))
   .sort((a, b) => a.cmd.localeCompare(b.cmd));

  commands.forEach(({ cmd, desc }, index) => {
   menu += `\`\`\`${index + 1} ${cmd.trim()}\`\`\`\n`;
   if (desc) menu += `Use: \`\`\`${desc}\`\`\`\n\n`;
  });

  await message.reply(menu);
 }
);

module.exports = runtime;
    
