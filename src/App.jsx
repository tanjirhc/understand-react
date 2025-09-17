
import './App.css'
import Products from './components/Products/Products'

function App() {

  const arrays = [ 'Rahim', 'Karim', 'Jabbar', 'Kalam' ];

  return (
    <div>
      <Products   
        arrays = {arrays}      
      />
    </div>
  )
}

export default App
