import { WeatherData } from "../utils/constant"

interface Props {
  weather: WeatherData,
  message: string
}

function Weather({weather, message}: Props) {
  if (message) {
    return (
      <div>{message}</div>
    )
  } else {
    return (
      <div className='infoWeath'>{
          !message && <>
            <p>Location: {weather.country}, {weather.city}</p>
            <p>Temp: {weather.temp}</p>
            <p>Pressure: {weather.pressure}</p>
            <p>Sunset: {new Date((weather.sunset ?? 0) * 1000).toLocaleTimeString()}</p>
          </>
      }
          <>{message}</>
      </div>
    )
  }
}

export default Weather