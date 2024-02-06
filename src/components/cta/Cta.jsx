import { useEffect, useState } from "react";
import "./cta.css";
import logo from "../../assets/images/LogoPochi.webp";
import angular from "../../assets/images/angular.webp";
import django from "../../assets/images/django.webp";
import js from "../../assets/images/js.webp";
import node from "../../assets/images/node.webp";
import php from "../../assets/images/php.webp";
import python from "../../assets/images/python.webp";
import react from "../../assets/images/react.webp";
import ruby from "../../assets/images/ruby.webp";
import vue from "../../assets/images/Vue.webp";
import wordpress from "../../assets/images/Wordpress.webp";
import gatoAnimado from "../../assets/gif/pochitama-gif.webm";
import { Link } from "react-router-dom";

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

  return (
    <div className="cta ">
      <div className=" div-container">
        <div className=" col-left">
          <Link to="https://angular.io/docs" className="angular">
            <img src={angular} alt="angular" className="" />
          </Link>
          <Link to="https://docs.djangoproject.com/5.0/" className="django">
            <img src={django} alt="django" className="" />
          </Link>
          <Link
            to="https://developer.mozilla.org/docs/Web/JavaScript"
            className="js"
          >
            <img src={js} alt="javascript" className="" />
          </Link>
          <Link
            to="https://nodejs.org/learn/getting-started/introduction-to-nodejs"
            className="node"
          >
            <img src={node} alt="node" className="" />
          </Link>
          <Link to="https://www.php.net/docs.php" className="php">
            <img src={php} alt="php" className="" />
          </Link>
          <Link to="https://www.python.org/doc/" className="python">
            <img src={python} alt="python" className="" />
          </Link>
          <Link to="https://react.dev/learn" className="react">
            <img src={react} alt="react" className="" />
          </Link>
          <Link to="https://www.ruby-lang.org/documentation/" className="ruby">
            <img src={ruby} alt="ruby" className="" />
          </Link>
          <Link to="https://vuejs.org/guide/introduction.html" className="vue">
            <img src={vue} alt="vue" className="" />
          </Link>
          <Link to="https://wordpress.org/documentation/" className="wordpress">
            <img src={wordpress} alt="wordpress" className="" />
          </Link>
          <div className="gif-gato-logo-box">
            {gifVisible ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className={`start-gif-logo ${gifVisible ? "hidden" : ""}`}
              >
                <source
                  src={gatoAnimado}
                  className="start-gif-logo"
                  type="video/webm"
                />
              </video>
            ) : (
              <img
                src={logo}
                alt="logo"
                className="static-image-logo"
                style={{ height: "100%" }}
              />
            )}
            {!gifVisible && (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="gif-gato-logo-2"
              >
                <source src={gatoAnimado} type="video/webm" />
              </video>
            )}
          </div>
        </div>
        <div className=" col-right">
          <div className="div-text">
            <h2 className="title">{title}</h2>
            <h3 className="subtitle">{subtitle}</h3>
          </div>
          <div className="gif-gato-logo-box-responsive">
            {gifVisible ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="start-gif-logo-responsive"
              >
                <source src={gatoAnimado} type="video/webm" />
              </video>
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
            <Link className="button-contact-link" to="/contacto">
              <button className="button-contact">Contactanos</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="svg-background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3500 100%"
          fill="none"
          width="3500"
          height="100%"
        >
          <path
            d="M0 531.685C0 531.685 245.944 431.931 442.111 431.931C638.278 431.931 793.092 455.078 1013.93 531.685C1234.77 608.291 3500 559.956 1730 559.956V0H0V531.685Z"
            fill="#B8AFD5"
          >
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              keyTimes="0;0.33;0.66;1"
              values="
    M0 531.685C0 531.685 245.944 431.931 442.111 431.931C638.278 431.931 793.092 455.078 1013.93 531.685C1234.77 608.291 3500 559.956 3500 559.956V0H0V531.685Z;
    M0 531.685C0 531.685 245.944 531.685 442.111 531.685C638.278 531.685 793.092 501.078 1013.93 531.685C1234.77 562.291 3500 531.685 3500 531.685V0H0V531.685Z;
    M0 531.685C0 531.685 245.944 531.685 442.111 531.685C638.278 531.685 793.092 431.931 1013.93 431.931C1234.77 431.931 3500 531.685 3500 531.685V0H0V531.685Z;
    M0 531.685C0 531.685 245.944 431.931 442.111 431.931C638.278 431.931 793.092 455.078 1013.93 531.685C1234.77 608.291 3500 559.956 3500 559.956V0H0V531.685Z"
            />
          </path>
        </svg>
      </div>
    </div>
  );
}

export default Cta;
