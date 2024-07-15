const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');

const isHackCommandEnabled = true; // Assurez-vous que cette variable est correctement définie

zokou({ nomCom: "hack", categorie: "General", reaction:"👨‍🏫", active: isHackCommandEnabled }, async (dest, zk, commandeOptions) => {
  const { ms, arg, repondre } = commandeOptions;
  const message = arg.join(' ');
  // hack
    const { repondre, arg, ms } = commandeOptions;

    await zk.sendMessage(dest, "```thomas-md Injecting malware```");
    await sleep(30000);

    await zk.sendMessage(dest, "```hacking into device \n 0%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfering photos \n █ 10%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfer successful \n █ █ 20%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfering videos \n █ █ █ 30%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfer successful \n █ █ █ █ 40%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfering audio \n █ █ █ █ █ 50%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfer successful \n █ █ █ █ █ █ 60%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfering hidden files \n █ █ █ █ █ █ █ 70%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfer successful \n █ █ █ █ █ █ █ █ 80%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfering whatsapp chat \n █ █ █ █ █ █ █ █ █ 90%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfer successful \n █ █ █ █ █ █ █ █ █ █ 100%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```System hyjacking on process.. \n Conecting to Server ```");
    await sleep(30000);

    await zk.sendMessage(dest, "```Divice successfully connected... \n Riciving data...```");
    await sleep(30000);

    await zk.sendMessage(dest, "```Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...```");
    await sleep(30000);

    await zk.sendMessage(dest, "``` HACKING COMPLETED ```");
    await sleep(30000);

    await zk.sendMessage(dest, "``` SENDING PHONE DOCUMENTS...```");
    await sleep(30000);

    await zk.sendMessage(dest, "``` SUCCESSFULLY SENT DATA AND Connection disconnected```");
    await sleep(30000);

    return zk.sendMessage(dest, '*ALL FILES TRANSFERRED*');
  });

async function sleep(ms) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

