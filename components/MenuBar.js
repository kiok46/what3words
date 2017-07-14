import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Card } from './Card';
import { CardSection } from './CardSection';


export class MenuBarComponent extends Component {

  constructor(props){
      super(props)
  }

  render() {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.menuContainer}>
                <FontAwesome
                    name="bars"
                    size={24}
                    style={{ color: Colors.tintColor }}
                    onPress={() => {
                        this.props.pressMenuBarIcon()
                      }
                    }
                />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

    menuContainer: {
		padding: 5,
        paddingTop: 24,
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'white'
	},
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height:2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        // marginTop: 10
        marginTop: -1,
        marginBottom: 10
    },
});
