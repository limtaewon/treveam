const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//유저정보
const Wholikereply = new Schema({
  _id: { type: Schema.Types.ObjectId, ref: "Reply" },
  like: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

module.exports = Wholikereply;
