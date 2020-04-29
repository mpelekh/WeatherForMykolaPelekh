import React, {useContext, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import {UIThemeContext} from '../../contexts/ui-theme-context';

type CityAndDayInfoProps = {
  city: string;
  day: string;
};

export const CityAndDayInfo = ({city, day}: CityAndDayInfoProps) => {
  const {styles} = useContext(UIThemeContext);
  const navigation = useNavigation();
  const onNavigationIconClick = useCallback(() => {
    navigation.navigate('CitiesList');
  }, [navigation]);

  return (
    <View style={styles.mainSectionCityAndDayInfo}>
      <View style={styles.section}>
        <View>
          <Text style={styles.cityNameText}>{city}</Text>
        </View>
        <View style={styles.cityNameIconPosition}>
          <TouchableOpacity onPress={onNavigationIconClick}>
            <Icon style={styles.cityNameIconText} name="nav-icon-list-a" />
          </TouchableOpacity>
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
