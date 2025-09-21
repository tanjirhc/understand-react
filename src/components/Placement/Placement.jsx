import React from 'react'
import SingleCartData from '../SingleCartData/SingleCartData';

const Placement = ({cart}) => {

  return (
    <div>
      <h2 className='text-2xl'>Add To Cart : {cart.length}</h2>
      {
        cart.map(singleData => <SingleCartData
            key={singleData.id} 
            singleData={singleData}
        />)
      }
    </div>
  )
}

export default Placement
