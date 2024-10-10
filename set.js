const fs = require('fs-extra');
const path = require("path");
const { Sequelize } = require('sequelize');

// Load environment variables if the .env file exists
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;
module.exports = {
    session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ05Mb0grNmI2UHg5bE1mdnViMnlQQVJlRGJYY3V2U1R1L0s5M2VueGVscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejc3TmIyOVBwanR6V3Qvdlpvbm9xUUxiaXVJSUkwa2tXWWdaTWpSMDdVZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTjNOQXFIaXMrUE1nd2lkTlg1K1A1V0h0b2grejNiejh4ZmNObHhTT0dBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzelIrdkxvMmZoMlRONWx1L1J2am1uSkNiMDdFSElKTU40cmhHeDJLbmtnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBMckJ2NDBSUml0VXZFTE1hYWRoRDVOQXBsUTVEZjZkcjhLVDBUV2FabWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFRa1l3K25uUzZTd2pNTmc4aTNEOEMrd29HSE56YUVURGJ6MDhFTFZyMzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0h0czFzTmcvNlFITU1TNkQ5VkpkKzdoaklvdUhrTVI1c3ZOS1NHVmRXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmI5ZVcyY1pEMHJ2S0d0bmFiTjNkcjFiK3RPcVlqSnVHSjByb1c0VWJGTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhGWUYzNnNBTUR6TWNuWWlTd0YzTytKNy9SNkwwdGFsYUxKZjl2T2x2eHNaLzlia2JUTzhVOHBrMVlsbGZydXMvcTJlbXoxdVRBYjQzLzl0MU5Nb2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiJCM3krMFhFbDBzNllpS1R1MXBxQkVwQWFVWHRuNEkzZWpuaWM0YURwWk5NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmXzhvTlM3TFFHV2gxN21ndmJ5WlhBIiwicGhvbmVJZCI6ImQ0ZTg2Yjk2LTA5ZmMtNDY3Zi05YzBhLTAyM2IzZjhiYjI5OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjeEszTUowZWt4TW5uMUMveTB1dGplODZNTlE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnJHYVplMUR0VW9ETldVV2ZaT3NKS2tkUEY4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktRVEZMRkROIiwibWUiOnsiaWQiOiIyNTQ3NTkwOTA5NDU6OThAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BMaHJXSVE2NmlkdUFZWUJDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5CYTVoM1B6cldwWjFwRWFSYnp2RktTY1E5Ym4zRUV3bFJGRXZtZkgzVTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6InJPdUFBQ3d5QXhYandPNHV5T2thUjhzTngvRHVLL3psemRtZnE5ZFJGc0ZGdnNYOURZM1g5a2piOUFSV2l6V2oxWlZlcGhrVkFsZlNRd2JhM1ZsSkFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtaWRLMlJwNXhMSkd5bkU4dUwyZmJLdUxIS1piZVZtbmpwTVFWOFk2L2p2K0lJand5S29ER0VUNzJPMnhJc2VHZDl3WDM4TTVuY0JWMXllVFlDNERqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc1OTA5MDk0NTo5OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJad1d1WWR6ODYxcVdkYVJHa1c4N3hTa25FUFc1OXhCTUpVUlJMNW54OTFPIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4NTMzNjI0fQ==',
    PREFIXES: (process.env.PREFIX || '#').split(',').map(prefix => prefix.trim()).filter(Boolean),
    OWNER_NAME: process.env.OWNER_NAME || "Savitor",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "254759090945",
    AUTO_READ_STATUS: process.env.AUTO_VIEW_STATUS || "on",
    AUTOREAD_MESSAGES: process.env.AUTO_READ_MESSAGES || "on",
    CHATBOT: process.env.CHAT_BOT || "off",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_SAVE_STATUS || 'off',
    A_REACT: process.env.AUTO_REACTION || 'on',
    AUTO_BLOCK: process.env.BLOCK_ALL || 'off',
    URL: process.env.BOT_MENU_LINKS || 'https://i.imgur.com/ecRS5BQ.jpeg,https://files.catbox.moe/g73xvl.jpeg,https://files.catbox.moe/qh500b.jpg',
    MODE: process.env.BOT_MODE || "private",
    PM_PERMIT: process.env.PM_PERMIT || 'on',
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    WARN_COUNT: process.env.WARN_COUNT || '3',
    PRESENCE: process.env.PRESENCE || 'online',
    ADM: process.env.ANTI_DELETE || 'on',
    TZ: process.env.TIME_ZONE || 'Africa/Dodoma',
    DP: process.env.STARTING_MESSAGE || "on",
    ANTICALL: process.env.ANTICALL || 'on',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://giftedtech_ke:9BzoUeUQO2owLEsMjz5Vhshva91bxF2X@dpg-crice468ii6s73f1nkt0-a.oregon-postgres.render.com/api_gifted_tech"
        : "postgresql://giftedtech_ke:9BzoUeUQO2owLEsMjz5Vhshva91bxF2X@dpg-crice468ii6s73f1nkt0-a.oregon-postgres.render.com/api_gifted_tech",
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
    }), */
};

// Watch for changes in this file and reload it automatically
const fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Updated ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
