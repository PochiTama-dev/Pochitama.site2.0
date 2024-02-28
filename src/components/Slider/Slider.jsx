import { useEffect, useRef } from "react";
import Slider from "react-slick";
import { loremIpsum } from "./variables.js"; // Asegúrate de que loremIpsum incluya ahora objetos con name e img
import "./slider.css";
import line from "../../assets/images/Line.webp";
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

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
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
              <img src={e.img} alt="logo" className="slider-logo" />
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
