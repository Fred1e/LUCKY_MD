const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUI5NXNmNXBHWUJwTDlWQlA1Q0pWL3RIaUJFRkE5ZC95cnRBM3Z4M2psOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1NCZkZwWWpYbHdQNUsrMEZyb3RDeDJmbVZobFBpVlBBSHZYQTJ5alkxaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRkdWd0ZXbVVGR05NS2k5bkZuRi84SzdFeWtkVjVsbFEwQWw3blEvRkVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrdjBnbW5GdzFGUlRxQk96SFl3alk0Y3BuOWwzbi9UNy90Snh4Y3I0M1dBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9CdDVHVWxlOG5SQ1Zrb2dzTFNVMmk1R2NJYTZzK0ZxbGJPOE1NaXdPRTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InkyWUovZ2wzcURpb1VGallKTkQyRGVCOFVuR2twanlHN1A2VHU4SjZnalE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEptQUhXeEpLaGJ1QStacU4rQ2lvVjhsTVQwM1p2VTYrYlN3QWVIYWNtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lLc0taSnF6T3FieThiSExKY1AxZFo1a0wzaUo3TlBYOXhtRkFUbGkyWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpxeFZIaHI4ZFRSaTdkOXdwRG5pVmdabHJmQUNBaU43cmErd0h1TkFITHVKWGhzdVdRblJlZE12UTBjWk9yb3NrMVU5RVYzbHhnd1Z1T2J0dDZ3cGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5IjoiRGRsZkVvVjhFVnZ2YUU2Mmg1aGE2ZTBRZjdtcmRFc1VDVzZla3lmN1RMWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU3NjcwNTI1NTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjgwMDRCRERDNjk0M0JCOERDMzgwQkI2OEYxRkVEQ0EifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczODg0MjY4NH1dLCJuZXh0UHJlS2V5SWQiOjM1LCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzUsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieHYxZ1dVV1dSdS1iNTV5ZFRyNHBxQSIsInBob25lSWQiOiI4ZWU0OWY0ZC1mM2MxLTQwYmYtODZlOC1hMGMwYWQxM2E0MzUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1BDVjN4YWE3TFFIZldkY1Iyc0dlYkFsOWFJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ1cWkrWTUwNmF0aWpoNmdzUnB2Z1JRVGl4UT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJMNEdaODZLNSIsIm1lIjp7ImlkIjoiMjU1NzY3MDUyNTUxOjEyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNbjd3MGNRck1TU3ZRWVlCaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCWkxWSkJYcWo0T0dDR1dsTU5CSEY5a1hYM0Q3WXBGakRyWTNWNzNMUmtBPSIsImFjY291bnRTaWduYXR1cmUiOiJsOWhvOXdMUG41eXBGblZPSXlMc3FHU1hhOFlIb1VtQ0hmeFlGdFJGMHpSdFNHRDFLUEtGNEh1UmRQbVU1dTlibGN1M1lzVzhuakw2V2htaS9EM3ZEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieXVQUWI4UVMxVDQ5a2JGWkdxUGQ2bkR3WXdwY1lpOVF5TnVYS2JpcGRiM3ZqRklzZFRZRGpmWm5qc1RuOFd6NjhMSkpFNjAyRmNZM3FsTHR4WjkxalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3NjcwNTI1NTE6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUVdTMVNRVjZvK0RoZ2hscFREUVJ4ZlpGMTl3KzJLUll3NjJOMWU5eTBaQSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczODg0MjczMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBTGEifQ==',
    PREFIXE: process.env.PREFIX || "+",
    GITHUB : process.env.GITHUB|| 'https://github.com/Fred1e/LUCKY_MD',
    OWNER_NAME : process.env.OWNER_NAME || "sulaiti",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255767052551",  
              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    AUTO_REACT: process.env.AUTO_REACTION || "no",  
     AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    URL: process.env.URL || "https://files.catbox.moe/7irwqn.jpeg",  
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'non',              
    CHAT_BOT: process.env.CHAT_BOT || "off",              
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "no",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_HANDLE || 'no', 
    AUTO_REPLY : process.env.AUTO_REPLY || "no", 
    AUTO_STATUS_TEXT: process.env.AUTO_STATUS_TEXT || '',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTO_BIO: process.env.AUTO_BIO || 'yes',       
    ANTI_CALL_TEXT : process.env.ANTI_CALL_TEXT || 'no',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
    WEBSITE :process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
    CAPTION : process.env.CAPTION || "✧⁠LUCKY_MD✧",
    BOT : process.env.BOT_NAME || '✧sulaiti',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Dodoma", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '5' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTI_DELETE_MESSAGE : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTI_CALL: process.env.ANTI_CALL || 'no', 
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',             
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

