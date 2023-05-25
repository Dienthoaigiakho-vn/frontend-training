import React, { useEffect } from 'react'
import './index.css'
import DayForecastItem from './DayForecastItem'

const DayForecast = ({ timeLineList, amountItem, isShow, dayForecastTitle }) => {
  const timeLine = timeLineList.filter((_, index) => index % (24 / amountItem) === 0);
  function renderDayForecastItem(timeline) {
    return <li className='timeLine-item'>
      <DayForecastItem
        timeLineTime={timeline.time_epoch}
        timeLineIcon={timeline.condition.icon}
        timeLineTemp={timeline.temp_c}
      />
    </li>
  }
  return (
    <section className={`todayForecast-section ${isShow ? "is-Show" : ""}`}>
      <p className='todayForecast-title'>{dayForecastTitle} forecast</p>
      <ul className='todayForecast-timeLine'>{timeLine.map(renderDayForecastItem)}</ul>
    </section>
  )
}

export default DayForecast
