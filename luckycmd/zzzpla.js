const { ezra } = require("../fredi/ezra");
const axios = require('axios');
const ytSearch = require('yt-search');
const conf = require(__dirname + '/../set');

// Define the command with aliases for play
ezra({
  nomCom: "play",
  aliases: ["audio", "mp3"],
  categorie: "Music",
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
      return repondre('No audio found for the specified query.');
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
    

    // Prepare the message with song details
    const messagePayload = {
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

    await zk.sendMessage(dest, messagePayload, { quoted: ms });

  } catch (error) {
    console.error('Error during download process:', error);
    return repondre(`Download failed due to an error: ${error.message || error}`);
  }
});

// Define the command with aliases for song
ezra({
  nomCom: "song",
  aliases: ["playdoc", "mp3doc"],
  categorie: "Music",
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
      return repondre('No audio found for the specified query.');
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
    

    // Prepare the message with song details
    const messagePayload = {
      caption: `\n*LUCKY MD DOCUMENTS*\n
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
      },

    await zk.sendMessage(dest, messagePayload, { quoted: ms });

  } catch (error) {
    console.error('Error during download process:', error);
    return repondre(`Download failed due to an error: ${error.message || error}`);
  }
});

// Define the command with aliases for video
ezra({
  nomCom: "video",
  aliases: ["videos", "mp4"],
  categorie: "Music",
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
      return repondre('No audio found for the specified query.');
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
    

    // Prepare the message with song details
    const messagePayload = {
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

    await zk.sendMessage(dest, messagePayload, { quoted: ms });

  } catch (error) {
    console.error('Error during download process:', error);
    return repondre(`Download failed due to an error: ${error.message || error}`);
  }
});


// Define the command with aliases for videodoc
ezra({
  nomCom: "videodoc",
  aliases: ["videodocument", "mp4doc"],
  categorie: "Music",
  reaction: "🎞️"
}, async (dest, zk, commandOptions) => {
  const { arg, ms, repondre } = commandOptions;

  // Check if a query is provided
  if (!arg[0]) {
    return repondre("Please provide a video documents name.");
  }

  const query = arg.join(" ");

  try {
    // Perform a YouTube search based on the query
    const searchResults = await ytSearch(query);

    // Check if any videos were found
    if (!searchResults || !searchResults.videos.length) {
      return repondre('No audio found for the specified query.');
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
    

    // Prepare the message with song details
    const messagePayload = {
      caption: `\n*LUCKY MD VIDEO DOC*\n
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
      },

    await zk.sendMessage(dest, messagePayload, { quoted: ms });

  } catch (error) {
    console.error('Error during download process:', error);
    return repondre(`Download failed due to an error: ${error.message || error}`);
  }
});

