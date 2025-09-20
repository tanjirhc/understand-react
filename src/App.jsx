

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
    <div className='grid grid-cols-3 gap-4 p-5'>      
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
