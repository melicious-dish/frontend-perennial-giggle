import React, { Component } from 'react';
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Text } from 'react-native';
// import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
// call to the action creator
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    console.log("IN botton press");
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  // onButtonPress() {
  //   const { email, password } = this.state;

    // this.setState({ error: '', loading: true });
    //
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(this.onLoginSuccess.bind(this))
    //   .catch(() => {
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //       .then(this.onLoginSuccess.bind(this))
    //       .catch(this.onLoginFail.bind(this));
      // });
  // }

  // onLoginFail() {
  //   this.setState({ error: 'Invalid email or password', loading: false });
  // }
  //
  // onLoginSuccess() {
  //   this.setState({
  //     email: '',
  //     password: '',
  //     loading: false,
  //     error: ''
  //   });
  // }

  // renderButton() {
  //   if (this.state.loading) {
  //     return <Spinner size="small"/>
  //   }
  //   return (
  //     <Button onUserPress={this.onButtonPress.bind(this)}>
  //       Log In
  //     </Button>
  //   );
  // }



  render() {

    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
            />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button onUserPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>

      </Card>
    );
  }
}

// const styles = {
//   errorTextStyle: {
//     fontSize: 20,
//     alignSelf: 'center',
//     color: 'red'
//   }
// };

//{use bind to use it in the future}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
