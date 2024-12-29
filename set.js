const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5tdHBOeFZKN085emc3OHdpdXlUK1VLOHgyNzJuejhlaVc1QXg5Y2Exaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTAzMGk0amFkYlV0QnA4a0Uwa3plRUpsUnlIMzIvYzVyZ3l1Y2lZS1l4MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSjc0ckh0WW1QaVRBUmk4NDZIRzZwejVUZWF2MmlJYlRTTmhJNFZOZzJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQY0FoZ3NMMFdKei9wdGsvWVpyMTkwcmdKYlJXakhKd2E1OTZnUnJoVWh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDaDZiZnFpYUF1MnpEZFdQNVQzTWI0SWZPRXEvblFRcWNKWHBna2FxVTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNUS0ZrRGFLYnlwUy9zTWNVWlhIb2M5dWNiVzNpNjFjaXhIWDNwQ0J4WFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0ZjYmxnSng1Y1BrdS9RSWtIeU43SkJOT3B0ZzNHUWZvOVk0ZnN6WlBGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUThvOFM2Nk9UWDM4eDFvYmFkUDlCeVMwM2xZaWhSL3JSdEtXQVk5bXUxTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNMT2tCcE0vZ256MDZUb2VPZEFCNzJON1hUWkt5MENmZytkclBYM3BHaFErTFFrV1c4TzJjYlhwK2YraENjaHllOHVKSXhvUURnVm81dktSSS9BVGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg1LCJhZHZTZWNyZXRLZXkiOiJRNWFWSEYramhrZm5yTEE0bHhQa240ZkN3bHhITVZTSDBYS1J1Q0JtUENJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NjcwODg1NTYwOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBODczNTIzMEY3OEY5Q0ZDMDMyM0UzQjM3NEJFRkVDMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1NDcxMDUwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyX1piTGxwRVNNcUZKLWVILTVnc2NRIiwicGhvbmVJZCI6IjJlMWE3NGRiLTEyYTEtNDk0Zi04YTQ3LTlmZTRlMDU0MjU2OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnbGZraFJzcmZPOVF6bFMraDQyeklQTndpVkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTZETlBCNURjQTlDM1dyZzFVcDA3WmNHOHB3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNaTllaTlJRIiwibWUiOnsiaWQiOiIyNTY3MDg4NTU2MDg6MThAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09lSGc0WUJFTG5meExzR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVJU1I3bGJCU3hRNDZhQnZmSHM3NDdpeUljeWN5dHZ2NWVLVkhOVDkrUlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImcwbTYzVWJFZ2YzcGRKNjFDNWxuc01QSnJiMXJaL3N2UWFxL2tuemVWaXlaQitmRVltaitKYWFIUklTalpaaURqTERtUFFUdXdkbWwvbmpVcWlXZEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5MGEyMHNSd1Bya0I1NytyMFg5WGRTajZ6dFcyS3lSTTBEaHhJT2oxQmNZVDd6WDZZOHRnckUzUGR6N1BwREU5UXZwOW1IaUFveHovcThaeDFkMXZoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NjcwODg1NTYwODoxOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWQ0VrZTVXd1VzVU9PbWdiM3g3TytPNHNpSE1uTXJiNytYaWxSelUvZmtWIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1NDcxMDQ3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNNYiJ9',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Fredi Ezra",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 256708855608",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'LUCKY_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/17c83719a1b40e02971e4.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '5' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY|| 'yes', 
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
