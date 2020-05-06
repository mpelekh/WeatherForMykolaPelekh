import moment, {Moment} from 'moment';
import {WEATHER_API_KEY} from '../config/keys';
import config from '../config/app-config';

type DailyForecastResponse = {
  dt: number;
  weather: Array<{
    main: string;
  }>;
};

type DailyForecast = {
  weatherStatus: string;
  date: Moment;
};

export const fetchCurrentWeather = (lat = 25, lon = 25) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${WEATHER_API_KEY}&units=metric`,
  ).then((res) => res.json());
};

export const fetchWeatherForecast = (
  lat = 25,
  lon = 25,
): Promise<Array<DailyForecast>> => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&APPID=${WEATHER_API_KEY}&units=metric`,
  )
    .then((res) => res.json())
    .then(({daily}) => {
      const forecastList = daily
        .slice(1, config.FORECAST_DAYS_NUMBER + 1)
        .map(({dt, weather: [weather]}: DailyForecastResponse) => {
          return {
            weatherStatus: weather.main,
            date: moment.unix(dt),
          };
        });

      return forecastList;
    });
};
