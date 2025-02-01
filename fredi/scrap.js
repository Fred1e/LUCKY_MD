const axios = require("axios");
const fg = require("api-dylux");

async function downloadAudio(url) {
  try {
    if (!url) {
      throw new Error("URL parameter is required");
    }
    
    const response = await fg.yta(url);
    const title = response.title;
    const downloadLink = response.dl_url;

    return {
      status: true,
      createdBy: "Prabath Kumara (prabathLK)",
      title: title,
      downloadLink: downloadLink
    };
  } catch (error) {
    console.error("Error fetching audio:", error);
    return null;
  }
}

async function downloadVideo(url, format) {
  try {
    if (!url || !format) {
      throw new Error("URL and format parameters are required.");
    }
    
    const formatValue = parseInt(format.replace('p', ''), 10);
    const requestParams = {
      button: 1,
      start: 1,
      end: 1,
      format: formatValue,
      url: url
    };

    const headers = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
      Origin: "https://loader.to",
      Referer: "https://loader.to",
      "Sec-Ch-Ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
      "Sec-Ch-Ua-Mobile": '?1',
      "Sec-Ch-Ua-Platform": "\"Android\"",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
    };

    const response = await axios.get("https://ab.cococococ.com/ajax/download.php", {
      params: requestParams,
      headers: headers
    });
    
    const fileId = response.data.id;

    // Poll for progress until download is complete
    async function checkDownloadProgress() {
      const progressResponse = await axios.get("https://p.oceansaver.in/ajax/progress.php", {
        params: { id: fileId },
        headers: headers
      });

      const { progress, download_url, text } = progressResponse.data;

      if (text === "Finished") {
        return download_url;
      } else {
        // Wait for a second before checking progress again
        await new Promise(resolve => setTimeout(resolve, 1000));
        return checkDownloadProgress();
      }
    }

    return await checkDownloadProgress();
  } catch (error) {
    console.error("Error fetching video:", error);
    return null;
  }
}

module.exports = {
  downloadAudio,
  downloadVideo
};
