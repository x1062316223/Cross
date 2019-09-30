//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

//import all the basic component we have used

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];

export default class Employees extends React.Component {
  static navigationOptions = {
    tabBarIcon: <Icon name="user" size={22} />,
  };
  //Detail Screen to show from any Open detail button
  render() {
    return (
      <View>
        <Header centerComponent={{text: 'Employees', style: {color: '#fff'}}} />
        {list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{source: {uri: l.avatar_url}}}
            title={l.name}
            subtitle={l.subtitle}
            bottomDivider
            onPress={() =>
              this.props.navigation.navigate('UserDetail', this.key)
            }
          />
        ))}
      </View>
    );
  }
}
