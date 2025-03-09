const { ezra } = require('../fredi/ezra');
const { prefix } = require('../lib');
const note = require('../lib/note'); // Ensure this path is correct in your project

// ------------------------------
// DELETE A SPECIFIC NOTE
// ------------------------------
ezra({
  nomCom: "delnote",
  type: "notes",
  filename: __filename,
  fromMe: true,
  info: "Deletes a note from the database.",
  use: '<note id>',
}, async (dest, zk, commandeOptions) => {
  const { message, reply, match } = commandeOptions;
  try {
    let id = match.split(' ')[0];
    if (!id || isNaN(id)) return reply(`*Provide Note ID, Example: ${prefix}delnote 1*`);
    let res = await note.delnote(message, id);
    return reply(res.msg);
  } catch (e) {
    console.error("Error in delnote command:", e);
  }
});

// ------------------------------
// DELETE ALL NOTES
// ------------------------------
ezra({
  nomCom: "delallnote",
  type: "notes",
  filename: __filename,
  fromMe: true,
  info: "Deletes all notes from the database.",
}, async (dest, zk, commandeOptions) => {
  const { message, reply } = commandeOptions;
  try {
    let res = await note.delallnote(message);
    return reply(res.msg);
  } catch (e) {
    console.error("Error in delallnote command:", e);
  }
});

// ------------------------------
// LIST ALL NOTES
// ------------------------------
ezra({
  nomCom: "allnote",
  type: "notes",
  filename: __filename,
  fromMe: true,
  info: "Displays a list of all saved notes.",
}, async (dest, zk, commandeOptions) => {
  const { message, reply } = commandeOptions;
  try {
    let res = await note.allnotes(message, "all");
    return reply(res.msg);
  } catch (e) {
    console.error("Error in allnote command:", e);
  }
});

// ------------------------------
// RETRIEVE A NOTE BY ID
// ------------------------------
ezra({
  nomCom: "getnote",
  type: "notes",
  filename: __filename,
  fromMe: true,
  info: "Displays a note by its ID.",
  use: '<note id>',
}, async (dest, zk, commandeOptions) => {
  const { message, reply, match } = commandeOptions;
  try {
    if (!match) return reply(`*Provide Note ID, Example: ${prefix}getnote 1*`);
    let res = await note.allnotes(message, match.split(" ")[0].trim());
    return reply(res.msg);
  } catch (e) {
    console.error("Error in getnote command:", e);
  }
});

// ------------------------------
// ADD A NEW NOTE
// ------------------------------
ezra({
  nomCom: "addnote",
  type: "notes",
  filename: __filename,
  fromMe: true,
  info: "Saves a new note in the database.",
  use: '<text>',
}, async (dest, zk, commandeOptions) => {
  const { message, reply, match } = commandeOptions;
  try {
    if (!match) return reply("*Please provide text to save in notes!*");
    let res = await note.addnote(message, match);
    return reply(res.msg);
  } catch (e) {
    console.error("Error in addnote command:", e);
  }
});

// ------------------------------
// NOTES HELP & QUICK COMMANDS
// ------------------------------
ezra({
  nomCom: "note",
  type: "notes",
  filename: __filename,
  fromMe: true,
  info: "Displays available note commands.",
}, async (dest, zk, commandeOptions) => {
  const { message, reply, match } = commandeOptions;
  try {
    let txt = `
╭───── *『 LUCKY MD NOTES 』* ───◆
┃ Here you can store notes for later use.
┃ *------------------------------------------*
┃  ┌┤  *✯---- ADD NEW NOTE ----⦿*
┃  │✭ *Cmd :* ${prefix}addnote 'Your Text'
┃  │✭ *Usage :* Save text in Lucky MD Database.
┃  ╰───────────────────◆
┃
┃  ┌┤  *✯---- GET ALL NOTES ----⦿*
┃  │✭ *Cmd :* ${prefix}allnote
┃  │✭ *Usage :* Retrieve all saved notes.
┃  ╰───────────────────◆
┃
┃  ┌┤  *✯---- GET A NOTE BY ID ----⦿*
┃  │✭ *Cmd :* ${prefix}getnote <id>
┃  │✭ *Usage :* Retrieve a specific note by its ID.
┃  ╰───────────────────◆
┃
┃  ┌┤  *✯---- DELETE A NOTE ----⦿*
┃  │✭ *Cmd :* ${prefix}delnote <id>
┃  │✭ *Usage :* Delete a specific note by ID.
┃  ╰───────────────────◆
┃
┃  ┌┤  *✯---- DELETE ALL NOTES ----⦿*
┃  │✭ *Cmd :* ${prefix}delallnote
┃  │✭ *Usage :* Delete all saved notes permanently.
┃  ╰───────────────────◆
╰━━━━━━━━━━━━━━━━━━━━━━──⊷`;

    if (!match) return reply(txt);

    let action = match.split(' ')[0].trim().toLowerCase();

    if (action === "add" || action === "new") {
      let res = await note.addnote(message, match.replace("add", "").replace("new", "").trim());
      return reply(res.msg);
    } else if (action === "all") {
      let res = await note.allnotes(message, "all");
      return reply(res.msg);
    } else if (action === "delall") {
      let res = await note.delallnote(message);
      return reply(res.msg);
    } else if (action === "del") {
      let id = match.split(' ')[1];
      if (!id || isNaN(id)) return reply("*Please provide a valid Note ID, e.g., .delnote 1*");
      let res = await note.delnote(message, id);
      return reply(res.msg);
    } else {
      return reply(`*Invalid action provided. Please follow the usage guide:*\n\n${txt}`);
    }
  } catch (e) {
    console.error("Error in note command:", e);
  }
});
