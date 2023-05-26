import React, { useState } from 'react'
import './index.css'
import AirConditionItem from './AirConditionItem'

const AirConditionSection = ({ isShow, setIsShow, feelLikeC, windKph, humidity, uvIndex, rainChance, visibilityKm, pressureHpa, sunsetTime }) => {
  return (
    <>
      <section className={`airCondition-section ${isShow ? "is-Show" : ""}`}>
        <p className='airCondition-title'>Air conditions</p>
        <ul className='airCondition-info'>

          <li className="airCondition-infoItem">
            <div className='airCondition-infoTitle'>
              <img src="src/assets/icons/Icon-feel-like.png" alt="" />
              <span className='airCondition-infoText'>Feel Like</span>
            </div>
            <span className='airCondition-infoData'>{feelLikeC}<sup>°C</sup></span>
          </li>

          <li className="airCondition-infoItem">
            <div className='airCondition-infoTitle'>
              <img src="src/assets/icons/Icon-wind.png" alt="" />
              <span className='airCondition-infoText'>Wind</span>
            </div>
            <span className='airCondition-infoData'>{windKph} km/h</span>
          </li>

          <li className="airCondition-infoItem">
            <div className='airCondition-infoTitle'>
              <img src="src/assets/icons/Icon-humidity.png" alt="" />
              <span className='airCondition-infoText'>Humidity</span>
            </div>
            <span className='airCondition-infoData'>{humidity}%</span>
          </li>

          <li className="airCondition-infoItem">
            <div className='airCondition-infoTitle'>
              <img src="src/assets/icons/Icon-uv-index.png" alt="" />
              <span className='airCondition-infoText'>UV Index</span>
            </div>
            <span className='airCondition-infoData'>
              {uvIndex} {uvIndex > 5 ? "High" : ""}
            </span>
          </li>

        </ul>
        <button onClick={() => setIsShow(true)} className='airCondition-btnSeeMore'>
          <span>See more</span>
        </button>
      </section>
      <section className={`airCondition-seeMore ${isShow ? "is-show" : ""}`}>
        <ul className='seeMore-info'>

          <li className='seeMore-infoItem'>
            <AirConditionItem infoTitle="UV Index" infoData={uvIndex > 5 ? uvIndex + " High" : ""} infoIcon="src/assets/icons/Icon-uv-index.png" />
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem infoTitle="Wind" infoData={windKph + " km/h"} infoIcon="src/assets/icons/Icon-wind.png" />
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem infoTitle="Humidity" infoData={humidity + "%"} infoIcon="src/assets/icons/Icon-humidity.png" />
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem infoTitle="Visibility" infoData={visibilityKm + " km"} infoIcon="src/assets/icons/Icon-visibility.png" />
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem infoTitle="Feel Like" infoData={feelLikeC + "°C"} infoIcon="src/assets/icons/Icon-feel-like.png" />
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem infoTitle="Chance of rain" infoData={rainChance > 80 ? rainChance + "% High" : ""} infoIcon="src/assets/icons/Icon-rainrate.png" />
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem infoTitle="Pressure" infoData={pressureHpa + " hPA"} infoIcon="src/assets/icons/Icon-pressure.png" />
          </li>

          <li className='seeMore-infoItem'>
            <AirConditionItem infoTitle="Sunset" infoData={sunsetTime} infoIcon="src/assets/icons/Icon-sunset.png" />
          </li>
          <button onClick={() => setIsShow(false)} className='seeMore-btnHide'>
            <img src="src/assets/icons/Icon-hide.png" alt="" />
          </button>
        </ul>
      </section>
    </>
  )
}

export default AirConditionSection
