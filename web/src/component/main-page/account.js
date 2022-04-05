import "./account.scss";

function Account() {
  return (
    <div id="account-info">
      <div className="account-card">
        <img
          className="account-icon"
          src="../images/icon/facebook-icones.png"
        />
        <a className="account-link" href="#">
          <b>트레빔 페이스북 공식페이지</b>
        </a>
        <p>
          트레빔의 공식 페이스북 페이지에 접속하여 <br />
          다양한 여행정보를 확인해보세요
        </p>
      </div>
      <div className="account-card">
        <img className="account-icon" src="../images/icon/naver-icon.png" />
        <a className="account-link" href="#">
          <b>트레빔 블로그 공식페이지</b>
        </a>
        <p>
          트레빔의 공식 블로그 페이지에 접속하여 <br />
          다양한 여행정보를 확인해보세요
        </p>
      </div>
      <div className="account-card">
        <img className="account-icon" src="../images/icon/instagram-icon.jpg" />
        <a className="account-link" href="#">
          <b>트레빔 인스타그램 공식페이지</b>
        </a>
        <p>
          트레빔의 공식 인스타 페이지에 접속하여 <br />
          다양한 여행정보를 확인해보세요
        </p>
      </div>
    </div>
  );
}

export default Account;
