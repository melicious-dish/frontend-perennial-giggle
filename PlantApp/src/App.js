import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './Components/common';
import LoginForm from './Components/LoginForm';



class App extends Component {
    state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCFT7sYB65HbuFRuyFz9mmloonV4XHwKf8",
      authDomain: "plant-app-e071e.firebaseapp.com",
      databaseURL: "https://plant-app-e071e.firebaseio.com",
      projectId: "plant-app-e071e",
      storageBucket: "plant-app-e071e.appspot.com",
      messagingSenderId: "571242942058"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <Button onUserPress={() => firebase.auth().signOut()}>
        Log Out
        </Button>
      );
      case false:
      return <LoginForm />
      default:
      return (
        <View style={styles.spinnerStyle}>
        <Spinner
        size="large" />
        </View>
      )
    }
  }

  render() {
    return (
      <View>
      <Header headerText="Sign In or Create Account"/>
      {this.renderContent()}
      </View>
    )
  }
}

const styles = {
  spinnerStyle: {
    marginTop: 300
  }
}


export default App;
