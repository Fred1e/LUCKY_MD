const axios = require('axios');
const fs = require('fs');
const { zokou } = require("../framework/zokou");
const { writeFile } = require('fs/promises')

// Command for pokemon
zokou({
  nomCom: "pokemon",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://pokeapi.co/api/v2/pokemon/'; // Replace with actual pokemon.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for kaneki
  nomCom: "kaneki",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/kaneki'; // Replace with actual pokemon.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for akira
  nomCom: "akira",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/akira'; // Replace with actual asuna.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for anna
  nomCom: "anna",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/anna'; // Replace with actual asuna.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for asuna
  nomCom: "asuna",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/asuna'; // Replace with actual asuna.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for boruto
  nomCom: "boruto",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/boruto'; // Replace with actual boruto.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for chiho
  nomCom: "chiho",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/chiho'; // Replace with actual chiho.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for eba
  nomCom: "eba",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/eba'; // Replace with actual eba.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for elaina
  nomCom: "elaina",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/elaina'; // Replace with actual elaina.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for inori
  nomCom: "inori",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/inori'; // Replace with actual inori.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for itachi
  nomCom: "itachi",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/itachi'; // Replace with actual itachi.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for itori
  nomCom: "itori",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/itori'; // Replace with actual itori.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for kaga
  nomCom: "kaga",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/kaga'; // Replace with actual kaga.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for kaori
  nomCom: "kaori",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/kaori'; // Replace with actual kaori.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for kotori
  nomCom: "kotori",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/kotori'; // Replace with actual kotori.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for karumi
  nomCom: "karumi",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/karumi'; // Replace with actual karumi.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for miku
  nomCom: "miku",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/miku'; // Replace with actual miku.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for nezuko
  nomCom: "nezuko",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/nezuko'; // Replace with actual nezuko.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for sakura
  nomCom: "sakura",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/sakura'; // Replace with actual sakura.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for sasuke
  nomCom: "sasuke",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/sasuke'; // Replace with actual sasuke.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for husbu
  nomCom: "husbu",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/husbu'; // Replace with actual husbu.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for shota
  nomCom: "shota",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://api.maher-zubair.tech/anime/shota'; // Replace with actual shota.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

//command for fox-girl
  nomCom: "fox-girl",
  categorie: "Weeb",
  reaction: "🔖"
},
async (origineMessage, zk, commandeOptions) => {
  const { repondre, ms } = commandeOptions;

  const url = 'https://nekos.life/api/v2/img/fox_girl'; // Replace with actual fox-girl.pics API link

  try {
    
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      const imageUrl = response.data.url;

      zk.sendMessage(origineMessage, { image: { url: imageUrl } }, { quoted: ms });
    }
  } catch (error) {
    repondre('🚫Error occurred while retrieving the data. :', error);
  }
});

