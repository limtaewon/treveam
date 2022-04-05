const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//유저정보
const Wholikebf = new Schema({
  _id: { type: Schema.Types.ObjectId, ref: "Blog" },
  like: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

module.exports = Wholikebf;
