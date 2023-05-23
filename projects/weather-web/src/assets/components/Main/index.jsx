import React from 'react'
import SearchForm from '../SearchForm'
import WeatherSection from '../WeatherSection'
import AirConditionSection from '../AirConditionSection'
import './index.css'

const Main = ({ location, currentTemp, rainChance, timeLineList }) => {
  return (
    <div className='main-container'>
      <div className="content-container">
        <SearchForm />
        <WeatherSection location={location}
          currentTemp={currentTemp}
          rainChance={rainChance}
          timeLineList={timeLineList}
        />
        <AirConditionSection />
      </div>
    </div>
  )
}

export default Main
