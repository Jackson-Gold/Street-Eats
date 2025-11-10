import React from 'react';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { palette } from '../theme/colors';
import HomeScreen from '../screens/HomeScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TruckDetailScreen from '../screens/TruckDetailScreen';

export type RootStackParamList = {
  Tabs: undefined;
  TruckDetail: { id: string };
};

export type TabParamList = {
  Home: undefined;
  Discover: undefined;
  Favorites: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.background,
    card: palette.surface,
    text: palette.textPrimary,
    border: 'rgba(255,255,255,0.08)',
    notification: palette.primary
  }
};

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: 'rgba(12,12,18,0.94)',
        borderTopWidth: 0,
        elevation: 0,
        paddingBottom: 10,
        paddingTop: 8,
        height: 70
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '600'
      },
      tabBarActiveTintColor: palette.primary,
      tabBarInactiveTintColor: palette.textSecondary,
      tabBarIcon: ({ color, size }) => {
        const icons: Record<keyof TabParamList, keyof typeof Ionicons.glyphMap> = {
          Home: 'map',
          Discover: 'list',
          Favorites: 'heart',
          Profile: 'person'
        };
        return <Ionicons name={icons[route.name as keyof TabParamList]} size={size} color={color} />;
      }
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Discover" component={DiscoverScreen} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer theme={navigationTheme}>
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name="TruckDetail"
        component={TruckDetailScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerTintColor: palette.textPrimary
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
