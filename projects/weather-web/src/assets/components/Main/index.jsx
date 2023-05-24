import React from 'react'
import SearchForm from '../SearchForm'
import WeatherSection from '../WeatherSection'
import AirConditionSection from '../AirConditionSection'
import './index.css'

const Main = ({ location, currentTemp, rainChance, timeLineList, feelLikeC, windKph, humidity, uvIndex, visibilityKm, pressureHpa, sunsetTime }) => {
  return (
    <section className='main-container'>
      <div className="content-container">
        <SearchForm />
        <WeatherSection location={location}
          currentTemp={currentTemp}
          rainChance={rainChance}
          timeLineList={timeLineList}
        />
        <AirConditionSection
          feelLikeC={feelLikeC}
          windKph={windKph}
          humidity={humidity}
          uvIndex={uvIndex}
          rainChance={rainChance}
          visibilityKm={visibilityKm}
          pressureHpa={pressureHpa}
          sunsetTime={sunsetTime}
        />
      </div>
    </section>
  )
}

export default Main
