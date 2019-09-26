import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Profile from '../screens/Profile';
import {createStackNavigator} from 'react-navigation-stack';

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(StackNavigator);
