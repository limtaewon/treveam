const Area = require("./area"); // 도,광역시 단위의 지역 설정
const Banner = require("./banner"); // 배너 이미지
const Blog = require("./blog"); // 블로그글
const Comment = require("./comment"); // 게시글,피드 안에 있는 댓글
const Position = require("./position"); // 피드 지도에 마커찍을 경도,위도 정보
const Reply = require("./reply"); // 게시글,피드 안에 있는 댓글의 대댓글
const Sarea = require("./sarea"); // 시,군,구 단위의 지역 설정
const User = require("./user"); // 사용자 정보
const Userfollow = require("./userfollow"); // 사용자의 팔로우,팔로워 정보
const Wholikebf = require("./wholikebf"); // 게시글,피드 좋아요 누른사람 리스트
const Wholikecomment = require("./wholikecomment"); // 댓글에 좋야요 누른사람 리스트
const Wholikereply = require("./wholikereply"); // 대댓글 좋아요 누른사람 리스트
module.exports = {
  Area,
  Banner,
  Blog,
  Comment,
  Position,
  Reply,
  Sarea,
  User,
  Userfollow,
  Wholikebf,
  Wholikecomment,
  Wholikereply,
};
