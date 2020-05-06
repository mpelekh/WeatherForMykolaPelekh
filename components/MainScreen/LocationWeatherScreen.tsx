import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, View, StatusBar, FlatList} from 'react-native';
import moment from 'moment';
import {UIThemeContext} from '../../contexts/ui-theme-context';
import {CityAndDayInfo} from './CityAndDayInfo';
import {CurrentWeatherInfo} from './CurrentWeatherInfo';
import {NextDayWeather} from './NextDayWeather';
import {
  fetchCurrentWeather,
  fetchWeatherForecast,
} from '../../services/weather-service';
import ICONS from '../../utils/icons';
import config from '../../config/app-config';

type WeatherForecast = {
  date: string;
  day: string;
  iconName: string;
};

type WeatherScreenProps = {
  latitude: number;
  longitude: number;
};

export const LocationWeatherScreen = ({
  latitude,
  longitude,
}: WeatherScreenProps) => {
  const {styles} = useContext(UIThemeContext);
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('10');
  const [weatherStatus, setWeatherStatus] = useState('Clear');
  const [weatherDescription, setWeatherDescription] = useState('');
  const [weatherForecast, setWeatherForecast] = useState<
    Array<WeatherForecast>
  >([]);
  const currentDate = moment();
  const day = currentDate.format('dddd');
  const time = currentDate.format('h:mm A');

  useEffect(() => {
    const fetch = () =>
      fetchCurrentWeather(latitude, longitude).then(
        ({name, main: {temp}, weather: [{main, description}]}) => {
          setCity(name);
          setTemperature(Math.round(temp).toString());
          setWeatherStatus(main);
          setWeatherDescription(description);
        },
      );
    const intervalId = setInterval(
      fetch,
      config.FETCH_CURRENT_WEATHER_DATA_INTERVAL_MS,
    );

    fetch();

    return () => clearInterval(intervalId);
  }, [latitude, longitude]);

  useEffect(() => {
    const fetch = () =>
      fetchWeatherForecast(latitude, longitude).then((forecastList) => {
        setWeatherForecast(
          forecastList.map(({weatherStatus, date}) => ({
            date: date.format('M/D'),
            day: date.format('ddd'),
            iconName: ICONS[weatherStatus].day,
          })),
        );
      });
    const intervalId = setInterval(
      fetch,
      config.FETCH_WEATHER_FORECAST_DATA_INTERVAL_MS,
    );

    fetch();

    return () => clearInterval(intervalId);
  }, [latitude, longitude]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaViewTop} />
      <SafeAreaView style={styles.safeAreaViewBottom}>
        <View style={styles.container}>
          <View style={styles.mainSection}>
            <CityAndDayInfo city={city} day={day} />
            <CurrentWeatherInfo
              time={time}
              iconName={ICONS[weatherStatus].day}
              description={weatherDescription}
              temperature={temperature}
            />
          </View>

          <View style={styles.nextDaysWeatherSection}>
            <FlatList
              data={weatherForecast}
              horizontal={true}
              renderItem={({item: {date, day, iconName}}) => (
                <NextDayWeather date={date} day={day} iconName={iconName} />
              )}
              keyExtractor={(item) => item.date}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
