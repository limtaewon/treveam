const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 댓글
const Position = new Schema({
  blog: { type: Schema.Types.ObjectId, ref: "Blog" },
  latlng: { type: String },
  description: { type: String },
  // 동적으로 변동될 수 있는 데이터
});

module.exports = Position;
