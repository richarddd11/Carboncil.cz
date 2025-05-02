import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero bg-white mt-10 px-6 py-16 md:py-24">

        
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT - Textová časť */}
        <div>
          <h1 className="text-4xl w-full max-[768px]:text-center md:text-[47px] font-bold text-black leading-tight">
            Revoluční uhlí z Venezuely.<br />
            <span className="text-[#A40C0B] redSpan font-extrabold">Rožhaví se za 60 sekund.</span>
          </h1>

          <p className="text-[#696969] mt-6 w-full max-[768px]:mx-auto">
            Už žádné složité zapalování, špinavé ruce a dým, který vám kazí chuť
            k jídlu. Carboncil je 100% přírodní grilovací uhlí, ať už na zahradě,
            balkoně nebo v profesionální kuchyni.
          </p>

          {/* Buttons */}
          <div className="flex max-[768px]:justify-center gap-4 mt-8">
            <button onClick={() => navigate('/uhlie')} className="bg-black text-white px-10 py-3 rounded-full flex items-center gap-2 transform transition-transform duration-200 hover:scale-105 cursor-pointer">
              Produkty <span><img src="Arrow.png" alt="" /></span>
            </button>
            <Link to="/kontakt" className="underline px-6 py-3 rounded-full hover:text-[#A40C0B] transition">
  Kontakt
</Link>
          </div>

          {/* Benefity */}
          <div className="benefits mt-20 grid grid-cols-3 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
              <img src="Tree.png" alt="Ikona strom" className="h-11 mb-7" />
              <p className="text-sm font-medium">100 % přírodní</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="smoke.png" alt="Ikona bez kouře" className="h-11 mb-7" />
              <p className="text-sm font-medium">Bez kouře</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="balcony.png" alt="Ikona balkón" className="h-11 mb-7" />
              <p className="text-sm font-medium">Vhodné na balkon</p>
            </div>
          </div>
        </div>

        {/* RIGHT - Obrázok uhlia + značky */}
        <div className="relative w-full max-w-[550px] mx-auto">
          <img
            src="MaskGroup.png"
            alt="Uhlie"
            className="w-full clip-arrow object-cover rounded-2xl"
          />

          {/* Červený štítok */}
          <div className="absolute top-0 h-2/9 w-133/550 left-0 bg-red-700 text-white font-semibold  py-10  rounded-xl shadow-md">
            <img className='w-110/125 absolute left-1/12 top-48/125' src="HeroLogo.png" alt="" />
          </div>

          {/* Čierna šípka */}
          <div className="absolute bottom-0 right-0 h-2/9 w-133/550 bg-black text-white text-xl p-3 rounded-xl shadow-md flex items-center justify-center">
  <Link to="/uhlie"><img src="Arrow1.png" alt="Arrow" className='w-16' /></Link>
</div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
