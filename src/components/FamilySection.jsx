import React from 'react'

const FamilySection = () => {
  return (
    <section className='family mt-20 mx-8 md:mx-5'>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 items-center">
            <div>
                <img src="Family.png" alt="Rodina pri grilovaní" className="rounded-xl w-full object-cover" />
            </div>

            <div>
                <h2 className="text-[35px] md:text-4xl font-bold text-[#A40C0B] mb-2 md:mb-4">
                Jedno balení, celá grilovačka!
                </h2>

                <p className="text-[#696969] w-[95%] md:w-full text-lg font-medium leading-7 md:leading-relaxed">
            S 1,5kg balením Carboncilu pohodlně pohostíte 5 až 6 hladových grilovačů. 
            Rychle se rozžhaví, hoří dlouho a bez kouře, takže se můžete 
            soustředit jen na chuť a společnost.
          </p>
            </div>
        </div>
    </section>
  )
}

export default FamilySection