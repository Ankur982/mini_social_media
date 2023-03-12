const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true
  },
  postLiked: {
    type: Number,
    default: 0
  },
  postDate: {
    type: String,
    default: new Date().toLocaleDateString()
  }

}, { timestamps: true });


module.exports = mongoose.model("Post", postSchema);