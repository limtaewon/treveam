const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//유저정보
const Userfollow = new Schema({
  _id: { type: Schema.Types.ObjectId, ref: "User" },
  follow: [{ type: Schema.Types.ObjectId, ref: "User" }],
  follower: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

module.exports = Userfollow;
