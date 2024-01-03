import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const AboutUsSlider = ({ equipo }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 3 < equipo.length ? prevIndex + 3 : 0));
    }, 3000); // Ajusta el valor según la velocidad de cambio que desees
    console.log(equipo)
    return () => clearInterval(intervalId);
  }, [equipo]);

  return (
    <Carousel activeIndex={index} onSelect={() => {}}>
       {equipo && equipo.map((miembro, i) => (
        i >= index && i < index + 3 && (
          <Carousel.Item key={i}>
            <img className="d-block w-100" src={miembro.imagen} alt={miembro.nombre} />
            {/* <Carousel.Caption>
              <h3>{miembro.nombre}</h3>
              <p>{miembro.area}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        )
      ))}
    </Carousel>
  );
};

export default AboutUsSlider;