const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { area, banner, blog, comment, user, sarea } = require("./router/index");
const db = require("./database/model");
const PORT = 8080;
const app = express();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    let ext = file.originalname.split(".");
    ext = ext[ext.length - 1];
    cb(null, `${Date.now()}.${ext}`);
  },
});
const upload = multer({ storage: storage });
app.use(upload.array("files"));
app.use(express.static("public"));

const SECRET = "tlriemvteaaemw@o%n!@";

// req 부분에 들어갈 app에 jwt-secret이라는 변수명으로 비밀코드 작성
app.set("jwt-secret", SECRET);

app.use(cors());
//req.body에 있는 json읽기
app.use(express.json());
//body-parser
app.use(express.urlencoded({ extended: true }));

//라우터 연결
app.use(area);
app.use(banner);
app.use(blog);
app.use(comment);
app.use(sarea);
app.use(user);

//기본페이지 연결 테스팅
app.get("/", (req, res) => {
  res.send("Server is Running!");
});
app.post("/", (req, res) => {
  const { name } = req.body;
  res.send(name);
});
app.post("/upload_files", (req, res) => {
  if (req.files.length > 0) {
    res.json(req.files[0]);
  }
});

//서버연결
app.listen(PORT, "localhost", () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
