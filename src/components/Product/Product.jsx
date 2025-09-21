import React from 'react'

const Product = ({product}) => {
   const {name, age, profession} = product;

  return (
    <div className='border-2 m-4 p-4 border-indigo-600 rounded-lg bordder-center'>
      <h2 className='text-2xl'>{name}</h2>
      <p>{age}</p>
      <p>{profession}</p>
      <button className='bg-red-600 px-4 py-3 mt-2'>Add to Cart</button>
    </div>
  )
}

export default Product
