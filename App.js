/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Card from './components/Card';
import Screen from './components/Screen';
import DetailsScreen from './screens/DetailsScreen';
import FeedsScreen from './screens/FeedsScreen';
import {NavigationContainer} from '@react-navigation/native';
import FeedNavigator from './navgiation/FeedNavigator';
import navigationTheme from './navgiation/navigationTheme';
const App = () => {
  return (
    <NavigationContainer>
      <FeedNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
