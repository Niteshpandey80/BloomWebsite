import React from 'react'
import './Page1.css'
import img4 from '../../assets/gg.png'

const Page1 = () => {
  return (
    <div className='page1 w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-10 py-10'>
      
      {/* Top Section */}
      <div className='inside-main flex flex-col md:flex-row justify-between w-full gap-6'>
        
        {/* Left */}
        <div className='w-full md:w-1/2 flex flex-col gap-4'>
          <h1 className='text-3xl md:text-5xl font-semibold'>
            What Is USD Bloom ?
          </h1>

          <button className='bg-black text-white w-36 h-10 rounded-2xl'>
            Explore now
          </button>
        </div>

        {/* Right */}
        <div className='w-full md:w-1/2'>
          <h1 className='text-lg md:text-2xl text-black/70 leading-relaxed'>
            USD Bloom is a yield-bearing stablecoin that helps your capital grow while staying pegged to the U.S. dollar
          </h1>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className='page1-part1 w-full flex flex-col lg:flex-row gap-6 mt-10'>
        
        {/* Image Card */}
        <div className='w-full lg:w-1/2 relative rounded-2xl overflow-hidden'>
          <img 
            src={img4} 
            alt="" 
            className='w-full h-full object-cover'
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          <h1 className='absolute top-4 left-4 text-xl md:text-3xl font-semibold text-white'>
            Capital that grows
          </h1>

          <p className='absolute bottom-4 left-4 text-sm md:text-base text-white/80 max-w-xs'>
            Earn passive income as your stablecoin are deployed into high-performing DeFi protocols
          </p>
        </div>

        {/* Card 1 */}
        <div className='card1 w-full lg:w-1/4 bg-[#2B2742] text-white flex flex-col rounded-3xl p-6 gap-16'>
          <div>
            <h3 className='text-xl md:text-2xl'>Always Liquid,</h3>
            <h3 className='text-xl md:text-2xl'>always stable</h3>
          </div>

          <p className=' text-white/70 text-sm md:text-base'>
            Stay fully dollar-pegged with instant access to your funds — no lockups or delays
          </p>
        </div>

        {/* Card 2 */}
        <div className='card2 w-full lg:w-1/4 bg-[#2B2742] text-white flex flex-col rounded-3xl p-6 gap-16'>
          <div>
            <h3 className='text-xl md:text-2xl'>100%</h3>
            <h3 className='text-xl md:text-2xl'>hands-free</h3>
          </div>

          <p className='text-white/70 text-sm md:text-base'>
            No need to manage strategies manually. USD Bloom works in the background for you
          </p>
        </div>

      </div>
    </div>
  )
}

export default Page1