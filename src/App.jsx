

import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('This is Tanjir Hossain ');

  useEffect(() => {
    console.log('When Data Loaded')
  }, [name])

  const updateCounter = () => {
    const newName = name + 'Coding Addict';
    setName(newName);
  }
  
  return (
    <div>
      <h1>Name: {name}</h1>
      <button onClick={updateCounter}>Steps</button>
    </div>
  )
}

export default App
