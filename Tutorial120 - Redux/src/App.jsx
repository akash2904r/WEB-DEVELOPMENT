import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import Navbar from './components/Navbar'
import { decrement, increment, incrementByAmount, multiply } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div>
        Currently count is {count}
      </div>
      <div className='buttons'>
        <button onClick={ () => dispatch(decrement()) }>-</button>
        <button onClick={ () => dispatch(increment()) }>+</button>
        <button onClick={ () => dispatch(multiply()) }>*</button>
      </div>
      <button className='amount' onClick={ () => dispatch(incrementByAmount(5)) }>Increment by amount : 5</button>
    </>
  )
}

export default App
