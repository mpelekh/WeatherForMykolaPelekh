import React, {useContext, useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';
import {fetchCurrentWeather} from '../../services/weather-service';
import {UIThemeContext} from '../../contexts/ui-theme-context';
import {CityWeatherInfo} from './CityWeatherInfo';
import {getItem} from '../../services/async-storage-service';
import ICONS from '../../utils/icons';

export const CitiesList = () => {
  const {styles} = useContext(UIThemeContext);
  const navigation = useNavigation();
  const [locationsList, setLocationsList] = useState([]);
  const [locationsWeatherList, setLocationsWeatherList] = useState([]);
  const onAddLocationClick = useCallback(() => {
    navigation.navigate('Map');
  }, [navigation]);
  const currentDate = moment();
  const day = currentDate.format('dddd');
  const time = currentDate.format('h:mm A');

  useEffect(() => {
    const getList = async () => {
      try {
        const list = await getItem('@locationsList');
        setLocationsList(JSON.parse(list || '[]'));
      } catch (error) {
        Alert.alert(
          'Error',
          "Can't load the list of saved locations.",
          [{text: 'OK'}],
          {cancelable: false},
        );
      }
    };

    getList();
  }, []);

  useEffect(() => {
    const promises = locationsList.map(({latitude, longitude}) =>
      fetchCurrentWeather(latitude, longitude),
    );

    Promise.all(promises).then((list) => {
      list = list.map(({name, main: {temp}, weather: [{main}]}) => ({
        city: name,
        temperature: temp,
        weatherStatus: main,
      }));

      console.log(list);

      setLocationsWeatherList(list);
    });
  }, [locationsList]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <FlatList
          data={locationsWeatherList}
          renderItem={({item: {city, temperature, weatherStatus}}) => (
            <CityWeatherInfo
              city={city}
              day={day}
              time={time}
              temperature={Math.round(temperature).toString()}
              iconName={ICONS[weatherStatus].day}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
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
