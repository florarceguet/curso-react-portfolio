import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ContactUs } from '../ContactUs';
import { Curriculum } from '../Curriculum';
import { PageIndex } from '../Index';
import { FooterNav } from '../layout/FooterNav';
import { HeaderNav } from '../layout/HeaderNav';
import { Portfolio } from '../Portfolio';
import { Services } from '../Services';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/* HEADER Y NAVEGACIÓN */}
      <HeaderNav></HeaderNav>
      {/* CONTENIDO CENTRAL */}
      <section className="main-content">
        <Routes>
          <Route path="/" element={<PageIndex />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/curriculum" element={<Curriculum />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </section>
      {/* FOOTER */}
      <FooterNav></FooterNav>
    </BrowserRouter>
  );
};
