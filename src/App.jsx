
import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    fetch('fakeData.json')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div >      
      Hello
    </div>
  )
}

export default App
