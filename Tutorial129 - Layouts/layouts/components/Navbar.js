import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center text-xl px-4 py-2 bg-gray-800'>
        <div className='text-3xl font-bold'>Main</div>
        <ul className='flex gap-8'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
    </nav>
  )
}

export default Navbar
