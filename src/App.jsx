
import { useState, useEffect } from 'react'
import './App.css'
import SingleFakeData from './components/SingleFakeData/SingleFakeData';

function App() {
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => setFakeData(data))
  }, [])

  return (
    <div >      
      <h1 className='text'>Data Length: {fakeData.length}</h1>
      {
        fakeData.map(singleData => <SingleFakeData 
          key={singleData.id}
          singleData={singleData}
        />)
      }
    </div>
  )
}

export default App
