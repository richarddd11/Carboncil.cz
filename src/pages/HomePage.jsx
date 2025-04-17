import React from 'react'
import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import FaqSection from '../components/FaqSection';
import FamilySection from '../components/FamilySection';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const HomePage = () => {
  return (
    <>
    <NavBar />
    <HeroSection />
    <ProductSection />
    <FamilySection />
    <AboutUs />
    <FaqSection />
  </>
  )
}

export default HomePage