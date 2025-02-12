import React from 'react'
import banner from "../assets/image/hero-image.png"
import { FaLocationPin } from 'react-icons/fa6'
import Btn from './Btn'
import { productQuentity } from '../Data/data'
import { BiPlus } from 'react-icons/bi'
const Hero = () => {
  return (
    <div className='bg-blackColor text-secondary h-[100vh] flex justify-center items-center'>
      {/* container  */}
      <div className='w-[80%] mx-auto py-3 flexBetween'>
        {/* details section  */}
        <div className='flexColStart space-y-5'>
          {/* header area  */}
          <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-bold w-[80%] capitalize'>Discover <br /> most suitable property</h1>
          {/* paragraph area  */}
          <p className='text-slate-400 py-3 w-[55%] text-xl'>Find a variety of properties that sult you very easilty forget all difficulties in finding a residence for you</p>
          {/* form area  */}
          <div className='flexCenter bg-white py-2 px-4 rounded-lg text-blueColor text-xl'>
            {/* icon  */}
            <FaLocationPin/>
            {/* input  */}
            <input type="text" className='outline-none text-blackColor'/>
            {/* btn  */}
            <Btn>Search</Btn>
          </div>
          {/* details area  */}
          <div className='flexBetween'>
            {productQuentity.map((item, index)=>(
              <div key={index} className=''>
                {/* num  */}
                <div className='text-3xl font-bold flexCenter'>
                  <h1>{item.num}</h1>
                  <BiPlus className='text-yellow-500'/>
                </div>
                {/* product */}
                <div className='text-lg'>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        {/* image section  */}
        <div className='w-[30rem] h-[35rem] overflow-hidden border-[8px] border-[#ffffff1e] rounded-t-[15rem] rounded-b-none object-fill'>
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
