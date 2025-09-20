
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [fakeData, setFakeData] = useState([]);
  console.log(fakeData)

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setFakeData(data))
  }, [])

  return (
    <div >      
      <h1 className='text'>Data Length: {fakeData.length}</h1>
    </div>
  )
}

export default App
