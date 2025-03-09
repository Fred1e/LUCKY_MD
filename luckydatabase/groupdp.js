// groupdb.js
const mongoose = require('mongoose');

// Define a schema for group settings
const groupSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  // Store whether the economy is active in the group ("true" or "false")
  economy: { type: String, default: "true" },
  // Add other group-specific fields as needed
}, { timestamps: true });

// Create a model for the group data
const Group = mongoose.model('Group', groupSchema);

// Expose helper methods for group operations
module.exports = {
  // Find one group by query
  findOne: async (query) => {
    try {
      return await Group.findOne(query);
    } catch (error) {
      console.error("Error finding group:", error);
      throw error;
    }
  },
  // Create a new group document with given data
  new: async (data) => {
    try {
      const group = new Group(data);
      return await group.save();
    } catch (error) {
      console.error("Error creating new group:", error);
      throw error;
    }
  },
  // Additional methods (update, delete, etc.) can be added as needed.
};
