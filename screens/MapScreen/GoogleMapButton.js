import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';

import Colors from '../../constants/Colors';


export class GoogleMapButton extends Component {
	constructor(props) {
		super(props)
	}
	render (){
		return (
			<TouchableOpacity
				style={styles.tabBarInfoContainer}
				onPress={this.props.onPressGoogleMapButton()}
			>
			<Image
				style={styles.addressButtonStyle}
                source={require('../../assets/images/google.png')}
            />
		</TouchableOpacity>

		);
	}
};

const styles = StyleSheet.create({
	addressTextStyle: {
		color: 'white',
		fontSize: 18
	},
	addressButtonStyle: {
	  marginLeft: 20,
	  marginBottom: 10,
	  borderRadius: 5,
	  backgroundColor: 'transparent'
  },
  tabBarInfoContainer: {
	position: 'absolute',
	bottom: 0,
	left: 0,
	...Platform.select({
	  ios: {
		shadowColor: 'black',
		shadowOffset: { height: -3 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
	  },
	  android: {
		elevation: 20,
	  },
	}),
	backgroundColor: 'transparent',
  },
});
