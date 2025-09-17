import React from 'react'
import './Products.css'

const Products = (props) => {
    console.log(props.products);

  return (
    <div>
      <h1>Products Name: {props.products.name} </h1>
        <h1>Products Price: {props.products.price} </h1>
    </div>
  )
}

export default Products
