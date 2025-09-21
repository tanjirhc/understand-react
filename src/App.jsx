

import './App.css'
import Products from './components/Products/Products'
import Placement from './components/Placement/Placement'
  

function App() {

  const addToCartData = () => {
    alert('Added to cart')
  }
  
  return (
    <div className='flex gapx-6'>      
      <Products addToCartData = {addToCartData} />
      <Placement />
    </div>
  )
}

export default App
