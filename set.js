const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTURYV3VXMnFSL3VrQ0p1Z09nOE50aDlCc2tEbjNvK2grTUhzRnFybVYwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiby9JQmV4dUZYM2hJdEtiYy84NEg1SW9yYUZ4MVR0YkhtdFZObVhQOE5tMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSGpMSFF6ZDJTSnB2VHZic3d4VEpOT0QzMldHSWM0bDZoMTVrY2tnSUY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMMVlnVndXYXVCMTFEVWYrOFdCVXA2dmprMFMwbVJCR2g1Z0Q3UWZSRWtJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdBZk0zRlpnWnR0WmNUMEsyTTN6cmFhRHF3MGlWa2VMTloreXVjdE1USGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQ0YmJ1cVhSTEVmdFdja2oxVDVaWnRrYksvbXd0d3RJR3A1L1dRQ0pBbGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRjdlFpMFNZYSs0OFR5eHRtajRGOEhzWkRiWkZkcG9BemY1enpXTkhHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmFpc1lGdEFnbVVOU0tGb215RDFWR1IzblNWK2ZNWFBDWnQ1aFBFTTNnMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ3anhXVDFkcHh6ejZqaFgxa2hTM1dnZitPaTVHdFdQRVhycnRYMUcwcTJSWXhnOGFBWFl2UE5mMHVRaFpNWjIrOGVBeWVQYjIwRUFsQ3ExNE1qd2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjMsImFkdlNlY3JldEtleSI6Im1mVWlrYUJ4bUNhSyt6bk5CMlY4WWNKWjY0VHIyeU95TTBWNnhkUWV0SjQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Il8yb0VaQ1M5UjVHWnFLeTB3WGltbWciLCJwaG9uZUlkIjoiNTJhMDdjNzEtMmE3Yi00MzBiLWJmODMtZmYzOWM0ZDU3NzQwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVuS0dndDdhdVl4UjhPWDM1U1J2ZmMxUnpCST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRVkJxSm01TUNUenh6NWJZV1NhLzNOZ1BGT1U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNDEyRkQ1MjUiLCJtZSI6eyJpZCI6IjI1NTcxNjY0NDcwMTo5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOeThuNjRCRU5hdjM3VUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxRVpqZ2xRaUFWUm4xQ1BLMm85TlBEbkNkQTR6VzNXNm80L2IvTTVYRVVrPSIsImFjY291bnRTaWduYXR1cmUiOiJvWUJtdzZpYS8wby9xY3EyQnNlNkZ6K0d3L3FteGM4d1ZVakZhY1FvRUxhSGs1L1lYcm12ODJ5anRHdFRsL0hQNFVkbUgzZmdaKzhQK2FWbTN1TXhDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibHdDMnp1VERnNGdzTURrQzlLTWdLblVwSnhEcmJNS1NTcFRMY1ZKa3h6Z09UdVpVeWFLU1JvWUF0YUFVUS91T0lkUkxjL1lVem9INkxDSHk2blIxZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3MTY2NDQ3MDE6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhaEdZNEpVSWdGVVo5UWp5dHFQVFR3NXduUU9NMXQxdXFPUDIvek9WeEZKIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMzI0Mzg3fQ==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Fredie",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255620814108,255764182801,255752593977",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'joel bot',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/f6c60977ceb194e05e616.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '5' ,
    ETAT : process.env.PRESENCE || '1',
    //GPT : process.env.OPENAI_API_KEY || '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',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
   DB: process.env.DB || 'postgres://neoverse:pomrleUMXwlmlpIcW2oFJmMX0CXzaFkf@dpg-combonun7f5s73d7uoog-a.oregon-postgres.render.com/neoverse_wz98',
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
