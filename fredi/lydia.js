const { DataTypes } = require('sequelize'); // Correct import syntax
const s = require("../set");

export const ChatBot = s.DATABASE.define(
  'ChatBot',
  {
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDMOnly: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isGCOnly: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'lydia',
    timestamps: false,
  }
);
