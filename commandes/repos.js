"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "⚙️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/Fred1e/LUCKY_MD';
  const img = 'https://files.catbox.moe/xee8ol.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = ` *Hellow User
This Is* *LUCKY_MD.*\n _Support Our Channel_ *by follow*,  https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f

🗼 *REPOSITORY:* ${data.html_url}

🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
⊷━━━━━━☆•∞•☆━━━━━━⊷  

 ╭━━═✺ *FREDIE* ✺═━━⊷
 ┊│┌═━━⊷•∞•⊷━━─⊛
 ┌┤┊❁*VISITORS:* ${repoInfo.visitors}
 ┊│┊❁ *STARS:* ${repoInfo.stars}
 ┊│┊❁ *FORKS:* ${repoInfo.forks}
 ┊│┊❁ *RELEASE DATE:* ${releaseDate}
 ┌┤┊❁ *OWNER:* *Fredie tech*
 ┊│┊❁ *THEME:* *FREDI*
 ┊│┊❁ *ENJOY TO USE LUCKY MD*
 ┊│└═━━⊷•∞•⊷━━─⊛
 ╰━━━═⊷✺•∞•✺⊷═━━━⊷ 
 
 🪄🎄ғʀᴇᴅɪᴇᴛᴇᴄʜ ᴛᴇᴀᴍ ᴡɪsʜ ʏᴏᴜ ᴍᴀʀʀʏ ᴄʜʀɪsᴛᴍᴀs🎄 🪄 `;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
