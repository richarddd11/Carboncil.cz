import React from 'react';

const BiolihSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-24 space-y-28 relative z-0">
      {/* 1. Sekcia: uhlie + biolih */}
      <div className="grid  md:grid-cols-2 items-center gap-12">
        {/* Text vľavo */}
        <div>
          <h2 className="text-2xl font-bold text-red-700 mb-4">Biolih</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Unikátní samozápalný efekt umožňuje impregnace biolihu, který pochází z obnovitelných přírodních zdrojů. Nezanechává zápach, neuvolňuje škodlivé látky a zaručuje maximální pohodlí při zapalování. Díky tomu je Carboncil nejen efektivní, ale také bezpečný pro vaši rodinu i přírodu.
          </p>
        </div>

        {/* Obrázok vpravo */}
        <div className="flex justify-center">
          <img
            src="/ProductPage/Biolih1.png"
            alt="Uhlie"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* 2. Sekcia: uhlí které dává smysl + uhlie na bielom pozadí */}
      <div className="relative z-10 grid md:grid-cols-2 items-center gap-12">
        {/* Text vľavo */}
        <div>
          <h2 className="text-2xl font-bold text-red-700 mb-4">Uhlí, které dává smysl</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Pokud hledáš způsob, jak si užít skvělé jídlo, přírodu a zároveň přispět k udržitelnějšímu světu, Carboncil je uhlí, které spojuje všechny tyto hodnoty v jednom balení.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Carboncil rozsvítí tvé grilování novým způsobem, s respektem k přírodě, s jednoduchostí a bez kompromisů. Vyzkoušej rozdíl, který dává smysl.
          </p>
        </div>

        <div className="relative h-[0px]">
    <div className="absolute right-4 md:right-12 bottom-[-100px] md:bottom-[-140px] z-30 w-[260px] md:w-[320px]">
      <img
        src="/ProductPage/CoalBg.png"
        alt="Pozadie kruh"
        className="w-full h-auto object-contain"
      />
      <img
        src="/ProductPage/carboncilCoal.png"
        alt="Balenie uhlia"
        className="absolute top-1/2 left-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  </div>

      </div>

    </section>
  );
};

export default BiolihSection;
