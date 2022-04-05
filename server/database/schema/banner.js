const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//게시판정보
const Banner = new Schema({
  imgurl: { type: String, require: true, unique: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

module.exports = Banner;
