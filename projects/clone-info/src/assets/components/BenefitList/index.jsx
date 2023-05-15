import React from 'react'
import "./index.css"
import Benefit from './Benefit'

const BenefitList = () => {
  return (
    <ul className='benefit-group'>
      <li>
        <Benefit
          benefitImg="https://dienthoaigiakho.vn/_next/image?url=%2Ficons%2Fservices%2Fgiao-nhanh-2h.png&w=48&q=75"
          benefitTitle="Giao Nhanh 2H"
          benefitDesc="Miễn phí - An toàn"
        ></Benefit>
      </li>
      <li>
        <Benefit
          benefitImg="https://dienthoaigiakho.vn/_next/image?url=%2Ficons%2Fservices%2Ftu-van-mien-phi.png&w=32&q=75"
          benefitTitle="Tư Vấn miễn phí"
          benefitDesc="Từ 8-24H: 19008922"
        ></Benefit>
      </li>
      <li>
        <Benefit
          benefitImg="https://dienthoaigiakho.vn/_next/image?url=%2Ficons%2Fservices%2Fdoi-tra-mien-phi.png&w=32&q=75"
          benefitTitle="Đổi Trả Miễn Phí"
          benefitDesc="Lên đến 45 ngày"
        ></Benefit>
      </li>
      <li>
        <Benefit
          benefitImg="https://dienthoaigiakho.vn/_next/image?url=%2Ficons%2Fservices%2Fmien-phi-thanh-toan.png&w=32&q=75"
          benefitTitle="Miễn phí thanh toán"
          benefitDesc="Visa Master ATM"
        ></Benefit>
      </li>
      <li>
        <Benefit
          benefitImg="https://dienthoaigiakho.vn/_next/image?url=%2Ficons%2Fservices%2Ftra-gop-0-lai-suat.png&w=32&q=75"
          benefitTitle="Trả Góp 0% Lãi Suất"
          benefitDesc="Online - Tận Nhà"
        ></Benefit>
      </li>
    </ul>
  )
}

export default BenefitList
