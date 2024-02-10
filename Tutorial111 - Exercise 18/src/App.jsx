import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  const [datas, setData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const jsonData = await response.json()
      setData(jsonData)
    }

    fetchData()
  }, [])

  return (
    <>
      <Navbar/>

      <div className="cards w-full flex gap-3 flex-wrap my-5 px-4">
        {
          Array.from(datas).map((d) => {
            return <Card key={d.id} data={d}/>
          })
        }
      </div>
    </>
  )
}

export default App
