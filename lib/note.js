const mongoose = require('mongoose');

// Define the Note Schema for MongoDB
const noteSchema = new mongoose.Schema({
  id: { type: String, required: true }, // Chat ID or User ID
  noteId: { type: Number, required: true }, // Unique Note ID per chat/user
  text: { type: String, required: true }, // Note content
}, { timestamps: true });

// Create the Note model
const Note = mongoose.model('Note', noteSchema);

// Function to get the next note ID for a chat/user
async function getNextNoteId(chatId) {
  const lastNote = await Note.findOne({ id: chatId }).sort({ noteId: -1 });
  return lastNote ? lastNote.noteId + 1 : 1;
}

// --------------------------
// ADD A NEW NOTE
// --------------------------
async function addnote(message, text) {
  try {
    const noteId = await getNextNoteId(message.chat);
    const newNote = new Note({
      id: message.chat,
      noteId,
      text,
    });
    await newNote.save();
    return { success: true, msg: `✅ *Note Saved Successfully!*\n🆔 *Note ID:* ${noteId}` };
  } catch (error) {
    console.error("Error saving note:", error);
    return { success: false, msg: "❌ *Failed to save the note. Please try again!*" };
  }
}

// --------------------------
// RETRIEVE A NOTE BY ID
// --------------------------
async function allnotes(message, noteId) {
  try {
    if (noteId === "all") {
      const notes = await Note.find({ id: message.chat }).sort({ noteId: 1 });
      if (notes.length === 0) return { success: false, msg: "📂 *No notes found!*" };
      
      let replyMsg = "📜 *Your Saved Notes:*\n\n";
      notes.forEach(note => {
        replyMsg += `🆔 *ID:* ${note.noteId}\n📄 *Text:* ${note.text}\n➖➖➖➖➖➖➖\n`;
      });
      return { success: true, msg: replyMsg };
    } else {
      const note = await Note.findOne({ id: message.chat, noteId: Number(noteId) });
      if (!note) return { success: false, msg: `❌ *No note found with ID:* ${noteId}` };
      return { success: true, msg: `📄 *Note ID:* ${note.noteId}\n📝 ${note.text}` };
    }
  } catch (error) {
    console.error("Error retrieving note:", error);
    return { success: false, msg: "❌ *Failed to retrieve note!*" };
  }
}

// --------------------------
// DELETE A NOTE BY ID
// --------------------------
async function delnote(message, noteId) {
  try {
    const deleted = await Note.findOneAndDelete({ id: message.chat, noteId: Number(noteId) });
    if (!deleted) return { success: false, msg: `❌ *No note found with ID:* ${noteId}` };
    return { success: true, msg: `🗑️ *Note ID:* ${noteId} *Deleted Successfully!*` };
  } catch (error) {
    console.error("Error deleting note:", error);
    return { success: false, msg: "❌ *Failed to delete note!*" };
  }
}

// --------------------------
// DELETE ALL NOTES
// --------------------------
async function delallnote(message) {
  try {
    const deleted = await Note.deleteMany({ id: message.chat });
    if (deleted.deletedCount === 0) return { success: false, msg: "📂 *No notes found to delete!*" };
    return { success: true, msg: `🗑️ *All notes deleted successfully!*` };
  } catch (error) {
    console.error("Error deleting all notes:", error);
    return { success: false, msg: "❌ *Failed to delete all notes!*" };
  }
}

// Export the functions for use in notes.js
module.exports = {
  addnote,
  allnotes,
  delnote,
  delallnote
};
