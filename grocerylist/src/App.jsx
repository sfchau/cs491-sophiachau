import { useCallback, useState } from 'react'
import './App.css'
import Input from './input'


function App() {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  

  const handleAdd = (e) => {
    e.preventDefault()

    if (item.trim() === "") return;
    
    setList([...list, item]);
    setItem("");
  };


  return (
    <>
      <h1>GROCERY LIST</h1>
      <Input item={item} setItem={setItem} handleAdd={handleAdd} />

      <ul>
        {list.map((food, index) => (
          <li key={index}>{food}</li>
          ))}
      </ul>
      



      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          howdy 
        </p>
      </div> */}
    </>
  )
}

export default App
