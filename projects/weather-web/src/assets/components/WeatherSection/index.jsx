import React from 'react'
import './index.css'
import WeatherInfo from '../WeatherInfo'
import WeatherForecast from '../WeatherForecast'

const WeatherSection = ({location}) => {
  return (
    <section className='weather-section'>
      <WeatherInfo/>
      <WeatherForecast/>
      
    </section>
  )
}

export default WeatherSection
