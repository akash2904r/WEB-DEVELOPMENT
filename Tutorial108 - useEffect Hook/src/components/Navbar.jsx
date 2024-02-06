import React, { useEffect } from 'react'

const Navbar = ({ color }) => {
  
  // Case 1 : Runs on every render
  useEffect(() => {
    alert("Something changed, let's render...")
  })

  // Case 2 : Runs only on first render
  useEffect(() => {
    alert("First render complete...")
  }, [])

  // Case 3 : Runs only when certain values change i.e., color (in this case)
  useEffect(() => {
    alert("Color was changed...")
  }, [color])

  // Example of Clean Up function
  useEffect(() => {
    alert("Example of clean up function...")
    
    // Function executes if the component i.e., the navbar is dynamically removed
    return () => {
      alert("Component was unmounted...")
    }
  }, [])

  return (
    <div>
      I am the navbar of this site and my color is {color}...
    </div>
  )
}

export default Navbar
