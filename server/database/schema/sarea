const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//게시판정보
const Sarea = new Schema({
  name: { type: String, required: true },
  slug: { type: String, requird: true, unique: true },
  farea: { type: Schema.Types.ObjectId, ref: "Area" },
  createdAt: { type: Date, default: Date.now, required: true },
});

module.exports = Sarea;
