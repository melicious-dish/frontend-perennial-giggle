import React, { Component } from 'react';
import { connect } from 'react-redux'
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser, logoutUser } from '../actions'
import { Text, View } from 'react-native';
// import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        Actions.main()
      }
    })
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }
// call to the action creator
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    // console.log("IN botton press");
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }

    return (
      <Button onUserPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      )
    }
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

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}
//{use bind to use it in the future}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',

  }
}
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, logoutUser
})(LoginForm);
