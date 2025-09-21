import React from 'react'
import { useEffect, useState } from 'react'

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
      <h1>Products Compo</h1>
    </div>
  )
}

export default Products
