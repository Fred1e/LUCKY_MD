const { zokou } = require('../framework/zokou');
const traduire = require("../framework/traduction") ;
const s = require('../set');
const axios = require('axios');

/* 
Created By fredie tech
Don't claim, okey 
*/

zokou({nomCom:"gpt4",reaction:"📡",categorie:"IA"},async(dest,zk,commandeOptions)=>{

  const {repondre,ms,arg}=commandeOptions;
  
async function gpt4(q) {
  const headers = {
    'Content-Type': 'application/json',
    'Referer': 'https://chatgpt4online.org/',
    'Sec-Ch-Ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    'X-Wp-Nonce': '152990aad3'
  };

  const params = {
    "botId": "default",
    "customId": null,
    "session": "N/A",
    "chatId": "r20gbr387ua",
    "contextId": 58,
    "messages": [
      {
        "id": "0aqernpzbas7",
        "role": "assistant",
        "content": "Hi! How can I help you?",
        "who": "AI: ",
        "timestamp": 1719360952775
      }
    ],
    "newMessage": q,
    "newFileId": null,
    "stream": false
  };

  try {
    const response = await axios.post("https://chatgpt4online.org/wp-json/mwai-ui/v1/chats/submit", params, { headers });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

gpt4('kapan kamu di update??');

Feature: Chat Gpt 4
Reason: -
