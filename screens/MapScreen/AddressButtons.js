import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';

import Colors from '../../constants/Colors';

export class AddressButtons extends Component {
	constructor(props) {
		super(props)
	}
	render (){
		return (
			<View style={styles.tabBarInfoContainer}>
			<View
              style={[styles.addressButtonStyle, { justifyContent: 'space-between', }]}
            >
              {this.props.previousAddressButton()}
              <TouchableOpacity
    			onPress={this.props.onAddressButtonPress()}
              >
                  <Text
                      style={styles.addressTextStyle}
                  >
                      {this.props.addressText}
                  </Text>
              </TouchableOpacity>
              {this.props.nextAddressButton()}
            </View>

            <View
              style={[styles.addressButtonStyle, {backgroundColor: Colors.tintDarkGrey}]}
            >
            <TouchableOpacity
                onPress={this.props.onDirectionButtonPress()}
            >
                <Text
                    style={styles.addressTextStyle}
                >
                    {this.props.directionText}
                </Text>
            </TouchableOpacity>
            </View>

            <View
              style={[styles.addressButtonStyle, {backgroundColor: Colors.tintDarkGrey}]}
            >
            <TouchableOpacity
                onPress={this.props.onShareButtonPress()}
            >
                <Text
                    style={styles.addressTextStyle}
                >
                    {this.props.shareText}
                </Text>
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
  },
  tabBarInfoContainer: {
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
	backgroundColor: '#fbfbfb',
  },
});
