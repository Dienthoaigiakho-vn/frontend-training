import React, { useState } from 'react'
import "./index.css"


const Information = () => {
  
  const [infoClick, setInfoClick] = useState("guide");


  return (
    <div className='information__container'>
      <h2>Thông tin</h2>

      <ul className='information__list'>
        <li className={`information_group ${infoClick === "introduction" ? "introduction-show" : ""}`}>
          <a onClick={() => setInfoClick("introduction")} className='group-title' >GIỚI THIỆU VỀ "GIÁ KHO"</a>
          <ul className='title-list'>
            <li><a>FACEBOOK | INSTAGRAM | YOUTUBE | ZALO PAGE</a></li>
            <li><a>Hệ thống Cộng tác viên Toàn Quốc</a></li>
            <li><a>VĂN HOÁ DOANH NGHIỆP CỦA GIÁ KHO</a></li>
            <li><a>HỢP TÁC CÙNG GIÁ KHO</a></li>
            <li><a>BÁN HÀNG CÙNG DOANH NGHIỆP</a></li>
          </ul>
        </li>

        <li className={`information_group ${infoClick === "policy" ? "policy-show" : ""}`}>
          <a onClick={() => setInfoClick("policy")} className='group-title'>CHÍNH SÁCH</a>
          <ul className='title-list'>
            <li><a>Chính sách giao nhận hàng</a></li>
            <li><a>GKCARE - Chăm sóc bạn 24/7</a></li>
            <li><a>Điều khoản sử dụng</a></li>
            <li><a>Quy định về sao lưu dữ liệu</a></li>
            <li><a>Điểm tích lũy GIÁ KHO Member</a></li>
            <li><a>Chính sách khui (mở) hộp các sản phẩm Apple</a></li>
            <li><a>Chính sách bảo mật</a></li>
            <li><a>Chính sách trả hàng và hoàn tiền</a></li>
            <li><a>Khảo sát về trải nghiệm người dùng khi sử dụng website mới của Điện Thoại Giá Kho</a></li>
          </ul>
        </li>

        <li className={`information_group ${infoClick === "guide" ? "guide-show" : ""}`}>
          <a onClick={() => setInfoClick("guide")} className='group-title'>HƯỚNG DẪN SỬ DỤNG</a>
          <ul className='title-list'>
            <li><a>Hướng dẫn mua trả góp</a></li>
            <li><a>Kiểm tra bảo hành</a></li>
            <li><a>Hướng dẫn sử dụng voucher</a></li>
            <li><a>Hướng dẫn thanh toán</a></li>
            <li><a>Hướng dẫn mua hàng</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Information
