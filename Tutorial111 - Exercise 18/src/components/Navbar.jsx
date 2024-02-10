import React from 'react'
import reactLogo from '../assets/react.svg'

const Navbar = () => {
  return (
    <nav className='flex items-center bg-[#334151] justify-between px-5 py-3'>
        <div className="logo">
            <img src={reactLogo} alt="logo" />
        </div>
        <ul className='nav flex text-xl gap-x-10'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Navbar
