import React from 'react'

const page = () => {
  return (
    <div className='text-center my-5'>
      <button className='bg-red-600 px-4 py-2 rounded-3xl font-bold'>Login</button>
      <div>Admin</div>
    </div>
  )
}

export default page

export async function generateMetadata({ params }) {
  // console.log(params)

  return {
    title: 'Admin | Login | Facebook - Connect with friends and the world around you',
  }
}