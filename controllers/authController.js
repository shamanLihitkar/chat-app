const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// ================= REGISTER =================
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.send("User already exists");
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // Generate token
    const token = generateToken(user._id);

    // Store token in cookie
    res.cookie("token", token);

    res.redirect("/chat"); // redirect after login
  } catch (error) {
    console.error(error);
    res.send("Error registering user");
  }
};

// ================= LOGIN =================
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.send("User not found");
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.send("Invalid credentials");
    }

    // Generate token
    const token = generateToken(user._id);

    // Store in cookie
    res.cookie("token", token);

    res.redirect("/chat");
  } catch (error) {
    console.error(error);
    res.send("Login error");
  }
};

// ================= LOGOUT =================
exports.logoutUser = (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
};