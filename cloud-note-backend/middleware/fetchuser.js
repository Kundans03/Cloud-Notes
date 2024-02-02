const express = require("express");
const router = express.Router();
const JWT_SECRET = "Harryisagoodb$oy";
const jwt = require("jsonwebtoken");

const fetchuser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  const token = req.header("token");
  try {
    if (!token) {
      return res
        .status(401)
        .send({ error: "Please authenticate using a valid token" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error.message); // Log the error for debugging purposes
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
