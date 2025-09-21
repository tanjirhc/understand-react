import React, { useState, useEffect } from 'react'
import Product from '../Product/Product'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

  return (
    <div>
      {
        products.map(products => <Product 
            key={products.id} 
            product={products}
        />)
      }
    </div>
  )
}

export default Products
