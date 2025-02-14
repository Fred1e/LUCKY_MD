const axios = require('axios');
const { ezra } = require("../fredi/ezra");

const BaseUrl = 'https://api.giftedtechnexus.co.ke';
const downloadUrl = 'https://api.giftedtechnexus.co.ke/api/download/xnxxdl';
const giftedapikey = 'giftedtechk';

ezra({ nomCom: "xx", reaction: "🍂", categorie: "Music" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  try {
    // Check if user provided a video name
    if (!arg || arg.length === 0) {
      return repondre("Give name or link of video to download.");
    }

    const videoName = arg[0]; // Assume the first argument is the name of the video

    // Build the request URL to download the video
    const apiUrl = `${downloadUrl}?url=https://www.xnxx.health/video/${videoName}&apikey=${giftedapikey}`;

    // Make the request to the API
    const response = await axios.get(apiUrl);

    // Extract data from API response
    const { data } = response;

    // Check if API response contains a download link
    if (data && data.downloadLink) {
      // Resend download link to user
      repondre(`Here is your video : [Download](${data.downloadLink})`);
    } else {
      // If the response does not contain a download link, return an error message
      repondre("Error while downloading video. Check the video name.");
    }
  } catch (error) {
    // Handle possible errors when calling the API
    console.error("Error:", error.message || "An error has occurred");
    repondre("Oops, an error occurred while processing your request..");
  }
});
