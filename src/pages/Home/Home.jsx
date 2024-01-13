import Beneficios from "../../components/Home/Beneficios/Beneficios";
import Cta from "../../components/cta/Cta";
import Projects from "../../components/Projects/Projects";
import Process from "../../components/Process/Process";
import Approach from "../../components/Approach/Approach";
import CustomSlider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <>
      <Cta />
      <Beneficios />;
      <CustomSlider />
      <Projects />
      <Process />
      <Approach />
    </>
  );
};

export default Home;
