import React from 'react'
import NavBar from '../components/NavBar'
import ProductSection from '../components/ProductSection'
import CharcoalInfoSection from '../components/CharcoalSection'
import BiolihSection from '../components/BiolihSection'
import CharcoalVariantsSection from '../components/CharcoalVariantsSection'

const ProductPage = () => {
  return (
    <div className='mt-10'>
     <ProductSection showDetailButton={false} showHeading={false} />
     <CharcoalInfoSection />
     <BiolihSection />
     <CharcoalVariantsSection />
    </div>
  )
}

export default ProductPage