import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#221e22] text-white flex justify-between p-5 h-16 items-center'>
      <div className='font-bold text-2xl'>
        iTask
      </div>
      <ul className='flex gap-x-10 text-lg'>
        <li>Home</li>
        <li>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
