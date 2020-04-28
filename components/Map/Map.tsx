import React, {useContext, useState, useCallback} from 'react';
import {StatusBar, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import MapView, {Marker} from 'react-native-maps';
import {UIThemeContext} from '../../contexts/ui-theme-context';
import {addItem, getItem} from '../../services/async-storage-service';

interface IGeolocation {
  latitude: number;
  longitude: number;
}

export const Map = () => {
  const {styles} = useContext(UIThemeContext);
  const [location, setLocation] = useState<IGeolocation>({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const addCity = useCallback(async () => {
    const item = await getItem('@locationsList');
    if (!item) {
      return addItem('@locationsList', location);
    }

    const locationsList = JSON.parse(item);
    const isLocationExists = locationsList.find(
      ({latitude, longitude}: IGeolocation) =>
        location.latitude === latitude && location.longitude === longitude,
    );

    if (isLocationExists) {
      Alert.alert(
        'Error',
        'Such location already exists in the saved locations list.',
        [{text: 'OK'}],
        {cancelable: false},
      );
    } else {
      return addItem('@locationsList', location);
    }
  }, [location]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={(region) => {
          setLocation({
            latitude: region.latitude,
            longitude: region.longitude,
          });
        }}
        onRegionChangeComplete={(region) => {
          setLocation({
            latitude: region.latitude,
            longitude: region.longitude,
          });
        }}>
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="this is a marker"
          description="this is a marker example"
        />
      </MapView>
      <TouchableOpacity style={styles.mapSaveButton} onPress={addCity}>
        <Icon style={styles.mapSaveButtonIcon} name="save" />
      </TouchableOpacity>
    </>
  );
};
