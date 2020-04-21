/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View, Text, StatusBar, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import {styles} from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaViewTop} />
      <SafeAreaView style={styles.safeAreaViewBottom}>
        <View style={styles.container}>
          <View style={styles.mainSection}>
            <View style={styles.mainSectionCityAndDayInfo}>
              <View style={styles.section}>
                <View>
                  <Text style={styles.cityNameText}>San Francisco</Text>
                </View>
                <View style={styles.cityNameIconPosition}>
                  <Icon
                    style={styles.cityNameIconText}
                    name="nav-icon-list-a"
                  />
                </View>
              </View>
              <View style={styles.section}>
                <View>
                  <Text style={styles.dayNameText}>Tuesday</Text>
                </View>
              </View>
            </View>

            <View style={styles.mainSectionCurrentWeatherInfo}>
              <View style={{...styles.section, ...styles.currentWeatherView}}>
                <View style={styles.timeView}>
                  <Text style={styles.timeText}>3:22 PM</Text>
                </View>
                <View style={styles.weatherView}>
                  <Icon style={styles.weatherViewIcon} name="day-sunny" />
                  <Text style={styles.weatherViewText}>Sunny</Text>
                </View>
                <View>
                  <Text style={styles.temperatureValueText}>14&#176;</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.nextDaysWeatherSection}>
            <FlatList
              data={[1, 2, 3, 4, 5]}
              horizontal={true}
              renderItem={() => (
                <View style={styles.nextDayForecastView}>
                  <Text style={styles.nextDayForecastDayText}>WED</Text>
                  <Icon
                    style={styles.nextDayForecastWeatherIcon}
                    name="day-rain"
                  />
                  <Text style={styles.nextDayForecastDateText}>3 / 14</Text>
                </View>
              )}
              keyExtractor={(item) => item.toString()}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
