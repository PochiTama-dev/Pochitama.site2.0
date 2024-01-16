import { useEffect, useState } from "react";
import "./cta.css";
import logo from "../../assets/images/LogoPochi.png";
import gif from "../../assets/gif/pochitama-gif.gif";
import angular from "../../assets/images/angular.png";
import django from "../../assets/images/django.png";
import js from "../../assets/images/js.png";
import node from "../../assets/images/node.png";
import php from "../../assets/images/php.png";
import python from "../../assets/images/python.png";
import react from "../../assets/images/react.png";
import ruby from "../../assets/images/ruby.png";
import vue from "../../assets/images/Vue.png";
import wordpress from "../../assets/images/Wordpress.png";

function Cta({
  title = "¿Tenes un proyecto?",
  subtitle = "¡Vamos a charlarlo! Nuestros expertos están a tu disposición para hacer realidad tus ideas.",
}) {
  const [gifVisible, setGifVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setGifVisible(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);
  const handleGifLoad = () => {};
  return (
    <div className="cta ">
      <div className=" div-container">
        <div className=" col-left">
          <div className="angular">
            <img src={angular} alt="angular" className="" />
          </div>
          <div className="django">
            <img src={django} alt="django" className="" />
          </div>
          <div className="js">
            <img src={js} alt="javascript" className="" />
          </div>
          <div className="node">
            <img src={node} alt="node" className="" />
          </div>
          <div className="php">
            <img src={php} alt="php" className="" />
          </div>
          <div className="python">
            <img src={python} alt="python" className="" />
          </div>
          <div className="react">
            <img src={react} alt="react" className="" />
          </div>
          <div className="ruby">
            <img src={ruby} alt="ruby" className="" />
          </div>
          <div className="vue">
            <img src={vue} alt="vue" className="" />
          </div>
          <div className="wordpress">
            <img src={wordpress} alt="wordpress" className="" />
          </div>
          <div className="gif-gato-logo-box">
            {gifVisible ? (
              <img
                src={gif}
                alt="gato codeando"
                className="start-gif-logo"
                style={{ height: "100%" }}
                onLoad={handleGifLoad}
              />
            ) : (
              <img
                src={logo}
                alt="logo"
                className="static-image-logo"
                style={{ height: "100%" }}
              />
            )}
            {!gifVisible && (
              <div className="gif-gato-logo-2">
                <img src={gif} alt="gato codeando" style={{ height: "100%" }} />
              </div>
            )}
          </div>
        </div>
        <div className=" col-right">
          <div className="div-text">
            <p className="title">{title}</p>
            <p className="subtitle">{subtitle}</p>
          </div>
          <div className="gif-gato-logo-box-responsive">
            {gifVisible ? (
              <img
                src={gif}
                alt="gato codeando"
                className="start-gif-logo-responsive"
                style={{ height: "100%" }}
                onLoad={handleGifLoad}
              />
            ) : (
              <img
                src={logo}
                alt="logo"
                className="static-image-logo-responsive"
                style={{ height: "100%" }}
              />
            )}
          </div>
          <div className="div-contact-box">
            <button className="button-contact">Contactanos</button>
          </div>
        </div>
      </div>
      <div className="svg-background">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100% 100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 531.685C0 531.685 245.944 431.931 442.111 431.931C638.278 431.931 793.092 455.078 1013.93 531.685C1234.77 608.291 1730 559.956 1730 559.956V0H0V531.685Z"
            fill="#B8AFD5"
          >
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              keyTimes="0;0.33;0.66;1"
              values="M0 531.685C0 531.685 245.944 431.931 442.111 431.931C638.278 431.931 793.092 455.078 1013.93 531.685C1234.77 608.291 1730 559.956 1730 559.956V0H0V531.685Z;
              M0 531.685C0 531.685 245.944 531.685 442.111 531.685C638.278 531.685 793.092 501.078 1013.93 531.685C1234.77 562.291 1730 531.685 1730 531.685V0H0V531.685Z;
              M0 531.685C0 531.685 245.944 531.685 442.111 531.685C638.278 531.685 793.092 431.931 1013.93 431.931C1234.77 431.931 1730 531.685 1730 531.685V0H0V531.685Z;
              M0 531.685C0 531.685 245.944 431.931 442.111 431.931C638.278 431.931 793.092 455.078 1013.93 531.685C1234.77 608.291 1730 559.956 1730 559.956V0H0V531.685Z"
            />
          </path>
        </svg>
      </div>
    </div>
  );
}

export default Cta;
