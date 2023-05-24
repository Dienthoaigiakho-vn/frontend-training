import React, { useEffect } from 'react'
import './index.css'
import TodayForecastItem from './TodayForecastItem'

const TodayForecast = ({ timeLineList, amountItem }) => {
  const timeLine = timeLineList.filter((_, index) => index % (24 / amountItem) === 0); //xu li phan lay cot
  function renderTodayForecastItem(timeline) {
    return <li className='timeLine-item'>
      <TodayForecastItem
        timeLineTime={timeline.time_epoch}
        timeLineIcon={timeline.condition.icon}
        timeLineTemp={timeline.temp_c}
      />
    </li>
  }
  return (
    <section className='todayForecast-section'>
      <p className='todayForecast-title'>Today's forecast</p>
      <ul className='todayForecast-timeLine'>{timeLine.map(renderTodayForecastItem)}</ul>
    </section>
  )
}

export default TodayForecast
