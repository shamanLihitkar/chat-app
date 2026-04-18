const mongoose = require("mongoose");

// Define schema for user
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true // user must have name
    },
    email: {
      type: String,
      required: true,
      unique: true // no duplicate emails
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true // adds createdAt & updatedAt
  }
);

// Export model
module.exports = mongoose.model("User", userSchema);