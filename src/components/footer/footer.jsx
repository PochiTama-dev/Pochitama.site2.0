import React from "react";
import "./footer.css";
import miLogo from "../../assets/images/LogoPochi.webp";
import LinksBox from "./LinksBox";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        {" "}
        {/* CONTENEDOR IMAGEN */}
        <a href="/">
          <img className="img_footer" src={miLogo} alt="" />
        </a>
      </div>
      <LinksBox /> {/* Caja de links */}
      <div className="copyright">
        {" "}
        {/* CONTENEDOR IMAGEN */}
        <>
          COPYRIGHT © 2020 - 2023 POCHITAMADEVS | TODOS LOS DERECHOS RESERVADOS
        </>
      </div>
    </footer>
  );
};
export default Footer;
