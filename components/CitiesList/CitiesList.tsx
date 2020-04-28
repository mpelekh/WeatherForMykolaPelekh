import React, {useContext} from 'react';
import {SafeAreaView, StatusBar, FlatList} from 'react-native';
import {UIThemeContext} from '../../contexts/ui-theme-context';
import {CityWeatherInfo} from './CityWeatherInfo';
import config from '../../config/app-config';

export const CitiesList = () => {
  const {styles} = useContext(UIThemeContext);

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
      </SafeAreaView>
    </>
  );
};
