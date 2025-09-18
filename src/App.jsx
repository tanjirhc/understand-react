

import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const [allData, setAllData] = useState()


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setAllData(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <div>
      <h1>Data : {data.length}</h1>
    </div>
  )
}

export default App
