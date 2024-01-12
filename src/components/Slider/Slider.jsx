import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { loremIpsum } from "./variables.js";
import "./slider.css";
import line from "../../assets/images/Line.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../assets/images/LogoPochi.png";

function CustomSlider({ title = "¿Qué dicen nuestros Clientes?" }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, []);

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider">
      <div className="slider-title-box">
        <img src={line} alt="line" className="line-left" />
        <h1 className="slider-title">{title}</h1>
        <img src={line} alt="line" className="line-right" />
      </div>

      <Slider ref={sliderRef} className="carousel" {...settings}>
        {loremIpsum.map((e, i) => (
          <div key={i} className="slider-card-container">
            <div className="slider-logo-container">
              <img src={logo} alt="logo" className="slider-logo" />
            </div>
            <div className="slider-item" onClick={goToNextSlide}>
              <p className="slider-item-text">{e.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomSlider;
