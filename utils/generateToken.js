const jwt = require("jsonwebtoken");

// Function to create token
const generateToken = (id) => {
  return jwt.sign(
    { id }, // payload (stored inside token)
    process.env.JWT_SECRET, // secret key
    { expiresIn: "7d" } // valid for 7 days
  );
};

module.exports = generateToken;