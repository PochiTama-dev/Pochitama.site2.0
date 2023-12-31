import React from "react";
import Beneficios from "../../components/Home/Beneficios/Beneficios";
import Cta from "../../components/cta/Cta";
import Slider from "../../components/Slider/Slider";
import Process from "../../components/Process/Process";

const Home = () => {
  return (
    <>
      <Cta />
      <Beneficios />;
      <Slider />
      <Process />
    </>
  );
};

export default Home;
