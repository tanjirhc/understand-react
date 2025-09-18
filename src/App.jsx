
import './App.css'



function App() {

  let price = 10;

  const increaseHandle = () => {
    console.log('Price Value', price)
    price = price + 1;
  }

  return (
    <div>
      <h1>Price : {price}</h1>
      <button onClick={increaseHandle}>Increase</button> &nbsp; &nbsp; &nbsp;
      <button>Decrease</button>

      <h2>Price: 0</h2>
      <p>Price: 0</p>
      <h4>Price: 0</h4>
    </div>
  )
}

export default App
