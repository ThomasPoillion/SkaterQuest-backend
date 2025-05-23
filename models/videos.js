const mongoose = require("mongoose");

const videosScheme = mongoose.Schema({
  creationDate: Date,
  url: String,
  thumbnailURL: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  tricks: [String],
  spot: { type: mongoose.Schema.Types.ObjectId, ref: "spots" },
  votes: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
});

const Video = mongoose.model("videos", videosScheme);

module.exports = Video;
