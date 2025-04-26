import React from 'react'
import NavBar from '../components/NavBar'
import ProductSection from '../components/ProductSection'
import CharcoalInfoSection from '../components/CharcoalSection'
import BiolihSectionMobile from '../components/BiolihSectionMobile'
import CharcoalVariantsSectionMobile from '../components/CharcoalVariantsSectionMobile'
import FaqSection from '../components/FaqSection';
import Coal from '../components/Coal'

const ProductPage = () => {
  return (
    <div className='mt-30 productPage'>
      
     <ProductSection showDetailButton={false} showHeading={true} />
     <CharcoalInfoSection />
     <Coal />
     <BiolihSectionMobile />
     <CharcoalVariantsSectionMobile />
     <FaqSection customClass="w-[96%]" noTopRadius={true} />
    </div>
  )
}

export default ProductPage