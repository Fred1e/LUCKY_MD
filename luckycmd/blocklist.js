const { ezra } = require("../fredi/ezra");

ezra({
  nomCom: "blocklist",
  aliases: ["listblock", "blacklist"],
  reaction: '🍂',
  categorie: "Search"
}, async (dest, zk, commandeOptions) => {
  const { repondre } = commandeOptions;

  try {
    // Fetch the blocklist of contacts
    let blocklist = await zk.fetchBlocklist();

    // If the blocklist has users, proceed
    if (blocklist.length > 0) {
      // Start the message for blocked contacts
      let jackhuh = `*Blocked Contacts*\n`;

      await repondre(`You have blocked ${blocklist.length} contact(s), fetching and sending their details!`);

      // Map through the blocklist to fetch each blocked user's details
      const promises = blocklist.map(async (blockedUser) => {
        // Extract the phone number from the JID (remove '@s.whatsapp.net')
        const phoneNumber = blockedUser.split('@')[0];

        // Add the blocked user's phone number to the message
        jackhuh += `🤷  +${phoneNumber}\n`;  // List the phone number
      });

      // Wait for all the promises to complete
      await Promise.all(promises);

      // Send the final formatted message with the blocked contacts
      await repondre(jackhuh);
    } else {
      // If no blocked users, reply with a message
      await repondre("There are no blocked contacts.");
    }
  } catch (e) {
    // Catch any error and inform the user
    await repondre("An error occurred while accessing blocked users.\n\n" + e);
  }
});
