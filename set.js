const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT09acFp6SHU0UE13SkpmWmFHUkhPQ2JUM3VwSHdhaGtVdzR0U0JGZDJrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2UyemxDYnJxZnM5L0lXOWllTFRaVm9lKzVpWS92RDNmeEo0Q1dQWjVpZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjT0ZuaElJVWdqOEZ3bzBQZ09ZZm1pSC9XaFFXb204MkFJcSt6UDR5ejM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWUWxiRndJTVo2VTNjN0tCMlZkTUNsZytsSno4MjN5Yk5GSEVCRzI5QlNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1KZHAybm0zSFFQWFQrVEE0Z2d4QnZkRUhoVG5OZmRodlRRdFRRRWJ2VVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYyNE9vMDBnTVk2TWhRTlJEdGNza1ZqYzZ1clZRcjZqSTFkRm02SzJFRUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVGNTVNR2kyM09rTVF1K2pnYzJpcFhTdjB2NXhUc09jMTBMby80SjRHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWG1CNFY1NzdyYm1lY0xIT3ZuUng2SThqTDVMU2RRMGg4OWNHaDBnVUd6RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLOHdTZ2RkK2NXT0MvbEdxZ296SFMzU1VpZ2NZajNORGlqRzJoYTEyODhlaWdqQlRVYm1TVjc1WEMyT2NtRE5qSDNmcndRWC9vNWxHUzdGZ2gwTmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDcsImFkdlNlY3JldEtleSI6IkRrcWdUeGY0TW9DcWN0S0lFOUlqVUpXNVhoNDk0T05RNm1STkJBZXk0WFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05iWmxkSU1FT2pVNXI0R0dBOGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InNLU1o3d2piSTRMWHVVY2xuN2ZPM3hvV1RTODRTc1FXV2o0MkVoODA4eWM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjBZYmJtUUZORXBzbTBZNE5RbjZWdWxqRlZ1bEtIQ0JlL2ZxVWxpamlqZG0vYyt6SURtNFUydDhDTUV3UUFVU0R4bnRUNENYL09Jazc1RWRLS1p2eEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvN2s5cVpFUzBjTXk5a1MrL0J5dGRZRUVZQkFMZGEydCtFWTdxTlpKTGo0SEhhWk9VSnByRGY1NkRDTEpXNitsK2YxaWlFU3gzdHZuUnRLcXdOV3hoUT09In0sIm1lIjp7ImlkIjoiMjMzNTU3NTYwOTExOjc2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTI4NTg3NjI5ODkxODM0Ojc2QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzM1NTc1NjA5MTE6NzZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkNrbWU4STJ5T0MxN2xISlorM3p0OGFGazB2T0VyRUZsbytOaElmTlBNbiJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDIzMTgxOTcsImxhc3RQcm9wSGFzaCI6IjJHNEFtdSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR2I2In0=',
    PREFIXE: process.env.PREFIX || ".",
    GITHUB : process.env.GITHUB|| 'https://github.com/Fred1e/LUCKY_MD',
    OWNER_NAME : process.env.OWNER_NAME || "Trending Boss",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "233557560911",  
              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "oui",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "non",  
     AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    URL: process.env.URL || "https://files.catbox.moe/7irwqn.jpeg",  
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'non',              
    CHAT_BOT: process.env.CHAT_BOT || "off",              
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "oui",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_HANDLE || 'no', 
    AUTO_REPLY : process.env.AUTO_REPLY || "no", 
    AUTO_STATUS_TEXT: process.env.AUTO_STATUS_TEXT || 'viewed by Trending Boss',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'non',
    AUTO_BIO: process.env.AUTO_BIO || 'non',       
    ANTI_CALL_TEXT : process.env.ANTI_CALL_TEXT || '',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
    WEBSITE :process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
    CAPTION : process.env.CAPTION || "✧⁠LUCKY_MD✧",
    BOT : process.env.BOT_NAME || '✧⁠TRENDING_BOSS✧⁠',
    MODE: process.env.PUBLIC_MODE || "OUI",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Accra", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '' ,
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

