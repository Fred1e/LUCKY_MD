const { zokou } = require("../framework/zokou");
// const { getGroupe } = require("../bdd/groupe"); 
const conf = require("../set");

zokou({
    nomCom: "group-opentime",
    reaction: "🔖",
    categorie: "group"
}, async (dest, zk, context) => {
    var { repondre, arg, verifGroupe, verifAdmin } = context;
    try {
        if (!verifGroupe) return repondre('🤦This command is using for group only.');
        if (!verifAdmin) return repondre('🤦This command is using by group admins only.');

        let timer;
        const args = arg.split(' '); // Ensure args are split if input is like '10 second'

        if (args[1] === 'second') {
            timer = args[0] * 1000;
        } else if (args[1] === 'minute') {
            timer = args[0] * 60000;
        } else if (args[1] === 'hour') {
            timer = args[0] * 3600000;
        } else if (args[1] === 'day') {
            timer = args[0] * 86400000;
        } else {
            return repondre('🤦Please select a valid time unit: second, minute, hour, or day.\nExample: 15 second');
        }

        repondre(`⁉️Open time of ${arg} starting from now...`);

        setTimeout(() => {
            const openMessage = `*⏰ Open Time 😻*\nGroup was opened by Lucky Md. Now all members can send messages.`;
            zk.groupSettingUpdate(dest, 'not_announcement');
            repondre(openMessage);
        }, timer);

        await zk.sendMessage(dest, { react: { text: '✅', key: zk.key } });

    } catch (e) {
        console.error(e);
        repondre('❌An error occurred!');
    }
});

zokou({
    nomCom: "group-closetime",
    reaction: "🔖",
    categorie: "group"
}, async (dest, zk, context) => {
    var { repondre, arg, verifGroupe, verifAdmin } = context;
    try {
        if (!verifGroupe) return repondre('🤦This command is using for group only.');
        if (!verifAdmin) return repondre('🤦This command is using by group admins only.');

        let timer;
        const args = arg.split(' '); // Ensure args are split if input is like '10 second'

        if (args[1] === 'second') {
            timer = args[0] * 1000;
        } else if (args[1] === 'minute') {
            timer = args[0] * 60000;
        } else if (args[1] === 'hour') {
            timer = args[0] * 3600000;
        } else if (args[1] === 'day') {
            timer = args[0] * 86400000;
        } else {
            return repondre('🤦Please select a valid time unit: second, minute, hour, or day.\nExample: 15 second');
        }

        repondre(`⁉️Close time of ${arg} starting from now...`);

        setTimeout(() => {
            const closeMessage = `*⏰ Close Time 😌*\nThe group has been successfully closed by Lucky Md.`;
            zk.groupSettingUpdate(dest, 'announcement');
            repondre(closeMessage);
        }, timer);

        await zk.sendMessage(dest, { react: { text: '✅', key: zk.key } });

    } catch (e) {
        console.error(e);
        repondre('❌An error occurred!');
    }
});