import Beneficios from "../../components/Home/Beneficios/Beneficios";
import Cta from "../../components/cta/Cta";
import Projects from "../../components/Projects/Projects";
import Process from "../../components/Process/Process";
import Approach from "../../components/Approach/Approach";
import CustomSlider from "../../components/Slider/Slider";
import OurServices from "../../components/OurServices/OurServices";

const Home = () => {
  return (
    <>
      <Cta />
      <Beneficios />;
      <OurServices />
      <CustomSlider />
      <Projects />
      <Process />
      <Approach />
    </>
  );
};

export default Home;
