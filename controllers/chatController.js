const Chat = require("../models/chat");
const Message = require("../models/message");
// Start or get chat between two users
exports.startChat = async (req, res) => {
  try {
    const userId = req.user.id; // logged-in user
    const receiverId = req.params.userId; // clicked user

    // 1️⃣ Check if chat already exists
    let chat = await Chat.findOne({
      participants: { $all: [userId, receiverId] }
    });

    // 2️⃣ If not, create new chat
    if (!chat) {
      chat = await Chat.create({
        participants: [userId, receiverId]
      });
    }

    // 3️⃣ Redirect to chat page
    res.redirect(`/chat/${chat._id}`);

  } catch (error) {
    console.error(error);
    res.send("Error starting chat");
  }
};

exports.chatPage = async (req, res) => {
  try {
    const chatId = req.params.chatId;

    // 🔒 ensure user is part of chat
    const chat = await Chat.findOne({
      _id: chatId,
      participants: req.user.id
    }).populate("participants", "name email");

    if (!chat) {
      return res.send("Chat not found or unauthorized");
    }

    // 📩 fetch messages of this chat
    const messages = await Message.find({ chatId })
  .populate("senderId", "name") // ✅ THIS LINE
  .sort({ createdAt: 1 }); // oldest first

    res.render("chat", {
      chat,
      messages,
      user: req.user
    });

  } catch (error) {
    console.error(error);
    res.send("Error loading chat");
  }
};
