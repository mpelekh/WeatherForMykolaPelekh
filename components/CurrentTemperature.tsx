import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {UIThemeContext} from '../contexts/ui-theme-context';

type CurrentTemperatureProps = {
  temperature: string;
};

export const CurrentTemperature = ({temperature}: CurrentTemperatureProps) => {
  const {styles} = useContext(UIThemeContext);

  return (
    <View>
      <Text style={styles.temperatureValueText}>{temperature}&#176;</Text>
    </View>
  );
};
