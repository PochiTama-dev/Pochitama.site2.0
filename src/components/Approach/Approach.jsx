import React, { useState } from "react";
import "./approach.css";
import line from "../../assets/images/Line.webp";
import heart from "../../assets/images/heart.webp";
import brain from "../../assets/images/brain.webp";
import partnership from "../../assets/images/partnership.webp";
import hands from "../../assets/images/hands.webp";
import heartMobile from "../../assets/images/heart-mobile.webp";
import brainMobile from "../../assets/images/brain-mobile.webp";
import partnershipMobile from "../../assets/images/partnership-mobile.webp";
import handsMobile from "../../assets/images/hands-mobile.webp";

function Approach() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  return (
    <div className="approach">
      <div className="approach-title-box">
        <img src={line} alt="" className="line-left" />
        <h1 className="approach-title">Nuestro Enfoque</h1>
        <img src={line} alt="" className="line-right" />
      </div>
      <div className="approach-cards-container">
        <div className="approach-cards-box">
          <div
            className={`approach-card ${isFlipped ? "flip" : ""}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div className="front">
              <img
                src={heart}
                alt="Pasion"
                className="approach-image-desktop"
              />
              <img
                src={heartMobile}
                alt="Pasion"
                className="approach-image-mobile"
              />
            </div>
            <div className="back">
              <p className="approach-card-text">
              Estamos comprometidos de todo corazón con la creación de productos digitales de primera clase. Nuestra pasión nos impulsa a resolver problemas complejos de la forma más rápida y rentable posible y propulsa nuestra productividad y nuestro alto nivel de exigencia.
              </p>
            </div>
            <h2 className="approach-card-subtitle">Pasion</h2>
          </div>
          <div
            className={`approach-card ${isFlipped2 ? "flip" : ""}`}
            onMouseEnter={() => setIsFlipped2(true)}
            onMouseLeave={() => setIsFlipped2(false)}
          >
            <div className="front">
              <img
                src={brain}
                alt="Innovacion"
                className="approach-image-desktop"
              />
              <img
                src={brainMobile}
                alt="Innovacion"
                className="approach-image-mobile"
              />
            </div>
            <div className="back">
              <p className="approach-card-text">
              Como solucionadores de problemas, creemos en la superación de los límites a través de la innovación persistente. En el núcleo de nuestro ADN se encuentra un enfoque singular en los resultados exitosos por encima de todo lo demás. Esto nos proporciona el ímpetu necesario para superar los límites de la innovación disruptiva.
              </p>
            </div>
            <h2 className="approach-card-subtitle">Innovacion</h2>
          </div>
          <div
            className={`approach-card ${isFlipped3 ? "flip" : ""}`}
            onMouseEnter={() => setIsFlipped3(true)}
            onMouseLeave={() => setIsFlipped3(false)}
          >
            <div className="front">
              <img
                src={partnership}
                alt="Respeto"
                className="approach-image-desktop"
              />
              <img
                src={partnershipMobile}
                alt="Respeto"
                className="approach-image-mobile"
              />
            </div>
            <div className="back">
              <p className="approach-card-text">
              Creemos firmemente en el valor de la diversidad. Tener diferentes puntos de vista enriquece nuestros debates y resultados. El respeto no es negociable y nos ayuda a proteger nuestra cultura, en la que la tolerancia, la aceptación y la amabilidad son fundamentales por difíciles que sean las circunstancias.
              </p>
            </div>
            <h2 className="approach-card-subtitle">Respeto</h2>
          </div>
          <div
            className={`approach-card ${isFlipped4 ? "flip" : ""}`}
            onMouseEnter={() => setIsFlipped4(true)}
            onMouseLeave={() => setIsFlipped4(false)}
          >
            <div className="front">
              <img
                src={hands}
                alt="Disciplina"
                className="approach-image-desktop"
              />
              <img
                src={handsMobile}
                alt="Disciplina"
                className="approach-image-mobile"
              />
            </div>
            <div className="back">
              <p className="approach-card-text">
              Se nos faculta para ser autónomos a fin de poder emprender acciones que tengan un impacto profundamente positivo en la vida de quienes nos rodean.
              </p>
            </div>
            <h2 className="approach-card-subtitle">Disciplina</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Approach;
