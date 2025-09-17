
import './App.css'
import Products from './components/Products/Products'

function App() {

  const products = [ 
    {name: "Iphone 14 Pro Max", price: "1,29,900"},
    {name: "Samsung Galaxy S23 Ultra", price: "1,05,999"},
    {name: "OnePlus 11R", price: "39,999"},
    {name: "Google Pixel 7 Pro", price: "84,999"},
    {name: "Xiaomi 13 Pro", price: "57,999"},
    {name: "Sony Xperia 1 IV", price: "1,19,990"},
    {name: "Motorola Edge 30 Ultra", price: "49,999"}
   ];

  return (
    <div>
      <Products   
        products = {products}      
      />
    </div>
  )
}

export default App
