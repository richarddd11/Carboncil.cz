import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';

const ProtectedApp = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/o-nas" element={<AboutPage />} />
      <Route path="/uhlie" element={<ProductPage />} />
      <Route path="/kontakt" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>
);

export default ProtectedApp;
