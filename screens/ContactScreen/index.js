import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MenuBarComponent } from '../../components/MenuBar';


export default class ContactScreen extends React.Component {
  static navigationOptions = {
      drawerLabel: 'Contact',
  };

  constructor(props){
      super(props)
  }

  pressMenuBarIcon = () => {
      this.props.navigation.navigate("DrawerOpen")
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <MenuBarComponent
              pressMenuBarIcon={this.pressMenuBarIcon}
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
