import "./GNB.scss";
import { Button } from "antd";
import { Link } from "react-router-dom";
import LoginModal from "../modal/LoginSignupmodal";
import { logout } from "../../store/modules/user";
import { useSelector, useDispatch } from "react-redux";
import {
  set_login_then_close,
  set_login_then_open_window,
} from "../../store/modules/modal";
import "bootstrap/dist/css/bootstrap.css";

function GNB() {
  const login = useSelector((state) => state.user.login);
  const login_modal = useSelector((state) => state.modal.login_modal);
  const dispatch = useDispatch();

  return (
    <div id="head">
      <LoginModal
        show={login_modal}
        onHide={() => dispatch(set_login_then_close())}
      />
      <div id="header-info">
        <div id="lss">
          <nav id="categori">
            <Link to="/">
              <img className="logo-img" src="./images/icon/logo.png" />
            </Link>
            <ul className="content-card">
              <li key="1">
                <Link to="/feed">피드</Link>
              </li>
              <li key="2">
                <Link to="/blog">블로그</Link>
              </li>
              <li key="3">
                <Link to="/market">마켓</Link>
              </li>
              <li key="4">
                <Link to="/info">공지사항</Link>
              </li>
              <li key="5">
                <Link to="#">고객센터</Link>
              </li>
            </ul>
          </nav>
          <div id="regist">
            {login ? (
              <Link
                to="/"
                className="login"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                로그아웃
              </Link>
            ) : (
              <Link
                to=""
                className="login"
                onClick={() => {
                  dispatch(set_login_then_open_window());
                }}
              >
                로그인
              </Link>
            )}
            {login ? (
              <Link to="/profile" className="profile">
                내정보
              </Link>
            ) : (
              <Link
                to=""
                className="profile"
                onClick={() => {
                  dispatch(set_login_then_open_window());
                }}
              >
                내정보
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default GNB;
