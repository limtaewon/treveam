const express = require("express");
const router = express.Router();
const { Banner } = require("../database/model");

//관리자기능 : 배너추가
router.post("/banner/create", async (req, res) => {
  const { imgurl } = req.body;
  const payload = {
    imgurl,
  };
  const regist_banner = await Banner(payload).save();
  res.send(regist_banner);
});

//배너 불러오기
router.get("/banner", async (req, res) => {
  const banner = await Banner.find();
  res.send(banner);
});

//배너 삭제하기

router.delete("/banner/delete", async (req, res) => {
  const { id } = req.body;
  const deletebanner = await Banner.deleteOne({
    _id: id,
  });
  res.send(deletebanner);
});
module.exports = router;
