import React, {useContext} from 'react';
import {SafeAreaView, View, StatusBar, FlatList} from 'react-native';
import {UIThemeContext} from '../contexts/ui-theme-context';
import {CityAndDayInfo} from './CityAndDayInfo';
import {CurrentWeatherInfo} from './CurrentWeatherInfo';
import {NextDayWeather} from './NextDayWeather';

export const MainScreen = () => {
  const {styles} = useContext(UIThemeContext);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaViewTop} />
      <SafeAreaView style={styles.safeAreaViewBottom}>
        <View style={styles.container}>
          <View style={styles.mainSection}>
            <CityAndDayInfo city="San Francisco" day="Tuesday" />
            <CurrentWeatherInfo
              time="3:22 PM"
              iconName="day-sunny"
              description="Sunny"
              temperature="14"
            />
          </View>

          <View style={styles.nextDaysWeatherSection}>
            <FlatList
              data={[1, 2, 3, 4, 5]}
              horizontal={true}
              renderItem={() => (
                <NextDayWeather day="WED" iconName="day-rain" date="3 / 14" />
              )}
              keyExtractor={(item) => item.toString()}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
