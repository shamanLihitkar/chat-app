const User = require("../models/User");

// Get all users except logged-in user
exports.getAllUsers = async (req, res) => {
  try {
    // req.user.id comes from JWT
    const users = await User.find({
      _id: { $ne: req.user.id } // exclude current user
    });

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};