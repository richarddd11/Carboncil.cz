import React from 'react';

const ProductSection = ({ showDetailButton = true, showHeading = true }) => {
  return (
    <section className="productSection bg-black text-white py-10 mx-8 rounded-4xl px-6">
      <div className="max-w-8xl pl-5 bg-black">

        {showHeading && (
          <div className="text-center mb-3">
            <h2 className="text-4xl md:text-5xl text-[#A40C0B] font-bold mb-2">Objevte rozdíl</h2>
            <h3 className="text-white text-4xl md:text-5xl font-medium">Tady začíná vaše čisté grilování.</h3>
          </div>
        )}

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-4xl w-full">

            {/* První produkt */}
            <div className="relative flex flex-col py-3 items-start">
              {/* Pozadie podľa designu */}
              <img
                src="ProductBg.png"
                alt="pozadie produktu"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <div className="relative product p-6 flex flex-col">
                <img
                  src="carboncil.png"
                  alt="Carboncil 1,5kg"
                  className="w-90 mb-4 rounded-xl mx-auto object-contain"
                />
                <h3 className="text-2xl font-bold mb-2">Carboncil 1,5kg</h3>
                <p className="text-base text-[#696969] mb-4">
                Kompaktní balení ekologického uhlí vhodné pro menší grilování nebo jako vzorek pro ty, kteří chtějí Carboncil poprvé vyzkoušet.
                </p>
                {showDetailButton && (
                  <button
                    className="text-white bg-[#A40C0B] w-12 h-12 rounded-lg absolute bottom-[-12px] right-0 flex items-center justify-center hover:bg-red-700 transition"
                    aria-label="Detail produktu"
                  >
                    <img src="Arrow1.png" alt="Arrow" className='w-10' />
                  </button>
                )}
              </div>
            </div>

            {/* Druhý produkt */}
            <div className="relative  flex flex-col py-3 items-start">
              {/* Pozadie podľa designu */}
              <img
                src="ProductBg.png"
                alt="pozadie produktu"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <div className="relative product p-6 flex flex-col">
                <img
                  src="topQuality.png"
                  alt="Top Quality 10kg"
                  className="w-90 mb-4 rounded-xl mx-auto object-contain"
                />
                <h3 className="text-2xl font-bold mb-2">Top Quality 10kg</h3>
                <p className="text-base text-[#696969] mb-4">
                  Velké ekonomické balení vysoce výhřevného uhlí z Venezuely
                  pro pravidelné grilování bez kouře, zápachu a nečistot.
                </p>
                {showDetailButton && (
                  <button
                    className="text-white bg-[#A40C0B] w-12 h-12 rounded-lg absolute bottom-[-12px] right-0 flex items-center justify-center hover:bg-red-700 transition"
                    aria-label="Detail produktu"
                  >
                    <img src="Arrow1.png" alt="Arrow" className='w-10' />
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