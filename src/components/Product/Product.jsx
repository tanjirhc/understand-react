import React from 'react'

const Product = ({product}) => {
   const {name, age, profession} = product;

  return (
    <div className='border-2 m-4 p-4 border-indigo-600 rounded-lg bordder-center'>
      <h1 className='text-2xl'>{name}</h1>
      <p>{age}</p>
      <span>{profession}</span>
    </div>
  )
}

export default Product
