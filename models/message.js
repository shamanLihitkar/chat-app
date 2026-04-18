const mongoose = require("mongoose");

// Message schema
const messageSchema = new mongoose.Schema(
  {
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chat", // reference to Chat
      required: true
    },

    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // who sent message
      required: true
    },

    text: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true // createdAt, updatedAt
  }
);

module.exports = mongoose.model("Message", messageSchema);