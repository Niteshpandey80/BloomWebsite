import React from 'react'
import img from '/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar flex items-center justify-between md:px-8 lg:px-12 '>
      <div className='flex gap-3'> <img src={img} alt="" className='w-5' /><h3>BloomFi</h3></div>
      <div className='hidden md:flex md:gap-10 '>
         <p>USD bloom</p>
         <p>Business</p>
         <p>Treasury</p>
         <p>Developers</p>
         <p>Join us</p>
       </div>
      <div className='bg-[#2B273F] rounded-full text-white w-30 h-8 flex items-center justify-center cursor-pointer'>
        LaunchBETA
      </div>
    </div>
  )
}

export default Navbar
