import React from 'react'

const Product = ({product}) => {
    const {name, age, profession} = product;
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <p>{profession}</p>
    </div>
  )
}

export default Product
