const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//게시글 정보
const Blog = new mongoose.Schema({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  area: { type: Schema.Types.ObjectId, ref: "Sarea", required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  // 동적으로 변동될 수 있는 데이터
  viewCount: { type: Number, default: 0 },
  likeCount: { type: Number, default: 0 },
  commentCount: { type: Number, default: 0 },
  deleteTime: { type: Number, default: 0 },

  // (옵션): 사용자가 게시글에 추가할 수 있는 데이터
  titleImage: { type: String }, //나중에 default 이미지로 설정해주기
  mention: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = Blog;
