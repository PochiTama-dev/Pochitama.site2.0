import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "../pages/Home/Home";
// import AboutUs from "../pages/About/About";
// import Services from "../pages/Services/Services";
// import Portfolio from "../pages/Portfolio/Portfolio";
// import Contact from "../pages/Contact/Contact";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";

const Home = lazy(() => import("../pages/Home/Home"));
const AboutUs = lazy(() => import("../pages/About/About"));
const Services = lazy(() => import("../pages/Services/Services"));
const Portfolio = lazy(() => import("../pages/Portfolio/Portfolio"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

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
      </Routes>
    </Suspense>
    <Footer />
  </Router>
);

export default AppRouter;
