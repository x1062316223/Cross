import BottomNavigator from '../navigation/BottomNavigator';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import StackNavigator from './StackNavigator';

const Navigator = createSwitchNavigator({
  Login: {screen: StackNavigator},
  Dashboard: {screen: BottomNavigator},
});

export default createAppContainer(Navigator);
