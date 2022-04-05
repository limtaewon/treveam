const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//게시판정보
const Area = new Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

module.exports = Area;
