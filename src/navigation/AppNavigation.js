import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Dashboard/Home/HomeScreen';
import DetailScreen from '../screens/Dashboard/Details/DetailScreen';
import { hideSplashScreen, initApp } from '../redux/actions';
import { useDispatch } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

const Tab = createBottomTabNavigator();

const DashboardNavigation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //  dispatch(initApp());
    setTimeout(() => {
      // dispatch(hideSplashScreen());
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontWeight: '500',
          fontSize: 15,
        },
        tabBarIconStyle: { display: 'none' },
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailScreen} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        options={{
          title: 'Home',
        }}
        name="Splash"
        component={SplashScreen}
      /> */}
      <Stack.Screen name="Dashboard" component={DashboardNavigation} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
