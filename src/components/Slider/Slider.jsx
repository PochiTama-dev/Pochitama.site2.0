import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { loremIpsum } from "./variables.js";
import "./slider.css";
import line from "../../assets/images/Line.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  return (
    <div className="slider">
      <div className="slider-title-box">
        <img src={line} alt="line" />
        <h1 className="slider-title">{title}</h1>
        <img src={line} alt="line" />
      </div>

      <Slider
        ref={sliderRef}
        className="carousel"
        infinite={true}
        speed={500}
        slidesToShow={3}
        slidesToScroll={1}
      >
        {loremIpsum.map((e, i) => (
          <div key={i} className="card-container">
            <div className="item" onClick={goToNextSlide}>
              <p className="item-text">{e.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomSlider;
