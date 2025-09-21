import React from 'react'

const SingleCartData = ({singleData}) => {
    const {name, age, profession} = singleData;
  return (
    <div>
      <h2>{name}</h2>
        <h2>{age}</h2>
        <p>{profession}</p>
        <hr />
    </div>
  )
}

export default SingleCartData
