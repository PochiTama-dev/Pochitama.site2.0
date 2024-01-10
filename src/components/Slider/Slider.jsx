import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { titleClients, loremIpsum } from "./variables.js";
import "./slider.css";
import line from "../../assets/images/Line.png";

function Slider({ title = "¿Que dicen nuestros Clientes?" }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const [val, setVal] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const handleNext = () => {
    let index = val < loremIpsum.length - 1 ? val + 1 : val;
    setVal(index);
  };

  return (
    <div className="slider">
      <div className="slider-title-box">
        <img src={line} alt="line" />
        <h1 className="slider-title">{title}</h1>
        <img src={line} alt="line" />
      </div>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {loremIpsum.map((e, i) => {
            return (
              <motion.div className="item" key={i}>
                {/* “ */}
                <p className="item-text">{e.name}</p>
                {/* ” */}
              </motion.div>
            );
          })}
          {/* <motion.div className="item">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>
          </motion.div>
          <motion.div className="item">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>
          </motion.div>
          <motion.div className="item">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>
          </motion.div>
          <motion.div className="item">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>
          </motion.div>
          <motion.div className="item">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>
          </motion.div> */}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Slider;
