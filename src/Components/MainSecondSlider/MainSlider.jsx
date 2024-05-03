import React from "react";
import Slider from "react-slick";
import { arr } from "../MainSecondSection/mainArray";
import './MainSlider.scss';


function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    speed:400,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="conteiner">
      <div className="Slider">
        <Slider {...settings}>
          {arr.map(elm => (
            <div key={elm.id}>
              <div className="slider-item">
                <img src={elm.img} alt="Logo" />
                <div>
                <h4>{elm.title}</h4>
                <p>{elm.body}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MainSlider;