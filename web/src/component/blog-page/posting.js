import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./posting.scss";
import { getHtmlToText } from "../../assets/function";

const Posting = () => {
  const [list, setList] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8080/blog/list")
      .then((res) => setList(res.data));
  }, []);

  return (
    <ul className="blist-treveam">
      {list[0] &&
        list.map((bl) => {
          return (
            <li key={bl._id} className="bl-container">
              <div className="bl-wrapper">
                <div className="bl-thumnale">
                  <Link to={`/blog/${bl.author._id}/${bl._id}`}>
                    <img
                      className="thumnale-profile"
                      alt="?"
                      src="images/thumbnale/강현.png"
                    ></img>
                  </Link>
                </div>
                <div className="info-wrapper">
                  <div className="bl-author-info">
                    <Link to="/">
                      <img
                        className="author-profile"
                        src="../../../images/icon/태원.png"
                      ></img>
                    </Link>
                    <div className="a-bl">
                      <Link to="/" className="author-nickname">
                        <p>{bl.author.nickname}</p>
                      </Link>
                      <Link to="/area" className="bl-area">
                        {bl.area.farea.name}.{bl.area.name}
                      </Link>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${bl.author._id}/${bl._id}`}
                    className="bl-info"
                  >
                    <p className="bl-title">{bl.title}</p>
                    <p className="bl-content">{getHtmlToText(bl.content)}</p>
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};
export default Posting;
