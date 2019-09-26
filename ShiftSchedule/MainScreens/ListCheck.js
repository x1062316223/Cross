//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
//import all the basic component we have used
import {ListItem, CheckBox, Button} from 'react-native-elements';

export default class ListCheck extends React.Component {
  //Detail Screen to show from any Open detail button
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <CheckBox title="Click Here" />
        <CheckBox title="Click Here" />
        <CheckBox title="Click Here" />
      </View>
    );
  }
}
