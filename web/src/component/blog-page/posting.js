import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./posting.scss";

const Posting = () => {
  const [list, setList] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8080/blog/list")
      .then((res) => setList(res.data));
  }, []);
  console.log(list);
  return (
    <>
      {list[0] &&
        list.map((bl) => {
          return (
            <div key={bl._id} className="bl-container">
              <div className="bl-wrapper">
                <div className="bl-thumnale">
                  <img
                    className="thumnale-profile"
                    alt="?"
                    src="images/thumbnale/강현.png"
                  ></img>
                </div>
                <div className="info-wrapper">
                  <div className="bl-author-info">
                    <img
                      className="author-profile"
                      src="../../../images/icon/태원.png"
                    ></img>
                    <div className="a-bl">
                      <Link to="/" className="author-nickname">
                        {bl.author.nickname}
                      </Link>
                      <Link to="/" className="bl-area">
                        {bl.area}
                      </Link>
                    </div>
                  </div>
                  <div className="bl-info">
                    <Link
                      className="bl-title"
                      to={`http://localhost:8080/blog/${bl._id}`}
                    >
                      {bl.title}
                    </Link>
                    <Link
                      className="bl-content"
                      to={`http://localhost:8080/blog/${bl._id}`}
                    >
                      {bl.content}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default Posting;
