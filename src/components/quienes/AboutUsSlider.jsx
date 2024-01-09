import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const AboutUsSlider = ({ equipo }) => {
  const [index, setIndex] = useState(0);
  const [sheet, setSheet] = useState([equipo[0],equipo[1],equipo[2]])

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1 < Math.ceil(equipo.length / 3) ? prevIndex + 1 : 0));
  //   }, 3000);

  //   return () => clearInterval(intervalId);
  // }, [equipo]);

  useEffect(()=>{
    setSheet([equipo[index+3], equipo[index+4], equipo[index+5]])
  },[index])

  useEffect(()=>{
    console.log(sheet[0])
  },[sheet])

  return (
    <Carousel activeIndex={index} onSelect={() => {}}>
      {equipo &&
        sheet.map((item, i) => {
          const groupIndex = Math.floor(i / 3);
          return groupIndex === index && (
            <Carousel.Item key={i}>
              <img src={item[0]?.imagen} alt={item[0]?.nombre} />
              <img src={item[1]?.imagen} alt={item[1]?.nombre} />
              <img src={item[2]?.imagen} alt={item[2]?.nombre} />
              {/* Puedes incluir el siguiente código para mostrar el nombre y área */}
              {/* <Carousel.Caption>
                <h3>{miembro.nombre}</h3>
                <p>{miembro.area}</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
};

export default AboutUsSlider;
