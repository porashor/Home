import React from 'react'
import Image from "../assets/image/contact.jpg"
import Head from './Head'
import { contactData } from '../Data/data'



const Contact = () => {
  return (
    <div className='bg-secondary text-primary py-5'>
      {/* container section  */}
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {/* details section  */}
        <div>
            {/* header section  */}
            <Head mainhead={"Contact with us "} sechead={"Easy to contact with us "} headdetails={"this is the first way to contact with and we always ready to proving the best services of us and believe or not it is the best service of the world us "}/>
            {/* main contact section  */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-between py-5'>
                {
                    contactData.map((item, index)=>(
                        <div key={index} className='w-full hi-fit hover:bg-slate-300 p-5 rounded-xl hover:shadow-xl hover:scale-105 duration-500 transition-all'>
                            <div className='flex text-xl items-center justify-start gap-2 py-5'>
                                <div className='bg-blue-100 p-2 rounded-lg'>{item.icon}</div>
                                <div>
                                    <h1 className='font-bold'>{item.name}</h1>
                                    <p className='opacity-60'>{item.num}</p>
                                </div>
                            </div>
                            <button className='bg-blue-100 font-bold w-full py-2 rounded-xl'>{item.btn}</button>
                        </div>
                    ))
                }
            </div>
        </div>
        {/* image section  */}
        <div className='flex items-center justify-center'>
            <img src={Image} alt="" className='w-[30rem] h-[35rem] overflow-hidden border-[8px] border-[#ffffff1e] rounded-t-[15rem] rounded-b-none object-fill' />
        </div>
      </div>
    </div>
  )
}

export default Contact
