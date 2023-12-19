import React from "react";
import Cta from "../../components/cta/Cta";

const Services = () => {
  const titleCta = "Descubre más sobre nuestros servicios";
  const subtitleCta =
    "Crear aplicaciones que marquen la diferencia. Diseño elegante, funcionalidad poderosa y compromiso absoluto con la excelencia.";
  return (
    <div>
      <Cta title={titleCta} subtitle={subtitleCta} />
      <div>Services</div>
    </div>
  );
};

export default Services;
