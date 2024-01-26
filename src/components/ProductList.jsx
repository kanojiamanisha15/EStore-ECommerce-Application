import React from 'react'
import ProductCard from '../UI/ProductCard'

function ProductList({ data }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {
        data.length === 0 ? (<h1>No Products Found!</h1>) :
          data.map((item, index) => (
            <ProductCard item={item} key={index} />
          )
          )
      }
    </div>
  )
}

export default ProductList