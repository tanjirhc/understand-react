

import { useEffect, useState } from 'react'
import './App.css'
import Singleuserdata from './components/Singleuserdata/Singleuserdata';



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
      {
        allData.map(singleData => <Singleuserdata
          key={singleData.id} 
          singleData={singleData}
          />)
      }
    </div>
  )
}

export default App
