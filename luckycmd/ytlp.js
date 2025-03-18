const axios = require('axios');
const ytSearch = require('yt-search');
const { ezra } = require("../fredi/ezra");
const conf = require(__dirname + '/../set');

/** ✅ YouTube MP3 Download */
ezra({
  nomCom: "play",
  aliases: ["song", "mp3"],
  categorie: "tools",
  reaction: "🎧"
}, async (dest, zk, commandOptions) => {
  const { arg, ms, repondre } = commandOptions;
  if (!arg[0]) return repondre("❌ Provide a song name.");

  const query = arg.join(" ");
  const searchResults = await ytSearch(query);
  if (!searchResults.videos.length) return repondre("❌ No results found.");

  const videoUrl = searchResults.videos[0].url;
  const songTitle = searchResults.videos[0].title;
  const thumbnail = searchResults.videos[0].thumbnail;

  const downloadApi = `https://yt-api.flx-apps.workers.dev/api/v1/mp3?url=${encodeURIComponent(videoUrl)}`;
  try {
    const res = await axios.get(downloadApi);
    if (!res.data.url) return repondre("❌ Download failed.");

    await zk.sendMessage(dest, {
      caption: `🎶 *Now Playing: ${songTitle}*\n🔗 [Download Link](${res.data.url})`,
      audio: { url: res.data.url },
      mimetype: 'audio/mp4',
      contextInfo: {
        externalAdReply: { title: conf.BOT, body: songTitle, mediaType: 1, sourceUrl: conf.GURL, thumbnailUrl: thumbnail, showAdAttribution: true },
      },
    }, { quoted: ms });
  } catch (error) {
    console.error(error);
    repondre("❌ Error fetching song.");
  }
});

/** ✅ YouTube MP4 Download */
ezra({
  nomCom: "video",
  aliases: ["ytmp4"],
  categorie: "tools",
  reaction: "🎬"
}, async (dest, zk, commandOptions) => {
  const { arg, ms, repondre } = commandOptions;
  if (!arg[0]) return repondre("❌ Provide a video name.");

  const query = arg.join(" ");
  const searchResults = await ytSearch(query);
  if (!searchResults.videos.length) return repondre("❌ No results found.");

  const videoUrl = searchResults.videos[0].url;
  const title = searchResults.videos[0].title;
  const thumbnail = searchResults.videos[0].thumbnail;

  const downloadApi = `https://yt-api.flx-apps.workers.dev/api/v1/mp4?url=${encodeURIComponent(videoUrl)}`;
  try {
    const res = await axios.get(downloadApi);
    if (!res.data.url) return repondre("❌ Download failed.");

    await zk.sendMessage(dest, {
      caption: `🎬 *Video:* ${title}\n🔗 [Download Link](${res.data.url})`,
      video: { url: res.data.url },
      mimetype: 'video/mp4',
      contextInfo: {
        externalAdReply: { title: conf.BOT, body: title, mediaType: 1, sourceUrl: conf.GURL, thumbnailUrl: thumbnail, showAdAttribution: true },
      },
    }, { quoted: ms });
  } catch (error) {
    console.error(error);
    repondre("❌ Error fetching video.");
  }
});

/** ✅ Spotify Song Download */
ezra({
  nomCom: "spotify",
  categorie: "tools",
  reaction: "🎵"
}, async (dest, zk, commandOptions) => {
  const { arg, ms, repondre } = commandOptions;
  if (!arg[0]) return repondre("❌ Provide a Spotify song link.");

  const query = arg.join(" ");
  const downloadApi = `https://spotifydown.com/api/download?url=${encodeURIComponent(query)}`;

  try {
    const res = await axios.get(downloadApi);
    if (!res.data.url) return repondre("❌ Download failed.");

    await zk.sendMessage(dest, {
      caption: `🎵 *Spotify Track:* ${res.data.title}\n🔗 [Download Link](${res.data.url})`,
      audio: { url: res.data.url },
      mimetype: 'audio/mp4'
    }, { quoted: ms });
  } catch (error) {
    console.error(error);
    repondre("❌ Error fetching Spotify track.");
  }
});

/** ✅ Shazam Song Recognition */
ezra({
  nomCom: "shazam",
  categorie: "tools",
  reaction: "🔍"
}, async (dest, zk, commandOptions) => {
  const { arg, ms, repondre } = commandOptions;
  if (!arg[0]) return repondre("❌ Provide an audio file link.");

  const query = arg.join(" ");
  const shazamApi = `https://shazam-api.com/recognize?url=${encodeURIComponent(query)}`;

  try {
    const res = await axios.get(shazamApi);
    if (!res.data.track) return repondre("❌ Song not found.");

    await zk.sendMessage(dest, {
      caption: `🎧 *Recognized Song:* ${res.data.track.title}\n🎤 *Artist:* ${res.data.track.artist}\n🔗 [Listen](${res.data.track.url})`,
    }, { quoted: ms });
  } catch (error) {
    console.error(error);
    repondre("❌ Error recognizing song.");
  }
});

/** ✅ YouTube Audio as Document */
ezra({
  nomCom: "audiodoc",
  categorie: "tools",
  reaction: "📁"
}, async (dest, zk, commandOptions) => {
  const { arg, ms, repondre } = commandOptions;
  if (!arg[0]) return repondre("❌ Provide a song name.");

  const query = arg.join(" ");
  const searchResults = await ytSearch(query);
  if (!searchResults.videos.length) return repondre("❌ No results found.");

  const videoUrl = searchResults.videos[0].url;
  const songTitle = searchResults.videos[0].title;

  const downloadApi = `https://yt-api.flx-apps.workers.dev/api/v1/mp3?url=${encodeURIComponent(videoUrl)}`;
  try {
    const res = await axios.get(downloadApi);
    if (!res.data.url) return repondre("❌ Download failed.");

    await zk.sendMessage(dest, {
      caption: `📁 *Audio Document:* ${songTitle}`,
      document: { url: res.data.url },
      mimetype: 'audio/mp3'
    }, { quoted: ms });
  } catch (error) {
    console.error(error);
    repondre("❌ Error fetching document.");
  }
});

/** ✅ YouTube Video as Document */
ezra({
  nomCom: "viddoc",
  categorie: "tools",
  reaction: "📂"
}, async (dest, zk, commandOptions) => {
  const { arg, ms, repondre } = commandOptions;
  if (!arg[0]) return repondre("❌ Provide a video name.");

  const query = arg.join(" ");
  const searchResults = await ytSearch(query);
  if (!searchResults.videos.length) return repondre("❌ No results found.");

  const videoUrl = searchResults.videos[0].url;
  const title = searchResults.videos[0].title;

  const downloadApi = `https://yt-api.flx-apps.workers.dev/api/v1/mp4?url=${encodeURIComponent(videoUrl)}`;
  try {
    const res = await axios.get(downloadApi);
    if (!res.data.url) return repondre("❌ Download failed.");

    await zk.sendMessage(dest, {
      caption: `📂 *Video Document:* ${title}`,
      document: { url: res.data.url },
      mimetype: 'video/mp4'
    }, { quoted: ms });
  } catch (error) {
    console.error(error);
    repondre("❌ Error fetching document.");
  }
});
