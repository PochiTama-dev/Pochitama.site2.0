import {useEffect, useState} from "react";
import "./portfolio.css";
import ProyectCard from "../../components/Portfolio/ProyectCard";
import { texto, titleCTA, subtitleCTA } from "./variables.js";
import Cta from "../../components/cta/Cta.jsx";
import { Carousel } from "react-bootstrap";

const Portfolio = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  return (
    <div>
      <Cta title={titleCTA} subtitle={subtitleCTA} />
      <div className="container-fluid portfolio-container">
        <div className="row pt-10">
          {/* ROW TEXTOS */}
          <div className="col-2" />
          <div className="col-8">
            <div className="d-flex flex-row justify-content-center align-items-center mb-4">
              {/* BOX TITULO */}
              <div className="portfolio-hr" />
              <h2 className="portfolio-title"> Proyectos Destacados</h2>
              <div className="portfolio-hr" />
            </div>
            <div className="portfolio-text-box">
              {/* TEXT-BOX */}
              <p className="portfolio-p">{texto}</p>
              {/*texto */}
            </div>
          </div>
          <div className="col-2" />
        </div>
        <div className="row pt-8">
          {/* ROW IMGS */}
          <div className="col-1" />
            {screenWidth > 1000 ?
          <div className="col-10 d-flex flex-row justify-content-center">
            <ProyectCard proyectName="Proyecto" position="impar" />
            <ProyectCard proyectName="Proyecto" position="par" />
            <ProyectCard proyectName="Proyecto" position="impar" />
            <ProyectCard proyectName="Proyecto" position="par" />
          </div> :
          <div className="col-10 d-flex flex-row justify-content-center align-items-center">
            <Carousel style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
              <Carousel.Item key={1}>
                <ProyectCard proyectName="Proyecto" position={'carousel'} />
              </Carousel.Item>
              <Carousel.Item key={2}>
                <ProyectCard proyectName="Proyecto" position={'carousel'} />
              </Carousel.Item>
              <Carousel.Item key={3}>
                <ProyectCard proyectName="Proyecto" position={'carousel'} />
              </Carousel.Item>
              <Carousel.Item key={4}>
                <ProyectCard proyectName="Proyecto" position={'carousel'} />
              </Carousel.Item>
            </Carousel>
          </div>
            }
          <div className="col-1" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
