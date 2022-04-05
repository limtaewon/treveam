const express = require("express");
const router = express.Router();
const { Area, Blog } = require("../database/model");

// 메인페이지에 게시판 목록 띄우기
// 안쓸수도 있는 기능
router.get("/main", async (req, res) => {
  //find() 한다면 배열형식으로 모든 데이터를 불러온다.
  const areaList = await Blog.find().sort({ createdAt: 1 });
  //데이터를 다 불러왔는데 배열이 아니라고 뜨면 데이터가 하나도 없는거
  if (!Array.isArray(areaList)) {
    return res.send({
      msg: "데이터가 없습니다",
    });
  }
  // 지역별 게시글(배열)을 배열형태로 묶어서 전달해줄 객체
  let blogList = [];

  // map함수로 return되는 객체들을 한번에 묶어서 보내주기위하여 하는 작업
  Promise.all(
    areaList.map(async (a) => {
      //게시판의 고유 아이디를 통하여 그 게시판의 아이디를 가지고있는 게시글을 배열형태로 불러오기
      const recentBlog = await Blog.find({ area: a._id }).sort({
        createdAt: 1,
      });
      //해당 게시판에 게시글이 없다면 오류 출력
      if (!Array.isArray(recentBlog)) {
        return res.send({
          msg: "Blog 데이터가 없습니다",
        });
      }
      blogList.push({
        ...a._doc,
        content: recentBlog,
      });
    })
  )
    .then(() => {
      res.send({
        content: blogList,
        msg: "불러오기 성공",
      });
    })
    .catch((err) => {
      console.error(err);
      res.send({
        content: null,
        msg: "에러발생",
      });
    });
});

// 관리자기능 : 지역 추가하기
router.post("/area/create", async (req, res) => {
  const { name, slug } = req.body;
  const regist_area = await Area({
    name,
    slug,
  }).save();

  res.send(regist_area._id ? true : false);
  //게시판 추가 제대로 됐는지 확인하는 코드
  //게시판 추가 제대로 됐으면 true 아니면 false가 반환된다.
});

//지역별 게시글 불러오기
router.get("/area/:slug", async (req, res) => {
  const { slug } = req.params;

  const area = await Area.findOne({ slug: slug });
  if (!area._id) {
    return res.send({
      blog: [],
      msg: "등록되지 않은 지역입니다",
      error: "404",
    });
  }
  const blog = await Blog.find({ area: area._id }).populate("author");

  res.send(blog);
});

//지역 목록 불러오기
router.get("/area/get/list", async (req, res) => {
  const area = await Area.find();
  res.send(area);
});

module.exports = router;
