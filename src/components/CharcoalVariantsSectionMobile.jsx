import React from 'react';

const CharcoalVariantsSectionMobile = () => {
  return (
    <section className="w-full mx-auto bg-black text-white relative overflow-visible">
      {/* Varianty uhlia + Family obrazok + Uhlie */}
      <div className="relative w-full">
        {/* Family background */}
        <picture>
  <source media="(max-width: 768px)" srcSet="familyMobil.png" />
  <img
    src="Family1.png"
    alt="Rodina pri grilovaní"
    className="w-full"
  />
</picture>


        {/* Grid variantov uhlia */}
<div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-20 grid md:grid-cols-2 gap-30">
  {/* Ľavá strana – variant 1 */}
  <div className="flex flex-col justify-center space-y-4">
    <h3 className="text-2xl font-bold">Carboncil 1,5kg</h3>
    <p className="text-[#696969] font-medium text-lg leading-relaxed max-w-md">
      Ideální pro menší gril nebo rychlé grilování s rodinou. Rozhoří se za pár minut, bez kouře a bez chemie.
      Praktické balení, které se hodí na každý výlet.
    </p>
  </div>

  <div className="flex flex-col items-center justify-center space-y-3">
    <img
      src="carboncil.png"
      alt="Carboncil 1,5kg"
      className="w-[313px] h-auto object-contain"
    />
    <img
      src="L.png"
      alt="Veľkosť L"
      className="w-[50px] h-auto object-contain"
    />
  </div>

  {/* Pravá strana – variant 2 */}
  <div className="flex flex-col items-center justify-center space-y-3 order-4 md:order-none">
    <img
      src="carbonito.png"
      alt="Top Quality 15kg"
      className="w-[313px] h-auto object-contain"
    />
    <img
      src="XXL.png"
      alt="Veľkosť XXL"
      className="w-[200px] h-auto object-contain"
    />
  </div>

  <div className="flex flex-col justify-center space-y-4">
    <h3 className="text-2xl font-bold">Top Quality 15kg</h3>
    <p className="text-[#696969] font-medium text-lg leading-relaxed max-w-md">
      Velké balení pro náročné grilování nebo profesionální použití. Výdrž, výkon a pohodlí při manipulaci – vše, co
      potřebujete pro pořádný grilovací zážitek bez starostí.
    </p>
  </div>
</div>

{/* Dve dolné fotky */}
<div className="grid md:grid-cols-2 grid-cols-1 w-full h-[483px] gap-0">
  <div className="w-full h-full overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
    <img
      src="Family2.png"
      alt="Ľavý gril"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="w-full h-full overflow-hidden rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
    <img
      src="Family3.png"
      alt="Pravý gril"
      className="w-full h-full object-cover"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default CharcoalVariantsSectionMobile;
