import React from 'react'
import './index.css'
import WeatherInfo from '../WeatherInfo'
import TodayForecast from '../TodayForecast'

const WeatherSection = ({ location, currentTemp, rainChance, timeLineList }) => {
  return (
    <section className='weather-section'>
      <WeatherInfo
        location={location}
        currentTemp={currentTemp}
        rainChance={rainChance} />
      <TodayForecast
        amountItem="6"
        timeLineList={timeLineList}
      />
    </section>
  )
}

export default WeatherSection
