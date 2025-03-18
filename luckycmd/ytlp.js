const axios = require('axios');
const ytSearch = require('yt-search');
const { ezra } = require("../fredi/ezra");
const conf = require(__dirname + '/../set');

ezra({
  nomCom: "media",
  aliases: ["play", "video", "audiodoc", "viddoc", "shazam", "spotify"],
  categorie: "Music1",
  reaction: "🎧"
}, async (dest, zk, commandOptions) => {
  const { arg, ms, repondre, command } = commandOptions;

  if (!arg[0]) {
    return repondre("❌ Please provide a search query or link.");
  }

  const query = arg.join(" ");
  let downloadUrl, songTitle, duration, thumbnail, videoUrl;

  try {
    if (command === "play" || command === "video") {
      const searchResults = await ytSearch(query);
      if (!searchResults || !searchResults.videos.length) {
        return repondre('❌ No results found for your query.');
      }

      const firstVideo = searchResults.videos[0];
      videoUrl = firstVideo.url;
      songTitle = firstVideo.title;
      duration = firstVideo.timestamp;
      thumbnail = firstVideo.thumbnail;

      const youtubeApis = [
        `https://api.vevioz.com/api/button/mp3?url=${encodeURIComponent(videoUrl)}`,
        `https://yt-api.flx-apps.workers.dev/api/v1/mp3?url=${encodeURIComponent(videoUrl)}`
      ];

      for (const api of youtubeApis) {
        const res = await axios.get(api);
        if (res.data && res.data.url) {
          downloadUrl = res.data.url;
          break;
        }
      }

      if (!downloadUrl) {
        return repondre('❌ Failed to retrieve the download URL.');
      }
    }

    if (command === "spotify") {
      const spotifyApi = `https://api.spotifydown.com/download?url=${encodeURIComponent(query)}`;
      const res = await axios.get(spotifyApi);
      if (res.data && res.data.url) {
        downloadUrl = res.data.url;
        songTitle = res.data.title;
      } else {
        return repondre("❌ Failed to download from Spotify.");
      }
    }

    if (command === "shazam") {
      const shazamApi = `https://shazam-api.com/recognize?url=${encodeURIComponent(query)}`;
      const res = await axios.get(shazamApi);
      if (res.data && res.data.track) {
        songTitle = res.data.track.title;
        duration = res.data.track.duration;
        downloadUrl = res.data.track.url;
      } else {
        return repondre("❌ Song not found on Shazam.");
      }
    }

    if (command === "audiodoc") {
      return zk.sendMessage(dest, { document: { url: downloadUrl }, mimetype: 'audio/mp3', caption: `🎵 ${songTitle}` }, { quoted: ms });
    }

    if (command === "viddoc") {
      return zk.sendMessage(dest, { document: { url: downloadUrl }, mimetype: 'video/mp4', caption: `🎬 ${songTitle}` }, { quoted: ms });
    }

    return zk.sendMessage(dest, {
      caption: `🎶 *Now Playing: ${songTitle}*\n⏳ Duration: ${duration}\n🔗 [Download Link](${downloadUrl})`,
      audio: { url: downloadUrl },
      mimetype: 'audio/mp4',
      contextInfo: {
        externalAdReply: {
          title: conf.BOT,
          body: songTitle,
          mediaType: 1,
          sourceUrl: conf.GURL,
          thumbnailUrl: thumbnail,
          renderLargerThumbnail: true,
          showAdAttribution: true,
        },
      },
    }, { quoted: ms });

  } catch (error) {
    console.error('🚨 Error:', error);
    return repondre(`❌ Error: ${error.message}`);
  }
});
