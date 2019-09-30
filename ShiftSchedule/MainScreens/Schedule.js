//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {View} from 'react-native';
import {Header, ListItem} from 'react-native-elements';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

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

export default class Schedule extends React.Component {
  getDateMarking(day) {
    const {markedDates} = this.props;
    if (markedDates.length === 0) {
      return false;
    }
    const date = markedDates.find(item => moment(day).isSame(item.date, 'day'));
    if (date && date.dots.length > 0) {
      return date;
    } else {
      return false;
    }
  }
  //Detail Screen to show from any Open detail button
  render() {
    return (
      <View>
        <Header centerComponent={{text: 'Schedule', style: {color: '#fff'}}} />

        <CalendarStrip
          onDateSelected={() =>
            this.props.navigation.navigate('Date', this.date)
          }
          calendarAnimation={{type: 'parallel', duration: 30}}
          daySelectionAnimation={{
            type: 'border',
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: 'white',
          }}
          style={{height: 100, paddingTop: 20, paddingBottom: 10}}
          iconContainer={{flex: 0.1}}
        />
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
