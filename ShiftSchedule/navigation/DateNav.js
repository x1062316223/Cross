import {createAppContainer} from 'react-navigation';
import Schedule from '../MainScreens/Schedule';
import DateSchedule from '../MainScreens/DateSchedule';
import {createStackNavigator} from 'react-navigation-stack';

const DateNav = createStackNavigator(
  {
    Calendar: {
      screen: Schedule,
    },
    Date: {
      screen: DateSchedule,
    },
  },
  {
    initialRouteName: 'Calendar',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

export default createAppContainer(DateNav);
