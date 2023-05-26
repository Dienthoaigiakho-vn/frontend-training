import React from 'react'
import './index.css'

const AirConditionItem = ({ infoTitle, infoData, infoIcon }) => {
  return (<>
    <div className='seeMore-infoTitle'>
      <img className='seeMore-infoIcon' src={infoIcon} alt="" />
      <span className='seeMore-infoText'>{infoTitle}</span>
    </div>
    <span className='seeMore-infoData'>{infoData}</span>
  </>
  )
}

export default AirConditionItem
