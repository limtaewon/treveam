import "./blog-page.scss";
import Posting from "./posting";
import { Link } from "react-router-dom";
const BlogPage = () => {
  return (
    <>
      <div id="blog-header">
        <h4>여행일지</h4>
        <Link to="/write">글쓰기</Link>
      </div>
      <section className="blog-list">
        <Posting />
      </section>
    </>
  );
};

export default BlogPage;
