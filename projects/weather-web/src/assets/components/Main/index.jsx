import React, { useState } from 'react'
import SearchForm from '../SearchForm'
import WeatherSection from '../WeatherSection'
import AirConditionSection from '../AirConditionSection'
import './index.css'

const Main = ({ section, setLocationSearch, location, currentTemp, rainChance, timeLineList, feelLikeC, windKph, humidity, uvIndex, visibilityKm, pressureHpa, sunsetTime }) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <section className={`main-container ${section}`}>
      <SearchForm setLocationSearch={setLocationSearch} />
      <section className="main-weatherSection">
        <WeatherSection
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
    </section>
  )
}

export default Main
