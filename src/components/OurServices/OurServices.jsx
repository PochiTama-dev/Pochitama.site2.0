import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "./ourServices.css";
import line from "../../assets/images/line.webp";
import optimizacion from "../../assets/images/optimizacion.webp";
import desarrollo from "../../assets/images/desarrollo-a-medida.webp";
import mantenimiento from "../../assets/images/mantenimiento.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";

function OurServices() {
  const servicesSliderRef = useRef(null);

  const navigate = useNavigate();

  const handleCLickCard = () => {
    navigate("/servicios", { state: { fromOurServices: true } });
  };

  useEffect(() => {
    if (servicesSliderRef.current) {
      servicesSliderRef.current.slickGoTo(0);
    }
  }, []);

  function CustomNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{ ...style, display: "flex" }}
        className="slick-next"
      >
        ➡️
      </div>
    );
  }
  function CustomPrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{ ...style, display: "flex" }}
        className="slick-prev"
      >
        ⬅️
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
    { title: "Mantenimiento y soporte", image: mantenimiento },
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
            <div className="services-item" onClick={handleCLickCard}>
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
        <Link to="/servicios">
          <button className="rounded-pill fw-bolder text-white text-uppercase text-center bg-primary px-5 border-radius btn rounded">
            Descubri mas sobre nuestros servicios
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OurServices;
