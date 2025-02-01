const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
const { ezra } = require("../fredi/ezra");
const { downloadMediaMessage } = require('@whiskeysockets/baileys');
const fs = require("fs-extra");
const ffmpeg = require("fluent-ffmpeg");
const { Catbox } = require('node-catbox');

const catbox = new Catbox();

async function uploadToCatbox(Path) {
    if (!fs.existsSync(Path)) {
        throw new Error("File does not exist");
    }

    try {
        const response = await catbox.uploadFile({
            path: Path // Provide the path to the file
        });

        if (response) {
            return response; // returns the uploaded file URL
        } else {
            throw new Error("Error retrieving the file link");
        }
    } catch (err) {
        throw new Error(String(err));
    }
}

async function convertToMp3(inputPath, outputPath) {
    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
            .toFormat("mp3")
            .on("error", (err) => reject(err))
            .on("end", () => resolve(outputPath))
            .save(outputPath);
    });
}

ezra({ nomCom: "url", categorie: "General", reaction: "👨🏿‍💻" }, async (origineMessage, zk, commandeOptions) => {
    const { msgRepondu, repondre } = commandeOptions;

    if (!msgRepondu) {
        repondre('Please reply to an image, video, or audio file.');
        return;
    }

    let mediaPath, mediaType;

    if (msgRepondu.videoMessage) {
        const videoSize = msgRepondu.videoMessage.fileLength;

        if (videoSize > 50 * 1024 * 1024) {
            repondre('The video is too long. Please send a smaller video.');
            return;
        }

        mediaPath = await zk.downloadAndSaveMediaMessage(msgRepondu.videoMessage);
        mediaType = 'video';
    } else if (msgRepondu.imageMessage) {
        mediaPath = await zk.downloadAndSaveMediaMessage(msgRepondu.imageMessage);
        mediaType = 'image';
    } else if (msgRepondu.audioMessage) {
        mediaPath = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage);
        mediaType = 'audio';

        const outputPath = `${mediaPath}.mp3`;

        try {
            // Convert audio to MP3 format
            await convertToMp3(mediaPath, outputPath);
            fs.unlinkSync(mediaPath); // Remove the original audio file
            mediaPath = outputPath; // Update the path to the converted MP3 file
        } catch (error) {
            console.error("Error converting audio to MP3:", error);
            repondre('Failed to process the audio file.');
            return;
        }
    } else {
        repondre('Unsupported media type. Reply with an image, video, or audio file.');
        return;
    }

    try {
        const catboxUrl = await uploadToCatbox(mediaPath);
        fs.unlinkSync(mediaPath); // Remove the local file after uploading

        // Respond with the URL based on media type
        switch (mediaType) {
            case 'image':
                repondre(`Lucky url: ${catboxUrl}`);
                break;
            case 'video':
                repondre(`lucky url: ${catboxUrl}`);
                break;
            case 'audio':
                repondre(`lucky url: ${catboxUrl}`);
                break;
            default:
                repondre('An unknown error occurred.');
                break;
        }
    } catch (error) {
        console.error('Error while creating your URL:', error);
        repondre('Oops, an error occurred.');
    }
});