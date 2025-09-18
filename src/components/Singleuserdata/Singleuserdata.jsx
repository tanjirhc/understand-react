import React from 'react'

const Singleuserdata = ({singleData}) => {
    const {name, website, phone, company} = singleData;
    console.log(singleData)

  return (
    <div>
      <h1>{name}</h1>
      <p>{website}</p>
      <h3>{phone}</h3>
      <h4>Company Name: {company.name}</h4>
    </div>
  )
}

export default Singleuserdata
