const { zokou } = require("../framework/zokou");
const axios = require('axios');
const ytSearch = require('yt-search');

// Define the command with aliases
zokou({
  nomCom: "play4",
  aliases: ["song4", "ytmp3", "audio4", "ytmp3"],
  categorie: "Music",
  reaction: "🎬"
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

    // Attempt to download from different APIs
    let downloadData;
    let downloadUrl;
    let videoDetails;

    // Function to get download data
    const getDownloadData = async (url) => {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error('Error fetching data from API:', error);
        return { success: false };
      }
    };

    // Try Gifted API
    downloadData = await getDownloadData(`https://api.giftedtech.web.id/api/download/dlmp3?url=${encodeURIComponent(videoUrl)}&apikey=gifted`);
    if (downloadData.success) {
      downloadUrl = downloadData.result.download_url;
      videoDetails = downloadData.result;
    } else {
      // Try Yasiya API if Gifted fails
      downloadData = await getDownloadData(`https://www.dark-yasiya-api.site/download/ytmp3?url=${encodeURIComponent(videoUrl)}`);
      if (downloadData.success) {
        downloadUrl = downloadData.result.download_url;
        videoDetails = downloadData.result;
      } else {
        // Try Dreaded API if both fail
        downloadData = await getDownloadData(`https://api.dreaded.site/api/ytdl/video?query=${encodeURIComponent(videoUrl)}`);
        if (downloadData.success) {
          downloadUrl = downloadData.result.download_url;
          videoDetails = downloadData.result;
        }
      }
    }

    // Check if a valid download URL was found
    if (!downloadUrl || !videoDetails) {
      return repondre('Failed to retrieve download URL from all sources. Please try again later.');
    }

    // Prepare the message payload with external ad details
    const messagePayload = {
      audio: { url: downloadUrl },
      mimetype: 'audio/mp4',
      contextInfo: {
        externalAdReply: {
          title: videoDetails.title,
          body: videoDetails.title,
          mediaType: 1,
          sourceUrl: 'https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f',
          thumbnailUrl: firstVideo.thumbnail,
          renderLargerThumbnail: false,
          showAdAttribution: true,
        },
      },
    };

    // Send the download link to the user
    await zk.sendMessage(dest, messagePayload, { quoted: ms });

  } catch (error) {
    console.error('Error during download process:', error);
    return repondre(`Download failed due to an error: ${error.message || error}`);
  }
});