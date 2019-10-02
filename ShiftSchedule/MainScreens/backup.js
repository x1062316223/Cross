//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {View, StyleSheet, Platform, Alert} from 'react-native';
//import all the basic component we have used
import {Header, ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const list = [
  {
    id: 0,
    job: 'Cleaning Tables',
  },
  {
    id: 1,
    job: 'Check Inventory',
  },
];
const CheckedArray = new Set();

export default class ListCheck extends React.Component {
  static navigationOptions = {
    tabBarIcon: <Icon name="clipboard-check" size={22} />,
  };
  AddItemsToArray = text => {
    //Adding Items To Array.
    CheckedArray.add(text);
  };

  // toggleCheck(id) {
  //   let item = list.filter(function(list) {
  //     return list.id === id;
  //   });
  //   item.isChecked = !item.isChecked;
  //   var checked = item.isChecked;
  //   this.setState({list});
  //   return checked;
  // }
  // getChecked(id) {
  //   let item = list.filter(function(list) {
  //     return list.id === id;
  //   });
  //   var checkItem = item.isChecked;
  //   return checkItem;
  // }

  //Detail Screen to show from any Open detail button
  render() {
    return (
      <View>
        <Header
          containerStyle={styles.header}
          centerComponent={{text: 'Check List', style: {color: '#fff'}}}
        />
        {list.map((l, i) => (
          <ListItem
            key={i}
            title={l.job}
            bottomDivider
            checkBox={{
              key: {i},
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
const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {height: 56, paddingTop: 0},
    }),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
