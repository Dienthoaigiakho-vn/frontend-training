import React from 'react'
import './index.css'

const WeatherInfo = ({location,currentTemp, rainChance}) => {
  return (
    <section className='weatherInfo-section'>
      <div className="weatherInfo-left">
        <h1>{location}</h1>
        <p>Chance of rain: {rainChance}%</p>
        <h2>{currentTemp}°C</h2>
      </div>

      <div className='weatherInfo-right'>
        <img src="//cdn.weatherapi.com/weather/64x64/day/116.png" alt="" />
      </div>
    </section>
  )
}

export default WeatherInfo
