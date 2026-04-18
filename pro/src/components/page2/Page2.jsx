import React from 'react'
import img1 from '../../assets/im1.png'
import img2 from '../../assets/im2.png'
import img3 from '../../assets/im3.png'
import img4 from '../../assets/im4.png'
import './page2.css'

const Page2 = () => {
  return (
    <div className='page2 flex flex-row h-full w-full '>
      <div className=' h-full w-1/2'>
        <h1>Backend by the best companies </h1>
        <h1>andvisionary angles </h1>
      </div>
      <div className=' h-full w-1/2 flex  '>
            <img src={img1} alt=""  />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />

      </div>
    </div>
  )
}

export default Page2
