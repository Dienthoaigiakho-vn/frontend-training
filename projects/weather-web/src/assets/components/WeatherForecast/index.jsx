import React from 'react'
import './index.css'
import WeatherInfo from '../WeatherInfo'

const WeatherForecast = () => {
  return (
    <section className='weatherForecast-section'>
      <p className='weatherForecast-title'>Today's forecast</p>
      <ul className='weatherForecast-timeLine'>

        <li>
          <div className="timeLine-container">
            <span className='timeLine'>6:00 AM</span>
            <img src="https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png" alt="" />
            <span className='temperature'>25*</span>
          </div>
        </li>

        <li>
          <div className="timeLine-container">
            <span className='timeLine'>6:00 AM</span>
            <img src="https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png" alt="" />
            <span className='temperature'>25*</span>
          </div>
        </li>

        <li>
          <div className="timeLine-container">
            <span className='timeLine'>6:00 AM</span>
            <img src="https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png" alt="" />
            <span className='temperature'>25*</span>
          </div>
        </li>

        <li>
          <div className="timeLine-container">
            <span className='timeLine'>6:00 AM</span>
            <img src="https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png" alt="" />
            <span className='temperature'>25*</span>
          </div>
        </li>

        <li>
          <div className="timeLine-container">
            <span className='timeLine'>6:00 AM</span>
            <img src="https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png" alt="" />
            <span className='temperature'>25*</span>
          </div>
        </li>

        <li>
          <div className="timeLine-container">
            <span className='timeLine'>6:00 AM</span>
            <img src="https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png" alt="" />
            <span className='temperature'>25*</span>
          </div>
        </li>

      </ul>
    </section>
  )
}

export default WeatherForecast
