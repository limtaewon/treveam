import "./index.css";
import React from "react";
import Banner from "./banner";
import Account from "./account";
import Selectbox from "./selectbox";

function MainPage() {
  return (
    <>
      <div id="main">
        <h3>트레빔이 추천합니다!</h3>
        <Banner />
        <h3>지역별로 이달의 인기 포스트를 확인해보세요!</h3>
        <Selectbox />
        <h3>트레빔 공식계정에 접속하세요!</h3>
        <Account />
      </div>
    </>
  );
}
export default MainPage;
