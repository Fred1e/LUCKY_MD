const { ezra } = require("../fredi/ezra");
const axios = require("axios");

ezra({ nomCom: "logo", categorie: "Search", reaction: "🤭" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
  const text = arg.join(" ");

  if (!text) {
    repondre("Please provide a search query.");
    return;
  }

  try {
    // Message content
    const messageText = `Reply with below numbers to generate *${text}* logo

1⊷Black Pink pink logo with members signature  
2⊷ Black Pink style 
3⊷ Silver 3D  
4⊷ Naruto  
5⊷ Digital Glitch
6⊷ Birthday cake  
7⊷ Zodiac 
8⊷ Underwater 🫧
9⊷ Glow 🌟
10⊷ Avatar gold🥇  
11⊷ Bokeh 
12⊷ Fireworks 🎇
13⊷ Gaming logo 
14⊷ Signature 💫 
15⊷ Luxury 
16⊷ Dragon fire 🐉
17⊷ Queen card
18⊷ Graffiti color   
19⊷ Tattoo 
20⊷ Pentakill 🔥
21⊷ Halloween 🎃
22⊷ Horror    
23⊷ Blood 🩸
24⊷ Women's day    
25⊷ Valentine 
26⊷ Neon light 🕯️
27⊷ Gaming assassin 
28⊷ Foggy glass 
29⊷ Sand summer beach 🏖️
30⊷ Light 🚨  
31⊷ Modern gold 🪙
32⊷ Cartoon style graffiti 
33⊷ Galaxy ❤️‍🔥
34⊷ Anonymous hacker (avatar cyan neon)
35⊷ Birthday flower cake 🎂
36⊷ Dragon 🐲 ball 
37⊷ Elegant rotation 
38⊷ Write text on wet glass
39⊷ Water 3D 
40⊷ Realistic sand ⌛
41⊷ PUBG mascot
42⊷ Typography 
43⊷ Naruto Shippuden 
44⊷ Colourful paint 🎨
45⊷ Typography maker
46⊷ Incandescent
47⊷ Cartoon style graffiti 
48⊷ Galaxy ❤️‍🔥
49⊷ Anonymous hacker (avatar cyan neon)
50⊷ Birthday cake

*Stay connected 😊🤦*`;

    const contextInfo = {
      mentionedJid: [ms.sender], // Mention the sender
      externalAdReply: {
        title: "🍂 𝐋𝐔𝐂𝐊𝐘-𝚳𝐃 🤦",
        body: "Regards, Frediezra",
        thumbnailUrl: "https://files.catbox.moe/7irwqn.jpeg",
        sourceUrl: "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    };

    const messageToSend = {
      text: messageText,
      contextInfo,
    };

    // Send the message
    const sentMessage = await zk.sendMessage(dest, messageToSend, { quoted: ms });

    // Event listener for message responses
    zk.ev.on('messages.upsert', async (update) => {
      const message = update.messages[0];
      if (!message.message || !message.message.extendedTextMessage) {
        return;
      }

      const responseText = message.message.extendedTextMessage.text.trim();
      if (message.message.extendedTextMessage.contextInfo && message.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id) {
        // Handle different logo choices based on number
        let logoUrl;
        switch (responseText) {
          case '1':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html", text);
            break;
          case '2':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html", text);
            break;
          case '3':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html", text);
            break;
          case '4':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", text);
            break;
          case '5':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html", text);
            break;
          case '6':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/birthday-cake-96.html", text);
            break;
          case '7':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/free-zodiac-online-logo-maker-491.html", text);
            break;
          case '8':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/3d-underwater-text-effect-online-682.html", text);
            break;
          case '9':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/advanced-glow-effects-74.html", text);
            break;
          case '10':
            logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-avatar-gold-online-303.html", text);
            break;
          case '11':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/bokeh-text-effect-86.html", text);
                        break;
                    case '12':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/text-firework-effect-356.html", text);
                        break;
                    case '13':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/free-gaming-logo-maker-for-fps-game-team-546.html", text);
                        break;
                    case '14':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/arrow-tattoo-effect-with-signature-712.html", text);
                        break;
                      case '15':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/free-luxury-logo-maker-create-logo-online-458.html", text);
                        break;
                    case '16':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/dragon-fire-text-effect-111.html", text);
                        break;
                    case '17':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-a-personalized-queen-card-avatar-730.html", text);
                        break;
                    case '18':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/graffiti-color-199.html", text);
                        break;
                    case '19':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/make-tattoos-online-by-your-name-309.html", text);
                        break;
                    case '20':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-a-lol-pentakill-231.html", text);
                        break;
                    case '21':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/cards-halloween-online-81.html", text);
                        break;
                      case '22':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/writing-horror-letters-on-metal-plates-265.html", text);
                        break;
                    case '23':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/write-blood-text-on-the-wall-264.html", text);
                        break;
                    case '24':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-beautiful-international-women-s-day-cards-399.html", text);
                        break;
                    case '25':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/beautiful-flower-valentine-s-day-greeting-cards-online-512.html", text);
                        break;
                    case '26':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html", text);
                        break;
                    case '27':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-logo-team-logo-gaming-assassin-style-574.html", text);
                        break;
                    case '28':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html", text);
                        break;
                    case '29':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html", text);
                        break;
                    case '30':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/text-light-effets-234.html", text);
                        break;
                    case '31':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/modern-gold-3-212.html", text);
                        break;
                    case '32':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html", text);
                        break;
                    case '33':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/galaxy-text-effect-new-258.html", text);
                        break;
                    case '34':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", text);
                        break;
                    case '35':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/write-name-on-flower-birthday-cake-pics-472.html", text);
                        break; 
                    case '36':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", text);
                        break;
                    case '37':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-elegant-rotation-logo-online-586.html", text);
                        break;
                    case '38':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", text);
                        break;
                    case '39':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/water-3d-text-effect-online-126.html", text);
                        break;
                    case '40':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/realistic-3d-sand-text-effect-online-580.html", text);
                        break;
                    case '41':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/pubg-mascot-logo-maker-for-an-esports-team-612.html", text);
                        break;
                     case '42':
                        logoUrl = await fetchLogoUrl("1https://en.ephoto360.com/create-online-typography-art-effects-with-multiple-layers-811.html", text);
                        break;
                     case '43':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", text);
                        break;
                    case '44':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html", text);
                        break;
                    case '45':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/make-typography-text-online-338.html", text);
                        break;
                    case '46':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html", text);
                        break;
                    case '47':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html", text);
                        break;
                    case '48':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/birthday-cake-96.html", text);
                        break;
                    case '49':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/free-zodiac-online-logo-maker-491.html", text);
                        break;
                     case '50':
                        logoUrl = await fetchLogoUrl("https://en.ephoto360.com/free-zodiac-online-logo-maker-491.html", text);
                        break;
          // Add additional cases as required
          default:
            return repondre("*_Invalid number. Please reply with a valid number._*");
        }

        // Send the logo
        if (logoUrl) {
          await zk.sendMessage(dest, {
            image: { url: logoUrl },
            caption: `*Created logo by Lucky Md*`,
          }, { quoted: ms });
        }
      }
    });
  } catch (error) {
    console.log(error);
    repondre(`Error: ${error}`);
  }
});

// Function to fetch the logo URL using axios
const fetchLogoUrl = async (url, name) => {
  try {
    const response = await axios.get(`https://api-pink-venom.vercel.app/api/logo`, {
      params: { url, name }
    });
    return response.data.result.download_url;
  } catch (error) {
    console.error("Error fetching logo:", error);
    return null;
  }
};
