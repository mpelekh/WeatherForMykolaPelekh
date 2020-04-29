import React, {useContext, useCallback} from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';
import {UIThemeContext} from '../../contexts/ui-theme-context';
import {CityWeatherInfo} from './CityWeatherInfo';
import config from '../../config/app-config';

export const CitiesList = () => {
  const {styles} = useContext(UIThemeContext);
  const navigation = useNavigation();
  const onAddLocationClick = useCallback(() => {
    navigation.navigate('Map');
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <FlatList
          data={Array.from({length: config.CITY_ITEMS_NUMBER}).map(
            (_, index) => index,
          )}
          renderItem={() => (
            <CityWeatherInfo
              city="San Francisco"
              day="Tuesday"
              time="12:33 PM"
              temperature="14"
              iconName="day-sunny"
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
        <TouchableOpacity
          style={styles.topRightButton}
          onPress={onAddLocationClick}>
          <Icon style={styles.topRightButtonIcon} name="plus-a" />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};
