import React from 'react'

const Singleuserdata = ({singleData}) => {
    const {name, website, phone} = singleData;

  return (
    <div>
      <h1>{name}</h1>
      <p>{website}</p>
      <h3>{phone}</h3>
    </div>
  )
}

export default Singleuserdata
