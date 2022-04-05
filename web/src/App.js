import "./assets/global.scss";
import "antd/dist/antd.css";
import MainPage from "./component/main-page";
import BlogPage from "./component/blog-page/blog-page";
import WritePage from "./component/write-page/write-page";
import GNB from "./component/GNB/GNB";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { token } from "./store/modules/user";
import axios from "axios";
function App() {
  const dispatch = useDispatch();
  axios
    .get("http://localhost:8080/user/token", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      dispatch(token(res));
    });

  return (
    <>
      <section id="gnb">
        <GNB />
      </section>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPage />
          </Route>
          <Route exact path="/blog">
            <BlogPage />
          </Route>
          <Route exact path="/write">
            <WritePage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </>
  );
}

export default App;
