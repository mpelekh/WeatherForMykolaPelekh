import {createStore} from 'redux';
import rootReducer from './modules';

export type RootState = {
  reduxPoc: {
    greeting: string;
    description: string;
  };
};

const initialState: RootState = {
  reduxPoc: {
    greeting: 'Hello world!',
    description:
      'This description is just a proof of concept to be sure redux is working appropriately',
  },
};

const store = createStore(rootReducer, initialState);

export default store;
