import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Moment from "react-moment";
import moment from "moment";
import "./article.scss";

const Viewer = ({ content }) => (
  <div
    className="ck-content"
    dangerouslySetInnerHTML={{ __html: content }}
  ></div>
);

const Article = () => {
  const key = useParams();
  const [data, setData] = useState("");
  useEffect(async () => {
    await axios
      .get(`http://localhost:8080/blog/list/${key.blogid}`)
      .then((res) => setData(res.data));
  }, []);
  return (
    <>
      <div className="article-page">
        <section className="article-info">
          <div className="article-title-info">
            <p className="title">{data.title}</p>
            <div className="info">
              <p className="author">
                written by {data.author && data.author.nickname} .
              </p>
              <p className="created">
                {moment(data.createdAt).format("YYYY-MM-DD")}
              </p>
            </div>
          </div>
          <Viewer content={data.content} />
        </section>
        <section className="comment-reply"></section>
      </div>
    </>
  );
};

export default Article;
