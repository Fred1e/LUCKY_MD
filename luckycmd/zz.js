const { ezra } = require("../fredi/ezra");
const axios = require('axios');
const ytSearch = require('yt-search');
const conf = require(__dirname + '/../set');
const { Catbox } = require("node-catbox");
const fs = require('fs-extra');
const { downloadAndSaveMediaMessage } = require('@whiskeysockets/baileys');

// Initialize Catbox
const catbox = new Catbox();

// Function to upload a file to Catbox and return the URL
async function uploadToCatbox(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error("File does not exist");
  }
  try {
    const uploadResult = await catbox.uploadFile({ path: filePath });
    if (uploadResult) {
      return uploadResult;
    } else {
      throw new Error("Error retrieving file link");
    }
  } catch (error) {
    throw new Error(String(error));
  }
}
// Define the command with aliases for play
ezra({
  nomCom: "play",
  aliases: ["song", "playdoc", "audio", "mp3"],
  categorie: "download",
  reaction: "🎧"
}, async (dest, zk, commandOptions) => {
  const { arg, ms, repondre } = commandOptions;

  // Check if a query is provided
  if (!arg[0]) {
    return repondre("Please provide a song name.");
  }

  const query = arg.join(" ");

  try {
    // Perform a YouTube search based on the query
    const searchResults = await ytSearch(query);

    // Check if any videos were found
    if (!searchResults || !searchResults.videos.length) {
      return repondre('No song found for the specified query.');
    }

    const firstVideo = searchResults.videos[0];
    const videoUrl = firstVideo.url;

    // Function to get download data from APIs
    const getDownloadData = async (url) => {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error('Error fetching data from API:', error);
        return { success: false };
      }
    };

    // List of APIs to try
    const apis = [
      `https://api-rin-tohsaka.vercel.app/download/ytmp4?url=${encodeURIComponent(videoUrl)}`,
      `https://apis.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(videoUrl)}`,
      `https://www.dark-yasiya-api.site/download/ytmp3?url=${encodeURIComponent(videoUrl)}`,
      `https://api.giftedtech.web.id/api/download/dlmp3?url=${encodeURIComponent(videoUrl)}&apikey=gifted-md`,
      `https://api.dreaded.site/api/ytdl/audio?url=${encodeURIComponent(videoUrl)}`
    ];

    let downloadData;
    for (const api of apis) {
      downloadData = await getDownloadData(api);
      if (downloadData && downloadData.success) break;
    }

    // Check if a valid download URL was found
    if (!downloadData || !downloadData.success) {
      return repondre('Failed to retrieve download URL from all sources. Please try again later.');
    }

    const downloadUrl = downloadData.result.download_url;
    const videoDetails = downloadData.result;

    // Prepare the message payload with external ad details
    const messagePayloads = [
      {
      caption: `\n*LUCKY MD AUDIOS*\n
╭┈┈┈⊷
┊ *Made:* in Arusha Tanzania 
┊ *Quality:* High
┊ *Powered:* by FrediEtech 
╰┈┈┈┈┈┈┈┈┈┈┈┈┈⊷
🌐 *Bot Repo:* https://github.com/Fred1e/LUCKY_MD

> regards frediezra`,
        audio: { url: downloadUrl },
        mimetype: 'audio/mp4',
        contextInfo: {
          externalAdReply: {
            title: conf.BOT,
            body: videoDetails.title,
            mediaType: 1,
            sourceUrl: conf.GURL,
            thumbnailUrl: firstVideo.thumbnail,
            renderLargerThumbnail: false,
            showAdAttribution: true,
          },
        },
      },
      {
      caption: `\n*LUCKY MD AUDIOS*\n
╭┈┈┈⊷
┊ *Made:* in Arusha Tanzania 
┊ *Quality:* High
┊ *Powered:* by FrediEtech 
╰┈┈┈┈┈┈┈┈┈┈┈┈┈⊷
🌐 *Bot Repo:* https://github.com/Fred1e/LUCKY_MD

> regards frediezra`,
        document: { url: downloadUrl },
        mimetype: 'audio/mpeg',
        contextInfo: {
          externalAdReply: {
            title: conf.BOT,
            body: videoDetails.title,
            mediaType: 1,
            sourceUrl: conf.GURL,
            thumbnailUrl: firstVideo.thumbnail,
            renderLargerThumbnail: false,
            showAdAttribution: true,
          },
        },
      },
      {
      caption: `\n*LUCKY MD AUDIOS*\n
╭┈┈┈⊷
┊ *Made:* in Arusha Tanzania 
┊ *Quality:* High
┊ *Powered:* by FrediEtech 
╰┈┈┈┈┈┈┈┈┈┈┈┈┈⊷
🌐 *Bot Repo:* https://github.com/Fred1e/LUCKY_MD

> regards frediezra`,
        document: { url: downloadUrl },
        mimetype: 'audio/mp4',
        contextInfo: {
          externalAdReply: {
            title: conf.BOT,
            body: videoDetails.title,
            mediaType: 1,
            sourceUrl: conf.GURL,
            thumbnailUrl: firstVideo.thumbnail,
            renderLargerThumbnail: false,
            showAdAttribution: true,
          },
        },
      }
    ];

    // Send the download link to the user for each payload
    for (const messagePayload of messagePayloads) {
      await zk.sendMessage(dest, messagePayload, { quoted: ms });
    }

  } catch (error) {
    console.error('Error during download process:', error);
    return repondre(`Download failed due to an error: ${error.message || error}`);
  }
});

// Define the command with aliases for video
ezra({
  nomCom: "video",
  aliases: ["videodoc", "film", "mp4"],
  categorie: "download",
  reaction: "🎞️"
}, async (dest, zk, commandOptions) => {
  const { arg, ms, repondre } = commandOptions;

  // Check if a query is provided
  if (!arg[0]) {
    return repondre("Please provide a video name.");
  }

  const query = arg.join(" ");

  try {
    // Perform a YouTube search based on the query
    const searchResults = await ytSearch(query);

    // Check if any videos were found
    if (!searchResults || !searchResults.videos.length) {
      return repondre('No video found for the specified query.');
    }

    const firstVideo = searchResults.videos[0];
    const videoUrl = firstVideo.url;

    // Function to get download data from APIs
    const getDownloadData = async (url) => {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error('Error fetching data from API:', error);
        return { success: false };
      }
    };

    // List of APIs to try
    const apis = [
      `https://api-rin-tohsaka.vercel.app/download/ytmp4?url=${encodeURIComponent(videoUrl)}`,
      `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(videoUrl)}`,
      `https://www.dark-yasiya-api.site/download/ytmp4?url=${encodeURIComponent(videoUrl)}`,
      `https://api.giftedtech.web.id/api/download/dlmp4?url=${encodeURIComponent(videoUrl)}&apikey=gifted-md`,
      `https://api.dreaded.site/api/ytdl/video?url=${encodeURIComponent(videoUrl)}`
    ];

    let downloadData;
    for (const api of apis) {
      downloadData = await getDownloadData(api);
      if (downloadData && downloadData.success) break;
    }

    // Check if a valid download URL was found
    if (!downloadData || !downloadData.success) {
      return repondre('Failed to retrieve download URL from all sources. Please try again later.');
    }

    const downloadUrl = downloadData.result.download_url;
    const videoDetails = downloadData.result;

    // Prepare the message payload with external ad details
    const messagePayloads = [
      {
      caption: `\n*LUCKY MD AUDIOS*\n
╭┈┈┈⊷
┊ *Made:* in Arusha Tanzania 
┊ *Quality:* High
┊ *Powered:* by FrediEtech 
╰┈┈┈┈┈┈┈┈┈┈┈┈┈⊷
🌐 *Bot Repo:* https://github.com/Fred1e/LUCKY_MD

> regards frediezra`,
        video: { url: downloadUrl },
        mimetype: 'video/mp4',
        contextInfo: {
          externalAdReply: {
            title: conf.BOT,
            body: videoDetails.title,
            mediaType: 1,
            sourceUrl: conf.GURL,
            thumbnailUrl: firstVideo.thumbnail,
            renderLargerThumbnail: false,
            showAdAttribution: true,
          },
        },
      },
      {
      caption: `\n*LUCKY MD AUDIOS*\n
╭┈┈┈⊷
┊ *Made:* in Arusha Tanzania 
┊ *Quality:* High
┊ *Powered:* by FrediEtech 
╰┈┈┈┈┈┈┈┈┈┈┈┈┈⊷
🌐 *Bot Repo:* https://github.com/Fred1e/LUCKY_MD

> regards frediezra`,
        document: { url: downloadUrl },
        mimetype: 'video/mp4',
        contextInfo: {
          externalAdReply: {
            title: conf.BOT,
            body: videoDetails.title,
            mediaType: 1,
            sourceUrl: conf.GURL,
            thumbnailUrl: firstVideo.thumbnail,
            renderLargerThumbnail: false,
            showAdAttribution: true,
          },
        },
      }
    ];

    // Send the download link to the user
    for (const messagePayload of messagePayloads) {
      await zk.sendMessage(dest, messagePayload, { quoted: ms });
    }

  } catch (error) {
    console.error('Error during download process:', error);
    return repondre(`Download failed due to an error: ${error.message || error}`);
  }
});


// Command to upload image, video, or audio file
ezra({
  'nomCom': 'tourl',       // Command to trigger the function
  'categorie': "download", // Command category
  'reaction': '👨🏿‍💻'    // Reaction to use on command
}, async (groupId, client, context) => {
  const { msgRepondu, repondre } = context;

  // If no message (image/video/audio) is mentioned, prompt user
  if (!msgRepondu) {
    return repondre("Please mention an image, video, or audio.");
  }

  let mediaPath;

  // Check if the message contains a video
  if (msgRepondu.videoMessage) {
    mediaPath = await client.downloadAndSaveMediaMessage(msgRepondu.videoMessage);
  }
 else if (msgRepondu.gifMessage) {
    mediaPath = await client.downloadAndSaveMediaMessage(msgRepondu.gifMessage);
  }
 else if (msgRepondu.stickerMessage) {
    mediaPath = await client.downloadAndSaveMediaMessage(msgRepondu.stickerMessage);
  }
else if (msgRepondu.documentMessage) {
    mediaPath = await client.downloadAndSaveMediaMessage(msgRepondu.documentMessage);
  }
  // Check if the message contains an image
  else if (msgRepondu.imageMessage) {
    mediaPath = await client.downloadAndSaveMediaMessage(msgRepondu.imageMessage);
  }
  // Check if the message contains an audio file
  else if (msgRepondu.audioMessage) {
    mediaPath = await client.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
  } else {
    // If no media (image, video, or audio) is found, prompt user
    return repondre("Please mention an image, video, or audio.");
  }

  try {
    // Upload the media to Catbox and get the URL
    const fileUrl = await uploadToCatbox(mediaPath);

    // Delete the local media file after upload
    fs.unlinkSync(mediaPath);

    // Respond with the URL of the uploaded file
    repondre(fileUrl);
  } catch (error) {
    console.error("Error while creating your URL:", error);
    repondre("Oops, there was an error.");
  }
});
