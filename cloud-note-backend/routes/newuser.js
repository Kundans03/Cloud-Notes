const express = require("express");
const router = express.Router();
const Userdata = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const JWT_SECRET = "Harryisagoodb$oy";
//Creating new user

router.post(
  "/createuser",
  [
    body("name", "Name can't be blank").isLength({ min: 3 }),
    body("email", "Invalid email").isEmail(),
    body("password", "Password Must be alleast 8 characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    try {
      // checking is email is already registered
      let user = await Userdata.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          error: "This email is already registered with us try another",
        })
      }
      //Making password Increpted
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
       userdetails = await Userdata.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      //Send authrentication token to user
      const data = {
        user: {
          id: userdetails.id,
        },
      };
      // console.log(data);
      const token = jwt.sign(data, JWT_SECRET);
      res.json({ token });
    
    } catch (error) {
      // console.log(error.message)
      res.status(500).send("Some Error occured");
    }
  }
);

//Re Authrenting User | Login User
router.post(
  "/login",
  [
    body("email", "Invalid email").isEmail(),
    body("password", "Password must be required").exists({
      min: 8,
    }),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ error: "Plese enter correct credentials" });
    }
    const { email, password } = req.body;
    try {
      let user = await Userdata.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Plese enter correct credentials" });
      }
      const ComparedPassword = await bcrypt.compare(password, user.password);
      if (!ComparedPassword) {
        return res
          .status(400)
          .json({ error: "Plese enter correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      // console.log(data);
      const token = jwt.sign(data, JWT_SECRET);
      res.json({ token });
    } catch (error) {
      res.status(500).send("Some Error occured");
    }
  }
);

// ROUTE 3: Get loggedin User Details using: POST "/api/newuser/getuser". Login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await Userdata.findById(userId).select("-password");
    // console.log(user);
    res.send(user);
  } catch (error) {
    // console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
