import React from 'react'
import "./index.css"
const ServiceItem = ({children, imgSrc}) => {
  return (
    <a className='service-group' >
      <img className='service-Img' src={imgSrc} alt="" />
      <span>{children}</span>
    </a>
  )
}

export default ServiceItem
