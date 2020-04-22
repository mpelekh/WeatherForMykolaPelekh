/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './store';
import {UIThemeContext} from './contexts/ui-theme-context';
import {styles} from './styles';

const ReduxApp = () => (
  <Provider store={store}>
    <UIThemeContext.Provider value={{styles}}>
      <App />
    </UIThemeContext.Provider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
