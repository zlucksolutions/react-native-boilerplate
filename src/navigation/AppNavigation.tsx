import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/Dashboard/Home/HomeScreen';
import DetailScreen from '../screens/Dashboard/Details/DetailScreen';

type BottomParamList = {
  Home: undefined;
  Details: undefined;
};

const Tab = createBottomTabNavigator<BottomParamList>();

const DashboardNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontWeight: '500',
          fontSize: 15
        },
        tabBarIconStyle: { display: 'none' },
        headerShown: false
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailScreen} />
    </Tab.Navigator>
  );
};

type StackParamList = {
  Splash: undefined;
  Dashboard: undefined;
};

export type AppNavigationProps = StackParamList & BottomParamList;

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Home'
        }}
        name="Splash"
        component={SplashScreen}
      />
      <Stack.Screen name="Dashboard" component={DashboardNavigation} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
