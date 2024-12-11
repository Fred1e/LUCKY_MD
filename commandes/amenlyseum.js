const { zokou } = require('../framework/zokou');


zokou(
    {
        nomCom: 'menuelysium',
        categorie: 'luckymd'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/1cc788ca14b06a219af36.jpg' }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'histoiredebase',
        categorie: 'luckymd'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/69294de81c58878ca7bcc.jpg' }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'guidedujeu',
        categorie: 'luckymd'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/93608ec044aac73ee2ff1.jpg' }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'creationdelavatar',
        categorie: 'luckymd'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/da983a81f14dbbc3cef4f.jpg' }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'competencesetcombat',
        categorie: 'luckymd'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/bd863e7a4cc419236c4b0.jpg' }, caption: msg }, { quoted: ms });
   
        }
    }
);

/*zokou(
    {
        nomCom: '',
        categorie: 'luckymd'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: '',
        categorie: 'luckymd'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);*/
