import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={`${props.img}`} alt="Image" />
      <h2 className='title' style={{color: `${props.color}`}}>{props.title}</h2>
      <div className='desc'>{props.desc}</div>
    </div>
  )
}

export default Card
