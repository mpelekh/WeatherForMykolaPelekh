import AsyncStorage from '@react-native-community/async-storage';

export const setItem = (key: string, value: any) => {
  return AsyncStorage.setItem(key, value);
};

export const getItem = (key: string) => {
  return AsyncStorage.getItem(key);
};

export const addItem = async (key: string, value: any) => {
  const item = await AsyncStorage.getItem(key);

  if (!item) {
    return AsyncStorage.setItem(key, JSON.stringify([value]));
  }

  const array = JSON.parse(item);

  return AsyncStorage.setItem(key, JSON.stringify([...array, value]));
};
