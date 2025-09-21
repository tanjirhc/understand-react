import React, { useEffect } from 'react'

const Products = () => {

    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, []);

  return (
    <div>
      <h2>Products</h2>
    </div>
  )
}

export default Products
