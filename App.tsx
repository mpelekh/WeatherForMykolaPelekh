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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from './components/MainScreen/MainScreen';
import {CitiesList} from './components/CitiesList/CitiesList';
import {Map} from './components/Map/Map';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={MainScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CitiesList"
          component={CitiesList}
        />
        <Stack.Screen
          // options={{headerShown: false}}
          name="Map"
          component={Map}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
