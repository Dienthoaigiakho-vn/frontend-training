import React from 'react'
import './index.css'
import AirConditionItem from './AirConditionItem'

const AirConditionSection = ({ feelLikeC, windKph, humidity, uvIndex }) => {
  return (
    <>
      <section className='airCondition-section'>
        <p className='airCondition-title'>Air conditions</p>
        <ul className='airCondition-info'>

          <li className="airCondition-infoItem">
            <div className='airCondition-infoTitle'>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 25.9993V10C18 6.68629 20.6863 4 24 4C27.3137 4 30 6.68629 30 10V25.9993C32.4289 27.8237 34 30.7284 34 34C34 39.5228 29.5228 44 24 44C18.4772 44 14 39.5228 14 34C14 30.7284 15.5711 27.8237 18 25.9993Z" fill="none" stroke="#333" strokeWidth="4" strokeLinejoin="round" /><path d="M24 17V30" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M24 38C26.2091 38 28 36.2091 28 34C28 31.7909 26.2091 30 24 30C21.7909 30 20 31.7909 20 34C20 36.2091 21.7909 38 24 38Z" fill="none" stroke="#333" strokeWidth="4" strokeLinejoin="round" />
              </svg>
              <span className='airCondition-infoText'>Feel Like</span>
            </div>
            <span className='airCondition-infoData'>{feelLikeC}°C</span>
          </li>

          <li className="airCondition-infoItem">
            <div className='airCondition-infoTitle'>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 17H10C7.79086 17 6 18.7909 6 21V21C6 23.2091 7.79086 25 10 25H12" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 33H19C16.7909 33 15 34.7909 15 37V37C15 39.2091 16.7909 41 19 41H22" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M27 7H24C21.7909 7 20 8.79086 20 11V11C20 13.2091 21.7909 15 24 15H27" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M24 15H40" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 25H42" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 33H34" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span className='airCondition-infoText'>Wind</span>
            </div>
            <span className='airCondition-infoData'>{windKph} km/h</span>
          </li>

          <li className="airCondition-infoItem">
            <div className='airCondition-infoTitle'>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M24 44C32.2843 44 39 37.2843 39 29C39 15 24 4 24 4C24 4 9 15 9 29C9 37.2843 15.7157 44 24 44Z" stroke="#333" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 29.0001C9 37.2844 15.7157 44.0001 24 44.0001C32.2843 44.0001 39 37.2844 39 29.0001C39 29.0001 30 32.0001 24 29.0001C18 26.0001 9 29.0001 9 29.0001Z" fill="none" stroke="#333" strokeWidth="4" strokeLinejoin="round" /></svg>
              <span className='airCondition-infoText'>Humidity</span>
            </div>
            <span className='airCondition-infoData'>{humidity}%</span>
          </li>

          <li className="airCondition-infoItem">
            <div className='airCondition-infoTitle'>
              <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.15039 9.15088L11.3778 11.3783" stroke="#8d939d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 24H6.15" stroke="#8d939d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.15039 38.8495L11.3778 36.6221" stroke="#8d939d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M38.8495 38.8495L36.6221 36.6221" stroke="#8d939d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M44.9996 24H41.8496" stroke="#8d939d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M38.8495 9.15088L36.6221 11.3783" stroke="#8d939d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M24 3V6.15" stroke="#8d939d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z" fill="#8d939d" stroke="#8d939d" strokeWidth="4" strokeLinejoin="round" /><path d="M24 45.0001V41.8501" stroke="#8d939d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span className='airCondition-infoText'>UV Index</span>
            </div>
            <span className='airCondition-infoData'>
              {uvIndex} {uvIndex > 5 ? "High" : ""}
            </span>
          </li>

        </ul>
        <button className='airCondition-btnSeeMore'>
          <span>See more</span>
        </button>
      </section>
      <section className='airCondition-seeMore'>
        <ul className='seeMore-info'>

          <li className='seeMore-infoItem'>
            <AirConditionItem />
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem />
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem />
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem />
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem />
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem />
          </li>

        </ul>
      </section>
    </>
  )
}

export default AirConditionSection
