import React from 'react';
import { ScrollView, View, StyleSheet, WebView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MenuBarComponent } from '../../components/MenuBar';


export default class AboutScreen extends React.Component {
  static navigationOptions = {
      drawerLabel: 'About',
  };

  constructor(props){
      super(props)
  }

  pressMenuBarIcon = () => {
      this.props.navigation.navigate("DrawerOpen")
  }

  render() {
    return (
      <View style={styles.container}>
          <MenuBarComponent
              pressMenuBarIcon={this.pressMenuBarIcon}
          />
		  <WebView
		      source={{uri: 'http://kuldeepgrewal.com/'}}
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
});
