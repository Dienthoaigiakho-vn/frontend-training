import React from 'react'
import "./index.css"
import ProductTypeList from '../../ProductTypeList'
const ListingButton = () => {
  return (
    <div className="menu-container">
      <button className='btn-menubar'>
        <img src="https://dienthoaigiakho.vn/_next/image?url=%2Ficons%2Fcommon%2Fmenu-bar.svg&w=32&q=75" alt="" />
        <span className="text-menu">DANH MỤC</span>
        <img src="https://dienthoaigiakho.vn/_next/image?url=%2Ficons%2Fcommon%2Fmenu-down-circle.svg&w=32&q=75" alt="" />
      </button>
      {/* phần này ngưng làm do đã làm rồi, tập trung mục menu ở dưới */}
      {/* <ProductTypeList></ProductTypeList> */}
    </div>  
  )
}

export default ListingButton
