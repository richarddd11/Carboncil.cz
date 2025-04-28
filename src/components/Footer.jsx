import React from 'react'

const Footer = () => {
  return (
    <footer className="relative footer1 bg-black text-white mx-4 mx-auto w-[97%] px-6 pt-20 pb-20 mb-5 rounded-4xl overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-2 text-sm md:text-base">
        <p className="text-center text-sm font-medium mb-4 md:mb-0">Uhlí, které griluje chytře.</p>
        <nav className="flex flex-wrap justify-center gap-15 text-sm font-medium">
        <a href="#" className="hover:text-gray-400 transition">Domov</a>
            <a href="/o-nas" className="hover:text-gray-400 transition">O nás</a>
            <a href="/uhlie" className="hover:text-gray-400 transition">Uhlie</a>
            <a href="/kontakt" className="hover:text-gray-400 transition">Kontakt</a>
        </nav>
      </div>
      <div className="flex justify-between items-center px-2">
        <img src="HeroLogo.png" alt="Logo" className="h-6" />
        <p className="text-[#696969] text-xs font-medium">Copyright © 2025 Carboncil</p>
      </div>
    </footer>
  )
}

export default Footer;
