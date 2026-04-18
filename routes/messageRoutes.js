const express = require("express");
const router = express.Router();

const { sendMessage } = require("../controllers/messageController");
const protect = require("../middleware/authMiddleware");

// Send message
router.post("/", protect, sendMessage);

module.exports = router;