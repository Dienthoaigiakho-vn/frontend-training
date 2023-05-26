import { postApi } from '../../../api/postApi.mjs'
import { useEffect, useState } from 'react'
import './index.css'
import Footer from '../Footer'
import Main from '../Main'


const WeatherWeb = () => {
  const [weather, setWeather] = useState([])
  const [isDone, setIsDone] = useState(false)
  const [section, setSection] = useState("isCity")
  const [locationSearch, setLocationSearch] = useState("ho chi minh")
  // "&q=" + "Ho%20Chi%20Minh" + "&days=" + "7" +"&aqi=no&alerts=no"  
  // https://api.weatherapi.com/v1/forecast.json?key=5f1c66d7092b4919bed72132232205&q=hanoi&days=7&aqi=no&alerts=no

  useEffect(() => {
    (async () => {
      try {
        const res = await postApi.getAll({ key: "5f1c66d7092b4919bed72132232205", q: locationSearch, days: 7, aqi: "no", alerts: "no" })
        const weather = res.data
        setWeather(weather)
        setIsDone(true)
      } catch (error) {
        console.log(error);
        setIsDone(false)
      }
    })();
  }, [locationSearch])

  if (isDone) {
    return (
      <div className='weather-container'>
        <Footer
          setSection={setSection}
        />
        <Main
          section={section}
          setLocationSearch={setLocationSearch}
          location={weather.location.name}
          currentTemp={weather.current.temp_c}
          rainChance={weather.forecast.forecastday[0].day.daily_chance_of_rain}
          currentIcon={weather.current.condition.icon}
          todayTimeLineList={weather.forecast.forecastday[0].hour}
          feelLikeC={weather.current.feelslike_c}
          windKph={weather.current.wind_kph}
          humidity={weather.current.humidity}
          uvIndex={weather.current.uv}
          visibilityKm={weather.current.vis_km}
          pressureHpa={weather.current.pressure_mb}
          sunsetTime={weather.forecast.forecastday[0].astro.sunset}
          weekForecast={weather.forecast.forecastday}
          tomorrowTimeLineList={weather.forecast.forecastday[1].hour}
        />

      </div>
    )
  } else {
    return (
      <div className='loading'>
        <h1>KHÔNG ỔN RỒI ĐẠI ZƯƠNG ƠI</h1>
      </div>
    )
  }
}

export default WeatherWeb
