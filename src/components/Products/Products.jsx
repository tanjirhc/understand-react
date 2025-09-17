import React from 'react'
import './Products.css'

const Products = (props) => {
    console.log(props.arrays);

  return (
    <div>
      <h1>Products Length: {props.arrays.length} </h1>
        <h1>Products Price:  </h1>
    </div>
  )
}

export default Products
