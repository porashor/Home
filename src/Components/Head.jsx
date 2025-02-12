import React from 'react'

const Head = ({mainhead, sechead, headdetails}) => {
  return (
    <div className='w-full'>
        <h1 className='orangeText'>{mainhead}</h1>
        <p className='primaryText'>{sechead}</p>
        <p className='text-xs text-slate-500 py-2 w-[53%] '>{headdetails}</p>
    </div>
  )
}

export default Head
