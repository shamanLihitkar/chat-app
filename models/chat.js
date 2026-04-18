const mongoose = require("mongoose");

// Chat schema for 1-to-1 chat
const chatSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" // reference to User model
      }
    ],

    lastMessage: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true // adds createdAt & updatedAt
  }
);

// Export model
module.exports = mongoose.model("Chat", chatSchema);