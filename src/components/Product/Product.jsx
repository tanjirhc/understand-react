import React from 'react'

const Product = ({product}) => {
    const {name, age, profession} = product;
  return (
    <div className='border-2 m-4 p-4 py-8 px-8 border-cyan-600 rounded-lg align-center'>
      <h2 className='text-2xl'>{name}</h2>
      <h2>{age}</h2>
      <p>{profession}</p>
    </div>
  )
}

export default Product
