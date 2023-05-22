import React from 'react'
import './index.css'

const WeatherInfo = ({location,currentTemp}) => {
  return (
    <section className='weatherInfo-section'>
      <div className="weatherInfo-left">
        <h1>{location}</h1>
        <p>Chance of rain: rainRate %</p>
        
        <h2>{currentTemp}</h2>
      </div>

      <div className='weatherInfo-right'>
        <img src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png" alt="" />
      </div>
    </section>
  )
}

export default WeatherInfo
