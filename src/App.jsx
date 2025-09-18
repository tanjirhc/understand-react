

import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    alert('useEffect called')
  }, [])

  const updateCounter = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  
  return (
    <div>
      <h1>Steps: {count}</h1>
      <button onClick={updateCounter}>Steps</button>
    </div>
  )
}

export default App
