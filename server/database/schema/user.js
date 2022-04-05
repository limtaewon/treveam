const mongoose = require("mongoose");
const crypto = require("crypto");
const Schema = mongoose.Schema;
//유저정보
const User = new Schema({
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
  salt: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  nickname: { type: String, required: true, unique: true },
  profile: { type: String }, //나중에 default 이미지로 설정해주기
});

// 회원가입시 input에 입력된 password를 DB에는 저장되지 않는 가상속성을 통하여 hashed한 후 저장
User.virtual("password").set(function (password) {
  this._password = password;
  this.salt = this.makeSalt();
  this.hashedPassword = this.hashing(password);
});

// Secret password 만드는 함수
User.method("makeSalt", () => {
  return Math.round(new Date().valueOf() * Math.random()) + "t@re!@ve!@$am";
});

// Secret passsword와 plainPassword를 섞어 sha256알고리즘을 적용시켜 해시하는 함수
User.method("hashing", function (plainPassword) {
  return crypto
    .createHmac("sha256", this.salt)
    .update(plainPassword)
    .digest("hex");
});

// 로그인시 db에 저장되어있는 hashedpassword와 입력된 password가 같은지 검증하는 함수
User.method("authenticate", function (plainPassword) {
  const inputPassword = this.hashing(plainPassword);
  return this.hashedPassword === inputPassword;
});

module.exports = User;
