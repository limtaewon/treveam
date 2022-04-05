import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { useState } from "react";
import "./ckContent.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Ckeditor() {
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");

  function Submithandler() {
    const body = {
      title: title,
      content: data,
      area: "6242c5aa21849c8da977c119",
    };
    axios
      .post("http://localhost:8080/blog/create", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }
  function Titlehandler(e) {
    setTitle(e.target.value);
  }

  return (
    <div className="editorForm">
      <textarea
        placeholder="제목을 입력해주세요"
        className="title"
        onChange={Titlehandler}
      ></textarea>
      <CKEditor
        className="editor"
        editor={Editor}
        onChange={(event, editor) => {
          setData(editor.getData());
        }}
      />
      <Link className="submit" to="/blog" onClick={Submithandler}>
        작성
      </Link>
    </div>
  );
}
