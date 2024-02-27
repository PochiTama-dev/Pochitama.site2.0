import { Carousel } from 'react-bootstrap';
import image1 from './proyectHomeImg/1.webp';
import image2 from './proyectHomeImg/2.webp';
import image3 from './proyectHomeImg/3.webp';
import image4 from './proyectHomeImg/4.webp';
import image5 from './proyectHomeImg/5.webp';
import image6 from './proyectHomeImg/6.webp';

function ProyectSlider() {
  return (
    <Carousel interval={1300} fade={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image4}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image5}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image6}
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ProyectSlider;
