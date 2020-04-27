import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {UIThemeContext} from '../../contexts/ui-theme-context';

type CurrentWeatherProps = {
  iconName: string;
  description: string;
};

export const CurrentWeather = ({
  iconName,
  description,
}: CurrentWeatherProps) => {
  const {styles} = useContext(UIThemeContext);

  return (
    <View style={styles.weatherView}>
      <Icon style={styles.weatherViewIcon} name={iconName} />
      <Text style={styles.weatherViewText}>{description}</Text>
    </View>
  );
};
