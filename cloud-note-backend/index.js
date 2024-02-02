var express = require("express");
var router = express.Router();
var cors = require('cors')

const { query, validationResult } = require("express-validator");
const connectToMongo = require("./db");
connectToMongo();
const port = 5000;
const app = express();

app.use(cors())
app.use(express.json());

app.use("/api/newuser/", require("./routes/newuser"));
app.use("/api/notes/", require("./routes/notes"));

app.listen(port, () => {
  console.log("connected");
});

//to start server :  nodemon ./index.js
