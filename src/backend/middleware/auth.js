const jwt = require("jsonwebtoken");
const keys = require("../services/keys");

module.exports = function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, keys.JWTPrivateKey);
    req.user = decoded;
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};
