
import { useState } from 'react';
import './App.css'



function App() {


  let price = 10;

  const increaseHandle = () => {
    price = price + 1;
    console.log('Price after increase:', price);  
  }
  
  return (
    <div>
      <h1>Price : {price}</h1>
      <button onClick={increaseHandle}>Increase</button> &nbsp; &nbsp; &nbsp;
      <button>Decrease</button>

      <h2>Price: {price}</h2>
      <p>Price: {price}</p>
      <h4>Price: {price}</h4>
    </div>
  )
}

export default App
