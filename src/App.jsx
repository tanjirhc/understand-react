
import { useState } from 'react'
import './App.css'
import Placement from './components/Placement/Placement'
import Products from './components/Products/Products'

  

function App() {
  // const [placement, setPlacement] = useState([]);

  const addToCart = () => {
    console.log('Add to cart')
  }
  
  return (
    <div className='flex gap-x-6'>      
      <Products addToCart = {addToCart}/>
      <Placement />
    </div>
  )
}

export default App
