import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './Components/common';
import LoginForm from './Components/LoginForm';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LibraryList from './Components/LibraryList';



class App extends Component {
  state = {
    loggedIn: null
  };



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
    const { headerStyle, spinnerStyle } = styles;
    switch (this.state.loggedIn) {
      case true:
      return (
        <Provider store={createStore(reducers)}>
          <View>
            <Button
              onUserPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
            <Text style={headerStyle}> Your Plants </Text>
            <LibraryList />
          </View>
        </Provider>
      );
      case false:
      return <LoginForm />
      default:
      return (
        <View style={spinnerStyle}>
          <Spinner
            size="large" />
        </View>
      )
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Plant App"/>
        {this.renderContent()}
      </View>

    );
  }
}

const styles = {
  spinnerStyle: {
    marginTop: 300
  },
  headerStyle: {
    fontSize: 25,
    alignSelf: 'center',
    backgroundColor: '#A9DFBF',
    borderRadius: 5,

  }
  // logOutStyle: {
  //
  // }
}


export default App;
