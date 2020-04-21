import {StyleSheet} from 'react-native';

const COLORS = {
  lightAzure: '#22b7f3',
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
  nextDaysWeatherSection: {
    flex: 0.2,
    backgroundColor: COLORS.azure,
  },
  section: {
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
    fontSize: 32,
  },

  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
});
