import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Akash")
  // const [form, setForm] = useState({email: "", phone: ""})
  const [form, setForm] = useState({})

  const handleClick = () => {
    alert("Thanks for clicking...")
  }

  const handleMouseOver = () => {
    alert("Yo bro, whassup... Seems like you need something")
  }

  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({...form, [e.target.name] : e.target.value})
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>

      <div className="cyan" onMouseOver={handleMouseOver}>
        Hover over me
      </div>

      <input type="text" name='email' value={form.email ? form.email : ""} placeholder='Enter you email' onChange={handleChange} />
      <input type="text" name='phone' value={form.phone ? form.phone : ""} placeholder='Enter you phone number' onChange={handleChange} />
    </>
  )
}

export default App
