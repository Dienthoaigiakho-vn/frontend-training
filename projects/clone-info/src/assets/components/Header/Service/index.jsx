import React from 'react'
import "./index.css"
import ServiceItem from './ServiceItem'
const Service = () => {
  return (
    <ul className='listServiceItem'> 
      <ServiceItem imgSrc="https://dienthoaigiakho.vn/_next/image?url=%2Ficons%2Fcommon%2Fthu-cu-header.svg&w=16&q=75" children="Thu Cũ Đổi Mới"></ServiceItem>
      <ServiceItem imgSrc="https://dienthoaigiakho.vn/_next/image?url=%2Ficons%2Fcommon%2Fthong-tin-header.svg&w=32&q=75" children="Thông tin"></ServiceItem>
      <ServiceItem imgSrc="https://dienthoaigiakho.vn/_next/image?url=%2Ficons%2Fcommon%2Fgio-hang.svg&w=32&q=75" children="Giỏ Hàng"></ServiceItem>
    </ul>
  )
}

export default Service
