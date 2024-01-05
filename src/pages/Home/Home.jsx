import React from "react";
import Beneficios from "../../components/Home/Beneficios/Beneficios";
import Cta from "../../components/cta/Cta";
import Slider from "../../components/Slider/Slider";
import Process from "../../components/Process/Process";
import Approach from "../../components/Approach/Approach";
import CustomSlider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <>
      <Cta />
      <Beneficios />;
      <CustomSlider />
      <Process />
      <Approach />
    </>
  );
};

export default Home;
