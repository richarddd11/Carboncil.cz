import React from 'react';

const StorySection = () => {
  return (
    <section className="mx-4 story bg-black text-white pb-45 rounded-2xl overflow-hidden">
      {/* HEADER BANNER */}
      <div className="relative w-full h-72 sm:h-96">
  <img
    src="charcoalBg.png"
    alt="Pozadí uhlí"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="relative z-10 flex items-center justify-center h-full px-6">
    <p
      className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-thin qoute"
      style={{ opacity: 0.44 }}
    >
      „V jednoduchosti je krása. V čistotě síla. <span className="block md:inline">
      V Carboncilu obojí.“
    </span>
    </p>
  </div>
</div>


      {/* STORY GRID */}
      <div className="max-w-6xl mx-auto px-6 py-16 mt-5 space-y-16">
  {/* První řádek */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-35 items-center">
    {/* Text vlevo */}
    <div className="space-y-6">
      <p className="text-xl font-medium leading-relaxed">
        Všechno to začalo jedním grilováním, které se proměnilo v chemickou laboratoř.
      </p>
      <p className="text-xl font-medium leading-relaxed">
        Podpalovače, sirky, smrad, kouř, mastné ruce a nervy v kýblu. Až tehdy nám
        došlo, že uhlí si zaslouží upgrade.
      </p>
    </div>
    {/* Obrázek vpravo */}
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img
        src="smoke1.png"
        alt="Gril s kouřem"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>

  {/* Druhý řádek */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-35 items-center">
    {/* Text pod sebou na mobile, vpravo na desktopu */}
    <div className="space-y-6 order-1 md:order-2">
      <p className="text-xl font-medium leading-relaxed">
        Začali jsme hledat lepší cestu. Uhlí, které bude přírodní, jednoduché a bez zbytečností.
        A našli jsme ho ve Venezuele.
      </p>
      <p className="text-xl font-medium leading-relaxed">
        V zemi, kde dřevo roste silné a kde tradice spalování dává smysl. Odpadní dřevo jsme proměnili v uhlí.
      </p>
      <p className="text-xl font-medium leading-relaxed">
        A díky biolihu z obnovitelných zdrojů jsme ho naučili zapalovat se samo.
      </p>
    </div>
    {/* Obrázek pod textem na mobile, vlevo na desktopu */}
    <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
      <img
        src="man.png"
        alt="Les ve Venezuele"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</div>

    </section>
  );
};

export default StorySection;
