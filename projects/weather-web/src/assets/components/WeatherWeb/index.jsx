import { postApi } from '../../../api/postApi.mjs'
import { useEffect, useState } from 'react'
import './index.css'
import Footer from '../Footer'
import Main from '../Main'

const WeatherWeb = () => {
  const [weather, setWeather] = useState([])
  const [isDone, setIsDone] = useState(false)
  useEffect(() => {
    (async () => {
      try {
        const res = await postApi.getAll()
        const weather = res.data
        setWeather(weather)
        setIsDone(true)
      } catch (error) {
        console.log(error);
        setIsDone(false)
      }
    })();
  }, [])

  if (isDone) {
    return (
      <div className='weather-container'>
        <Footer />
        <Main location={weather.location.name}
          currentTemp={weather.current.temp_c}
          rainChance={weather.forecast.forecastday[0].day.daily_chance_of_rain}
          timeLineList={weather.forecast.forecastday[0].hour}
        />
      </div>
    )
  } else {
    return (
      <div className='loading'>
        <h1>KHONG ON ROI DAI VUONG OI</h1>
      </div>
    )
  }
}

export default WeatherWeb
