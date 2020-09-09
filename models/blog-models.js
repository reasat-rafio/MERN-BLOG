const mongoose = require("mongoose");

const newBlog = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Blog", newBlog);
