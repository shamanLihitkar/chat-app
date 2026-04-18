const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser
} = require("../controllers/authController");

// Render pages
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

// Actions
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

module.exports = router;