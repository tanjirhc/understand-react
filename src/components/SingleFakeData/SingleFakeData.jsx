import React from 'react'

const SingleFakeData = ({singleData}) => {
     const {name,age,profession, img} = singleData;
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <h3>Profession: {profession}</h3>
      <img src={img} alt="This is Fake Img" />
    </div>
  )
}

export default SingleFakeData
