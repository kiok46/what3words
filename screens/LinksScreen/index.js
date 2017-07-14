import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MenuBarComponent } from '../../components/MenuBar';


export default class LinksScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Book',
        drawerIcon: ({ tintColor }) => (
          <FontAwesome name="book" size={24} style={{ color: tintColor }} />
        ),
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
