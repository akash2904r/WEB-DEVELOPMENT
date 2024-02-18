import { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import editTodo from './assets/edit.svg'
import deleteTodo from './assets/delete.svg'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showAll, setShowAll] = useState(false)
  const list = useRef(null)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")

    if (todoString) {
      let todos = JSON.parse(todoString)
      setTodos(todos)
    }
  }, [])


  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSave = () => {
    setTodos([...todos, { todo, isCompleted: false, id: Math.random() }])
    setTodo("")
    saveToLS()
  }

  const handleCompleted = (e) => {
    let id = e.target.name
    let todoIndex = todos.findIndex(item => {
      return item.id == id
    })

    let newTodos = [...todos]
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted
    setTodos(newTodos)
    saveToLS()
  }

  const handleShowAll = (e) => {
    setShowAll(!showAll)
    let lis = list.current.querySelectorAll('li')

    lis.forEach(e => {
      if (e.classList.contains('hidden') && !showAll) {
        e.classList.remove('hidden')
        e.classList.add('flex', 'justify-between', 'mb-1')
      }
      else if (e.querySelector('div > div').classList.contains('line-through'))
        e.classList.add('hidden')
    });

    saveToLS()
  }

  const handleEdit = (e) => {
    let id = e.target.parentNode.parentNode.parentNode.querySelector('input').name
    let todoIndex = todos.findIndex(item => {
      return item.id == id
    })
    
    setTodo(todos[todoIndex].todo)
    let isCompleted = todos[todoIndex].isCompleted
    todos[todoIndex].todo = todo
    todos[todoIndex].isCompleted = isCompleted

    saveToLS()
  }

  const handleDelete = (e) => {
    let id = e.target.parentNode.parentNode.parentNode.querySelector('input').name
    let newTodos = todos.filter(item => {
      return item.id != id
    })

    setTodos(newTodos)
    saveToLS()
  }

  return (
    <>
      <Navbar />      

      <div className="main bg-[#3c2d3c] max-w-[550px] min-h-[540px] m-auto px-4 py-3 mt-3 rounded-3xl max-sm:w-[350px]">
        <div className="title font-bold text-2xl text-center pb-3 max-sm:text-xl">iTask - Manage your todos at one place</div>
        <div>
          <div className='font-bold text-xl pb-2 max-sm:text-lg'>Add a To-do</div>
          <input id='add' type="text" className='py-2 px-4 rounded-full text-black w-5/6 max-sm:px-2 max-sm:py-1 max-sm:w-4/5' value={todo} onChange={handleChange} />
          <label htmlFor="add">
            <button className='bg-purple-800 py-2 px-4 rounded-full ml-2 max-sm:py-1 max-sm:px-2' onClick={handleSave}>Save</button>
          </label>
        </div>
        <div className='mt-4 mb-3'>
          <input type="checkbox" id="finished" value={showAll} onClick={handleShowAll} />
          <label htmlFor="finished" className='ml-2 text-center text-sm'>Show Finished</label>
        </div>
        <div className="separation h-0.5 w-[95%] m-auto bg-[#574257]"></div>
        <div className='font-bold text-xl my-2'>Your To-dos</div>
        <ul ref={list} className="todo-list">
          {
            todos.map(e => {
              if (e.todo == '')
                return ""
              else {
                return <li key={e.id} className={e.isCompleted && !showAll ? 'hidden' : 'flex justify-between mb-1'}>
                  <div className="todo-status flex gap-x-3 items-center w-full">
                    <input name={e.id} type="checkbox" checked={e.isCompleted} onChange={handleCompleted} />
                    <div className={e.isCompleted ? 'line-through w-full' : 'w-full'}>{e.todo}</div>
                  </div>
                  <div className="buttons flex gap-x-2 items-center">
                    <button className='w-7 h-7 bg-purple-900 rounded-3xl flex items-center justify-center' onClick={handleEdit}><img src={editTodo} className='w-5 h-5' /></button>
                    <button className='w-7 h-7 bg-purple-900 rounded-3xl flex items-center justify-center' onClick={handleDelete}><img src={deleteTodo} className='w-5 h-5' /></button>
                  </div>
                </li>
              }
            })
          }
        </ul>
      </div>
    </>
  )
}

export default App
