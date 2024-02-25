import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-around bg-slate-800 text-white py-4'>
        <div className='text-center'>Copyright &copy; Facebook | All rights reserved</div>
        <ul className='flex gap-2 text-sm'>
            <a href="/"><li className="text-xs">Home</li></a>
            <a href="/"><li className="text-xs">About</li></a>
            <a href="/"><li className="text-xs">Contact Us</li></a>
        </ul>
    </footer>
  )
}

export default Footer
