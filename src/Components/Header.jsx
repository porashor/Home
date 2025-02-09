import React from 'react'
import logo from '../assets/image/logo.png'
import { navberData } from '../Data/data'
import Btn from '../Components/Btn'





const Header = () => {
  return (
    <div className='bg-blackColor text-secondary py-4'>
      {/* container section  */}
      <div className='w-[80%] mx-auto flexBetween'>
        {/* logo section  */}
        <div>
            <a href="home">
                <img src={logo} alt="" className='w-[100px]'/>
            </a>
        </div>
        {/* manu section  */}
        <ul className='flexCenter gap-4'>
            {navberData.map((data, index) => (
                <li key={index} className='secondaryText'><a href={data.links}>{data.name}</a></li>
            ))}
            {/* contact button here  */}
            <Btn>Contact</Btn>
        </ul>
      </div>
    </div>
  )
}

export default Header
