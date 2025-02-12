import React,{useRef} from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/swiper-bundle.css"
import { SliderData } from '../Data/data';
import { BiDollar } from 'react-icons/bi';
import { swiperSettings } from '../Data/function';
import { FcNext, FcPrevious } from 'react-icons/fc';
import Head from './Head';



const Slider = () => {
  
  return (
    <div className='bg-secondary text-blackColor py-5 overflow-hidden'>
      {/* container area  */}
      <div className='w-[95%] mx-auto relative'>
        {/* header and button areas  */}
        <div className='py-5 flexBetween '>
          {/* header area  */}
          <Head mainhead={"Best choice"} sechead={"Popular residance"}/>
          {/* array btn area  */}
          
        </div>
        {/* main slider loaded here  */}
        <div>
          <Swiper
          style={{overflow: "visible"}}
            {...swiperSettings}
          >
            <div className='absolute top-[-60px] right-10'>
            <SwiperBtn/>
            </div>
            {SliderData.map((item, index)=>(
              
                <SwiperSlide key={index} >
                  {/* main card here */}
                  <div className='p-5 hover:bg-slate-300 rounded-2xl duration-500 transition-all hover:scale-[102%] hover:shadow-lg'>
                    {/* image  */}
                    <img src={item.img} alt="" />
                    {/* currency */}
                    <div className='flex gap-2 text-xl font-bold items-center py-3'>
                      <BiDollar className='text-orange-400  '/>
                      <div className='text-slate-600'>{item.price}</div>
                    </div>
                    {/* title  */}
                    <h1 className='primaryText'>{item.name}</h1>
                    {/* details  */}
                    <p className='line-clamp-2 text-md text-slate-600'>{item.details}</p>
                  </div>
                </SwiperSlide>
              
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Slider



const SwiperBtn = ()=>{
  const swiper = useSwiper()
  return(
  <div className='flex items-center justify-center gap-5 text-2xl'>
    <button onClick={()=>swiper.slidePrev()} className='bg-slate-200 p-2 rounded-full'>
      <FcPrevious/>
    </button>
    <button onClick={()=>swiper.slideNext()} className='bg-slate-200 p-2 rounded-full' >
      <FcNext/>
    </button>
  </div>
  )
}