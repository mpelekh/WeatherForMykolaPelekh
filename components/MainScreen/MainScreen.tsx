import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, View, StatusBar, FlatList} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment';
import {UIThemeContext} from '../../contexts/ui-theme-context';
import {CityAndDayInfo} from './CityAndDayInfo';
import {CurrentWeatherInfo} from './CurrentWeatherInfo';
import {NextDayWeather} from './NextDayWeather';
import {fetchWeather} from '../../services/weather-service';
import ICONS, {DEFAULT_ICON} from '../../utils/icons';
import config from '../../config/app-config';

export const MainScreen = () => {
  const {styles} = useContext(UIThemeContext);
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('10');
  const [weatherStatus, setWeatherStatus] = useState('Clear');
  const [weatherDescription, setWeatherDescription] = useState('');
  const currentDate = moment();
  const day = currentDate.format('dddd');
  const time = currentDate.format('h:mm A');

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        fetchWeather(position.coords.latitude, position.coords.longitude).then(
          ({name, main: {temp}, weather: [{main, description}]}) => {
            setCity(name);
            setTemperature(Math.round(temp).toString());
            setWeatherStatus(main);
            setWeatherDescription(description);
          },
        );
      },
      (error) => {
        console.error(error);
      },
    );
  }, []);

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
              data={Array.from({length: config.FORECAST_DAYS_NUMBER}).map(
                (_, index) => {
                  return currentDate.clone().add(index + 1, 'days');
                },
              )}
              horizontal={true}
              renderItem={({item: date}) => (
                <NextDayWeather
                  day={date.format('ddd')}
                  iconName={DEFAULT_ICON}
                  date={date.format('M/D')}
                />
              )}
              keyExtractor={(item) => item.toString()}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
