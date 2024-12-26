const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU1jUkl1eGJibUpMdmUxTHRkS3dRVWJtUWwzNHRpY2hmTGp3SEpwRTVGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVFsM2c2Ui9lT295WmJSQ3QvU3M1bTZVdUpnWThlK0VUNXo3R0kraG1oRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRR05VS2R2SUNENld1QXp3cGsvUnQyeSt6NXcvd1Q2ZnhWczVSSDJiUzNFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0cDVwc0wzZXlhRDBQVmxRb1BaYW9FNXBvOWNPdU5zNDVJUVpTZVoxVUJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktLcmRubUNNMHVuQzM5Y2QxU0RUNnAvTnRhR3hkR3lST1RYbjJTZHVwMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlYzbjQvVEJOTHE0VnppRWhMcjRSbVQwNTA0ZnIrdzB2Yko1WEpMQ2pZVjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RMajJJb05VOGhJSm1jSFJIZi9HNnVSeEovZnpVSEllSjZEK29NLzNWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3ZjKzVPY1pWTUFEOHpuOFZCZ2R4dy9BYlRhWnZUVUs3N0hHd0FUVXlEOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklTWWdaaCs0L3RrRmZiRytJajQ2SXU4QWN1U1NyQlMvbVcyK3B2ejRPSExyMzYzTmFnQlVaNlJpM1Bjd1pNYmIzOUp4K2VZMy9nM0cyR2V1T0hYVUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6InAwdkI3Z2JkSy9LUTdHL2tGc0lwZVFGN1FkUnUvOUZhNHUvU0Y1LzVab1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJ0QnBrVVJtUWtPRWtyWWRHbDRINWciLCJwaG9uZUlkIjoiMTdmZDNmZmMtNzc0Yy00YTRhLTg3NjctZjgyYjUxZGI4MzY4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHc0kwMFlrZWNaMURJWXI0UENieVg5QnZIOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIa0gyS29mVzZSMXI0YkxZcnliNUtLa1BLN3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUUYyNUw3QUQiLCJtZSI6eyJpZCI6IjUwOTMxMjg0MzE1OjM2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQZjU4Y1FIRU12NnRyc0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDdUdhb1MydDhqa25YYjM5a0J6RHJpaWdpa3dJSWZvOEEwZFRyM2pFeVFRPSIsImFjY291bnRTaWduYXR1cmUiOiI0Rm9RTURSSUtVVzZocW5KMmtRRVBHQUdYbHVwaWFnbVo2QnlNQlJmZnN1dWdvMk1FZXJHR2VLcVExVnpJcVdCQVlHSTRsaENoOHg2MjY5eVZmNVVDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS1V0ZzI2disvN1JZVFlOczF3d3dJNURmQ2owOHFTSzRFZkw5cXRjR1dSL3FFdFovdUh5d0pFaE1PczBaRXdiYkYzdmQxMWtEK0s4clBTS0xxMWFiQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDkzMTI4NDMxNTozNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRcmhtcUV0cmZJNUoxMjkvWkFjdzY0b29JcE1DQ0g2UEFOSFU2OTR4TWtFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1MjQ1MTQ0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdPdCJ9',
    PREFIXE: process.env.PREFIX || "?",
    OWNER_NAME: process.env.OWNER_NAME || "꧁☬☆𝐊𝐈𝐋𝐋𝐄𝐑♣️🐈‍⬛𝐋𝐔𝐂𝐈𝐋𝐅𝐄𝐑•♟️⚰️",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "50931284315",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ABRAKADABRA',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/6jf6sl.jpeg',
    MODE: process.env.PUBLIC_MODE || "no",
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
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
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
