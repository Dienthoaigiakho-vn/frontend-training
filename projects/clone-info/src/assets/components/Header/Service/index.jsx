import React from 'react'
import "./index.css"
import ServiceItem from './ServiceItem'
const Service = () => {
  return (
    <ul className='listServiceItem'>
      <li>
        <ServiceItem imgSrc="https://dienthoaigiakho.vn/_next/image?url=%2Ficons%2Fcommon%2Fthu-cu-header.svg&w=16&q=75" children="Thu Cũ Đổi Mới"></ServiceItem>
      </li>
      <li>
        <ServiceItem imgSrc="https://dienthoaigiakho.vn/_next/image?url=%2Ficons%2Fcommon%2Fthong-tin-header.svg&w=32&q=75" children="Thông tin"></ServiceItem>
      </li>
      <li>
        <ServiceItem imgSrc="https://dienthoaigiakho.vn/_next/image?url=%2Ficons%2Fcommon%2Fgio-hang.svg&w=32&q=75" children="Giỏ Hàng"></ServiceItem>
      </li>
    </ul>
  )
}

export default Service
