import AsyncStorage from '@react-native-community/async-storage';
import {ItemExistsException} from '../exceptions/item-exists-error';

export const setItem = (key: string, value: any) => {
  return AsyncStorage.setItem(key, value);
};

export const getItem = (key: string) => {
  return AsyncStorage.getItem(key);
};

export const addUniqItem = async (
  key: string,
  item: any,
  findDuplicates: (item: any) => boolean,
) => {
  const value = await AsyncStorage.getItem(key);

  if (!value) {
    return AsyncStorage.setItem(key, JSON.stringify([item]));
  }

  const array = JSON.parse(value);
  const isItemExists = array.find(findDuplicates);

  if (isItemExists) {
    throw new ItemExistsException('Item already exists');
  } else {
    return AsyncStorage.setItem(key, JSON.stringify([...array, item]));
  }
};
