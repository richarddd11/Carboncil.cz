import React from 'react'
import './App.css'

import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import ProductSection from './components/ProductSection'
import FamilySection from './components/FamilySection'
import AboutUs from './components/AboutUs'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ProductSection />
      <FamilySection />
      <AboutUs />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default App
