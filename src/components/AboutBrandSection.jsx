import React from 'react';

const AboutBrandSection = () => {
  return (
    <section className="max-w-[1520px] mx-auto px-6 py-20 space-y-32">
      {/* Horný blok */}
      <div className="grid md:grid-cols-2 gap-15 items-center">
        {/* Obrázok */}
        <div className="rounded-[30px] overflow-hidden max-w-lg mx-auto">
          <img
            src="Dalibor.png"
            alt="Muž s uhlím"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text */}
        <div className="space-y-6 max-w-2xl mx-auto">
          <p className="text-[#A40C0B] text-base md:text-lg font-bold">O nás</p>
          <p className="text-lg font-medium text-[#696969]">Za značkou Carboncil stojí jednoduchá myšlenka.</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#A40C0B] leading-snug">
            Udělat z grilování čistý,<br />
            pohodlný a přírodní zážitek.
          </h2>
          <p className="text-[#696969] text-xl max-w-md font-medium leading-relaxed">
            Uhlí jsme posunuli do 21. století, bez zbytečného kouře, bez zápachu, bez chemie.
            Naše samozápalné uhlí z Venezuely vzniká z dřevěného odpadu z certifikovaných
            lesů a díky impregnaci biolihem se rozhoří samo – rychle, bezpečně a bez podpalovačů.
          </p>
        </div>
      </div>

      {/* Spodný blok */}
      <div className="grid md:grid-cols-2 gap-18 items-center">
        {/* Text */}
        <div className="space-y-6 max-w-md mx-auto">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#A40C0B]">
            Věříme, že i malý oheň může mít velký smysl.
          </h3>
          <p className="text-[#696969] font-medium text-lg leading-relaxed">
            Proto vyrábíme uhlí, které respektuje přírodu, tvoje plíce i tvůj čas.
          </p>
        </div>

        {/* Obrázok */}
        <div className="rounded-[30px] overflow-hidden max-w-lg mx-auto">
          <img
            src="Coal5.png"
            alt="Žeravé uhlie"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutBrandSection;
