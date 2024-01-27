import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./process.css";
import line from "../../assets/images/Line.webp";
import lupa from "../../assets/images/Lupa.webp";
import estrategia from "../../assets/images/estrategia.webp";
import desarrollo from "../../assets/images/desarrollo.webp";
import pruebas from "../../assets/images/pruebas.webp";
import lanzamiento from "../../assets/images/lanzamiento.webp";
import seguimiento from "../../assets/images/seguimiento.webp";

function Process() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);
  const [isFlipped6, setIsFlipped6] = useState(false);

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
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="process">
      <div className="process-title-box">
        <img src={line} alt="" className="line-left" />
        <h1 className="process-title">Nuestro Proceso</h1>
        <img src={line} alt="" className="line-right" />
      </div>
      <div className="process-cards-container">
        <Slider {...settings} className="process-carousel">
          <div className="process-cards-box-mobile">
            <div
              className={`process-card ${isFlipped ? "flipped" : ""}`}
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              <div className="front">
                <p className="process-card-text">
                  Descubrimiento <br /> y analisis
                </p>
                <img src={lupa} alt="lupa" />
              </div>
              <div className="back">
                <ul className="process-card-ul">
                  <li>Entendemos tus objetivos y audiencia</li>
                  <li>Analizamos el mercado y la competencia</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="process-cards-box-mobile">
            <div
              className={`process-card ${isFlipped2 ? "flipped" : ""}`}
              onMouseEnter={() => setIsFlipped2(true)}
              onMouseLeave={() => setIsFlipped2(false)}
            >
              <div className="front">
                <p className="process-card-text">
                  Estrategia <br /> y diseño
                </p>
                <img src={estrategia} alt="estrategia" />
              </div>
              <div className="back">
                <ul className="process-card-ul">
                  <li>Definimos características clave y flujos de usuario</li>
                  <li>
                    Creamos una ui atractiva y una experiencia de usuario solida
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="process-cards-box-mobile">
            <div
              className={`process-card ${isFlipped3 ? "flipped" : ""}`}
              onMouseEnter={() => setIsFlipped3(true)}
              onMouseLeave={() => setIsFlipped3(false)}
            >
              <div className="front">
                <p className="process-card-text">
                  Desarrollo <br /> y construcción
                </p>
                <img src={desarrollo} alt="" className="process-card-image" />
              </div>
              <div className="back">
                <ul className="process-card-ul">
                  <li>Escribimos codigo robusto y eficiente</li>
                  <li>utilizamos las ultimas tecnologias y metodologias </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="process-cards-box-mobile">
            <div
              className={`process-card ${isFlipped4 ? "flipped" : ""}`}
              onMouseEnter={() => setIsFlipped4(true)}
              onMouseLeave={() => setIsFlipped4(false)}
            >
              <div className="front">
                <p className="process-card-text">
                  Pruebas <br /> y optimización
                </p>
                <img src={pruebas} alt="" />
              </div>
              <div className="back">
                <ul className="process-card-ul">
                  <li>
                    realizamos pruebas exhaustivas de rendimiento y seguridad
                  </li>
                  <li>ajustamos para una experiencia sin problemas </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="process-cards-box-mobile">
            <div
              className={`process-card ${isFlipped5 ? "flipped" : ""}`}
              onMouseEnter={() => setIsFlipped5(true)}
              onMouseLeave={() => setIsFlipped5(false)}
            >
              <div className="front">
                <p className="process-card-text">
                  Lanzamiento <br /> y promoción
                </p>
                <img src={lanzamiento} alt="" />
              </div>
              <div className="back">
                <ul className="process-card-ul">
                  <li>lanzamos en plataformas seleccionadas</li>
                  <li>Ofrecemos estrategias de promocion inicial </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="process-cards-box-mobile">
            <div
              className={`process-card ${isFlipped6 ? "flipped" : ""}`}
              onMouseEnter={() => setIsFlipped6(true)}
              onMouseLeave={() => setIsFlipped6(false)}
            >
              <div className="front">
                <p className="process-card-text">
                  Seguimiento <br /> y actualizaciones
                </p>
                <img src={seguimiento} alt="" />
              </div>
              <div className="back">
                <ul className="process-card-ul">
                  <li>Monitoreamos el rendimiento continuamente</li>
                  <li>Proporcionamos actualizaciones y mejoras periodicas </li>
                </ul>
              </div>
            </div>
          </div>
        </Slider>
        <div className="process-cards-box">
          <div
            className={`process-card ${isFlipped ? "flipped" : ""}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div className="front">
              <p className="process-card-text">
                Descubrimiento <br /> y analisis
              </p>
              <img src={lupa} alt="lupa" />
            </div>
            <div className="back">
              <ul className="process-card-ul">
                <li>Entendemos tus objetivos y audiencia</li>
                <li>Analizamos el mercado y la competencia</li>
              </ul>
            </div>
          </div>
          <div
            className={`process-card ${isFlipped2 ? "flipped" : ""}`}
            onMouseEnter={() => setIsFlipped2(true)}
            onMouseLeave={() => setIsFlipped2(false)}
          >
            <div className="front">
              <p className="process-card-text">
                Estrategia <br /> y diseño
              </p>
              <img src={estrategia} alt="estrategia" />
            </div>
            <div className="back">
              <ul className="process-card-ul">
                <li>Definimos características clave y flujos de usuario</li>
                <li>
                  Creamos una ui atractiva y una experiencia de usuario solida
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`process-card ${isFlipped3 ? "flipped" : ""}`}
            onMouseEnter={() => setIsFlipped3(true)}
            onMouseLeave={() => setIsFlipped3(false)}
          >
            <div className="front">
              <p className="process-card-text">
                Desarrollo <br /> y construcción
              </p>
              <img src={desarrollo} alt="" />
            </div>
            <div className="back">
              <ul className="process-card-ul">
                <li>Escribimos codigo robusto y eficiente</li>
                <li>utilizamos las ultimas tecnologias y metodologias </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="process-cards-box">
          <div
            className={`process-card ${isFlipped4 ? "flipped" : ""}`}
            onMouseEnter={() => setIsFlipped4(true)}
            onMouseLeave={() => setIsFlipped4(false)}
          >
            <div className="front">
              <p className="process-card-text">
                Pruebas <br /> y optimización
              </p>
              <img src={pruebas} alt="" />
            </div>
            <div className="back">
              <ul className="process-card-ul">
                <li>
                  realizamos pruebas exhaustivas de rendimiento y seguridad
                </li>
                <li>ajustamos para una experiencia sin problemas </li>
              </ul>
            </div>
          </div>
          <div
            className={`process-card ${isFlipped5 ? "flipped" : ""}`}
            onMouseEnter={() => setIsFlipped5(true)}
            onMouseLeave={() => setIsFlipped5(false)}
          >
            <div className="front">
              <p className="process-card-text">
                Lanzamiento <br /> y promoción
              </p>
              <img src={lanzamiento} alt="" />
            </div>
            <div className="back">
              <ul className="process-card-ul">
                <li>lanzamos en plataformas seleccionadas</li>
                <li>Ofrecemos estrategias de promocion inicial </li>
              </ul>
            </div>
          </div>

          <div
            className={`process-card ${isFlipped6 ? "flipped" : ""}`}
            onMouseEnter={() => setIsFlipped6(true)}
            onMouseLeave={() => setIsFlipped6(false)}
          >
            <div className="front">
              <p className="process-card-text">
                Seguimiento <br /> y actualizaciones
              </p>
              <img src={seguimiento} alt="" />
            </div>
            <div className="back">
              <ul className="process-card-ul">
                <li>Monitoreamos el rendimiento continuamente</li>
                <li>Proporcionamos actualizaciones y mejoras periodicas </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
