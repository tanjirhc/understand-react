import React from 'react'
import './Products.css'

const Products = (props) => {

    

  return (
    <div>
      <h1>Products Name: {props.product.name}</h1>
      <h2>Products Price: {props.product.price}</h2>
      <button onClick={props.alertFunction}>Click for Alert</button>
    </div>
  )
}

export default Products
