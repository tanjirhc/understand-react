import React, { useEffect } from 'react'

const Products = () => {

    useEffect(() => {
        console.log('Products Component Mounted');
    }, []);

  return (
    <div>
      <h2>Products</h2>
    </div>
  )
}

export default Products
