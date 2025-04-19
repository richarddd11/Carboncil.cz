import React from 'react';

const features = [
    {
      title: 'Přírodní udržitelnost',
      text: `Naše uhlí pochází z Venezuely, země s bohatými lesními zdroji, kde se těží v souladu s přísnými principy udržitelnosti. Využíváme výhradně dřevěný odpad z certifikovaných zdrojů, který by jinak zůstal nevyužitý.`,
      image: '/ProductPage/Coal1.png',
      alt: 'Uhlí a venezuelská vlajka',
      showFlag: true,
      desktopTextFirst: true,
    },
    {
      title: 'Žádná chemie',
      text: `Každý kus uhlí Carboncil je vyroben bez použití ropných derivátů, chemických podpalovačů nebo jiných syntetických látek. Výsledkem je čistý přírodní produkt, který hoří rovnoměrně, produkuje minimum kouře a nezanechává v jídle nepříjemný zápach.`,
      image: '/ProductPage/Coal2.png',
      alt: 'Čisté uhlí',
      showFlag: false,
      desktopTextFirst: false,
    },
    {
      title: 'Okamžité zapálení',
      text: `Jedinečnou výhodou Carboncilu je jeho samozápalná schopnost. Díky přírodnímu biolihu je příprava grilu jednodušší než kdy dřív – bez nutnosti použít podpalovač, papír nebo sirky. Stačí škrtout a oheň je na světě.`,
      image: '/ProductPage/Coal3.png',
      alt: 'Zápalné uhlí',
      showFlag: false,
      desktopTextFirst: true,
    },
  ];
  

const CharcoalInfoSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-28">
      {features.map((item, index) => {
        const textOrder = item.desktopTextFirst
          ? 'order-2 md:order-1'
          : 'order-2 md:order-2';

        const imageOrder = item.desktopTextFirst
          ? 'order-1 md:order-2'
          : 'order-1 md:order-1';

        return (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
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
                  src="/ProductPage/Flag.png"
                  alt="Venezuelská vlajka"
                  className="absolute top-2 right-2 w-[64px] h-auto max-w-none"
                />
              )}
            </div>

            {/* Text */}
            <div className={`${textOrder}`}>
              <h2 className="text-2xl font-bold text-red-700 mb-4">{item.title}</h2>
              <p className="text-gray-700 text-base leading-relaxed">{item.text}</p>
            </div>
          </div>
        );
      })}

      <div className='w-full mx-auto'>
        <img src="/ProductPage/Coal4.png" alt="" />
      </div>

      <div className="benefits mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
              <img src="Tree.png" alt="Ikona strom" className="h-8 mb-2" />
              <p className="text-sm font-medium">100 % přírodní</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="smoke.png" alt="Ikona bez kouře" className="h-8 mb-2" />
              <p className="text-sm font-medium">Bez kouře, bez zápachu</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="balcony.png" alt="Ikona balkón" className="h-8 mb-2" />
              <p className="text-sm font-medium">Vhodné i na balkonové grily</p>
            </div>
          </div>
    </section>
  );
};

export default CharcoalInfoSection;
