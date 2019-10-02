//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {ScrollView, StyleSheet, Platform, View} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {db} from '../config/Firebase';

//import all the basic component we have used

const list = [];

export default class Employees extends React.Component {
  static navigationOptions = {
    tabBarIcon: <Icon name="user" size={22} />,
  };
  constructor(props) {
    super(props);
    this.state = {list};
  }
  componentDidMount() {
    db.collection('users')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          var item = {
            name: doc.data().email,
            subtitle: doc.data().uid,
          };
          list.push(item);
          this.setState({list: list});
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  }
  //Detail Screen to show from any Open detail button
  render() {
    return (
      <View>
        <Header
          containerStyle={styles.header}
          centerComponent={{text: 'Employees', style: {color: '#fff'}}}
        />
        <ScrollView>
          {this.state.list.map((l, i) => (
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
        </ScrollView>
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
