import React from "react";
import Beneficios from "../../components/Home/Beneficios/Beneficios";
import Cta from "../../components/cta/Cta";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <>
      <Cta />
      <Beneficios />;
      <Slider />
    </>
  );
};

export default Home;
