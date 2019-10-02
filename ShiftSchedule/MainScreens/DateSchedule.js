//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {View, StyleSheet, Platform} from 'react-native';
import {Header, ListItem} from 'react-native-elements';

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
export default class DateSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    return (
      <View>
        <Header
          containerStyle={styles.header}
          centerComponent={{text: 'Assign Employee', style: {color: '#fff'}}}
          leftComponent={{
            text: 'Back',
            style: {color: '#fff'},
            onPress: () => this.props.navigation.goBack(),
          }}
        />
        {list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{source: {uri: l.avatar_url}}}
            title={l.name}
            subtitle={l.subtitle}
            bottomDivider
            checkBox={{
              key: {i},
              title: null,
              checked: this.state.checked,
              onPress: () => this.setState({checked: !this.state.checked}),
            }}
          />
        ))}
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
