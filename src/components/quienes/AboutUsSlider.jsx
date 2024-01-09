import React from 'react';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';

const AboutUsSlider = ({ equipo }) => {
  if (!equipo || equipo.length === 0) {
    return <p>No hay información de equipo disponible.</p>;
  }

  const itemsPerSlide = 3;
  const carouselItems = [];

  for (let index = 0; index < Math.ceil(equipo.length / itemsPerSlide); index++) {
    const startIndex = index * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;

    const currentSlice = equipo.slice(startIndex, endIndex);
    const missingItems = itemsPerSlide - currentSlice.length;

    // Agregar elementos ficticios si faltan
    for (let i = 0; i < missingItems; i++) {
      currentSlice.push({ nombre: 'Proximamente', imagen: 'https://avatars.githubusercontent.com/u/111319458?v=4' });
    }

    carouselItems.push(
      <Carousel.Item key={index}>
        <Row>
          {currentSlice.map((miembro, idx) => (
            <Col key={idx} md={4}>
              <Image src={miembro.imagen} alt={miembro.nombre} roundedCircle fluid />
              <p>{miembro.nombre}</p>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    );
  }

  return (
    <Container>
      <Row>
        <Col>
          <Carousel indicators={false} interval={null} wrap={false}>
            {carouselItems}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsSlider;






