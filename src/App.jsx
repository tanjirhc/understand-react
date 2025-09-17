
import './App.css'
import Products from './components/Products/Products'

function App() {

  const products = {
    name: 'Nokia',
    price: 20000
  }

  return (
    <div>
      <Products 
        products={products}
      />
    </div>
  )
}

export default App
