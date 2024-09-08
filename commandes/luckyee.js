const { zokou } = require('../framework/zokou');

// Set a flag list with flag and country
const flagPairs = [
  { flag: "🇺🇸", country: "United States" },
  { flag: "🇬🇧", country: "United Kingdom" },
  { flag: "🇫🇷", country: "France" },
  { flag: "🇩🇪", country: "Germany" },
  { flag: "🇨🇦", country: "Canada" },
  { flag: "🇦🇺", country: "Australia" },
  { flag: "🇯🇵", country: "Japan" },
  { flag: "🇮🇳", country: "India" },
  { flag: "🇮🇹", country: "Italy" },
  { flag: "🇪🇸", country: "Spain" },
  { flag: "🇷🇺", country: "Russia" },
  { flag: "🇧🇷", country: "Brazil" },
  { flag: "🇨🇳", country: "China" },
  { flag: "🇲🇽", country: "Mexico" },
  { flag: "🇿🇦", country: "South Africa" },
  { flag: "🇰🇷", country: "South Korea" },
  { flag: "🇸🇦", country: "Saudi Arabia" },
  { flag: "🇸🇬", country: "Singapore" },
  { flag: "🇸🇪", country: "Sweden" },
  { flag: "🇨🇭", country: "Switzerland" },
  { flag: "🇦🇷", country: "Argentina" },
  { flag: "🇦🇹", country: "Austria" },
  { flag: "🇧🇪", country: "Belgium" },
  { flag: "🇨🇱", country: "Chile" },
  { flag: "🇨🇴", country: "Colombia" },
  { flag: "🇨🇿", country: "Czech Republic" },
  { flag: "🇩🇰", country: "Denmark" },
  { flag: "🇪🇬", country: "Egypt" },
  { flag: "🇫🇮", country: "Finland" },
  { flag: "🇬🇷", country: "Greece" },
  { flag: "🇭🇺", country: "Hungary" },
  { flag: "🇮🇩", country: "Indonesia" },
  { flag: "🇮🇪", country: "Ireland" },
  { flag: "🇮🇱", country: "Israel" },
  { flag: "🇯🇴", country: "Jordan" },
  { flag: "🇰🇿", country: "Kazakhstan" },
  { flag: "🇱🇧", country: "Lebanon" },
  { flag: "🇲🇾", country: "Malaysia" },
  { flag: "🇲🇻", country: "Maldives" },
  { flag: "🇳🇱", country: "Netherlands" },
  { flag: "🇳🇿", country: "New Zealand" },
  { flag: "🇳🇴", country: "Norway" },
  { flag: "🇵🇰", country: "Pakistan" },
  { flag: "🇵🇱", country: "Poland" },
  { flag: "🇵🇹", country: "Portugal" },
  { flag: "🇶🇦", country: "Qatar" },
  { flag: "🇷🇴", country: "Romania" },
  { flag: "🇷🇸", country: "Serbia" }' 
  { flag: "🇹🇿", country: "Tanzania" } 
];

zokou({ nomCom: "guessflag", categorie: "Games" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre } = commandeOptions;

  // Choose a random flagPair
  const flagPair = flagPairs[Math.floor(Math.random() * flagPairs.length)];

  // Send the guessflag question
  await zk.sendMessage(
    dest,
    {
      text: `Guess the country for this flag: ${flagPair.flag}. \nYou have 30 seconds to think about it.\n> POWERED BY LUCKY_MD`,
    },
    { quoted: ms }
  );

  // Wait 30 seconds before sending the response
  await delay(30000);

  // Answer
  await zk.sendMessage(
    dest,
    {
      text: `The answer was: ${flagPair.country}.`,
    },
    { quoted: ms }
  );
});

// Function to create a pause/delay in milliseconds
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
   }
