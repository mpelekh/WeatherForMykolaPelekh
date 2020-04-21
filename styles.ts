import {StyleSheet} from 'react-native';

const COLORS = {
  lightAzure: '#22b7f3',
  lighterAzure: '#60c1f3',
  azure: '#209ce2',
  white: '#ffffff',
};

export const styles = StyleSheet.create({
  safeAreaViewTop: {
    flex: 0,
    backgroundColor: COLORS.lightAzure,
  },
  safeAreaViewBottom: {
    flex: 1,
    backgroundColor: COLORS.azure,
  },
  container: {
    flex: 1,
  },
  mainSection: {
    flex: 0.8,
    backgroundColor: COLORS.lightAzure,
  },
  mainSectionCityAndDayInfo: {
    flex: 0.45,
  },
  mainSectionCurrentWeatherInfo: {
    flex: 0.55,
  },
  currentWeatherView: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nextDaysWeatherSection: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.azure,
  },
  section: {
    alignItems: 'baseline',
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 25,
  },
  cityNameText: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
  dayNameText: {
    color: COLORS.white,
    fontSize: 18,
  },
  cityNameIconPosition: {
    marginLeft: 'auto',
  },
  cityNameIconText: {
    color: COLORS.white,
    fontSize: 18,
  },
  timeView: {
    backgroundColor: COLORS.lighterAzure,
    borderRadius: 15,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
  timeText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  temperatureValueText: {
    color: COLORS.white,
    fontSize: 64,
  },
  weatherView: {
    alignItems: 'center',
    marginBottom: -40,
  },
  weatherViewIcon: {
    color: COLORS.white,
    fontSize: 64,
  },
  weatherViewText: {
    color: COLORS.white,
    fontSize: 24,
    marginTop: 10,
  },
  nextDayForecastView: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  nextDayForecastDayText: {
    color: COLORS.white,
    fontSize: 14,
  },
  nextDayForecastWeatherIcon: {
    color: COLORS.white,
    fontSize: 32,
  },
  nextDayForecastDateText: {
    color: COLORS.white,
    fontSize: 14,
  },
});
