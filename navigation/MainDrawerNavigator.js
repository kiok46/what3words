/**
 * @flow
 */

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom, DrawerNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';


export default DrawerNavigator(
  {
      Home: {
        path: '/',
        screen: HomeScreen,
      },
      Links: {
        path: '/links',
        screen: LinksScreen,
      },
      Settings: {
        path: '/settings',
        screen: SettingsScreen,
      },
      Profile: {
        path: '/profile',
        screen: ProfileScreen,
      }
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: Colors.tabIconSelected,
    },
  }
);
