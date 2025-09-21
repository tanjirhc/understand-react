import React from 'react'
import SingleCart from '../SingleCart/SingleCart'

const Placement = ({cart}) => {
    console.log(cart)
  return (
    <div>
      <h2 className='text-3xl'>Placement</h2>
      {
        cart.map(singleCart =><SingleCart
            key={singleCart.id}
            singleCart={singleCart} 
            /> )
      }
    </div>
  )
}

export default Placement
