import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import "./banner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
  const [banner, setBanner] = useState([]);

  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  //slider 옵션변경 변수
  useEffect(() => {
    axios.get("http://localhost:8080/banner").then((res) => setBanner(res));
  }, []);
  return (
    <div id="recommand-area">
      <Slider {...settings}>
        {banner.data &&
          banner.data.map((b) => {
            return (
              <div key={b._id} className="banner-img-box">
                <img className="banner-img" src={b.imgurl}></img>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default Banner;
