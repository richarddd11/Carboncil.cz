import React from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import FaqSection from '../components/FaqSection';
import FamilySection from '../components/FamilySection';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const HomePage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Iba na úvodnej stránke bez lomítka na konci
    if (location.pathname === '/Carboncil.cz') {
      navigate('/Carboncil.cz/', { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
    <HeroSection />
    <ProductSection showDetailButton={true} />
    <FamilySection />
    <AboutUs />
    <FaqSection />
  </>
  )
}

export default HomePage