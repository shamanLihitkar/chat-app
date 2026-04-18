require("dotenv").config(); // load env variables
const protect = require("./middleware/authMiddleware");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");
const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json()); // parse JSON
app.use(express.urlencoded({ extended: true })); // parse form data
app.use(cookieParser()); // read cookies

// Set EJS
app.set("view engine", "ejs");

// Routes
app.use("/", authRoutes);

// Temporary chat route (protected later)
// app.get("/chat", (req, res) => {
//   res.send("Chat page coming soon...");
// });

// Replace old /chat route with this:
app.get("/chat", protect, (req, res) => {
  res.render("chatList", { user: req.user });
});

app.use("/users", userRoutes);

app.use("/chat", chatRoutes);

app.use("/message", require("./routes/messageRoutes"));

// app.get("/chat/:chatId", protect, (req, res) => {
//   const chatId = req.params.chatId;

//   res.send(`Chat page for ${chatId} (messages coming next step)`);
// });

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});