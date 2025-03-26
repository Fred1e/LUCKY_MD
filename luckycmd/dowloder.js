const { ezra } = require("../fredi/ezra");
const axios = require('axios');
const conf = require(__dirname + "/../set");

// General downloader function
const handleDownload = async (dest, zk, params, serviceName, apiUrl, exampleUsage) => {
  const { repondre, arg } = params;
  const query = arg.join(" ").trim();

  if (!query) {
    return repondre(exampleUsage);
  }

  try {
    const response = await axios.get(`${apiUrl}${encodeURIComponent(query)}`, {
      timeout: 15000 // 15s timeout
    });

    if (response.status === 200 && response.data) {
      const result = response.data.link || response.data.url || "Download link not found.";

      await zk.sendMessage(dest, {
        text: `📥 *${serviceName} Download:*\n\n🔗 *Link:* ${result}\n\n✅ Enjoy your download!`,
        contextInfo: {
          externalAdReply: {
            title: conf.BOT,
            body: "Fast & Reliable Downloads",
            thumbnailUrl: conf.URL,
            sourceUrl: "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
            mediaType: 1,
            showAdAttribution: true,
          },
        },
      });
    } else {
      throw new Error("Invalid response from the API");
    }
  } catch (error) {
    console.error(`Error fetching ${serviceName} download:`, error.message);
    await repondre(`❌ Failed to fetch ${serviceName} download. Try again later.`);
  }
};

// Downloader Command List
const downloaders = [
  { name: "ytmp3", aliases: ["yt-audio", "youtube-mp3"], url: "https://bk9.fun/download/ytmp3?q=", example: "Example: ytmp3 https://youtube.com/watch?v=xyz" },
  { name: "ytmp4", aliases: ["yt-video", "youtube-mp4"], url: "https://bk9.fun/download/ytmp4?q=", example: "Example: ytmp4 https://youtube.com/watch?v=xyz" },
  { name: "facebooka", aliases: ["fb", "fbdown"], url: "https://bk9.fun/download/facebook?q=", example: "Example: facebook https://facebook.com/video/xyz" },
  { name: "instagramu", aliases: ["ig", "igdown"], url: "https://bk9.fun/download/instagram?q=", example: "Example: instagram https://instagram.com/reel/xyz" },
  { name: "tiktoka", aliases: ["tt", "ttdown"], url: "https://bk9.fun/download/tiktok?q=", example: "Example: tiktok https://tiktok.com/@user/video/xyz" },
  { name: "twitters", aliases: ["x", "twdown"], url: "https://bk9.fun/download/twitter?q=", example: "Example: twitter https://twitter.com/user/status/xyz" },
  { name: "soundcloud", aliases: ["sc", "scdown"], url: "https://bk9.fun/download/soundcloud?q=", example: "Example: soundcloud https://soundcloud.com/user/songxyz" },
  { name: "spotifye", aliases: ["sp", "spotifydown"], url: "https://bk9.fun/download/spotify?q=", example: "Example: spotify https://open.spotify.com/track/xyz" },
];

// Register Downloader Commands
downloaders.forEach(downloader => {
  ezra({
    nomCom: downloader.name,
    aliases: downloader.aliases,
    reaction: '📥',
    categorie: "Downloader"
  }, async (dest, zk, params) => {
    handleDownload(dest, zk, params, downloader.name.toUpperCase(), downloader.url, downloader.example);
  });
});
