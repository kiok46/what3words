/**
 * @flow
 */

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { DrawerItems, DrawerNavigator } from 'react-navigation';
import { ScrollView, StyleSheet, Text, View, Platform } from 'react-native';

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
        <ScrollView
            style={styles.drawerScrollViewStyle}
        >
            <View
            >
                <DrawerItems
                  {...props}
                  getLabel = {(scene) => (
                    <View
                        style={styles.drawerItemViewStyle}>
                      <Text
                        style = {styles.drawerItemTextStyle}
                      >{props.getLabel(scene)}
                      </Text>
                    </View>

                  )}
                />
                <Text
                    style = {[styles.drawerItemTextStyle, {marginTop: 10,
                    marginLeft: 15},]}
                >
                Rate the App
                </Text>

                <View style={styles.drawerSeparator}/>

                <View
                    style={styles.drawerSocialVersionContainerStyle}
                >
                  <View
                    style={styles.drawerSocialContainerViewStyle}
                  >
                    <View
                      style={styles.drawerSocialViewStyle}
                    >
                    <FontAwesome name="facebook-official" size={32} color='white' />
                    </View>
                    <View
                      style={styles.drawerSocialViewStyle}
                    >
                    <FontAwesome name="twitter" size={32} color='white'/>
                    </View>
                    <View
                      style={styles.drawerSocialViewStyle}
                    >
                    <FontAwesome name="instagram" size={32} color='white'/>
                    </View>

                  </View>
                  <Text
                    style = {styles.drawerVersionTextStyle}
                  >
                    v0.1.0
                  </Text>

                </View>
            </View>
        </ScrollView>
    )
  }
);


const styles = StyleSheet.create({
    drawerScrollViewStyle: {
        backgroundColor: 'rgba(34, 34, 34, 1)',
    },
    drawerSeparator: {
        height: 2,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 5,
        width: '100%'
    },
    drawerItemTextStyle: {
        color: 'white',
        fontSize: 18,
    },
    drawerItemViewStyle: {
        marginTop: 10,
        marginLeft: 15,
    },
    drawerSocialVersionContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    drawerSocialViewStyle:{
        padding: 5,
    },
    drawerSocialContainerViewStyle: {
        padding: 3,
        flexDirection: 'row',
    },
    drawerVersionTextStyle: {
        color: 'white',
        textAlignVertical: 'bottom',
        marginTop: Platform.OS === 'ios' ? 15 : 0,
        marginRight: 5,
    }

})
