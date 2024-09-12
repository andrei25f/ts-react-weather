import { useState } from 'react'
import Form from './Form'
import Weather from './Weather'
import { api_key, base_url, WeatherData } from '../utils/constant';

function Data() {
  const [weatherInfo, setWeatherInfo] = useState<WeatherData>({});
  const [message, setMessage] = useState('Enter city name');

  const getWeather = async (city: string) => {
    try {
      const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
      const data = await response.json();
      setWeatherInfo({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        pressure: data.main.pressure,
        sunset: data.sys.sunset
      })
      setMessage('')
    } catch (e) {
      setMessage('Enter correct city name')
    }
    /*fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
        .then(response => response.json())
        .then(data => {
          setWeatherInfo({
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset
          })
          setMessage('')
        })
        .catch(e => setMessage('Enter correct city name'));*/
  }

  return (
    <div>
      <Form getWeather={getWeather} />
      <Weather weather={weatherInfo} message={message} />
    </div>
  )
}

export default Data