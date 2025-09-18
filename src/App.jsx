

import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const [allData, setAllData] = useState([])
  console.log(allData);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setAllData(data))
  }, [])

  return (
    <div>
      <h1>Data : {allData.length}</h1>
      {
        allData.map(singleData => <p>{singleData.phone}</p>)
      }
    </div>
  )
}

export default App
