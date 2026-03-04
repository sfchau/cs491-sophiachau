import { useState } from 'react'
import './App.css'

// Room 
function Room(props) {
  return (
    <div>
      <h3>Room: {props.name}</h3>
      <p>This room is inside the house: {props.houseName}</p>
    </div>
  )
}

// House 
function House(props) {
  return (
    <div>
      <h2>House: {props.name}</h2>
      
      {/* Call Room inside House */}
      <Room name="bedroom" houseName={props.name} />
    </div>
  )
}

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

      <hr />

      {/* Call House */}
      <House name="paradise" />
    </>
  )
}

export default App