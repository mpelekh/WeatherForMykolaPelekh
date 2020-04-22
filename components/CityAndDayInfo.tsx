import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {UIThemeContext} from '../contexts/ui-theme-context';

type CityAndDayInfoProps = {
  city: string;
  day: string;
};

export const CityAndDayInfo = ({city, day}: CityAndDayInfoProps) => {
  const {styles} = useContext(UIThemeContext);

  return (
    <View style={styles.mainSectionCityAndDayInfo}>
      <View style={styles.section}>
        <View>
          <Text style={styles.cityNameText}>{city}</Text>
        </View>
        <View style={styles.cityNameIconPosition}>
          <Icon style={styles.cityNameIconText} name="nav-icon-list-a" />
        </View>
      </View>
      <View style={styles.section}>
        <View>
          <Text style={styles.dayNameText}>{day}</Text>
        </View>
      </View>
    </View>
  );
};
