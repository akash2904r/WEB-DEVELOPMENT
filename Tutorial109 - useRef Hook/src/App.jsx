import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const btnRef = useRef(0)

  function getRandomColor() {
    let val1 = Math.ceil(Math.random() * 255)
    let val2 = Math.ceil(Math.random() * 255)
    let val3 = Math.ceil(Math.random() * 255)

    return `rgb(${val1}, ${val2}, ${val3})`
  }
  
  function clicked() {
    btnRef.current.style.backgroundColor = getRandomColor()
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button ref={btnRef} onClick={clicked}>Click Me</button>
    </>
  )
}

export default App
