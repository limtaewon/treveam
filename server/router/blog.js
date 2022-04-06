const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { Blog, Area } = require("../database/model");

// 글 생성
router.post("/blog/create", (req, res) => {
  const { title, content, area, image } = req.body;
  const { authorization } = req.headers;
  if (!authorization) {
    return res.send("token is broken");
  }
  const secret = req.app.get("jwt-secret");
  const token = authorization.split(" ")[1];
  jwt.verify(token, secret, async (err, data) => {
    if (err) {
      return res.send(err);
    }
    //data에는 로그인할 때 사용했던 유저의 정보(user schema)가 들어있다.
    const payload = {
      author: data.id,
      title,
      content,
      area,
    };

    const regist_blog = await Blog(payload).save();
    res.send(regist_blog);
  });
});

// 글 불러오기
router.get("/blog/list/:key", async (req, res) => {
  const { key } = req.params;
  const blog = await Blog.findOne({ _id: key }).populate("author");
  res.send(blog);
});

// 글 목록 불러오기
router.get("/blog/list", async (req, res) => {
  const blog = await Blog.find().populate("author").populate({
    path: "area",
    populate: "farea",
  });
  res.send(blog);
});

// 지역별 좋아요순위 10등까지 불러오기
router.get("/blog/best/list", async (req, res) => {
  const { farea, sarea } = req.body;
  if (farea === "전체") {
    const total_post = await Blog.find()
      .populate("author")
      .populate("area")
      .sort({ likeCount: 1 })
      .limit(10);
    if (!Array.isArray(article)) {
      return res.send({
        msg: "Blog 데이터가 없습니다",
      });
    }
    return res.send(total_post);
  } else if (!sarea) {
    const area_id = await Area.findOne({ farea: farea });
    const best_post = await Blog.find({ area: area_id._id })
      .populate("author")
      .populate("area")
      .sort({ likeCount: 1 })
      .limit(10);
    if (!Array.isArray(best_post)) {
      return res.send({
        msg: "Blog 데이터가 없습니다",
      });
    }
    res.send(best_post);
  } else {
    const area_id = await Area.findOne({ farea: farea, sarea: sarea });
    const best_post = await Blog.find({ area: area_id._id })
      .populate("author")
      .populate("area")
      .sort({ likeCount: 1 })
      .limit(10);
    if (!Array.isArray(best_post)) {
      return res.send({
        msg: "Blog 데이터가 없습니다",
      });
    }
    res.send(best_post);
  }
});

// 글 수정하기

// 동적으로 변할 수 있는 데이터값 변경시켜주기

module.exports = router;
