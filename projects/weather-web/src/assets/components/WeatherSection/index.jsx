import React from 'react'
import './index.css'
import WeatherInfo from '../WeatherInfo'
import WeatherForecast from '../WeatherForecast'

const WeatherSection = ({location, currentTemp}) => {
  return (
    <section className='weather-section'>
      <WeatherInfo
      location={location}
      currentTemp={currentTemp}/>
      <WeatherForecast/>
      
    </section>
  )
}

export default WeatherSection
