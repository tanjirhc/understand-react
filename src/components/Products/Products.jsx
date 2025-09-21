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
    <div class="grid grid-cols-3 gap-8 flex items-center justify-center h-screen">
      {
        products.map(product => <Product 
            key={product.id} 
            product={product}
        />)
      }
    </div>
  )
}

export default Products
