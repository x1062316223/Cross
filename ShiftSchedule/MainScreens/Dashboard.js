//This is an example code for Bottom Navigation//
import React from 'react';
import Firebase from '../config/Firebase';
//import react in our code.
import {
  Text,
  View,
  Button,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import {Header, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Dashboard extends React.Component {
  static navigationOptions = {
    tabBarIcon: <Icon name="home" size={22} />,
  };

  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  handleSignout = () => {
    Firebase.auth().signOut();
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View>
        <Header
          containerStyle={styles.header}
          centerComponent={{text: 'Dashboard', style: {color: '#fff'}}}
        />
        <Button
          title="Detail"
          onPress={() => this.props.navigation.navigate('Schedule')}
        />
        <Button title="Logout" onPress={() => this.handleSignout()} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {height: 56, paddingTop: 0},
    }),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
