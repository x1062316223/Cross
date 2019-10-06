import React from 'react';
import {View, TextInput, TouchableOpacity, Text, Button} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateEmail, updatePassword, login, getUser} from '../actions/user';
import Firebase from '../config/Firebase';
import {stylesLogin} from '../assets/styles';

class Login extends React.Component {
  componentDidMount = () => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.getUser(user.uid);
        if (this.props.user != null || this.props.user.email) {
          this.props.navigation.navigate('Dashboard');
        }
      }
    });
  };

  render() {
    return (
      <View style={stylesLogin.container}>
        <TextInput
          style={stylesLogin.inputBox}
          value={this.props.user.email}
          onChangeText={email => this.props.updateEmail(email)}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={stylesLogin.inputBox}
          value={this.props.user.password}
          onChangeText={password => this.props.updatePassword(password)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={stylesLogin.button}
          onPress={() => this.props.login()}>
          <Text style={stylesLogin.buttonText}>Login</Text>
        </TouchableOpacity>
        <Button
          title="Don't have an account yet? Sign up"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {updateEmail, updatePassword, login, getUser},
    dispatch,
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
