const Message = require("../models/message");
const Chat = require("../models/chat");

// Send message
exports.sendMessage = async (req, res) => {
  try {
    const { chatId, text } = req.body;
    const senderId = req.user.id;

    // Create message
    const message = await Message.create({
      chatId,
      senderId,
      text
    });

    // Update last message in chat (optional but useful)
    await Chat.findByIdAndUpdate(chatId, {
      lastMessage: text
    });

    // Redirect back to chat
    res.redirect(`/chat/${chatId}`);

  } catch (error) {
    console.error(error);
    res.send("Error sending message");
  }
};