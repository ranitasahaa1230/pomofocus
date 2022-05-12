import React from 'react'
import icon from "../assets/icon.png"

export const Navbar = () => {
  return (
    <div className='fixed w-full h-20 bg-red-300 flex'>
        <div className='w-14 m-3 mx-8 flex'>
            <img src={icon}/>
        </div>
        <div>
            PomoFocus
        </div>
    </div>
  )
}
