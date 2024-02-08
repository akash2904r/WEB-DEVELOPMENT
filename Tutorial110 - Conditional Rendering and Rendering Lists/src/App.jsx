import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setShowBtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "First", desc: "Netflix UI Clone"
    },
    {
      title: "Second", desc: "Spotify Clone"
    },
    {
      title: "Third", desc: "X UI Clone"
    },
  ])

  // const Todo = ({todo}) => {
  //   return (
  //     <>
  //       <div className="m-4 border border-1 border-red-500">
  //         <div className="todo">{todo.title}</div>
  //         <div className="todo">{todo.title}</div>
  //       </div>
  //     </>
  //   )
  // }

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
        <button onClick={() => setShowBtn(!showBtn)}>
          Show
        </button>
        
        { // Alternative for if-else condition in conditional rendering
          showBtn ? <div>Yayy!!! I have been displayed...</div> : <div>Click the above button</div>
        }
        { // Alternative for if condition in conditional rendering
          showBtn && <div>Yayy!!! I have been displayed...</div>
        }

        { // Rendering a list
          todos.map(todo => {
            // return <Todo key={todo.title} todo={todo}/>
            return (
              <div key={todo.title} className="m-4 border border-1 border-red-500">
                <div className="todo">{todo.title}</div>
                <div className="todo">{todo.desc}</div>
              </div>
            )
          })
        }

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
