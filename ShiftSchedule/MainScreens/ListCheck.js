//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
//import all the basic component we have used
import {Header, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const list = [
  {
    job: 'Cleaning Tables',
  },
  {
    job: 'Check Inventory',
  },
];
export default class ListCheck extends React.Component {
  static navigationOptions = {
    tabBarIcon: <Icon name="clipboard-check" size={22} />,
  };
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  //Detail Screen to show from any Open detail button
  render() {
    return (
      <View>
        <Header
          centerComponent={{text: 'Check List', style: {color: '#fff'}}}
        />
        {list.map((l, i) => (
          <ListItem
            key={i}
            title={l.job}
            bottomDivider
            checkBox={{
              key: {i},
              title: null,
              checked: this.state.checked,
              onPress: () => this.setState({checked: !this.state.checked}),
            }}
          />
        ))}
        <Button title="Outline button" />
      </View>
    );
  }
}
