import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';
import '../quienes/aboutusslider.css'

const AboutUsSlider = ({ equipo, screenWidth }) => {
  const [index, setIndex] = useState(0);

  if (!equipo || equipo.length === 0) {
    return <p>No hay información de equipo disponible.</p>;
  }

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(equipo.length / itemsPerSlide);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleNext = () => {
    // Si estamos en la última hoja, reiniciar el carousel
    if (index === totalSlides - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const carouselItems = [];

  if(screenWidth > 768){
    for (let i = 0; i < totalSlides; i++) {
      const startIndex = i * itemsPerSlide;
      const endIndex = startIndex + itemsPerSlide;
      const currentSlice = equipo.slice(startIndex, endIndex);
      const missingItems = itemsPerSlide - currentSlice.length;
      for (let j = 0; j < missingItems; j++) {
        currentSlice.push({ nombre: 'Proximamente', imagen: 'https://avatars.githubusercontent.com/u/111319458?v=4' });
      }
      carouselItems.push(
        <Carousel.Item key={i}>
          <Row>
            {currentSlice.map((miembro, idx) => (
              <Col key={idx} md={4}  className="d-flex justify-content-center align-items-center">
                <div className='slider_box'>
                  <div className='avatar_box'>
                    <Image className='about_avatar' src={miembro.imagen} alt={miembro.nombre} roundedCircle fluid />
                  </div>
                  <div className="info">
                    <text>{miembro.nombre}</text>
                    <h5>{miembro.area}</h5>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      );
    }
  }
  else{
    equipo.forEach((miembro, idx) => {
      carouselItems.push(
        <Carousel.Item key={"C"+idx}>
          <Row>
              <Col key={idx} md={4} className="d-flex justify-content-center align-items-center">
                <div className='slider_box'>
                  <div className='avatar_box'>
                    <Image className='about_avatar' src={miembro.imagen} alt={miembro.nombre} roundedCircle fluid />
                  </div>
                  <div className="info">
                    <text>{miembro.nombre}</text>
                    <h5>{miembro.area}</h5>
                  </div>
                </div>
              </Col>
          </Row>
        </Carousel.Item>
      );
    });
  }
  return (
    <Container>
      <Row>
        <Col>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            indicators={false}
            interval={null}
            wrap={false}
          >
            {carouselItems}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsSlider;






