import React from "react";
import "./footer.css";
import miLogo from "../../assets/images/LogoPochi.png";
import {
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsFacebook,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section_img">
        <a href="/">
          <img className="img" src={miLogo} alt="" />
        </a>
      </div>
      <div className="footer-links">
        <a
          href="https://instagram.com/pochitama.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="sin-enlace"
        >
          <BsInstagram />
        </a>
        <a
          href="https://facebook.com/profile.php?id=100090586969134"
          target="_blank"
          rel="noopener noreferrer"
          className="sin-enlace"
        >
          <BsFacebook />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="sin-enlace"
        >
          <BsTwitter />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="sin-enlace"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/PochiTama-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="sin-enlace"
        >
          <BsGithub />
        </a>
      </div>
      <div className="copyright">
        <h4>
          COPYRIGHT © 2020 - 2023 POCHITAMADEVS | TODOS LOS DERECHOS RESERVADOS
        </h4>
      </div>
    </footer>
  );
};
export default Footer;
