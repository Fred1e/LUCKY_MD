const axios = require('axios');
const { zokou } = require('../framework/zokou');

zokou({
  nomCom: 'tiny',
  categorie: 'converter',
  reaction: '✅',
  filename: __filename
}, async (context, url) => {
  console.log('Received URL:', url);

  try {
    // Validate the URL
    if (!url || !url.toLowerCase().startsWith('https://')) {
      console.log('Invalid URL provided:', url);
      return context.reply('Please provide a valid HTTPS URL.');
    }
    
    // Make a request to TinyURL to shorten the URL
    console.log('Making request to TinyURL API with URL:', url.trim());
    const response = await axios.get('https://tinyurl.com/api-create.php', {
      params: { url: url.trim() }
    });

    // Send the shortened URL back to the user
    console.log('Received shortened URL:', response.data);
    context.reply(`*🛡️ Your Shortened URL:*\n\n${response.data}`);
  } catch (error) {
    // Handle any errors that occur
    console.error('Error occurred while processing the request:', error.message);
    context.reply(`Error: ${error.message}\n\ncmdName: tiny`);
  }
});
