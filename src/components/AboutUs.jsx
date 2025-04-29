import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate()
  return (
    <section className="relative mx-auto my-12 px-6 max-w-[1324px]">
      <div className="relative w-full">
        <picture>
          <source media="(max-width:600px)" srcSet="AboutMob.png" />
          <img
            src="Subtract.png"
            alt="O nás pozadie"
            className="w-full h-auto rounded-xl object-cover"
          />
        </picture>

        {/* Tabka „O nás“ */}
        <div
          className="absolute font-bold text-[#A40C0B] about-us"
          style={{ top: '4%', left: '1%' }}
        >
          O nás
        </div>

        {/* Textový blok */}
        <div
          className="absolute text-black text-div"
          style={{ top: '17%', left: '5%', right: '5%' }}
        >
          <p className="mb-7 text-2xl about-text about1 leading-relaxed">
          Za značkou Carboncil.cz stojí tým nadšenců do kvalitního a udržitelného grilování. Když jsme poprvé objevili uhlí Carboncil ve Venezuele, věděli jsme, že máme v rukou něco výjimečného. Uhlí, které se rozžhaví za minutu, nekouří, nepáchne a přitom je vyrobené čistě z přírody.
          </p>
          <p className="text-2xl about-text leading-relaxed">
          Naším cílem je přinést do Česka novou generaci grilování. Takovou, kde se nemusíte hádat se sousedy kvůli kouři, zapalovat uhlí půl hodiny, nebo se bát, co vlastně dýcháte. Carboncil je uhlí pro lidi, kteří chtějí víc čistotu, kvalitu a pohodu.
          </p>
        </div>

        {/* Tlačidlo */}
        <div
          className="absolute about-btn"
          style={{ bottom: '0%', right: '0%', width: '5%', height: '16%' }}
        >
          <button onClick={() => navigate('/o-nas')}
            className="w-full h-full bg-black flex items-center justify-center rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105"
            aria-label="Viac o nás"
          >
            <img src="Arrow1.png" alt=">" className="w-10 h-10" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
