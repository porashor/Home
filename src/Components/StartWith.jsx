import React from 'react'

const StartWith = () => {
  return (
    <div className='py-10 bg-secondary text-primary'>
      {/* contaienr section  */}
      <div className='bg-blue-600 border-3 border-blue-700 rounded-xl text-center py-5 w-[80%] mx-auto'>
        {/* header  */}
        <h1 className='text-3xl font-bold text-secondary py-2'>Get started with Home</h1>
        {/* details  */}
        <p className='text-slate-300 text-xs'>Subscribe and find super attractive price quotas from us </p>
        <p className='text-slate-300 text-xs'>find your rasidence soon </p>
        {/* button  */}
        <button className='bg-primary text-white text-xl font-bold my-3 py-2 px-3 rounded-xl border-2 border-blue-500'>Get Started</button>
      </div>
    </div>
  )
}

export default StartWith
