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


export class ZoomButtons extends Component {
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
              style={[styles.addressButtonStyle, {marginBottom: 5, backgroundColor: Colors.tintDarkGrey, borderBottomRightRadius: 0, borderBottomLeftRadius: 0}]}
			  onPress={this.props.onPressZoomIn()}
            >
				<FontAwesome
	                name="plus"
	                size={18}
	                style={{ color: 'white' }}

	            />
			</TouchableOpacity>
			<TouchableOpacity
			  style={[styles.addressButtonStyle, {backgroundColor: Colors.tintDarkGrey, borderTopRightRadius: 0, borderTopLeftRadius: 0}]}
			  onPress={this.props.onPressZoomOut()}
			>
				<FontAwesome
					name="minus"
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
	  marginRight: 20,
	  marginBottom: 10,
	  borderRadius: 5,
  },
  tabBarInfoContainer: {
	position: 'absolute',
	bottom: 0,
	right: 0,
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
