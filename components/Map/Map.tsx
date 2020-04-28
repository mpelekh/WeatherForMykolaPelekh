import React, {useContext, useState} from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {UIThemeContext} from '../../contexts/ui-theme-context';
import MapView, {Marker} from 'react-native-maps';

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
      <TouchableOpacity style={styles.mapSaveButton}>
        <Icon style={styles.mapSaveButtonIcon} name="save" />
      </TouchableOpacity>
    </>
  );
};
