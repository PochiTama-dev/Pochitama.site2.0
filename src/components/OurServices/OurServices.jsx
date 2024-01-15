import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "./ourServices.css";
import line from "../../assets/images/Line.png";
import optimizacion from "../../assets/images/optimizacion.png";
import desarrollo from "../../assets/images/desarrollo-a-medida.png";
import mantenimiento from "../../assets/images/mantenimiento.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurServices() {
  const servicesSliderRef = useRef(null);

  useEffect(() => {
    if (servicesSliderRef.current) {
      servicesSliderRef.current.slickGoTo(0);
    }
  }, []);

  const goToNextSlide = () => {
    if (servicesSliderRef.current) {
      servicesSliderRef.current.slickNext();
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

  const cards = [
    {
      title: "Optimización de rendimiento",
      image: optimizacion,
    },
    {
      title: "Desarrollo de aplicaciones web a medida",
      image: desarrollo,
    },
    {
      title: "Mantenimiento y soporte",
      image: mantenimiento,
    },
    {
      title: "Optimización de rendimiento",
      image: optimizacion,
    },
    {
      title: "Desarrollo de aplicaciones web a medida",
      image: desarrollo,
    },
    {
      title: "Mantenimiento y soporte",
      image: mantenimiento,
    },
  ];

  return (
    <div className="services">
      <div className="services-title-box">
        <img src={line} alt="line" className="line-left" />
        <h1 className="services-title">Nuestros Servicios</h1>
        <img src={line} alt="line" className="line-right" />
      </div>

      <Slider
        ref={servicesSliderRef}
        className="services-carousel"
        {...settings}
      >
        {cards.map((e, i) => (
          <div key={i} className="services-card-container">
            <div className="services-item" onClick={goToNextSlide}>
              <div className="services-item-image-box">
                <img
                  src={e.image}
                  alt={e.image}
                  className="services-item-image"
                />
              </div>
              <h2 className="services-item-text">{e.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
      <div className="services-button-box">
        <button className="services-button">
          Descubri mas sobre nuestros servicios
        </button>
      </div>
    </div>
  );
}

export default OurServices;
