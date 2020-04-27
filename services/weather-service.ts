import {WEATHER_API_KEY} from '../config/keys';

export const fetchWeather = (lat = 25, lon = 25) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${WEATHER_API_KEY}&units=metric`,
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    });
};
