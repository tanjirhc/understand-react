import React from 'react'
import './Products.css'

const Products = (props) => {
    console.log(props.products);

  return (
    <div>
      <h1>Products Name: {props.products[0].name} </h1>
    </div>
  )
}

export default Products
