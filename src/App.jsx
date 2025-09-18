

import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const [allData, setAllData] = useState([])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setAllData(data))
  }, [])

  return (
    <div>
      <h1>Data : {allData.length}</h1>
    </div>
  )
}

export default App
