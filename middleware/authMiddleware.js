const jwt = require("jsonwebtoken");
const User = require("../models/User"); // ✅ IMPORTANT

const protect = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect("/login");
  }

  try {
    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // get full user from DB
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.redirect("/login");
    }

    req.user = user; // full user object

    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res.redirect("/login");
  }
};

module.exports = protect;