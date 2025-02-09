import React from 'react'
import { AdData } from '../Data/data'

const Ad = () => {
  return (
    <div className='py-4 bg-secondary'>
      {/* container area  */}
      <div className='w-[90%] mx-auto block md:flexBetween'>
        {AdData.map((item, index)=>(
            <div key={index} className='w-[180px] py-5'>
                <img src={item.img} alt="" />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Ad
