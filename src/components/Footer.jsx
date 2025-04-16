import React from 'react'

const Footer = () => {
  return (
    <footer className='px-5  2xl:max-w-410  h-90 mb-20 pt-20  mx-auto bg-black rounded-b-2xl'>
            
        <div className="flex flex-col justify-between sm:flex-row  py-4 px-2 text-sm md:text-base">
          
            <div>
                <p className='mt-4 text-white'>Uhlí, které griluje chytře.</p>
            </div>

            <nav className="flex items-end float-right text-right text-base gap-10 mb-5 sm:mb-0">
            <a href="#" className="text-white hover:text-gray-300 transition">
              O nás
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition">
              Carboncil
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition">
              Kontakt
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition">
              Carbonito
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition">
              Top Quality
            </a>
          </nav>

          </div>
          <div className='flex flex-row justify-between'>
                <img className='pl-2'  src="HeroLogo.png" alt="" />
                <p className="text-gray-400">© 2025 Carboncil</p>
          </div>


          
        </footer>
  )
}

export default Footer