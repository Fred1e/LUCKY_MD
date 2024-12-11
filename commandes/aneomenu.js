const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'menuneo',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://i.ibb.co/CwZz0KK/image.jpg';
            const msg = '';
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
        }
    }
);

zokou(
    {
        nomCom: 'seasonpass',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://i.ibb.co/cg9Gb6h/image.jpg';
            const msg = '';
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
        }
    }
);

    zokou(
    {
        nomCom: 'recompenses',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://i.ibb.co/74xq1jX/image.jpg';
            const msg = '';
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
        }
    }
);

zokou(
    {
        nomCom: 'tournaments',   
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0) {
            const lien = 'https://i.ibb.co/8mD5h4v/image.jpg';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'awards',   
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0) {
            const lien = 'https://i.ibb.co/CWfLcr4/image.jpg';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'season',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (arg[0] === 'UF🥅')  {
            const lien = 'https://telegra.ph/file/2c25e13956f7d292b8a0f.jpg';
            const msg = `*Welcome to the UF🥅 Season*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
During the UF season, the teams are separated into two leagues... the Stars Division and the Novice Division, we will aim for 3 leagues if there are more players. The top 6 of the ONE division will qualify for the Champions League and the top 2 of the SECOND Division too. 

*MATCH Rewards🥅*
⚽Pour 5 matchs:  5.000.000 €
⚽Pour 5 victoires: 25.000.000 € + 10 UFC🪙
⚽Pour 10 matchs: 10.000.000 € + 5 UFC🪙
⚽Pour 10 victoires: 50.000.000 € + 50 UFC🪙

*End of Season Rewards🥅🎁*
🎖️Top 1: +100M € + 70 UFC🪙+100🔷+50🎟️
🥈 Top 3: 50M € + 30 UFC🪙+50🔷+20🎟️
🥉 Top 6: 20M € + 10 UFC🪙+20🔷+10🎟️
🏆UEFA: 100M € + 90 UFC🪙+100🔷+50🎟️

*⚠️Rewards with a minimum of 5 matches*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                     *UF🥅🔝*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        } else if (arg[0] === 'NBA🏀'); {
            const lien = 'https://telegra.ph/file/c70106c58248322fac390.jpg';
            const msg = `*Welcome to the Season Rewards NBA🏀*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
During the NBA season, the teams are separated into two Conferences... the WEST🔴 conference and the EAST🔵 conference. The top 8 in each conference will play in the PLAYOFFS but in the beginning we will do a combined 🔴WEST/EAST🔵 championship and the top 8 will be in the playoffs the most. 

🏀Pour 5 matchs:  5.000.000 $
🏀Pour 5 victoires: 25.000.000 $ + 10 NBC⭕
🏀Pour 10 matchs: 10.000.000 $ + 5 NBC⭕
🏀Pour 10 victoires: 50.000.000 $ + 50 NBC⭕

*Season Rewards🏀🎁*
🎖️Top 1: +100M$ + 70 NBC⭕+100🔷+50🎟️
🥈 Top 3: 50M$ + 30 NBC⭕+50🔷+20🎟️
🥉 Top 6: 20M$ + 10 NBC⭕
🏆Finals: 100M$ + 90 NBC⭕+100🔷+50🎟️

*⚠️Récompenses avec minimum 5 matchs*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                     *NBA2K🏀NE⭕*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
 /*  } else (arg[0] === 'Elysium💠')  {
            const lien = 'https://telegra.ph/file/bdd957fe4f3c12dfdeb66.jpg';
            const msg = `*💠Elysium Season PASS💠*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
The episode of Elysium will take place from 7 p.m. to 10 p.m. GMT+1, participants will have to register in advance during the day to participate. Registration costs 2 NC🔷 and it is only for ranked players (ALL STARS, NBA and UF). The day usually lasts 20 turns, new players will be able to join only from 5 rounds with a 5mins break in case of delay. 

*💠VENUE RULES*
Players cannot be everywhere at once, in order to avoid the disclosure of activity information. *⚠️so once you travel you have to leave the group you are in to the new location that you can easily reach through the community.*!!️If you are forcibly removed then 5🔷 to come back. 

*💠MISSIONS AND FREE PLAY*
The goal of Elysium is first and foremost free play, so explore a gigantic world and find resources. But nevertheless you can go and meet NPCs who will offer you missions and quests *💠Start XP mission* and an NPC can only have 2 to 3 quests available before renewing.

🥉 *Normale*: +100.000💠+10🌟 
🥈 *Difficile*: +300.000💠 +20🌟
🥇 *Extreme*: +500.000💠+30🌟

💠You earn CP according to the activity you do +5 CP and you gain SP🌟 in relation to your purchases and lifestyle, after 3 turns you lose -20% 😃 morale to less than 20% 😟 you become inaccurate and unable to succeed in your actions, you even attract bad luck. 

⚠️If you're dead or stopped it's GAME OVER❌and you lose -10🌟 day is over, you'll only be able to come back the next episode. 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔                                 *💠Processing...*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   */
        }
    });


zokou(
    {
        nomCom: 'records',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/2a2abe4cba6749fb70877.jpg';
            const msg = `. 
           ══════༺༻═══
            ⚜️\`\`\` HISTORY BOOKS \`\`\`⚜️
           ═════ ༺༻═══
Introducing the New World Pantheons, the book of memorable and legendary New World performances! those who have written their names among the Stars and the greatest forever in the New World. 

*🔸+Champions 🏆*
*🔸+MNVP🌟*
*🔸+TOS⭐* 
*🔸+Awards 💫*
 ══════༺༻═══
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                  *🔶𝗡Ξ𝗢💫*

.`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'champions🏆',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/856864a64984161a8f1a8.jpg';
            const msg = `══════༺༻═══
                         🏆\`\`\`CHAMPIONS\`\`\`🏆
                 ══════༺༻═══
                  
Here is the pantheon of New World✨🏆Champions, those who have already won a tournament at NEOverse! NEO TOUR EVO,💠 GRAND SLAM🏆, and SUPER CHAMPIONS CUP🏆(SCC) . 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🔸🔴NEO KÏNGS⚜️🇨🇬:       🏆 
🔸🔵ABA L. KÏNGS⚜️🇸🇳:   🏆
🔸🔴Lily KÏNGS⚜️🇨🇬:         🏆🏆🏆
🔸🔴Damian KÏNGS⚜️🇨🇬 : 🏆🏆🏆
🔸🔵Vanitas KÏNGS⚜️🇸🇳:  🏆
🔸🟢Adam GENESIS🇨🇮:  🏆



░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
New Warriors will come to seek the title of "CHAMPION" in order to engrave their names forever among the immortals in the legend of the new RP world. Are you the NEXT KING? 👑
                   ══════༺༻═══                  
                                🔶𝗡Ξ𝗢💫`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'mnvp⭐',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/8370fd4da3413d1e629f8.jpg';
            const msg = `. 
                   ══════༺༻═══
      💫 \`\`\`MOST NEO VALUABLE PLAYER\`\`\` 💫
                      ═════ ༺༻═══

Prestigious book of those who have written their names in history by finishing *MNVP of their classes🎖️*, the best players of the regular season by class the TOP1🏆. 
🥇 *Niveau LEGENDS*: ⭐⭐⭐(Extreme) 
🥈 *Niveau ÉLITES*: ⭐⭐(Moyen) 
🥉 *Niveau NOVICES*:⭐(Facile) 

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🥇Damian KÏNGS⚜️🇨🇬: 🎖️🎖️🎖️🎖️🎖️🎖️ 
🥇Lily KÏNGS⚜️🇨🇬:         🎖️🎖️🎖️🎖️
🥈Vanitas G KÏNGS⚜️🇸🇳:  🎖️
🥈Adam GENESIS🇨🇮:  🎖️
🥈Grimm TEMPEST🇨🇲:  🎖️
🥈Vyrozz🇹🇬:  🎖️
🥈Zephyr🇨🇮: 🎖️
🥉Kemael🇨🇮:  🎖️
🥉White KÏNGS⚜️🇨🇮:  🎖️
🥉Hazlay🇸🇳: 🎖️
        

                                🔶𝗡Ξ𝗢🌟
                     ══════༺༻═══`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'tos⭐',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/bd61428816cc5e36abcad.jpg';
            const msg = `. 
                  ══════༺༻═══
                        🌟TOS: ALL STARS🌟
                   ═════ ༺༻═══
Here is the category of the SUPERSTARS of the new world, those who have already been in the *TOS* TEAM OF THE SEASON⭐, THE PRESTIGE 🎖️ TEAM, EQUIVALENT TO THE TOTY⭐. 
*⚠️Note that you can retire from NEOverse with Honors and a decoration! But if you leave as a ghost or tarnish your image with the league, you lose your name in the Hall of Honor.* 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*⭐Damian  KÏNGS⚜️🇨🇬*:    7⭐
*⭐Lily KÏNGS⚜️🇨🇬*:             6⭐
*⭐White KÏNGS⚜️🇨🇮*:         3⭐ 
*⭐Vanitas Gold KÏNGS⚜️🇸🇳*: 2⭐
*⭐Aether GENESIS🇬🇦*:         2⭐ 
*⭐Adam GENESIS🇨🇮*:         2⭐ 
*⭐Goldy Shogun🇹🇬*:            2⭐ 
*⭐Atsushi KÏNGS⚜️🇨🇲*:     2⭐
*⭐Kemael🇨🇮*:                        2⭐
*⭐Zephyr🇨🇮*:                          2⭐ 
*⭐Hajime NEXUS🇨🇲*:           1⭐
*⭐Grimm Tempest🇨🇲*:        1⭐ 
*⭐SoloMoe A. KÏNGS⚜️🇸🇳*: 1⭐
*⭐Thanatos Gold KÏNGS⚜️🇧🇫*:  1⭐ 
*⭐The LOA KÏNGS⚜️🇹🇬*:    1⭐
*⭐Adorieru KAMADO🇷🇴*:    1⭐
*⭐Kanzen Gold KING🇨🇮*:    1⭐
*⭐Serena Gold WHITE🇨🇮*:  1⭐

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                   🔶𝗡Ξ𝗢☀️`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

/*zokou(
    {
        nomCom: 'awards💫',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/7d380c5771ac6388f5879.jpg';
            const msg = `. 
                   ══════༺༻═══
                      💫 ''' 𝐆𝐎𝐋𝐃𝐄𝐍 𝐀𝐖𝐀𝐑𝐃𝐒 ''' 💫
                      ═════ ༺༻═══
Here is the category of the SUPERSTARS of the new world, those who have already been in the *TOS* TEAM OF THE SEASON⭐, THE PRESTIGE 🎖️ TEAM, EQUIVALENT TO THE TOTY⭐. 
*⚠️Note that you can retire from NEOverse with Honors and a decoration! But if you leave as a ghost or tarnish your image with the league, you lose your name in the Hall of Honor.* 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
💫 *The BEST🏆*
🔸Lily KÏNGS⚜️🇨🇬:                  2🏆
🔸Damian KÏNGS⚜️🇨🇬:          3🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
💫 *The SIGMA🗿*
🔸Lily KÏNGS⚜️🇨🇬:                  1🗿
🔸Damian KÏNGS⚜️🇨🇬:          1🗿

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

💫 *NEO TROPHY🎗️*
🔸Lily KÏNGS⚜️🇨🇬:                   3🎗️
🔸Damian KÏNGS⚜️🇨🇬:           2🎗️ 
🔸White KÏNGS⚜️🇨🇮:              1🎗️ 
🔸Lord  KÏNGS⚜️🇹🇬:               1🎗️ 



        

                 🔶𝗡Ξ𝗢💫GOLDEN AWARDS
                     ══════༺༻═══`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
*/
zokou(
    {
        nomCom: 'calendar',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://i.ibb.co/GWvn4C5/image.jpg';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'rankings',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://i.ibb.co/1bj0nWf/image.jpg';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'gamepass',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://i.ibb.co/xG1rDqs/image.jpg';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'guides',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const liena = 'https://i.ibb.co/PzKS13f/image.jpg';
            const lienb = 'https://i.ibb.co/FnR6hYj/image.jpg';
            const lienc = 'https://i.ibb.co/tZTSpTH/image.jpg';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: liena }, caption: msg }, { quoted: ms });
            zk.sendMessage(dest, { image: { url: lienb }, caption: msg }, { quoted: ms });
            zk.sendMessage(dest, { image: { url: lienc }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'allstars',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://i.ibb.co/XZbCqqR/image.jpg';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'trade',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://i.ibb.co/qJS32Vc/image.jpg';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

/*zokou(
    {
        nomCom: 'extra',
        categorie: 'luckmd'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (arg[0] === 'draft🔷')  {
            const lien = 'https://telegra.ph/file/bfd52371074158ab34a18.jpg';
            const msg = `🔷In order to make the Draft fairer, Divisions with fewer active players are given priority over the Draft. So it is imperative that Drafter and the Divisions with the most active players go from 4 to 5 over a season with more than 3/5 fights can skip the round where are lower priority so that all divisions have at least 4 safe active players and as new drafts are made, players will become loyal. A division that passes one round has priority over the next round draft. 

🔷Now the Divisions can decide whether to draft or not! Not Drafter also saves money and space, as the quota for a division is 10 active players per Division before increasing after balancing between divisions.
*⚠️If a player is fired (which will allow the Division to recover half of the amount spent) from a division for unjustified inactivity, if he wants to come back, he must start from scratch, so in Rookie and after proving himself, a new division can draft him or he then returns to his original division*

*🔷𝗧𝗿𝗮𝗱𝗲*(TRANSFER🫱🏽‍🫲🏻) 
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
The divisions can transfer players at the end of the season. This is done by exchange between two players for 50% of the fee or a transfer for 100% of the fee. The sum will be paid to the Division that sells the player.
*Joueur TOS🌟*: 1.000.000🧭 + 300.000🧭 ind
*Joueur TOP 6🏆*: 500.000🧭 + 100.000🧭 ind
*Joueur en dessous*: 100.000🧭
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                      *🔷NSL🏆🔝*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);*/

zokou(
    {
        nomCom: 'events',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://i.ibb.co/c8npsnW/image.jpg';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'pave',
        categorie: 'Other'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
           // const lien = '';
            const msg = `.            □□□□ *🔷𝗧𝗘𝗫𝗧𝖦𝖠𝖬𝖨𝖭𝖦🎮* □□□□
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                         *\`🌍Distance\`:* 5m
                         
💬🎧𝗖𝗵𝗮𝘁: 
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🎮 *\`ACTIONS\`*:
-
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                 *🔷𝗡Ξ𝗢🔝*.`;
           // zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   repondre(msg);
        }
    }
);

/*zokou(
    {
        nomCom: 'menuoptions',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
           const msg = `+menuNeo🔷
+Rankings🔷
+calendar🔷
+trade🔷
+Recompenses🎁
+SeasonPass🔷
+tournois🏆
+Events🎊
+Records🔷
+champions🏆
+MNVP⭐
+saison UF🥅
+saison NBA🏀
+Tos⭐
+Duel
+Pave`;
            repondre(msg);
        }
    }
);

zokou(
    {
        nomCom: '',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);*/
