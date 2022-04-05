const express = require("express");
const router = express.Router();
const { Sarea, Blog } = require("../database/model");

// 관리자기능 : 지역 추가하기
router.post("/sarea/create", async (req, res) => {
  const { name, slug, id } = req.body;
  const regist_sarea = await Sarea({
    name,
    slug,
    farea: id,
  }).save();

  res.send(regist_sarea._id ? true : false);
  //게시판 추가 제대로 됐는지 확인하는 코드
  //게시판 추가 제대로 됐으면 true 아니면 false가 반환된다.
});

//지역별 게시글 불러오기
router.get("/sarea/:slug", async (req, res) => {
  const { slug } = req.params;

  const sarea = await Sarea.findOne({ slug: slug });
  if (!sarea._id) {
    return res.send({
      blog: [],
      msg: "등록되지 않은 지역입니다",
      error: "404",
    });
  }
  const blog = await Blog.find({ area: sarea._id }).populate("author");

  res.send(blog);
});

//지역 목록 불러오기
router.get("/sarea/get/:key", async (req, res) => {
  const { key } = req.params;
  const area = await Sarea.find({ farea: key });
  res.send(area);
});

module.exports = router;
