import React from 'react'
import './Page2.css'
import img from '../../assets/rn.png'

const Page2 = () => {
  return (
    <div className='main-left w-full min-h-screen flex flex-col lg:flex-row gap-6 p-6 lg:p-12'>
      
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
        <p className='text-sm md:text-base'>USD bloom in Action</p>
        
        <h1 className='text-3xl md:text-5xl font-medium'>
          Use Cases
        </h1>
        
        <p className='text-sm md:text-lg text-gray-600'>
          USD bloom offers a variety of use cases for developers, <br /> businesses, 
          and treasuries seeking secure and <br /> profitable stablecoin integrations.
        </p>
      </div>

      <div className='main w-full lg:w-1/2 bg-black/10 border border-gray-300 rounded-2xl p-6 flex flex-col gap-4 items-start'>
        
        <h1 className='text-2xl md:text-3xl font-medium'>
          Business
        </h1>

        <p className='text-gray-700 text-sm md:text-base'>
          Boost user engagement by offering USD bloom, a secure fast-backed 
          stablecoin with high yields, allowing your customers to earn effortlessly.
        </p>

        <button className='bg-black text-white text-sm px-4 py-2 rounded w-25 h-8'>
          Learn More
        </button>

        <img 
          src={img} 
          alt="" 
          className='w-full max-w-sm mx-auto'
        />
      </div>

    </div>
  )
}

export default Page2