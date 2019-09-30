import Dashboard from '../MainScreens/Dashboard';
import ListCheck from '../MainScreens/ListCheck';
import DateNav from '../navigation/DateNav';
import React from 'react';

import Employees from '../MainScreens/Employees';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

const BottomNavigator = createMaterialBottomTabNavigator(
  {
    Home: {screen: Dashboard},
    ListCheck: {screen: ListCheck},
    Schedule: {
      screen: DateNav,
      navigationOptions: {
        tabBarIcon: <Icon name="calendar-alt" size={22} />,
      },
    },
    Employees: {screen: Employees},
  },
  {
    initialRouteName: 'Home',
    barStyle: {backgroundColor: 'white'},
    shifting: true,
  },
);
export default createAppContainer(BottomNavigator);
