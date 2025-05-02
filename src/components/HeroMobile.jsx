import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const HeroMobile = () => {
  const navigate = useNavigate()

  return (
  <div className="md:hidden heroMobile hero bg-white px-6 py-5 mt-20">
    {/* Nadpis */}
    <h1 className="text-3xl font-bold text-black leading-tight">
      Revoluční uhlí z Venezuely.<br />
      <span className="text-[#A40C0B] font-extrabold">Rožhaví se za 60 sekund.</span>
    </h1>

    {/* Podnadpis */}
    <p className="text-[#696969]  mt-4">
      Už žádné složité zapalování, špinavé ruce a dým, který vám kazí chuť k jídlu. Carboncil je 100% přírodní grilovací uhlí – ideální na zahradě, balkoně i v profesionální kuchyni.
    </p>

    {/* Obrázok uhlí s tlačidlami vo vyrezanom otvore */}
    <div className="relative w-full mt-8">
      <img
        src="LavaMobile.png"
        alt="Uhlí"
        className="w-full object-cover rounded-2xl"
      />

      {/* Tlačidlá vo vyrezanom otvore obrázka */}
      <div className="buttons absolute top-2 left-O flex items-center p-1">
        <button onClick={() => navigate('/uhlie')} className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 transform transition-transform duration-200 hover:scale-105 cursor-pointer">
          Produkty <img src="Arrow.png" alt="" className="w-4 h-4" />
        </button>
        <Link to="/kontakt" className="underline px-6 py-3 rounded-full hover:text-[#A40C0B] transition">
  Kontakt
</Link>
      </div>

      {/* Čierna šípka */}
      <div className="absolute bottom-0 right-0 h-2/12 w-95/550 bg-black text-white text-xl p-3 rounded-xl shadow-md flex items-center justify-center">
      <Link to="/uhlie"><img src="Arrow1.png" alt="Arrow" className='w-16' /></Link>
</div>
    </div>

    {/* Benefity */}
    <div className="grid grid-cols-3 gap-4 text-center pt-12 mb-10">
      <div className="flex flex-col items-center">
        <img src="smoke.png" alt="Bez kouře" className="h-8 mb-5" />
        <p className="text-sm font-medium">Bez kouře</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="Tree.png" alt="Přírodní" className="h-8 mb-5" />
        <p className="text-sm font-medium">100 % přírodní</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="balcony.png" alt="Vhodné na balkon" className="h-8 mb-5" />
        <p className="text-sm font-medium">Vhodné na balkon</p>
      </div>
    </div>
  </div>
  )
}

export default HeroMobile;
