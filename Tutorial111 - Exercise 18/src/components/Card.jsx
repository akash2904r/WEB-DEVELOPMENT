import React from 'react'
import reactLogo from '../assets/react.svg'

const Card = ({ data }) => {
  return (
    <div className='card border border-1 border-red-500 w-52 h-[280px] flex flex-col items-center px-3 py-3 rounded-xl bg-[#1f2020]'>
      <div className="img">
        <img src={reactLogo} alt="Logo" className='h-24 w-24' />
      </div>
      <div className="content w-full flex flex-col gap-0.5">
        <div className="data title font-bold text-2xl w-full h-10 truncate">{data.title}</div>
        <div className="data desc w-full h-16 text-sm text-wrap truncate">{data.body}</div>
        <div className="data user_id">User ID : {data.userId}</div>
        <div className="data id">ID : {data.id}</div>
      </div>
    </div>
  )
}

export default Card
