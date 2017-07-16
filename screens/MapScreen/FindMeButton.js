import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../../constants/Colors';


export class FindMeButton extends Component {
	constructor(props) {
		super(props)
	}
	render (){
		return (
			<TouchableOpacity
				style={styles.tabBarInfoContainer}
				onPress={this.props.onPressFindMe()}
			>
            <View
              style={[styles.addressButtonStyle, {backgroundColor: 'rgba(54, 54, 54, 1)'}]}
            >
				<FontAwesome
	                name="location-arrow"
	                size={18}
	                style={{ color: 'white' }}

	            />
            </View>
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
	  backgroundColor: Colors.tintRed,
	  padding: 12,
	  flexDirection: 'row',
	  justifyContent: 'space-around',
	  marginRight: 20,
	  borderRadius: 5,
  },
  tabBarInfoContainer: {
	position: 'absolute',
	top: 0,
	right: 0,
	marginTop: 10,
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
