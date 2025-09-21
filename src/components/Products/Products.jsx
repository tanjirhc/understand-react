import React from 'react'
import { useEffect, useState } from 'react'
import Product from '../Product/Product'

const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

  return (
    <div>
      {
        products.map(product => <Product />)
      }
    </div>
  )
}

export default Products
