// src/components/ContactInfo.jsx
import React from 'react';

const ContactInfo = () => (
  <section className="relative m-5 bg-black text-white overflow-visible rounded-[40px] px-6 lg:px-0">
    {/* ——— Contact Info ——— */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 pt-10 relative">
      {/* 1) Coal image – pulled up less deeply and shorter */}
      <div className="relative z-20 -mt-40 lg:-mt-56">
        <img
          src="Coal7.png"
          alt="Hořící uhlí"
          className="w-full max-w-3xl h-[800px] object-cover rounded-[30px] relative z-20"
        />
      </div>

      {/* 2) Text block */}
      <div className="space-y-8 lg:pl-16 mb-25 relative z-20">
        <div className="space-y-2">
          <p className="text-lg font-semibold">Carboncil s.r.o.</p>
          <p className="text-lg text-[#CCCCCC]">Uhelná 12, 101 00 Praha</p>
        </div>
        <div className="space-y-2 mt-18">
          <p className="text-2xl font-semibold text-[#A40C0B]">Odpovídáme:</p>
          <p className="text-2xl text-[#A40C0B]">
            Po–Pá:&nbsp;<span className="font-bold">9:00 – 17:00</span>
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-bold">Chcete s námi spolupracovat?</p>
          <p className="text-lg">
            Napište nám, rádi s vámi rozjedeme nový obchodní vztah.
          </p>
        </div>
      </div>

      {/* ABSOLUTE RED LINE OVER THE IMAGE */}
      <div
        className="absolute left-0 w-full h-[2px] bg-red-700 z-10"
        style={{ top: '80%' }}
      />
    </div>

    {/* ——— Footer ——— */}
    <footer className="bg-black text-white rounded-b-[40px] overflow-hidden px-6 lg:px-0">
      <div className="max-w-7xl mx-auto py-10">
        {/* nav pushed to right */}
        <nav className="flex justify-end gap-13 text-sm mb-6">
          <a href="/o-nas" className="hover:text-gray-400 transition">O nás</a>
          <a href="/uhlie" className="hover:text-gray-400 transition">Carboncil</a>
          <a href="/carbonito" className="hover:text-gray-400 transition">Carbonito</a>
          <a href="/top-quality" className="hover:text-gray-400 transition">Top Quality</a>
          <a href="/kontakt" className="hover:text-gray-400 transition">Kontakt</a>
        </nav>

        {/* logo centered */}
        <div className="flex justify-center mb-6">
          <img src="/HeroLogo.png" alt="Carboncil Logo" className="h-8" />
        </div>

        {/* copyright bottom-right */}
        <p className="text-right text-sm text-gray-400">
          Copyright © 2025 Carboncil
        </p>
      </div>
    </footer>
  </section>
);

export default ContactInfo;
