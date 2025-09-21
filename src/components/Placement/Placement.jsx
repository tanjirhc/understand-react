import React from 'react'

const Placement = ({cart}) => {
    console.log(cart);
  return (
    <div>
      <h2 className='text-2xl'>Placement</h2>
      {
        cart.map(singleData => <h2>{singleData.name}</h2>)
      }
    </div>
  )
}

export default Placement
