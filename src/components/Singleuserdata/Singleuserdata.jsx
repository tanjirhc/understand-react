import React from 'react'

const Singleuserdata = ({singleData}) => {
    console.log(singleData.name)
  return (
    <div>
      <h1>{singleData.name}</h1>
    </div>
  )
}

export default Singleuserdata
