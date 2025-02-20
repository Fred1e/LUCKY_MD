const { ezra } = require("../fredi/ezra");
const axios = require('axios');
const ytSearch = require('yt-search');
const conf = require(__dirname + '/../set');const { Catbox } = require("node-catbox");
const fs = require('fs-extra');
const { toAudio } = require("../fredi/converting");
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
    return repondre("Please provide a audio name.");
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

    // Fetch download data from the provided API
    const apiUrl = `https://bk9.fun/download/youtube?url=${encodeURIComponent(videoUrl)}`;
    const response = await axios.get(apiUrl);
    const downloadData = response.data;

    // Check if a valid download URL was found
    if (!downloadData || !downloadData.BK9 || !downloadData.BK9.BK8 || !downloadData.BK9.BK8.length) {
      return repondre('Failed to retrieve download URL from the source. Please try again later.');
    }

    const downloadUrl = downloadData.BK9.BK8[0].link;
    const videoDetails = downloadData.BK9;

    // Prepare the message payload with external ad details
    const messagePayloads = [
      {
       caption: `\n*LUCKY MD AUDIOS*\n
╭┈┈┈⊷
┊ *Title:* ${songTitle} 
┊ *Quality:* High
┊ *Duration:* ${firstVideo.timestamp}
╰┈┈┈┈┈┈┈┈┈┈┈┈┈⊷
⦿ *Direct YtLink:* ${videoUrl}

> regards frediezra`,
        audio: { url: downloadUrl },
        mimetype: 'audio/mp4',
        contextInfo: {
          externalAdReply: {
            title: videoDetails.title,
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
┊ *Title:* ${songTitle} 
┊ *Quality:* High
┊ *Duration:* ${firstVideo.timestamp}
╰┈┈┈┈┈┈┈┈┈┈┈┈┈⊷
⦿ *Direct YtLink:* ${videoUrl}

> regards frediezra`,
        document: { url: downloadUrl },
        mimetype: 'audio/mpeg',
        contextInfo: {
          externalAdReply: {
            title: videoDetails.title,
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
┊ *Title:* ${songTitle} 
┊ *Quality:* High
┊ *Duration:* ${firstVideo.timestamp}
╰┈┈┈┈┈┈┈┈┈┈┈┈┈⊷
⦿ *Direct YtLink:* ${videoUrl}

> regards frediezra`,
        document: { url: downloadUrl },
        mimetype: 'audio/mp4',
        contextInfo: {
          externalAdReply: {
            title: videoDetails.title,
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

    // Fetch download data from the provided API
    const apiUrl = `https://bk9.fun/download/youtube?url=${encodeURIComponent(videoUrl)}`;
    const response = await axios.get(apiUrl);
    const downloadData = response.data;

    // Check if a valid download URL was found
    if (!downloadData || !downloadData.BK9 || !downloadData.BK9.BK8 || !downloadData.BK9.BK8.length) {
      return repondre('Failed to retrieve download URL from the source. Please try again later.');
    }

    const downloadUrl = downloadData.BK9.BK8[0].link;
    const videoDetails = downloadData.BK9;

    // Prepare the message payload with external ad details
    const messagePayloads = [
      {
       caption: `\n*LUCKY MD VIDEOS*\n
╭┈┈┈⊷
┊ *Title:* ${songTitle} 
┊ *Quality:* High
┊ *Duration:* ${firstVideo.timestamp}
╰┈┈┈┈┈┈┈┈┈┈┈┈┈⊷
⦿ *Direct YtLink:* ${videoUrl}

> regards frediezra`,
        video: { url: downloadUrl },
        mimetype: 'video/mp4',
        contextInfo: {
          externalAdReply: {
            title: videoDetails.title,
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
       caption: `\n*LUCKY MD VIDEOS*\n
╭┈┈┈⊷
┊ *Title:* ${songTitle} 
┊ *Quality:* High
┊ *Duration:* ${firstVideo.timestamp}
╰┈┈┈┈┈┈┈┈┈┈┈┈┈⊷
⦿ *Direct YtLink:* ${videoUrl}

> regards frediezra`,
        document: { url: downloadUrl },
        mimetype: 'video/mp4',
        contextInfo: {
          externalAdReply: {
            title: videoDetails.title,
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
  'nomCom': 'url2025',       // Command to trigger the function
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


ezra({
  nomCom: "toaudio",
  aliases: ["convertaudio", "audioconvert"],
  reaction: '🤦',
  categorie: "download"
}, async (dest, zk, commandeOptions) => {
  const { repondre, msgRepondu, auteurMessage, arg } = commandeOptions;
  
  if (msgRepondu) {
    
    if (msgRepondu.videoMessage) {
      try {
        // Download and save the video
        let media = await zk.downloadAndSaveMediaMessage(msgRepondu.videoMessage);

        let audioBuffer = await toAudio(media, 'mp4');

    
        await zk.sendMessage(dest, {
          audio: audioBuffer,
          mimetype: 'audio/mp3'
        }, { quoted: msgRepondu });

        await repondre("Video has been successfully converted to audio.");
      } catch (error) {
        console.error("Error converting video to audio:", error);
        await repondre("Failed to convert video to audio. Please try again." + error );
      }
    } else {
      await repondre("Please reply to a video message to convert it to audio.");
    }
  } else {
    await repondre("Please reply to a video message to convert it to audio.");
  }
});
