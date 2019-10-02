import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import {createStackNavigator} from 'react-navigation-stack';

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(StackNavigator);
