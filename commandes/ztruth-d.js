const { zokou } = require("../framework/zokou");
const { default: axios } = require("axios");
const { dare, truth, random_question } = require('../fledi/truth-d.js');

// Command for random question
zokou({
  nomCom: "question",
  categorie: "fun",
  reaction: "👄"
}, async (dest, zk, commandeOptions) => {
  const { repondre } = commandeOptions;
  try {
    // Respond with a random question
    return await repondre(random_question());
  } catch (error) {
    console.error("🤦Uhhh! failed handling 'question' command:", error);
    return await repondre("❌Uhhh! I think something is wrong.");
  }
});

// Command for truth
zokou({
  nomCom: "struth",
  categorie: "fun",
  reaction: "👄"
}, async (dest, zk, commandeOptions) => {
  const { repondre } = commandeOptions;
  try {
    // Respond with a truth question
    return await repondre(truth());
  } catch (error) {
    console.error("🤦Uhhh! failed handling 'truth' command:", error);
    return await repondre("❌Uhhh! I think something is wrong.");
  }
});

// Command for dare
zokou({
  nomCom: "sdare",
  categorie: "fun",
  reaction: "🫦"
}, async (dest, zk, commandeOptions) => {
  const { repondre } = commandeOptions;
  try {
    // Respond with a dare
    return await repondre(dare());
  } catch (error) {
    console.error("🤦Uhhh! failed handling 'dare' command:", error);
    return await repondre("❌Uhhh! I think something is wrong.");
  }
});