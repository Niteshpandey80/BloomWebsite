import React from 'react'
import './Footer.css'
import logo from '/logoo.png'

const Footer = () => {
  return (
    <div className='bro w-full bg-[#403089] flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4 h-30'>
      
      <div className='flex items-center gap-3 text-white font-bold'>
        <h1>BoolFill</h1>
        <img src={logo} alt="" className='w-8 md:w-10' />
      </div>

      <div className='flex flex-wrap justify-center gap-4 md:gap-7 text-white text-sm md:text-base'>
        <h3>USD Bloom</h3>
        <h3>Business</h3>
        <h3>Treasury</h3>
        <h3>Developer</h3>
        <h3>Join Us</h3>
      </div>
      <button className=' bg-white text-black px-4 py-2 rounded-xl text-sm md:text-base h-8 w-25 hidden md:block'>
        Contact Us
      </button>

    </div>
  )
}

export default Footer