import React from 'react'
import { useEffect, useState } from 'react'
import Product from '../Product/Product'

const Products = ({addToCart}) => {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

  return (
    <div className='grid grid-cols-5 gap-4 m-4 p-6 py-3'>
      {
        products.map(product => <Product 
            key={product.id} 
            product={product}
            addToCart={addToCart}
        />)
      }
    </div>
  )
}

export default Products
