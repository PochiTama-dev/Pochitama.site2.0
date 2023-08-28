import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/About/About';
import Services from '../pages/Services/Services';
import Portfolio from '../pages/Portfolio/Portfolio';
import Contact from '../pages/Contact/Contact';

const AppRouter = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/sobre-nosotros" element={<AboutUs/>} />
        <Route path="/servicios" element={<Services/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contacto" element={<Contact/>} />
      </Routes>
    </div>
  </Router>
);

export default AppRouter;