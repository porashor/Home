import React, { useState } from 'react'
import Head from './Head'
import banner from "../assets/image/value.png"
import { valueData } from '../Data/data'
import { IoMdArrowDropleft } from "react-icons/io";
const ValueShow = () => {
  const [drop, setdrop] = useState(0)
  return (
    <div className='bg-secondary
     text-blackColor py-10'>
      {/* container section  */}
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2'>
        {/* image section  */}
        <div className='w-[30rem] h-[35rem] overflow-hidden border-[8px] border-[#2e2727] rounded-t-[15rem] rounded-b-none'>
            <img src={banner} alt="" />
        </div>
        {/* details section  */}
        <div>
            {/* header section  */}
            <Head mainhead={"Our Value"} sechead={"Value We Give To You"} headdetails={"we always ready to help by providing the best sercices for you we believe a good blace to live can make your life better "}/>
            {/* main value showing section  */}
            <div>
              {
                valueData.map((item, index)=>(
                  <div key={index} className='border-[1px]  my-5 shadow-xl px-5 shadow-slate-500 py-8'>
                    <div className='flexBetween py-3'>
                      <div className='text-blue-600 text-2xl'>{item.icon}</div>
                      <h1 className='text-primary font-bold text-xl py-1'>{item.name}</h1>
                      <button className='bg-slate-300 p-1' onClick={()=>setdrop(index)}><IoMdArrowDropleft className={`text-3xl ${index === drop ? "-rotate-90" : ""}`}/></button>
                    </div>
                    <div className={`${drop === index ? "block" : "hidden"} text-lg text-slate-500`}>{item.details}</div>
                  </div>
                ))
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default ValueShow
