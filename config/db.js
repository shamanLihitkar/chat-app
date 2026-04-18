const mongoose = require("mongoose");

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect using URI from .env
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Error:", error);
    process.exit(1); // Stop app if DB fails
  }
};

module.exports = connectDB;