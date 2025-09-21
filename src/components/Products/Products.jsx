import React from 'react'
import { useEffect } from 'react'

const Products = () => {

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

  return (
    <div>
      <h1>Products Compo</h1>
    </div>
  )
}

export default Products
