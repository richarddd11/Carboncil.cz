// src/components/ContactHeroForm.jsx
import React from 'react';

const ContactHeroForm = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-54">
      {/* LEFT COLUMN */}
      <div className="space-y-10">
        <h1 className="text-5xl font-bold text-[#A40C0B]">Kontaktujte nás</h1>
        <p className="text-lg text-[#696969]">
          Máte otázku k našemu uhlí, chcete větší odběr, nebo si jen nejste jisti, jak správně rozžhavit večer?
        </p>
        <p className="text-2xl font-bold text-[#A40C0B]">
          Napište, zavolejte, nebo nám klidně pošlete kouřový signál.
        </p>
        <p className="text-lg text-[#696969]">
          My se ozveme rychleji, než se rozhoří Carboncil.
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="tel:+421915633064"
            className="w-1/2 inline-flex text-lg justify-start items-center gap-3 bg-[#A40C0B] text-white rounded-full py-1 hover:bg-red-800 transition"
          >
            <span className="bg-white rounded-full w-[42px] h-[42px] flex items-center justify-center ml-1">
              <img src="Mobile.png" alt="Telefon" className="w-5 h-5" />
            </span>
            +421 915 633 064
          </a>
          <a
            href="mailto:info@carboncil.com"
            className="w-1/2  inline-flex text-lg justify-start items-center gap-3 bg-[#A40C0B] text-white rounded-full py-1 hover:bg-red-800 transition"
          >
            <span className="bg-white rounded-full w-[42px] h-[42px] flex items-center justify-center ml-1">
              <img src="Mail.png" alt="Email" className="w-[22px] h-[18px]" />
            </span>
            info@carboncil.com
          </a>
        </div>
      </div>

      {/* RIGHT COLUMN (FORM) */}
      <form className="space-y-8">
        {/* Meno */}
        <div className="space-y-3">
          <label htmlFor="name" className="block text-sm">Meno</label>
          <input
            id="name"
            type="text"
            placeholder="Vaše jméno"
            className="w-full h-12 bg-[#F7F7F7] rounded-md px-6 focus:outline-none focus:ring-2 focus:ring-red-700"
          />
        </div>

        {/* Email */}
        <div className="space-y-3">
          <label htmlFor="email" className="block text-sm">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Váš email"
            className="w-full h-12 bg-[#F7F7F7] rounded-md px-6 focus:outline-none focus:ring-2 focus:ring-red-700"
          />
        </div>

        {/* Telefón */}
        <div className="space-y-3">
          <label htmlFor="phone" className="block text-sm">Telefón</label>
          <input
            id="phone"
            type="tel"
            placeholder="Váš telefon"
            className="w-full h-12 bg-[#F7F7F7] rounded-md px-6 focus:outline-none focus:ring-2 focus:ring-red-700"
          />
        </div>

        {/* Výber produktu */}
        <div className="space-y-3">
          <label htmlFor="product" className="block text-sm">
            O aký produkt máte záujem
          </label>
          <select
            id="product"
            className="w-full h-12 bg-[#F7F7F7] rounded-md px-6 focus:outline-none focus:ring-2 focus:ring-red-700"
          >
            <option value="">Vyberte produkt</option>
            <option>Carboncil 1,5 kg</option>
            <option>Top Quality 15 kg</option>
          </select>
        </div>

        {/* Správa */}
        <div className="space-y-3">
          <label htmlFor="message" className="block text-sm">Správa</label>
          <textarea
            id="message"
            rows={4}
            placeholder="Vaša správa"
            className="w-full bg-[#F7F7F7] rounded-md px-6 py-3 focus:outline-none focus:ring-2 focus:ring-red-700"
          />
        </div>

        {/* Odoslať */}
        <button
          type="submit"
          className="w-full h-12 bg-[#A40C0B] text-white font-semibold rounded-md hover:bg-red-800 transition"
        >
          Odoslať
        </button>
      </form>
    </section>
  );
};

export default ContactHeroForm;
