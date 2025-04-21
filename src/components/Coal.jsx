import React from 'react'

const Coal = () => {
  return (
    <section className='mx-3 mt-10'>

        <div className="max-w-7xl mx-auto">
  <img
    src="Coal4.png"
    alt="Coal"
    className=''
  />
</div>

      <div className="benefits max-w-4xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center">
          <img src="Tree.png" alt="Ikona strom" className="h-13 mb-2" />
          <p className="text-base font-medium">100 % přírodní</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="smoke.png" alt="Ikona bez kouře" className="h-13 mb-2" />
          <p className="text-base font-medium">Bez kouře, bez zápachu</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="balcony.png" alt="Ikona balkón" className="h-13 mb-2" />
          <p className="text-base font-medium">Vhodné i na balkonové grily</p>
        </div>
      </div>
    </section>
  )
}

export default Coal