import React from 'react'
import "./index.css"

const ProductType = ({ productTypeImg, productType }) => {
  return (
    <a className='productType-container'>
      <img className='productType-icon' src={productTypeImg} alt="" />
      <span>{productType}</span>
    </a>
  )
}

export default ProductType
