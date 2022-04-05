const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//유저정보
const Wholikecomment = new Schema({
  _id: { type: Schema.Types.ObjectId, ref: "Comment" },
  like: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

module.exports = Wholikecomment;
