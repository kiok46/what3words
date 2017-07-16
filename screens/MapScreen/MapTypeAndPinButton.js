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


export class MapTypeAndPinButton extends Component {
	constructor(props) {
		super(props)
	}
	render (){
		return (
			<View
				style={styles.tabBarInfoContainer}
			>
			<View
				style={{ justifyContent: 'space-between' }}
			>
            <TouchableOpacity
              style={[styles.addressButtonStyle, {marginBottom: 15}]}

			  onPress={this.props.onPressAlterMapType()}
            >
				<FontAwesome
	                name="picture-o"
	                size={18}
	                style={{ color: 'white' }}

	            />
			</TouchableOpacity>
			<TouchableOpacity
			  style={[styles.addressButtonStyle, {backgroundColor: Colors.tintDarkGrey}]}

			  onPress={this.props.onPressLock()}
			>
				<FontAwesome
					name={this.props.lockIconName}
					size={18}
					style={{ color: 'white' }}

				/>
            </TouchableOpacity>
			</View>
		</View>

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
	  marginLeft: 20,
	  borderRadius: 5,
  },
  tabBarInfoContainer: {
	position: 'absolute',
	top: 0,
	left: 0,
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
