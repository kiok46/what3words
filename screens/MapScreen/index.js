import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { MapView } from 'expo';
import Colors from '../../constants/Colors';
import { MenuBarComponent } from '../../components/MenuBar';
import { AddressButtons } from './AddressButtons';
import { FindMeButton } from './FindMeButton';
import { MapTypeAndPinButton } from './MapTypeAndPinButton';
import { ZoomButtons } from './ZoomButtons';
import { GoogleMapButton } from './GoogleMapButton';

import flagPinkImg from '../../assets/icons/map-symbol.png';


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;


export default class MapScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Map',
    };

  constructor(props){
      super(props)
      this.state = {
          mapLoaded: false,
          region: {
             latitude: LATITUDE,
             longitude: LONGITUDE,
             latitudeDelta: LATITUDE_DELTA,
             longitudeDelta: LONGITUDE_DELTA,
          },
          markers: [],
          locked: true,
          lockIconName: 'lock',
        }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onMapPress = (e) => {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: `foo${id++}`,
        },
      ],
    });
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  pressMenuBarIcon = () => {
      this.props.navigation.navigate("DrawerOpen")
  }

  onPressPreviousAddressButton = () => {

  }

  onPressNextAddressButton = () => {

  }

  onAddressButtonPress = () => {

  }

  onDirectionButtonPress = () => {

  }

  onShareButtonPress = () => {

  }

  onPressFindMe = () => {

  }

  onPressZoomIn = () => {

  }

  onPressZoomOut = () => {

  }

  onPressLock = () => {
      if (this.state.locked) {
          this.setState({ locked: !this.state.locked, lockIconName: 'unlock-alt' })

      } else {
          this.setState({ locked: !this.state.locked, lockIconName: 'lock' })
      }

  }

  onPressGoogleMapButton = () => {

  }

  onPressAlterMapType = () => {

  }

  previousAddressButton = () => {
      return (
          <FontAwesome
              name="chevron-left"
              size={24}
              style={{ color: 'white' }}
              onPress={() => {
                  this.onPressPreviousAddressButton()
                }
              }
          />
      )
  }

  nextAddressButton = () => {
      return (
          <FontAwesome
              name="chevron-right"
              size={24}
              style={{ color: 'white' }}
              onPress={() => {
                  this.onPressNextAddressButton()
                }
              }
          />
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuBarComponent
            pressMenuBarIcon={this.pressMenuBarIcon}
        />
        <View style={{ flex: 1 }}>

            <MapView
              region={this.state.region}
              style={{ flex: 1 }}
              onPress={this.onMapPress}
              onRegionChangeComplete={this.onRegionChangeComplete}
            >
            {this.state.markers.map(marker => (
            <MapView.Marker
              image={flagPinkImg}
              key={marker.key}
              coordinate={marker.coordinate}
            />
            ))}
            </MapView>

            <FindMeButton
                onPressFindMe={() => this.onPressFindMe}
            />

            <MapTypeAndPinButton
                onPressLock={() => this.onPressLock}
                onPressAlterMapType={() => this.onPressAlterMapType}
                lockIconName={this.state.lockIconName}
            />

            <ZoomButtons
                onPressZoomIn={() => this.onPressZoomIn}
                onPressZoomOut={() => this.onPressZoomOut}
            />

            <GoogleMapButton
                onPressGoogleMapButton={() => this.onPressGoogleMapButton}
            />

        </View>


        <AddressButtons
            previousAddressButton={this.previousAddressButton}
            nextAddressButton={this.nextAddressButton}
            onButtonPress={() => this.onButtonPress}
            onAddressButtonPress={() => this.onAddressButtonPress}
            onDirectionButtonPress={() => this.onDirectionButtonPress}
            onShareButtonPress={() => this.onShareButtonPress}
            shareText="Share pin location"
            directionText="Directions to pin"
            addressText="hydrant.gambles.stiff"
        />


      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addressTextStyle: {
      color: 'white',
      fontSize: 18
  },
  addressButtonStyle: {
    backgroundColor: 'rgba(225, 31, 38, 1)',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
