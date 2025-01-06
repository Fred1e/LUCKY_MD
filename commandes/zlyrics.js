const { zokou } = require('../framework/zokou');
const lyricsFinder = require('lyrics-finder');
const yts = require('yt-search');

zokou({
    nomCom: 'lyrics',
    aliases: ['lyric', 'mistari'],
    reaction: '📑',
}, async (zk, dest, context) => {
    const { repondre, arg, ms } = context;

    try {
        // Check if the argument (song and artist) is provided
        if (!arg || arg.length === 0) {
            return repondre('Please provide a song name and artist.');
        }

        // Create a search query from the arguments
        const searchQuery = arg.join(' ');

        // Search for the song using yt-search
        const info = await yts(searchQuery);
        const results = info.videos;

        // Check if no results were found
        if (!results || results.length === 0) {
            return repondre('No results found for the given song or artist.');
        }

        // Extract title and artist from the search query
        const songDetails = searchQuery.split(' ').reverse();
        const title = songDetails.slice(0, songDetails.length - 1).join(' ');
        const artist = songDetails[songDetails.length - 1];

        // Fetch the lyrics using lyrics-finder
        const lyrics = await lyricsFinder(artist, title);

        // Check if lyrics are found
        if (!lyrics) {
            return repondre(`Sorry, I couldn't find any lyrics for "${searchQuery}". Please try another song.`);
        }

        // Format the message to send to the user
        const formattedMessage = `
*LUCKY MD PLANET LYRICS FINDER*
*Title:* ${title}
*Artist:* ${artist}

${lyrics}
        `;

        // Send the response with the song's thumbnail and lyrics
        await zk.sendMessage(dest, {
            image: { url: results[0].thumbnail },
            caption: formattedMessage,
        }, { quoted: ms });

    } catch (error) {
        // Handle any errors that occur
        repondre(`Error: I was unable to fetch the lyrics. Please try again later.\n\n${error.message}`);
        console.log(error);
    }
});
