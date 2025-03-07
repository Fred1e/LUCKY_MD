const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU1JU0lsSzlQV1YveVFJb2xvNVoyZnQxQjBKRmlvcmxGaEJhK044MWtsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEhTU0hhK2JxSnJWR2pETWpSWVZ5K1dXWlFtZzk3YlBlNVFRbS9EVUxHcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSldKOFFqcW9aV1gxWWgwbHhDTHpyampKUUUwZkJ6MkZ5Tk1DOWZYREc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyK3QvU1VrOUdMcHEvcUVMRVNIZlY0ajBGWThTZW1XQy80NkRpZ2x3ZFZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtFSGxDZEdsaitzL3hjVklXWGVjV3JnZjUyeXU2dng0VFJLdjB1UXlJMU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhnMU5vekk3dE9ST1BiUVpXbjJIa0wwamtnTGpTM2xQL0JNWEFUNlhaMEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMENDWlhpQU9ycFg0TVFTTENOQlJqb0s5bTliZS9VV2lydEtUTWRXdUhVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHg3UTNmS2MxV0hhTzVqNDJ3NnVjVnAwa2hnMllwUUxleVBWdWVmTStBcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4vcFova01mRk5rNVMvMVh1ekRReG81blk3UzBhQS9JV2R6Q2Vtakpma09xd2NkZUR1ZFFIREY2YzFTZlZJNlNxQmp6QnpSbXQyWGlGdjg1cSt2N0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJaWWp3QXlKN0FEQ3VFNHkwWDFrUXVtNThJdDZ2OW1RdjFHOGpnbnhoazJjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2MEdVNUxZTVFJQ3VaRVEyRHVqMlVRIiwicGhvbmVJZCI6IjFmYmI5ZTI2LTBjOWYtNDY3Yi1iMmRlLTkzYjljMzgwOGQ5ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZdXE5d3diU2c5bmc5SWtJek1OUUZDUzNDbWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBzUVFzZmpSNmJLZmI0TnY5M1JHNjVwdkRRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjcyUFJFNENSIiwibWUiOnsiaWQiOiIyNzY5NDY5ODA5NToxNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJRaW5pc28gSm9yZGlpaSBGb3gifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09qcWk4c0JFTTZGcWI0R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJPK3JleGJ5dmxnYmNuYTlQS1ZQcWE3cjZRMGlxcmJxWEVFbFU1TWpjQU09IiwiYWNjb3VudFNpZ25hdHVyZSI6InpWMEVONWkwUHJzalNLZTREdW8rOEFacWVXYTJuWnFVQ2xwVXNJcGlsbnVIanB4bFJNc0thQWNiK3k0M0ZHN0FkeWUyVG5xNERsVWpvOGphQmNPTURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDWkM3Qi8zTDA1LytiUGxWUlFDdERXcm1GcllONU9BajVsRlBJM25lT2tobTB4NGpoeE0veUpBSTlSMUlTV2MrNmIzc1hEZWZaMkNpU3J2aU11c0hEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3Njk0Njk4MDk1OjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmF6dnEzc1c4cjVZRzNKMnZUeWxUNm11NitrTklxcTI2bHhCSlZPVEkzQUQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDEzMDg2MzUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWVYIn0=',
    PREFIXE: process.env.PREFIX || "+",
    GITHUB : process.env.GITHUB|| 'https://github.com/Fred1e/LUCKY_MD',
    OWNER_NAME : process.env.OWNER_NAME || "Fredi",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255752593977",  
              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "non",  
     AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    URL: process.env.URL || "https://files.catbox.moe/7irwqn.jpeg",  
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'non',              
    CHAT_BOT: process.env.CHAT_BOT || "off",              
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_HANDLE || 'no', 
    AUTO_REPLY : process.env.AUTO_REPLY || "no", 
    AUTO_STATUS_TEXT: process.env.AUTO_STATUS_TEXT || 'viewed by alpha md',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTO_BIO: process.env.AUTO_BIO || 'yes',       
    ANTI_CALL_TEXT : process.env.ANTI_CALL_TEXT || '',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
    WEBSITE :process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
    CAPTION : process.env.CAPTION || "✧⁠LUCKY_MD✧",
    BOT : process.env.BOT_NAME || '✧⁠LUCKY_MD✧⁠',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Dodoma", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '5' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTI_DELETE_MESSAGE : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTI_CALL: process.env.ANTI_CALL || 'yes', 
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',             
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, 
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

