const axios = require('axios');

zokou({
  nomCom: "npm",
  categorie: "Coders",
  reaction: "🏷️"
}, async (origineMessage, zk, commandeOptions) => {
  const { arg, repondre } = commandeOptions;

  if (!arg[0]) {
    repondre("Usage : /npmstalk [package name]");
    return;
  }

  const packageName = arg[0];

  try {
    const response = await axios.get(`https://registry.npmjs.org/${packageName}`);
    const data = response.data;

    if (!data) {
      repondre(`Le package "${packageName}" was not found.`);
      return;
    }

    const latestVersion = data['dist-tags'].latest;
    const description = data.description || "No description available.";
    const author = data.author ? data.author.name : "Inconnu";

    repondre(`*Package:* ${packageName}\n*Description:* ${description}\n*Version:* ${latestVersion}\n*Auteur:* ${author}`);
  } catch (error) {
    repondre("Error retrieving NPM package information.");
  }
});
