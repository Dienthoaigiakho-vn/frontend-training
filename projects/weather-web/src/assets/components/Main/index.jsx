import React, { useState } from 'react'
import SearchForm from '../SearchForm'
import WeatherSection from '../WeatherSection'
import AirConditionSection from '../AirConditionSection'
import CityWeather from '../CityWeather'
import './index.css'

const Main = ({ currentIcon, section, setLocationSearch, location, currentTemp, rainChance, timeLineList, feelLikeC, windKph, humidity, uvIndex, visibilityKm, pressureHpa, sunsetTime }) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <section className="main-container">
      <SearchForm setLocationSearch={setLocationSearch} />
      <section className={`main-section ${section === "isWeather" ? "showSection" : ""}`}>
        <WeatherSection
          currentIcon={currentIcon}
          isShow={isShow}
          location={location}
          currentTemp={currentTemp}
          rainChance={rainChance}
          timeLineList={timeLineList}
        />
        <AirConditionSection
          isShow={isShow}
          setIsShow={setIsShow}
          feelLikeC={feelLikeC}
          windKph={windKph}
          humidity={humidity}
          uvIndex={uvIndex}
          rainChance={rainChance}
          visibilityKm={visibilityKm}
          pressureHpa={pressureHpa}
          sunsetTime={sunsetTime}
        />
      </section>
      <section className={`main-section ${section === "isCity" ? "showSection" : ""}`}>
        <CityWeather/>
        
      </section>
    </section>
  )
}

export default Main
