const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUo5M1ZOb2VBVjRGZUpLa0VibDcraW5UVWxhU3FLa3k2cmpNYzFsWGVXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGFtU1RxbmlkU0pqb1lTZi9KcTNFVEZSOVpkNEkrd3dPYlhZOE8xNUJWRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQTRJNHJmOUJOWUNPanFabXRDKzB1bExKM25HVC8yRDY1MXNMTG03NmxFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzeTkrYVlWN1JKUmpEVXhqai94c2RpWVBicERaMmhVODJqaXo1QkxaTVhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVFcUNuQStrOVJpcHE3OGt5NysyY1pFaEsrK1hRL04zZXRqeEFtNHRyVzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imc1QldyMmtKV0RaaVdOekM5Z1Z1QmsrMnZ4UnloajUrb1I0STFRVlM3QzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUltMXpsV215ci9hMDR5RHREd3E5T2JPSlRzcnI1NUcxZWdkN3BuM0luMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3VGcDNVeUQza1BXL2JGaXQ3bkFpeWZYVVlBZFNxQkErd1F5Z2lyQU4zYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhlYVRoRmpsOTk2d3U4WElSWWVEa0VrNm9ENGg1azBLdlV3a3pGZUcrVng5RkJ1ZmF3bDBZaVpYa3EyM2RCT1FKTndwYWNMaDVydmNSbTRjNytrMENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJCd1NIM2xpcmNrL2t3Qk1PYzBhVHZaUXVJVmlZT2czaHVXeHozdlZxSHhzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjQ0NzcyMTY5NjEzMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGRTI4Qzk3QkZENkM4RDAzMDREOUZDMjg4MkI5MjdERiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI0ODQzMDcyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI0NDc3MjE2OTYxMzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzU1OUFFMkVGNzhFOTY2QTcxRDE2NEYxOUQ4MEM1QkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNDg0MzA3Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTXBFRHVJZXVSeVNJUTVvNzVtMW5hZyIsInBob25lSWQiOiI2ZDRkYWM1Mi00ODYyLTQzNzMtYTFkNi1lODA5OWI5N2MwMzQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVpZaVVKK3crVTl2bStYNXJ2U3VSNTFEaFpZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikp1YjJoQ2htMlk5bkliQ1pEUlhHdUJuR1Vlaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNWjUzNTREWSIsIm1lIjp7ImlkIjoiNDQ3NzIxNjk2MTMyOjY4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkZJREUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09DL211OENFTENJdkxZR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjFzUjV0cVNZUnYxSmpQY2pVeVMxUlRVVFZYVXpwNUNKRmxEUzV1Q09qRzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImxXcHNFSHB0ZVV5ODhKbTgwODUzQzI0TjYwTVNKZ3NISk5xZGFoTUN5MWFpd3BTYmYrc3ZLYjBtNnFJdzBDME1nbno3QzRpbGpxN3NtZW96V2xMQ0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJbnk1OUhMVW5UenJuQ0VrSlgzMEZpaXFoaisxODZNV054WGhKNXRXNTJHR2lab0Q2VW5vZHIvTW5yUlRhOGJCa1Y0ZjVLeGljdjVLWUxKS3lOR3NBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQ0NzcyMTY5NjEzMjo2OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkYkVlYmFrbUViOVNZejNJMU1rdFVVMUUxVjFNNmVRaVJaUTB1Ymdqb3h1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0ODQzMDY5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5GMiJ9',
    PREFIXE: process.env.PREFIX || "?",
    OWNER_NAME: process.env.OWNER_NAME || "PRINCE",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "447721696132",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'yes',
    BOT : process.env.BOT_NAME || 'LUCKY MD V5',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/60cd0a18bda777a41ffe3.jpg,https://telegra.ph/file/bc9bf76f258c98877d993.jpg,https://telegra.ph/file/f6c60977ceb194e05e616.jpg,https://telegra.ph/file/74d7f0176b4e779dea4fd.jpg,https://telegra.ph/file/d04abf5e17b331ab46871.jpg,https://telegra.ph/file/2ab35f2759d081657d286.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'yes',
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
