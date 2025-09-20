import React from 'react'

const SingleFakeData = ({singleData}) => {
     const {name} = singleData;
  return (
    <div>
      <h1>Name: {name}</h1>
    </div>
  )
}

export default SingleFakeData
