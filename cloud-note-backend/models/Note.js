const mongoose = require("mongoose");
const { Schema } = mongoose;

const Note = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tag: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Userdata" },
  date: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Note", Note);
