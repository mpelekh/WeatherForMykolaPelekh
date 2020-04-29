import React, {useContext} from 'react';
import {View} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import {UIThemeContext} from '../../contexts/ui-theme-context';
import {CurrentLocationWeatherScreen} from './CurrentLocationWeatherScreen';
import {LocationWeatherScreen} from './LocationWeatherScreen';

export const MainScreen = () => {
  const {styles} = useContext(UIThemeContext);

  return (
    <ViewPager style={styles.carousel} initialPage={0} showPageIndicator>
      <View key="1">
        <CurrentLocationWeatherScreen />
      </View>
      <View key="2">
        {/* Lviv */}
        <LocationWeatherScreen latitude={49.8397} longitude={24.0297} />
      </View>
      <View key="3">
        {/* Kyiv */}
        <LocationWeatherScreen latitude={50.45466} longitude={30.5238} />
      </View>
    </ViewPager>
  );
};
