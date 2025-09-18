import React from 'react'

const Singleuserdata = (props) => {
    console.log(props.singleData.name)
  return (
    <div>
      <h1>{props.singleData.name}</h1>
    </div>
  )
}

export default Singleuserdata
