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
    session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0dzUDNDaGFxQUxFaTNqalM5bVc5aEVtME9lL1p2Nms3d0RVNUFId1JYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTVhajBvNHBCRDFMdk1OZzEvVzdBZWdjWTJ3WW10aHVCcVlDaEc4Y1dWdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPS3RHQkYwL1h0alFqT0FFNEdtdXhWTHpUcUhvdGIwTk1OOGUwUGJjMTJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPN0lGSXRSUUNSdU9TVjVqaU9kS3Jyb21XQkpRUHF6UnNJNkZsTWdoU1NzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldBQlNwdDY3KzQzMDBkZG15VThwL0xmNXlSRjRQczMwNGVxYjVncFIvSEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVRUm5QaG1IbVpham9RVlZYVldsQmVSWitiQ2RKQWpDVUNjb09lZHpjUUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5ETjNHbTVpcC9oUmNZM2hFZ09ZNDEwWHBSTitBRm9xRlZsbjdiNWIwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXB3R1JEb25ybGF4TVJQTFVpU1B5RHJMa1NUSGxiM2YvRFlQWW5ZWlFFMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkorRGdvMDhGVCtlUE5zdHNtSVh3a3hxNFZ3UmFSeGo0MXB1U2ZKTHR2MjlWWGNkVXFOeGVpSDA2TWRibmpYdytwZWg3dm9YOHRMcGkrUWNHWUdVZUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQwLCJhZHZTZWNyZXRLZXkiOiJxMXM2cnBBbDFYL1dVc3hCMUdYOHA4SUc3NzNuMHFjc2dXOUxLQlB3eTQwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRRUdJaHZYU1RtLVlVWk1yUlhlLXBnIiwicGhvbmVJZCI6IjVjMzBjMGIxLWQ0NDctNDI2NS04ZWYwLTQ4NDE2MjRmZGQ2ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJOVdKckliK3dKYTNkUTM4dk90UVFuc0Fvb0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUUvRWUyWXR3aHZSUkpiT0xpWFRTSzdZUVRnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1FR00zSzRLIiwibWUiOnsiaWQiOiIyMjU2NTY0Nzg2NDoyNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLDiXRlcm5lbCBBcmltYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTdueGJjTkVQYTh5YmdHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRE4rVGRrc0J3a2RTY3psZlV1SUIxQ0hCc0EyanIvbys1Q1dSaDVidENIND0iLCJhY2NvdW50U2lnbmF0dXJlIjoid09LWld6TCtremJnT0plTFE0cDU2RmpMMHR3OVpnRHdsRERHWHRTVVNyS2V6a3MwWVIxRFloeFhWZERIaFJnY1AzMHliU3B4NkZlL1FPMGJ3eTBLaUE9PSIsImRldmljZVNpZ25hdHVyZSI6ImczRmQ3ejdWaS9OSDB3OSs4WUF3bmlHVDRQUUNqNktOSUVadHhqUllqOXdFbzFVZ0xwVTZjOE1FYmpicXVPT2hsT1FtVEZabVkzeEQrazJYQndjTUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1NjU2NDc4NjQ6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUXpmazNaTEFjSkhVbk01WDFMaUFkUWh3YkFObzYvNlB1UWxrWWVXN1FoKyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTI1NzA5M30=',
    PREFIXES: (process.env.PREFIX || '').split(',').map(prefix => prefix.trim()).filter(Boolean),
    OWNER_NAME: process.env.OWNER_NAME || "Arima",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "2250565647864,255764182801,255752593977",
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
