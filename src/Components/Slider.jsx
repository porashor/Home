import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';





const Slider = () => {
  return (
    <div className='bg-secondary text-blackColor py-5'>
      {/* container area  */}
      <div className='w-[95%] mx-auto'>
        {/* main slider loaded here  */}
        <div>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Slider
