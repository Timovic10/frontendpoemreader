import React from 'react'
import Ellipse from '../../assets/icons/ellipse'


const Aside = () => {
  return (
    <div className="hidden md:flex relative w-1/2 items-center justify-center bg-gradient-to-b from-[#0572E2] to-[#021E7C] p-8">
        {/* Ellipse at bottom left */}
        <div className="absolute bottom-0 left-0 w-32">
          <Ellipse/>
        </div>

        {/* PR Text */}
        <div className="absolute bottom-16 left-16">
          <h1 className="text-white font-bold text-6xl">PR</h1>
        </div>
      </div>
  )
}

export default Aside