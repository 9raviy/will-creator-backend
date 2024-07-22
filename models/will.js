const mongoose = require("mongoose");

const willSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model("Will", willSchema);
