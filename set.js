const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUFLeVdWZ3RZWXdZck95SFQxRlo1SlRDWm03ODdNUmtDRWIyNnNWV29rbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXJjcTdvbXNVR3pHdytmdEJjdVdLeFpPaGpQaDc5TEtGZUFlT00rR09uST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQVVPMVZkWHBiSzJrRElhK1F0dG5TeHNmdHh3dGdqMG5uRjdFazE2RFVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSFJvL1FHTUwwazRzOU5KNGV2eVA4Rk84RmNuRHdscm9GRHlMTGRPUnpVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9OVTdrT29XZUgyclhOdXlkelJvTnJjNEJQQTNlWEJuaHd1Mjh4TGg0WFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjV4b0NVRGtkU1JSZkJubzhnODhWd1NZcjloaUZHQWhaV3ZIQVlMNmwvUzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZOZldLd1J0SEF3Ulp0cGxRdjNKNkU1M2J2YVFyNlpKUWRnODFZTVRrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1VRaXk1cW4vS2RJTG16dURjWHZSRFBHUGtQMXJDVHJ4VkF6S0VTb1NGaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjUwbWpOeUJTelVRa0xTM29tNlQweVpnRENDeTl0RWhCUHE0VlZxRXVsUWF1VGZ2d1JETFhTaG1VS1BUeVZLSytBQTJ3UklPK043T0lqWHVhaUw5ZGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM5LCJhZHZTZWNyZXRLZXkiOiJOdk40eEZnNEV3MHljeGt5bGF0M2tjTVJMS01hNmY3NXgwZW9YaVhFVGlZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJM3lIZWRIYVRoS1lUZGRDMHlMWUJBIiwicGhvbmVJZCI6ImJlNDdiMjg5LTg0MDYtNDMyZS05ZDUwLTYwYmZmY2YwNjk1NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUTXBxZ2RqbFo3YTBuT0RHVVhXUjlWRFlWRDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclVySlJXMnVHTDFMOTd5cGhRbXFDQzZEeDlJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktGNDNWS0U3IiwibWUiOnsiaWQiOiIyNTg4NjQ0MDcyNzU6MjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiZmF5YXp6eWJvdCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTS82aS9RQ0VOV0M1YllHR0FrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRlk1L3hRVEUrb2J5emRmWGR2SXFiWnNYOHJmaXhCYWMzMmZBakJiT3Awbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK3Z3NHRSTTYyd2xISlBlZFBJdS9vbWx0MmJoM2Vnc05BYVhweUJmdHdJTTB2WnBJT2lVdmRpbDRUNWFsSTBsRGZRaStQbmJBVXdWK0ZGdUNRSHpzQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IjgvNFFxSVdhUnJMc1FIN3M4ZW1UUWJZSitIVU9SRklYeTFwVmV3UGJlMThFQjlPRmRVWDFYcHlTellCSDhSTXBEY041OXJHQklxY01oZnlwbDdRZGlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU4ODY0NDA3Mjc1OjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJXT2Y4VUV4UHFHOHMzWDEzYnlLbTJiRi9LMzRzUVduTjlud0l3V3pxZEsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU1MTQwODMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVM4In0=',
    PREFIXE: process.env.PREFIX || "+",
    OWNER_NAME: process.env.OWNER_NAME || "Ftedie",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255620814108,255764182801,255752593977",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'Lucky Md ',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/926c7a8ad7ff624c144b7.jpg,https://telegra.ph/file/187cfa2365d88ffe98fec.jpg,',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
