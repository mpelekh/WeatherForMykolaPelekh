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
import {SafeAreaView, View, Text, StatusBar} from 'react-native';

import {styles} from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaViewTop} />
      <SafeAreaView style={styles.safeAreaViewBottom}>
        <View style={styles.container}>
          <View style={styles.mainSection}>
            <View style={styles.mainSectionCityAndDayInfo}>
              <View style={styles.section}>
                <View>
                  <Text style={styles.cityNameText}>San Francisco</Text>
                </View>
                <View style={styles.cityNameIconPosition}>
                  <Text style={styles.cityNameIconText}>=</Text>
                </View>
              </View>
              <View style={styles.section}>
                <View>
                  <Text style={styles.dayNameText}>Tuesday</Text>
                </View>
              </View>
            </View>

            <View style={styles.mainSectionCurrentWeatherInfo}>
              <View style={{...styles.section, ...styles.currentWeatherView}}>
                <View style={styles.timeView}>
                  <Text style={styles.timeText}>3:22 PM</Text>
                </View>
                <View>
                  <Text style={styles.temperatureValueText}>14&#176;</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.nextDaysWeatherSection} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

// const App = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           {/* <Header /> */}
//           <ReduxPoc />
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.tsx</Text> to change
//                 this screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };
