

import { useEffect } from 'react'
import './App.css'



function App() {


  useEffect(() => {
    alert('useEffect called')
  }, [])
  
  return (
    <div>
      <h1>useEffect Hook</h1>
    </div>
  )
}

export default App
