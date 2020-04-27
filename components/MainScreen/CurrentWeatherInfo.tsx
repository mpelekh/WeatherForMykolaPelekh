import React, {useContext} from 'react';
import {View} from 'react-native';
import {UIThemeContext} from '../../contexts/ui-theme-context';
import {CurrentTime} from './CurrentTime';
import {CurrentWeather} from './CurrentWeather';
import {CurrentTemperature} from './CurrentTemperature';

type CurrentWeatherInfoProps = {
  time: string;
  iconName: string;
  description: string;
  temperature: string;
};

export const CurrentWeatherInfo = ({
  time,
  iconName,
  description,
  temperature,
}: CurrentWeatherInfoProps) => {
  const {styles} = useContext(UIThemeContext);

  return (
    <View style={styles.mainSectionCurrentWeatherInfo}>
      <View style={{...styles.section, ...styles.currentWeatherView}}>
        <CurrentTime time={time} />
        <CurrentWeather iconName={iconName} description={description} />
        <CurrentTemperature temperature={temperature} />
      </View>
    </View>
  );
};
