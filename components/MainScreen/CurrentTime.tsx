import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {UIThemeContext} from '../../contexts/ui-theme-context';

type CurrentTimeProps = {
  time: string;
};

export const CurrentTime = ({time}: CurrentTimeProps) => {
  const {styles} = useContext(UIThemeContext);

  return (
    <View style={styles.timeView}>
      <Text style={styles.timeText}>{time}</Text>
    </View>
  );
};
