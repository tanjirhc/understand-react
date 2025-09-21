import React from 'react'

const SingleCart = (singleCart) => {
    const {name, age, profession} = singleCart.singleCart;
    
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{profession}</p>
    </div>
  )
}

export default SingleCart
