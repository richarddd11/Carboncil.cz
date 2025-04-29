import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductSection = ({ showDetailButton = true, showHeading = true }) => {
  const navigate = useNavigate()

  return (
    <section className="productSection bg-black text-white py-10 mx-6 rounded-4xl px-6">
      <div className="max-w-8xl bg-black">

        {showHeading && (
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl text-[#A40C0B] font-bold mb-2">
              Objevte rozdíl
            </h2>
            <h3 className="text-white productHead text-4xl md:text-5xl font-medium">
              Tady začíná vaše čisté grilování.
            </h3>
          </div>
        )}

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-4xl w-full">

            {/* První produkt */}
            <div className="relative w-full product">
              {/* obrázek ve flow dává rodiči správnou výšku */}
              <img
                src="ProductBg.png"
                alt="pozadie produktu"
                className="w-full h-auto object-cover rounded-lg"
              />
              {/* overlay s obsahem */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div>
                  <img
                    src="carboncil.png"
                    alt="Carboncil 1,5kg"
                    className="w-90 mb-4 rounded-xl mx-auto object-contain"
                  />
                  <h3 className="text-[28px] product-h3 font-bold mb-2">Carboncil 1,5kg</h3>
                  <p className="text-base product-text text-[#696969] mb-4">
                    Kompaktní balení ekologického uhlí vhodné pro menší grilování nebo jako vzorek pro ty, kteří chtějí Carboncil poprvé vyzkoušet.
                  </p>
                </div>
                {showDetailButton && (
                  <button onClick={() => navigate('/uhlie')}
                    className="absolute bottom-0 right-0 text-white bg-[#A40C0B] w-[12%] h-[9%] rounded-lg flex items-center justify-center transform transition-transform duration-200 hover:scale-125"
                    aria-label="Detail produktu"
                  >
                    <img src="Arrow1.png" alt="Arrow" className="w-10" />
                  </button>
                )}
              </div>
            </div>

            {/* Druhý produkt */}
            <div className="relative w-full product">
              <img
                src="ProductBg.png"
                alt="pozadie produktu"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div>
                  <img
                    src="topQuality.png"
                    alt="Top Quality 10kg"
                    className="w-90 mb-4 rounded-xl mx-auto object-contain"
                  />
                  <h3 className="text-[28px] font-bold product-h3 mb-2">Top Quality 15kg</h3>
                  <p className="text-base product-text text-[#696969] mb-4">
                    Velké ekonomické balení vysoce výhřevného uhlí z Venezuely pro pravidelné grilování bez kouře, zápachu a nečistot.
                  </p>
                </div>
                {showDetailButton && (
                  <button onClick={() => navigate('/uhlie')}
                    className="absolute bottom-0 right-0 text-white bg-[#A40C0B] w-[12%] h-[9%] rounded-lg flex items-center justify-center transform transition-transform duration-200 hover:scale-125"
                    aria-label="Detail produktu"
                  >
                    <img src="Arrow1.png" alt="Arrow" className="w-10" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
