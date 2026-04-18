const express = require("express");
const router = express.Router();

const { startChat,chatPage} = require("../controllers/chatController");
const protect = require("../middleware/authMiddleware");

// Start chat
router.get("/start/:userId", protect, startChat);
router.get("/:chatId", protect, chatPage);
module.exports = router;