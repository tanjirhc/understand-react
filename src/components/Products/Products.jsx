import React from 'react'
import './Products.css'

const Products = (props) => {
    console.log(props.products);

  return (
    <div>
      <h1>Products Name: {props.products[4].name} </h1>
        <h1>Products Price: {props.products[4].price} </h1>
    </div>
  )
}

export default Products
