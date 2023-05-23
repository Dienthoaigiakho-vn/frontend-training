import React from 'react'
import SearchForm from '../SearchForm'
import WeatherSection from '../WeatherSection'
import AirConditionSection from '../AirConditionSection'
import './index.css'

const Main = ({ location, currentTemp, rainChance, timeLineList, feelLikeC, windKph, humidity, uvIndex }) => {
  return (
    <div className='main-container'>
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
        />
      </div>
    </div>
  )
}

export default Main
