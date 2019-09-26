import Dashboard from '../MainScreens/Dashboard';
import ListCheck from '../MainScreens/ListCheck';
import Schedule from '../MainScreens/Schedule';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';

const BottomNavigator = createMaterialBottomTabNavigator(
  {
    Home: {screen: Dashboard},
    ListCheck: {screen: ListCheck},
    Schedule: {screen: Schedule},
  },
  {
    initialRouteName: 'Home',
    barStyle: {backgroundColor: 'white'},
    shifting: true,
  },
);
export default createAppContainer(BottomNavigator);
