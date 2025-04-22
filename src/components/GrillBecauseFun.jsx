import React from 'react';

const GrillBecauseFun = () => {
  return (
    <section className="bg-white relative overflow-visible">
      <div className="max-w-7xl mx-auto px-6 md:px-0 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Text vystředěný nahoru */}
          <div className="flex items-center mb-20">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#A40C0B]">
                Grilujeme, protože nás to baví.
              </h2>
              <p className="text-[#696969] text-lg font-medium leading-relaxed">
                A protože věříme, že i tak obyčejná věc<br/>
                jako uhlí může být neobyčejně chytrá.
              </p>
            </div>
          </div>

          {/* Wrapper obrázku */}
          <div className="relative h-[552px] overflow-visible">
            <img
              src="Coal6.png"
              alt="Padající uhlí"
              className="absolute top-0 right-0 w-[800px] max-w-none object-contain -mt-58"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default GrillBecauseFun;

