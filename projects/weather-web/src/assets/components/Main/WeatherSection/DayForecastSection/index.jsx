import React from 'react'
import "./index.css"
import DayForecast from '../../../common/DayForecast'

const DayForecastSection = ({ isShow, timeLineList }) => {
  return (
    <>
      <section className='dayForecast-section'>
        <DayForecast
          dayForecastTitle="Today's"
          isShow={isShow}
          amountItem="12"
          timeLineList={timeLineList}
        />
      </section>
    </>
  )
}

export default DayForecastSection
