import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Spoločná logika pre výber tried podľa toho, či je link aktívny
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive ? 'text-[#A40C0B]' : 'text-black'
    }`;

  // Špeciálna logika pre Kontakt tlačidlo
  const contactClass = ({ isActive }) =>
    `text-sm font-medium px-6 py-2 rounded-full transition flex items-center justify-center  ${
      isActive
        ? 'bg-[#A40C0B] text-white'
        : 'bg-black text-white hover:bg-[#A40C0B]'
    }`;

  return (
    <div className="fixed top-0 bg-white z-50 w-full">
      <div className="nav shadow-md w-full max-w-8xl mx-auto flex items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex-shrink-0">
          <img src="Logo.png" alt="Carboncil" className="h-8" />
        </NavLink>

        {/* Desktop navigácia */}
        <nav className="hidden min-[799px]:flex gap-6">
          <NavLink to="/" end className={linkClass}>
            Domov
          </NavLink>
          <NavLink to="/o-nas" className={linkClass}>
            O nás
          </NavLink>
          <NavLink to="/uhlie" className={linkClass}>
            Uhlie
          </NavLink>
        </nav>

        {/* Mobilné ovládanie + Kontakt */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="min-[799px]:hidden p-2 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <NavLink to="/kontakt" className={contactClass}>
            Kontakt
          </NavLink>
        </div>
      </div>

      {/* Mobilné menu */}
      <div
        className={`absolute z-50 top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 transition-all duration-300 transform overflow-hidden min-[799px]:hidden ${
          isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
        }`}
      >
        <nav className="flex flex-col gap-4">
          <NavLink
            to="/"
            end
            onClick={() => setIsOpen(false)}
            className={linkClass}
          >
            Domov
          </NavLink>
          <NavLink
            to="/o-nas"
            onClick={() => setIsOpen(false)}
            className={linkClass}
          >
            O nás
          </NavLink>
          <NavLink
            to="/uhlie"
            onClick={() => setIsOpen(false)}
            className={linkClass}
          >
            Uhlie
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
