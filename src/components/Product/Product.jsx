import React from 'react'

const Product = ({product}) => {
    const {name, age, profession} = product;

    const handleButtonClick = () => {
        console.log('Button clicked for product:');
    }

  return (
    <div className='border-2 m-4 p-4 py-8 px-8 border-cyan-600 rounded-lg align-center'>
      <h2 className='text-2xl'>{name}</h2>
      <h2>{age}</h2>
      <p>{profession}</p>
      <button onClick={handleButtonClick} className='bg-green-40 py-2 px-3 mt-4'>Add To Cart</button>
    </div>
  )
}

export default Product
