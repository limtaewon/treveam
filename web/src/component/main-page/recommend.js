import Selectbox from "./selectbox";

function Recommend() {
  return (
    <div id="polular-show">
      <Selectbox />
      <div id="select-area">{Citylist()}</div>
      <div id="show-area">
        {img.map((value, index) => {
          return (
            <div className="area-card">
              <div className="area-img">
                <img src={img[index]}></img>
              </div>
              <div className="mp-ui">
                <span>
                  이름 :
                  <b>
                    <a> {name[index]}</a>
                  </b>
                </span>
                <span>
                  좋아요 수 :
                  <b>
                    <a> {like[index]}</a>
                  </b>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recommend;
