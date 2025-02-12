import React from 'react'
import Logo from "../assets/image/logo2.png"
import { navberData } from '../Data/data'
const Foother = () => {
  return (
    <div className='bg-secondary text-primary py-10'>
      {/* container  */}
      <div className='w-[80%] mx-auto py-5 gap-5 flex items-end justify-between'>
        {/* logo section  */}
        <div>
            <img src={Logo} alt="" className='w-[150px]' />
            <p className='text-xs text-slate-600 w-[300px] py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus distinctio, porro fuga esse voluptatum quis molestias voluptate fugit maiores sed.</p>
        </div>
        {/* nav section  */}
        <div>
            <h1 className='text-4xl py-2 font-bold'>Information</h1>
            <p className='text-xs text-slate-600'>Banigram, Banskhali, Chattogram.</p>
            <ul className='py-3 flex gap-3'>
                {navberData.map((item, index)=>(
                    <div key={index}>
                        <a href={item.links} className='text-md font-semibold'>{item.name}</a>
                    </div>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Foother
