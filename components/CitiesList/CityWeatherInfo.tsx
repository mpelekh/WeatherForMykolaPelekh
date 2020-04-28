import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {UIThemeContext} from '../../contexts/ui-theme-context';

type CityWeatherInfoProps = {
  city: string;
  day: string;
  time: string;
  temperature: string;
  iconName: string;
};

export const CityWeatherInfo = ({
  city,
  day,
  time,
  temperature,
  iconName,
}: CityWeatherInfoProps) => {
  const {styles} = useContext(UIThemeContext);

  return (
    <View style={styles.cityView}>
      <View>
        <View style={styles.section}>
          <View>
            <Text style={styles.cityNameText}>{city}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <View>
            <Text style={styles.dayNameText}>
              {day} {time}
            </Text>
          </View>
        </View>
      </View>

      <View style={{...styles.section, ...styles.cityWeatherStatusView}}>
        <Icon style={styles.cityWeatherStatusViewText} name={iconName} />
        <Text style={styles.cityWeatherStatusViewText}>
          {' '}
          {temperature}&#176;
        </Text>
      </View>
    </View>
  );
};
