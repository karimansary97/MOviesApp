import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FeedsScreen from '../screens/FeedsScreen';
import DetailsScreen from '../screens/DetailsScreen';

/**
 * Navigation Section 
 * Using reactnative navigation/Stack from doc 
 * contain Two screens (FeedsScreen,DetailsScreen) 
 * imported in AppFile 
 */

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Listings" component={FeedsScreen} />
    <Stack.Screen name="ListingDetails" component={DetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
