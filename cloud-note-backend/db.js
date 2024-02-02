const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/Cloud-Note";

const connectToMongo = async () => {
  await mongoose.connect(mongoURL);
  console.log("Connected to mongo Sucessfully");
};

module.exports = connectToMongo;
