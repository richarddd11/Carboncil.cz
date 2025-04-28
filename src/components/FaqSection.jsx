import React, { useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa';

const FaqSection = ({ customClass = "w-[98%]", noTopRadius = false }) => {
    const faqData = [
        {
          id: 1,
          question: 'Proč zrovna z Venezuely?',
          answer:
            'Venezuela má jedinečné podmienky, kde vzniká drevo s vysokou hustotou. Uhlie je tak mimoriadne výhrevné a čisto prírodné.',
          bgImage: "FaqBg.png",
        },
        {
          id: 2,
          question: 'Hoří Carboncil příliš rychle?',
          answer:
            'Naopak. I když se rozžhaví rychle, jeho výdrž je dlouhá a žár stabilní. To znamená, že si užijete dlouhé grilování bez nutnosti přikládání.',
          bgImage: "FaqBg.png",
        },
        {
          id: 3,
          question: 'Kde si mohu Carboncil koupit?',
          answer:
            'Carboncil je dostupný v našem e-shopu a v síti vybraných prodejen. Distribuční síť se pravidelně rozšiřuje pro lepší dostupnost.',
          bgImage: "FaqBg.png",
        },
        {
          id: 4,
          question: 'Můžu používat Carboncil na balkoně?',
          answer:
            'Díky minimální kouřivosti je Carboncil ideální i do menších prostor, včetně balkonů. Přesto vždy dodržujte bezpečnostní předpisy.',
          bgImage: "FaqBg.png",
        },
    ];

    const [openFaqId, setOpenFaqId] = useState(null);

    const toggleFaq = (id) => {
        setOpenFaqId((prev) => (prev === id ? null : id))
    }

    return (
        <section className={`faq py-10 mb-5 mx-auto ${customClass} text-white bg-black ${noTopRadius ? 'rounded-b-3xl' : 'rounded-4xl'}`}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 min-[1135px]:grid-cols-2 gap-12">
                <div className="container space-y-4 lg:w-full md:w-[70%] mx-5 md:mx-auto">
                    {faqData.map((item) => {
                        const isOpen = openFaqId === item.id;
                        return (
                            <div
                                key={item.id}
                                className={`faq rounded-lg p-4 relative bg-no-repeat bg-cover bg-center ${isOpen ? 'pt-13 open-faq' : 'closed-faq'}`}
                                style={{
                                    backgroundImage: isOpen
                                        ? `url('openFaqBg.png')`
                                        : `url('${item.bgImage}')`
                                }}
                            >
                                <span className={`text-xl ${isOpen ? 'text-white ques-open' : 'text-black ques-closed'}`}>{item.question}</span>
                                <button
                                    onClick={() => toggleFaq(item.id)}
                                    className={`absolute ${isOpen ? 'faq-toggle-open' : 'faq-toggle-closed'} flex justify-between items-center text-left font-semibold`}
                                >
                                    <span className="text-white w-8 h-9 text-2xl font-thin ">
                                        {isOpen ? <FaTimes /> : <FaPlus />}
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
                                >
                                    <p className={`text-lg md:text-lg text-white ${isOpen ? 'answer' : ''}`}>{item.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text flex flex-col justify-center mx-5">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">Prečo je Carboncil revolučné uhlie?</h2>
                    <p className="mb-6 text-base md:text-lg text-[#696969] leading-relaxed">
                        Carboncil je unikátní uhlí vyrobené z čisté biomasy, bez jakýchkoli chemikálií, bez zápachu a bez kouře.
                    </p>
                    <p className="mb-6 text-base md:text-lg text-[#696969] leading-relaxed">
                        Díky speciálnímu procesu karbonizace dosahuje výjimečných vlastností, které ho staví vysoko nad klasické dřevěné uhlí
                    </p>
                    <button className="flex items-center justify-center bg-[#A40C0B] w-1/2 footerBtn hover:bg-red-700 transition text-white font-semibold py-3 rounded-full text-base md:text-lg">
                        Carboncil <span> <img src="Arrow.png" alt="Arrow" /></span>
                    </button>
                </div>
            </div>

            <div className='h-[2px] w-[95%] mx-auto bg-[#A40C0B] rounded-lg mt-20'></div>

            <footer className=' relative px-5 2xl:max-w-410 mb-10 pt-20 mx-auto bg-black rounded-b-4xl'>
                <div className="fot flex flex-col justify-between md:flex-row py-4 px-2 text-sm md:text-base">
                    <div>
                        <p className='mb-2 text-center  text-white'>Uhlí, které griluje chytře.</p>
                    </div>
                    <nav className="flex justify-center items-end float-right text-right text-sm md:text-base gap-10 mb-5 sm:mb-0">
                    <a href="#" className="hover:text-gray-400 transition">Domov</a>
            <a href="/o-nas" className="hover:text-gray-400 transition">O nás</a>
            <a href="/uhlie" className="hover:text-gray-400 transition">Uhlie</a>
            <a href="/kontakt" className="hover:text-gray-400 transition">Kontakt</a>
                    </nav>
                </div>
                <div className='flex flex-row justify-between'>
                    <img className='pl-2' src="HeroLogo.png" alt="" />
                    <p className="text-gray-400">© 2025 Carboncil</p>
                </div>
            </footer>
        </section>
    )
}

export default FaqSection
