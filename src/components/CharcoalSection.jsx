import React from "react";

const features = [
  {
    title: "Přírodní udržitelnost",
    text: `Naše uhlí pochází z Venezuely, země s bohatými lesními zdroji, kde se těží v souladu s přísnými principy udržitelnosti. Využíváme výhradně dřevěný odpad z certifikovaných zdrojů, který by jinak zůstal nevyužitý.`,
    image: "Coal1.png",
    alt: "Uhlí a venezuelská vlajka",
    showFlag: true,
    desktopTextFirst: true,
  },
  {
    title: "Žádná chemie",
    text: `Každý kus uhlí Carboncil je vyroben bez použití ropných derivátů, chemických podpalovačů nebo jiných syntetických látek. Výsledkem je čistý přírodní produkt, který hoří rovnoměrně, produkuje minimum kouře a nezanechává v jídle nepříjemný zápach.`,
    image: "Coal2.png",
    alt: "Čisté uhlí",
    showFlag: false,
    desktopTextFirst: false,
  },
  {
    title: "Okamžité zapálení",
    text: `Jedinečnou výhodou Carboncilu je jeho samozápalná schopnost. Díky přírodnímu biolihu je příprava grilu jednodušší než kdy dřív – bez nutnosti použít podpalovač, papír nebo sirky. Stačí škrtout a oheň je na světě.`,
    image: "Coal3.png",
    alt: "Zápalné uhlí",
    showFlag: false,
    desktopTextFirst: true,
  },
];

const CharcoalInfoSection = () => {
  return (
    <section className="productSec max-w-6xl mx-auto px-6 py-16 space-y-28">
      {features.map((item, index) => {
        const textOrder = item.desktopTextFirst
          ? "order-2 md:order-1"
          : "order-2 md:order-2";

        const imageOrder = item.desktopTextFirst
          ? "order-1 md:order-2"
          : "order-1 md:order-1";

        return (
          <div
            key={index}
            className="grid grid-cols-1 charcoal-pr md:grid-cols-2 gap-10 items-center"
          >
            {/* Image */}
            <div className={`relative flex justify-center ${imageOrder}`}>
              <img
                src={item.image}
                alt={item.alt}
                className="max-w-full h-auto object-contain"
              />
              {item.showFlag && (
                <img
                  src="Flag.png"
                  alt="Venezuelská vlajka"
                  className="absolute top-2 right-2 w-[85px] h-auto max-w-none"
                />
              )}
            </div>

            {/* Text */}
            <div className={`${textOrder}`}>
              <h2 className="text-3xl font-extrabold w-3/4 text-[#A40C0B] mx-auto mb-4">
                {item.title}
              </h2>
              <p className="text-[#696969] font-medium w-3/4 mx-auto text-lg leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CharcoalInfoSection;
