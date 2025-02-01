const { ezra } = require("../fredi/ezra");
const acrcloud = require("acrcloud");
const yts = require("yt-search");
const ytdl = require("ytdl-core");
const fs = require("fs");

ezra({
  'nomCom': 'shazam',        
  'categorie': "General",  
  'reaction': '🤦'   
}, async (groupId, zk, context) => {
  const { msgRepondu, repondre, arg } = context;

  // Ensure that the message is either an audio or video
  const mime = msgRepondu.mimetype;
  if (!/audio|video/.test(mime)) {
    return repondre("⁉️Please send a valid audio or video file for analysis.");
  }

  try {
    // Download the file (audio/video)
    let mediaBuffer = await msgRepondu.download();
    
    // Initialize the ACRCloud API
    const acr = new acrcloud({
      host: 'identify-ap-southeast-1.acrcloud.com',
      access_key: '26afd4eec96b0f5e5ab16a7e6e05ab37',
      access_secret: 'wXOZIqdMNZmaHJP1YDWVyeQLg579uK2CfY6hWMN8'
    });

    // Identify the song via ACRCloud
    let { status, metadata } = await acr.identify(mediaBuffer);
    
    if (status.code !== 0) {
      return repondre(status.msg);  // If identification fails
    }

    // Extract metadata from the response
    let { title, artists, album, genres, release_date } = metadata.music[0];
    
    // Build the response text
    let responseText = `Title: ${title}\n`;
    if (artists) {
      responseText += `Artists: ${artists.map(v => v.name).join(', ')}\n`;
    }
    if (album) {
      responseText += `Album: ${album.name}\n`;
    }
    if (genres) {
      responseText += `Genres: ${genres.map(v => v.name).join(', ')}\n`;
    }
    if (release_date) {
      responseText += `Release Date: ${release_date}`;
    }

    // Send the response
    repondre(responseText.trim());

  } catch (error) {
    // Handle any errors
    console.error("🚫Error during music recognition:", error);
    await repondre("❌Sorry, I couldn't recognize the song.");
  }
});
