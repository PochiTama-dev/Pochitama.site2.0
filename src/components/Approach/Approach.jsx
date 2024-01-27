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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid ex vero nesciunt, a, quae, neque cum consequuntur quas
                eius nostrum in ab aliquam. Ullam, illo est.
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid ex vero nesciunt, a, quae, neque cum consequuntur quas
                eius nostrum in ab aliquam. Ullam, illo est.
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid ex vero nesciunt, a, quae, neque cum consequuntur quas
                eius nostrum in ab aliquam. Ullam, illo est.
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid ex vero nesciunt, a, quae, neque cum consequuntur quas
                eius nostrum in ab aliquam. Ullam, illo est.
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
