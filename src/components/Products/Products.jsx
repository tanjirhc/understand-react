import React from 'react'
import './Products.css'

const Products = (props) => {
    console.log(props.product)

  return (
    <div>
      <h1>Products Name: {props.product.name}</h1>
      <h2>Products Price: {props.product.price}</h2>
      <button>Click for Alert</button>
    </div>
  )
}

export default Products
