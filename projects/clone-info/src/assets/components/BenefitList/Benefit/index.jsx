import React from 'react'
import "./index.css"

const Benefit = ({benefitImg, benefitTitle, benefitDesc}) => {
  return (
    <a className='benefit-container'>
      <img src={benefitImg} className='benefit-icon'/>
      <div className='benefit-content'>
        <span className='benefit-title'>{benefitTitle}</span>
        <span className='benefit-desc'>{benefitDesc}</span>
      </div>

    </a>
  )
}

export default Benefit
