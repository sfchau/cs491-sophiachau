import { useState } from 'react'
import './App.css'
import House from './components/house'
import Room from './components/Room'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <div>
        <House name="paradise"/>
      </div>


    </>
  )
}

export default App