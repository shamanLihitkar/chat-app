# 💬 Chat App (Node.js + MongoDB + JWT)

A simple 1-to-1 chat application built using **Node.js, Express, MongoDB, and EJS**, featuring authentication and basic messaging functionality.

---

## 🚀 Features

* 🔐 User Authentication (Register/Login with JWT)
* 🍪 JWT stored in cookies
* 👥 View all users (except yourself)
* 💬 Start chat with any user
* 📨 Send and receive messages
* 🧾 Chat history stored in MongoDB
* 🔒 Protected routes (only logged-in users can access chats)

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT (JSON Web Token)
* **Frontend:** EJS (Server-side rendering)
* **Other:** bcryptjs, cookie-parser

---

## 📁 Project Structure

```
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── chatController.js
│   ├── messageController.js
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   ├── Chat.js
│   └── Message.js
├── routes/
│   ├── authRoutes.js
│   ├── chatRoutes.js
│   ├── messageRoutes.js
│   └── userRoutes.js
├── views/
│   ├── login.ejs
│   ├── register.ejs
│   ├── chat.ejs
│   └── chatList.ejs
├── .env.example
├── server.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Setup environment variables

Create a `.env` file in the root directory:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

### 4️⃣ Run the server

```bash
npm start
```

or (if using nodemon):

```bash
npm run dev
```

---

### 5️⃣ Open in browser

```
http://localhost:5000
```

---

## 🔐 Authentication Flow

1. User registers → password hashed using bcrypt
2. JWT token generated and stored in cookies
3. Middleware verifies token on protected routes
4. User data fetched using token ID

---

## 💬 Chat Flow

1. User selects another user
2. Chat is created (if not exists)
3. Messages are stored in MongoDB
4. Chat history is displayed on chat page

---

## ⚠️ Current Limitations

* ❌ Not real-time (requires page refresh)
* ❌ No online/offline status
* ❌ No typing indicator
* ❌ No unread message tracking

---

## 🚀 Future Improvements

* 🔥 Real-time chat using Socket.IO
* 🟢 Online/offline user status
* ✍️ Typing indicator
* 📩 Unread messages count
* 📱 Better UI (React / Tailwind)

---

## 🤝 Contributing

Feel free to fork the project and submit pull requests.

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

Developed by **Your Name**

---
