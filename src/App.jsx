
import { useState } from 'react'
import './App.css'
import Products from './components/Products/Products'
import Placement from './components/Placement/Placement'
  

function App() {
  const [cart, setCart] = useState([]);

  const addToCartData = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(newCart);
  }
  
  return (
    <div className='flex gapx-6'>      
      <Products addToCartData = {addToCartData} />
      <Placement />
    </div>
  )
}

export default App
