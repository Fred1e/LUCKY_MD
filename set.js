const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUowc1dBZnR6QTVGdTFUL3RUVkFPQXJPNURNeDdsRU9xZkpZOU5uR1dFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDkvQ1BjeXFqMTNtU0NidjlhVllHR2RQVFB6ZytnRGFnbTNib1dKQUVTWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTmxhNlVxeStReUMzUDFsaUlscGF1T2FaVGxScG4xRE9Ed2xZcnE3U0ZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEVWJoWDdoNVI2Z0twYVFEUU5hV2grbGVSVDBVZi9LQWVqalRqK1ZoTG5RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFMejJseS9SbE9ndWVGVVlBVTBmeHFMZjNKYVJjUWNRQkZLRlQ2WUVFRjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndzTlFBeWU1WmVZKzZZcXEwNVpCRXNXNlFaQWoxRHhMeHpLbXNaY2YvenM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0JPUXRBdkdDVmVJb1BxQmNsVE9SaDF1Zm0xblAwZHRqOHVXbXlERnZFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibERVeUJVREQ3NXFtT241dXFpbUg3WlhVZ2RoVWwxTmpEMTNRTWI0SUtuRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt6Z2RXT3FNVjRsMjNYdE9TeEpNa0dQWDFKVUczT0ZZNm9yNHhMaGN6OHVqT0RPN2lEalZCbWdpWktiQzl1Sk53SlA1d2dQS2xuTnk4aUdUdzlpbkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgyLCJhZHZTZWNyZXRLZXkiOiJINFMyc0FNQTk1dGsxR2tYb2UwdFJxOHRmckhHanVMejJrdTEvUDVQMEkwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0Mzg0MzEyMDkzNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCQUJGRERGRTlDOUU5NjMxNTQ3Qzk4RDVENTA0RTYwOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ1MTQwODUyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNDM4NDMxMjA5MzZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzMwNkU4QkM2N0ExRDIwRDBGNTU1OEY1NkI0NEY4QzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTE0MDg1Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjQzODQzMTIwOTM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc4M0E4N0E2MEMyNUNENDM1OUU4NzJCMDc2NUUzMjlGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDUxNDA4NTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkpHenllbDVuUjlDenF4aFpBY19veWciLCJwaG9uZUlkIjoiZWE5NDk5MDQtMGQ3ZS00MTllLTgwMDAtNjY1YmFmN2E1ZTgxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc3akJzTWxmSmJ6L2ZHRHBIYnBKMjA1TmsrST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGSUo4V1ZiZnIrT1JRaHAyc3hSdEtoQisxOFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSEdXQkZURjciLCJtZSI6eyJpZCI6IjI0Mzg0MzEyMDkzNjoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC8hvCWo5jhr77wnZWe8J2VkvCdlZ/wnZWS8J2VpPCdlaTwnZWW4a++8JajmOC8hiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVhDNCt3RkVPWDRrc0FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWFRuZXhRTU5wTEFSbVdNTHo4eTdhRXNHTExiZjAvT3k2TWdWTElTWGpBYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaUhGSGNZdXdLU3ZqeHFhT3ZSL0F4aVJQbUxUeTArbkhWc0lyQXRLa1FUY1UzdHVTMmx1ZHBoUXFySzZiZll3L2VJME1renR3QWhrS0F1dXpyeXRkRFE9PSIsImRldmljZVNpZ25hdHVyZSI6InBJTy9xdUVLaXU1ZjI2VkgzK1RUK1ZaRTNYYmJUZ2hmeFhDdERNVjZaUy8yWEM3T0FIT3Y4NGNxSWR0MVFIK3FOMjFKUWNKVUE1bi9hWjBhWHdrVERnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQzODQzMTIwOTM2OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjA1M3NVRERhU3dFWmxqQzgvTXUyaExCaXkyMzlQenN1aklGU3lFbDR3SCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NTE0MDg1MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEUXAifQ==',
    PREFIXE: process.env.PREFIX || ".",
    GITHUB : process.env.GITHUB|| 'https://github.com/Fred1e/LUCKY_MD',
    OWNER_NAME : process.env.OWNER_NAME || "manasse"
    NUMERO_OWNER : process.env.NUMERO_OWNER || "243843120936",  
              
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

