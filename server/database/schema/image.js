const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 댓글
const Image = new Schema({
  blog: { type: Schema.Types.ObjectId, ref: "Blog" },
  imageUrl: { type: String, required: true },
  description: { type: String },

  // 동적으로 변동될 수 있는 데이터
  width: { type: Number },
  height: { type: Number },
});

module.exports = Image;
