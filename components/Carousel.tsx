import React, {useContext} from 'react';
import {View} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import {UIThemeContext} from '../contexts/ui-theme-context';
import {MainScreen} from '../components/MainScreen/MainScreen';
import {CitiesList} from '../components/CitiesList/CitiesList';
import {Map} from '../components/Map/Map';

export const Carousel = () => {
  const {styles} = useContext(UIThemeContext);

  return (
    <ViewPager style={styles.carousel} initialPage={1}>
      <View key="1">
        <CitiesList />
      </View>
      <View key="2">
        <MainScreen />
      </View>
      <View key="3">
        <Map />
      </View>
    </ViewPager>
  );
};
