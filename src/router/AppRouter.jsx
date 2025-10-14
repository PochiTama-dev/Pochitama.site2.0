import { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Services from "../pages/Services/Services";
import PolicyAndPrivacy from "../pages/policy-and-privacy/PolicyAndPrivacy";
import TermsOfService from "../pages/policy-and-privacy/TermsOfService";
import WhatsAppButton from "../components/Whatsapp/WhatsAppButton";

const Home = lazy(() => import("../pages/Home/Home"));
const AboutUs = lazy(() => import("../pages/About/About"));
// const Services = lazy(() => import("../pages/Services/Services"));
const Portfolio = lazy(() => import("../pages/Portfolio/Portfolio"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Footer = lazy(() => import("../components/footer/footer"));

const AppRouter = () => (
  <Router>
    <Header />
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/politicas-y-privacidad" element={<PolicyAndPrivacy/>}/>
        <Route path="/politica-privacidad" element={<PolicyAndPrivacy/>}/>
        <Route path="/terminos" element={<TermsOfService/>}/>
      </Routes>
      <WhatsAppButton />
      <Footer />
    </Suspense>
  </Router>
);

export default AppRouter;
