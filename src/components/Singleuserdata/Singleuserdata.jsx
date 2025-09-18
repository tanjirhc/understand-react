import React from 'react'

const Singleuserdata = ({singleData}) => {
    console.log(singleData.name)
  return (
    <div>
      <h1>{singleData.name}</h1>
      <p>{singleData.website}</p>
      <h3>{singleData.phone}</h3>
    </div>
  )
}

export default Singleuserdata
