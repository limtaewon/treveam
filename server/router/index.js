const area = require("./area"); // 지역 카테고리 설정
const banner = require("./banner");
const blog = require("./blog"); // 블로그글
const comment = require("./comment"); // 게시글,피드 안에 있는 댓글
const position = require("./position"); // 피드 지도에 마커찍을 경도,위도 정보
const reply = require("./reply"); // 게시글,피드 안에 있는 댓글의 대댓글
const sarea = require("./sarea");
const user = require("./user"); // 사용자 정보
const userfollow = require("./userfollow"); // 사용자의 팔로우,팔로워 정보
const wholikebf = require("./wholikebf"); // 게시글,피드 좋아요 누른사람 리스트
const wholikecomment = require("./wholikecomment"); // 댓글에 좋야요 누른사람 리스트
const wholikereply = require("./wholikereply"); // 대댓글 좋아요 누른사람 리스트

module.exports = {
  area,
  banner,
  blog,
  comment,
  position,
  reply,
  sarea,
  user,
  userfollow,
  wholikebf,
  wholikecomment,
  wholikereply,
};
