import React from 'react'

const AboutUs = () => {
  return (
      <section className='relative max-w-5xl mx-auto' >
    
      <div className="about-bg relative bg-contain bg-center bg-no-repeat mx-auto mt-20 mb-15 px-6 p-23 rounded-xl">
         <div className='about absolute left-1/130 top-1/27'>
              <p className="text-[#A40C0B] text-xs about-p">O nás</p>
         </div>

      <p className="mb-4">
        Za značkou Carboncil.cz stojí tým nadšenců do kvalitního a 
        udržitelného grilování. Když jsme poprvé objevili uhlí Carboncil
        ve Venezuele, věděli jsme, že máme v rukou něco výjimečného. 
        Uhlí, které se rozžhaví za minutu, nekouří, nepáchne a přitom je 
        vyrobené čistě z přírody.
      </p>
      
      <p className="mb-0 leading-relaxed">
        Naším cílem je přinést do Česka novou generaci grilování. Takovou, 
        kde se nemusíte hádat se sousedy kvůli kouři, zapalovat uhlí půl 
        hodiny, nebo se bát, co vlastně dýcháte. Carboncil je uhlí pro lidi, 
        kteří chtějí čistotu, kvalitu a pohodu.
      </p>
      <div className='wrapper-btn absolute bottom-0 right-0'>
      <div className="about-btn bg-black w-14 h-14 rounded-lg relative">
  <button className="absolute inset-0 flex items-center justify-center">
    <img src="Arrow.png" alt="Arrow" />
  </button>
</div>
      </div>
      </div>
      
  </section>
  )
}

export default AboutUs