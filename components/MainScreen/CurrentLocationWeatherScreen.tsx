import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {LocationWeatherScreen} from './LocationWeatherScreen';

interface IGeolocation {
  latitude: number;
  longitude: number;
}

export const CurrentLocationWeatherScreen = () => {
  const [position, setPosition] = useState<IGeolocation>();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error);
      },
    );
  }, []);

  return position ? <LocationWeatherScreen {...position} /> : null;
};
