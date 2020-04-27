import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {UIThemeContext} from '../../contexts/ui-theme-context';

type NextDayWeatherProps = {
  day: string;
  iconName: string;
  date: string;
};

export const NextDayWeather = ({day, iconName, date}: NextDayWeatherProps) => {
  const {styles} = useContext(UIThemeContext);

  return (
    <View style={styles.nextDayForecastView}>
      <Text style={styles.nextDayForecastDayText}>{day}</Text>
      <Icon style={styles.nextDayForecastWeatherIcon} name={iconName} />
      <Text style={styles.nextDayForecastDateText}>{date}</Text>
    </View>
  );
};
