import { postApi } from '../../../api/postApi.mjs'
import { useEffect, useState } from 'react'
import React from 'react'
import SearchForm from '../SearchForm'
import WeatherSection from '../WeatherSection'
import AirConditionSection from '../AirConditionSection'
import './index.css'

const Main = () => {
  const [weather, setWeather] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const res = await postApi.getAll()
        const weather = res.data
        setWeather(weather)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])
  console.log(weather);
  //DANG LAM TOI DOAN NAY, LAY DATA TREN API VE NHUNG VAN DE LA DATA LAY KHONG KIP RENDER GAY RA LOI
  //TIM CACH GIAI QUYET
  return (
    <div className='main-container'>
      <div className="content-container">
        <SearchForm />
        <WeatherSection/>
        <AirConditionSection />
      </div>
    </div>
  )
}

export default Main
