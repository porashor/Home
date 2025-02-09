import React from 'react'

const Btn = ({children}) => {
  return (
    <div className="blueGradient hover:scale-105 duration-200 transition-all text-white py-2 px-4 rounded-lg w-fit h-fit font-semibold cursor-pointer">
      {children}
    </div>
  )
}

export default Btn
