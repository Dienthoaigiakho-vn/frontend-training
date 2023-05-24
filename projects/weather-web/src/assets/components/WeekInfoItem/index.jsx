import React from 'react'
import './index.css'
const WeekForecastItem = ({ dayForecast, conditionIcon, conditionText, maxTempC, minTempC }) => {
  return (
    <li className='weekInfo-item'>
      <span className='weekInfo-day'>{dayForecast}</span>
      <img className='weekInfo-icon' src={conditionIcon} alt="" />
      <strong className='weekInfo-condition'>{conditionText}</strong>
      <span className='weekInfo-minMAx'><strong>{maxTempC}</strong>/{minTempC}</span>
    </li>
  )
}

export default WeekForecastItem
