"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
const fetch = require("node-fetch");
const FormData = require("form-data");
const { fileTypeFromBuffer } = require("file-type");
const { unlink } = require("fs/promises");

const MAX_FILE_SIZE_MB = 200;

async function uploadMedia(buffer) {
  try {
    const { ext } = await fileTypeFromBuffer(buffer);
    const bodyForm = new FormData();
    bodyForm.append("fileToUpload", buffer, "file." + ext);
    bodyForm.append("reqtype", "fileupload");

    const res = await fetch("https://catbox.moe/user/api.php", {
      method: "POST",
      body: bodyForm,
    });

    if (!res.ok) {
      throw new Error(`Upload failed with status ${res.status}: ${res.statusText}`);
    }

    const data = await res.text();
    return data;
  } catch (error) {
    console.error("Error during media upload:", error);
    throw new Error('Failed to upload media');
  }
}

// hansurl command function to handle media upload via zokou
zokou({
  nomCom: "luckyurl", // Command name
  reaction: "👊", 
  nomFichier: __filename 
}, async (dest, zk, commandeOptions) => {

  const prefixMatch = dest.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = dest.startsWith(prefix) ? dest.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  if (cmd === 'luckyurl') {
    if (!zk.quoted || !['imageMessage', 'videoMessage', 'audioMessage'].includes(zk.quoted.mtype)) {
      return zk.sendMessage(dest, { text: `Send/Reply/Quote an image, video, or audio to upload \n*${prefix + cmd}*` });
    }

    try {
      const loadingMessages = [
        "*「▰▰▰▱▱▱▱▱▱▱」*",
        "*「▰▰▰▰▱▱▱▱▱▱」*",
        "*「▰▰▰▰▰▱▱▱▱▱」*",
        "*「▰▰▰▰▰▰▱▱▱▱」*",
        "*「▰▰▰▰▰▰▰▱▱▱」*",
        "*「▰▰▰▰▰▰▰▰▱▱」*",
        "*「▰▰▰▰▰▰▰▰▰▱」*",
        "*「▰▰▰▰▰▰▰▰▰▰」*",
      ];

      const loadingMessageCount = loadingMessages.length;
      let currentMessageIndex = 0;

      const { key } = await zk.sendMessage(dest, { text: loadingMessages[currentMessageIndex] });

      const loadingInterval = setInterval(() => {
        currentMessageIndex = (currentMessageIndex + 1) % loadingMessageCount;
        zk.sendMessage(dest, { text: loadingMessages[currentMessageIndex] }, { messageId: key });
      }, 500);

      const media = await zk.quoted.download();
      if (!media) throw new Error('Failed to download media.');

      const fileSizeMB = media.length / (1024 * 1024);
      if (fileSizeMB > MAX_FILE_SIZE_MB) {
        clearInterval(loadingInterval);
        return zk.sendMessage(dest, { text: `File size exceeds the limit of ${MAX_FILE_SIZE_MB}MB.` });
      }

      const mediaUrl = await uploadMedia(media);

      clearInterval(loadingInterval);
      await zk.sendMessage(dest, { text: '✅ Loading complete.' });

      const mediaType = getMediaType(zk.quoted.mtype);
      if (mediaType === 'audio') {
        await zk.sendMessage(dest, { text: `*Hey ${dest} Here Is Your Audio URL*\n*Url:* ${mediaUrl}` });
      } else {
        await zk.sendMessage(dest, { [mediaType]: { url: mediaUrl }, caption: `*Hey ${dest} Here Is Your Media*\n*Url:* ${mediaUrl}` });
      }

    } catch (error) {
      console.error('Error processing media:', error);
      zk.sendMessage(dest, { text: 'Error processing media.' });
    }
  }
});

// Helper function to determine media type
const getMediaType = (mtype) => {
  switch (mtype) {
    case 'imageMessage':
      return 'image';
    case 'videoMessage':
      return 'video';
    case 'audioMessage':
      return 'audio';
    default:
      return null;
  }
};
