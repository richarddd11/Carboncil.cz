import React from 'react';

const CharcoalVariantsSection = () => {
  return (
    <section className="w-[95%] mx-auto bg-black text-white relative overflow-hidden">
      {/* Family obrazok hore */}
      <div className="relative w-screen left-1/2 -translate-x-1/2">
        <img
          src="/ProductPage/Family.png"
          alt="Rodina pri grilovaní"
          className="w-full object-cover"
        />
      </div>

      {/* Varianty uhlia */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-20">
        {/* Ľavá strana – variant 1 */}
        <div className="flex flex-col items-start space-y-6">
          <h3 className="text-lg font-bold">Carboncil 1,5kg</h3>
          <p className="text-gray-300 text-sm leading-relaxed max-w-md">
            Ideální pro menší gril nebo rychlé grilování s rodinou. Rozhoří se za pár minut, bez kouře a bez chemie. Praktické balení, které se hodí na každý výlet.
          </p>
          <div className="w-[80px]">
            <img
              src="/ProductPage/L.png"
              alt="L veľkosť"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="carboncil.png"
            alt="Carboncil 1,5kg"
            className="w-[180px] h-auto object-contain"
          />
        </div>

        {/* Pravá strana – variant 2 */}
        <div className="flex justify-center order-4 md:order-none">
          <img
            src="carbonito.png"
            alt="Top Quality 15kg"
            className="w-[180px] h-auto object-contain"
          />
        </div>

        <div className="flex flex-col items-start space-y-6">
          <h3 className="text-lg font-bold">Top Quality 15kg</h3>
          <p className="text-gray-300 text-sm leading-relaxed max-w-md">
            Velké balení pro náročné grilování nebo profesionální použití. Výdrž, výkon a pohodlí při manipulaci – vše, co potřebujete pro pořádný grilovací zážitek bez starostí.
          </p>
          <div className="w-[100px]">
            <img
              src="/ProductPage/XXL.png"
              alt="XXL veľkosť"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharcoalVariantsSection;
