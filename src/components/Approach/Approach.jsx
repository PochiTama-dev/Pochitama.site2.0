import React, { useState } from "react";
import "./approach.css";
import line from "../../assets/images/Line.png";
import heart from "../../assets/images/heart.png";
import brain from "../../assets/images/brain.png";
import partnership from "../../assets/images/partnership.png";
import hands from "../../assets/images/hands.png";

function Approach() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  return (
    <div className="approach">
      <div className="approach-title-box">
        <img src={line} alt="" />
        <h1 className="approach-title">Nuestro Enfoque</h1>
        <img src={line} alt="" />
      </div>
      <div className="approach-cards-container">
        <div className="approach-cards-box">
          <div
            className={`approach-card ${isFlipped ? "flip" : ""}`}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <div className="front">
              <img src={heart} alt="Pasion" />
            </div>
            <div className="back">
              <p className="approach-card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid ex vero nesciunt, a, quae, neque cum consequuntur quas
                eius nostrum in ab aliquam. Ullam, illo est. Repellendus aut
                enim laborum?
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
              <img src={brain} alt="Innovacion" />
            </div>
            <div className="back">
              <p className="approach-card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid ex vero nesciunt, a, quae, neque cum consequuntur quas
                eius nostrum in ab aliquam. Ullam, illo est. Repellendus aut
                enim laborum?
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
              <img src={partnership} alt="Respeto" />
            </div>
            <div className="back">
              <p className="approach-card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid ex vero nesciunt, a, quae, neque cum consequuntur quas
                eius nostrum in ab aliquam. Ullam, illo est. Repellendus aut
                enim laborum?
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
              <img src={hands} alt="Disciplina" />
            </div>
            <div className="back">
              <p className="approach-card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid ex vero nesciunt, a, quae, neque cum consequuntur quas
                eius nostrum in ab aliquam. Ullam, illo est. Repellendus aut
                enim laborum?
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
