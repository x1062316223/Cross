//This is an example code for Bottom Navigation//
import React from 'react';
import Firebase from '../config/Firebase';
//import react in our code.
import {Text, View, Button} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Dashboard extends React.Component {
  static navigationOptions = {
    tabBarIcon: <Icon name="home" size={22} />,
  };
  handleSignout = () => {
    Firebase.auth().signOut();
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View>
        <Header centerComponent={{text: 'Dashboard', style: {color: '#fff'}}} />

        <Text>Details!</Text>
        <Button
          title="Detail"
          onPress={() => this.props.navigation.navigate('Schedule')}
        />
        <Button title="Logout" onPress={() => this.handleSignout()} />
      </View>
    );
  }
}
