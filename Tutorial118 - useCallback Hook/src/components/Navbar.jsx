import React, { memo } from 'react'

const Navbar = ({ adjective, getAdjective }) => {
  console.log("Navbar is rendered")

  return (
    <div>
      I am an {adjective} Navbar
      <button>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
