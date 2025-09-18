

import { useEffect } from 'react'
import './App.css'



function App() {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <div>
      <h1>Hello API Fetching</h1>
    </div>
  )
}

export default App
