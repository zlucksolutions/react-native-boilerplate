import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@shared/theme/ThemeProvider';
import { HomeScreen } from '@features/home/screens/HomeScreen';
import { SettingsScreen } from '@features/settings/screens/SettingsScreen';
import { ComponentsScreen } from '@features/components/screens/ComponentsScreen';
import { TestsScreen } from '@features/tests/screens/TestsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import SplashScreen from 'react-native-splash-screen';

export type RootStackParamList = {
  MainTabs: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Components: undefined;
  Tests: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  useEffect(()=>{
    SplashScreen.hide()
  },[])

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.text,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t('navigation.home'),
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Components"
        component={ComponentsScreen}
        options={{
          title: t('navigation.components'),
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'cube' : 'cube-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tests"
        component={TestsScreen}
        options={{
          title: t('navigation.tests'),
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'flask' : 'flask-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: t('navigation.settings'),
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'settings' : 'settings-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.text,
      }}>
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}; 