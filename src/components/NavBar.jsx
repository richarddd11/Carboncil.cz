import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Obalíme do relative, aby absolútne menu bolo pozicionované podľa tohto kontajnera
    <div className="relative">
      <div className="nav shadow-md mx-auto flex items-center justify-between px-6 py-4">
        <img className="lg:ml-10" src="Logo.png" alt="Carboncil" />

        {/* Desktop navigácia */}
        <nav className="font-inter hidden min-[799px]:flex gap-6 text-sm font-medium text-black">
          <a href="#">Domov</a>
          <a href="#">O nás</a>
          <a href="#">Carboncil</a>
          <a href="#">Carbonito</a>
          <a href="#">Top Quality</a>
          <a href="#">Kontakt</a>
        </nav>

        {/* Spoločný kontajner pre mobilné ovládacie prvky (hamburger, lupa, Kontakt) */}
        <div className="flex items-center gap-4 lg:mr-15">
          {/* Hamburger – zobrazený iba na mobilnom zobrazení */}
          <div className="min-[799px]:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          {/* Lupa */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <img src="Lupa.png" alt="search" className="w-7 h-7" />
          </button>
          {/* Kontakt – zobrazí sa v oboch zobrazeniach */}
          <button className="bg-black text-white text-sm px-8 py-2 rounded-full hover:bg-gray-800 transition">
            Kontakt
          </button>
        </div>
      </div>

      {/* Mobilné menu – absolútne poziciované, centrované a s vysokým z-indexom */}
      {/* Menu je stále renderované a jeho viditeľnosť sa mení pomocou tried */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 transition-all duration-300 transform overflow-hidden md:hidden ${
          isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
        }`}
      >
        <nav className="flex flex-col gap-4">
          <a href="#" onClick={() => setIsOpen(false)}>Domov</a>
          <a href="#" onClick={() => setIsOpen(false)}>O nás</a>
          <a href="#" onClick={() => setIsOpen(false)}>Carboncil</a>
          <a href="#" onClick={() => setIsOpen(false)}>Carbonito</a>
          <a href="#" onClick={() => setIsOpen(false)}>Top Quality</a>
          <a href="#" onClick={() => setIsOpen(false)}>Kontakt</a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
