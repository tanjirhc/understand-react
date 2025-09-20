import React from 'react'

const SingleFakeData = ({singleData}) => {
     const {name,age} = singleData;
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  )
}

export default SingleFakeData
