import React, { useEffect } from 'react'
import './index.css'
import TodayForecastItem from './TodayForecastItem'

const TodayForecast = ({ timeLineList }) => {
  const timeLine = timeLineList.filter((_, index) => index % 4 === 0);
  function renderTodayForecastItem(timeline) {
    return <TodayForecastItem
      timeLineTime={timeline.time_epoch}
      timeLineIcon={timeline.condition.icon}
      timeLineTemp={timeline.temp_c}
    />
  }
  return (
    <section className='todayForecast-section'>
      <p className='todayForecast-title'>Today's forecast</p>
      <ul className='todayForecast-timeLine'>{timeLine.map(renderTodayForecastItem)}</ul>
    </section>
  )
}

export default TodayForecast
