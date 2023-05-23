import React from 'react'
import './index.css'
const TodayForecastItem = ({ timeLineTime, timeLineIcon, timeLineTemp }) => {
  const date = new Date(timeLineTime * 1000);
  console.log(date.getMinutes());
  return (
    <li className='timeLine-item'>
      <div className="timeLine-container">
        <span className='timeLine-time'>{date.getHours()}:00</span>
        <img className='timeLine-icon' src={timeLineIcon} alt="" />
        <span className='timeLine-temperature'>{timeLineTemp}°C</span>
      </div>
    </li>
  )
}

export default TodayForecastItem
