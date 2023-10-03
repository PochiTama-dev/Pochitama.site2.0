import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/About/About';
import Services from '../pages/Services/Services';
import Portfolio from '../pages/Portfolio/Portfolio';
import Contact from '../pages/Contact/Contact';
import Header from '../components/header/Header';
import Footer from "../components/footer/footer";

const AppRouter = () => (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sobre-nosotros" element={<AboutUs/>} />
      <Route path="/servicios" element={<Services/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/contacto" element={<Contact/>} />
    </Routes>
    <Footer/>
  </Router>
);

export default AppRouter;