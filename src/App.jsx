
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
      Hello
    </div>
  )
}

export default App
