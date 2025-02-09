import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Ad from './Components/Ad'
import Slider from './Components/Slider'
import "swiper/css"
const App = () => {
  return (
    <div className=''>
      <Header/>
      <Hero/>
      <Ad/>
      <Slider/>
    </div>
  )
}

export default App
