import React, { useState } from 'react'
import SearchForm from './SearchForm'
import WeatherSection from './WeatherSection'
import AirConditionSection from './WeatherSection/AirConditionSection'
import './index.css'
import DayForecastSection from './WeatherSection/DayForecastSection'
import Description from './Description'

const Main = ({ weekForecast, tomorrowTimeLineList, currentIcon, section, setLocationSearch, location, currentTemp, rainChance, todayTimeLineList, feelLikeC, windKph, humidity, uvIndex, visibilityKm, pressureHpa, sunsetTime }) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <section className="main-container">
      <section className={`main-section ${section === "isWeather" ? "showSection" : ""}`}>
        <div className="content-container">
          <SearchForm setLocationSearch={setLocationSearch} />
          <WeatherSection
            currentIcon={currentIcon}
            location={location}
            currentTemp={currentTemp}
            rainChance={rainChance}
          />
          <DayForecastSection
            isShow={isShow}
            timeLineList={todayTimeLineList} />
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
        </div>
        <div className="description-container">
          <Description
            section={section}
            weekForecast={weekForecast}
            timeLineList={tomorrowTimeLineList}
          />
        </div>
      </section>

    </section>
  )
}

export default Main
