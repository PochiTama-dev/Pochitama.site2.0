import Beneficios from "../../components/Home/Beneficios/Beneficios";
import Cta from "../../components/cta/Cta";
import Projects from "../../components/Projects/Projects";
import Process from "../../components/Process/Process";
import Approach from "../../components/Approach/Approach";
import CustomSlider from "../../components/Slider/Slider";
import OurServices from "../../components/OurServices/OurServices";
import HomeV2 from "./HomeV2";

const Home = () => {
  // Cambia a 'true' para usar la nueva versión optimizada
  // Cambia a 'false' para usar la versión original
  const useNewVersion = true;

  if (useNewVersion) {
    return <HomeV2 />;
  }

  return (
    <>
      <Cta />
      <Beneficios />
      <OurServices />
      <CustomSlider />
      <Projects />
      <Process />
      <Approach />
    </>
  );
};

export default Home;
