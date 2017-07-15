/**
 * @flow
 */

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { DrawerItems, DrawerNavigator } from 'react-navigation';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';

import MapScreen from '../screens/MapScreen';
import CompassScreen from '../screens/CompassScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ContactScreen from '../screens/ContactScreen';
import TutorialScreen from '../screens/TutorialScreen';
import FAQScreen from '../screens/FAQScreen';
import AboutScreen from '../screens/AboutScreen';


export default DrawerNavigator(
  {
      Map: {
        path: '/',
        screen: MapScreen,
      },
      Compass: {
        path: '/compass',
        screen: CompassScreen,
      },
      Settings: {
        path: '/settings',
        screen: SettingsScreen,
      },
      Profile: {
        path: '/profile',
        screen: ProfileScreen,
      },
      About: {
        path: '/about',
        screen: AboutScreen,
      },
      FAQ: {
        path: '/faq',
        screen: FAQScreen,
      },
      Contact: {
        path: '/contact',
        screen: ContactScreen,
      },
      Tutorial: {
        path: '/tutorial',
        screen: TutorialScreen,
      }
  },
  {
    initialRouteName: 'Map',
    contentOptions: {
      activeTintColor: Colors.tabIconSelected,
    },
    contentComponent: props => (
        <ScrollView>
            <View>
                <DrawerItems
                  {...props}
                  getLabel = {(scene) => (
                    <View>
                      <Text>{props.getLabel(scene)}</Text>
                    </View>
                  )}
                />
                <Text>Rate the App</Text>
                <View
                    style={{ flexDirection: 'row' }}
                >
                  <View
                    style={{ flexDirection: 'row' }}
                  >
                    <FontAwesome name="home" size={24}  />
                    <FontAwesome name="home" size={24}  />
                    <FontAwesome name="home" size={24}  />
                  </View>
                  <Text>
                    Version 0.1.0
                  </Text>

                </View>
            </View>
        </ScrollView>
    )
  }
);
