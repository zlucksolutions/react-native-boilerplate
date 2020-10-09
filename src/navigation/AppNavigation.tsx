import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import DetailScreen from '../screens/Details/DetailScreen';

const Tab = createBottomTabNavigator();

const DashboardNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailScreen} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DashboardNavigation} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
