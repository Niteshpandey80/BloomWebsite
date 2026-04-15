import React from 'react'
import img1 from '../../assets/main.png'
import img2 from '/logoo.png'
import './Main.css'

const Main = () => {
  return (
    <div className="main relative w-full h-screen flex items-center justify-center">
      <img 
        src={img1} 
        alt="" 
        className="absolute w-[95%] rounded-2xl h-full object-cover "
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-4 -top-20">

        <img src={img2} alt="" className="w-10" />

        <h1 className="text-5xl font-semibold">
          Where Money Grows
        </h1>

        <p className="max-w-xl  leading-relaxed ">
          A programmable, utility-driven stable token designed for native value
          accrual and seamless integration into DeFi.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-full mt-3 w-30 h-9">
          Try it now
        </button>

      </div>
    </div>
  )
}

export default Main