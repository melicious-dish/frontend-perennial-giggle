import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import SplashScreen from 'react-native-splash-screen';
import { Button } from './Components/common';
import LoginForm from './Components/LoginForm';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  async UNSAFE_componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCFT7sYB65HbuFRuyFz9mmloonV4XHwKf8',
      authDomain: 'plant-app-e071e.firebaseapp.com',
      databaseURL: 'https://plant-app-e071e.firebaseio.com',
      projectId: 'plant-app-e071e',
      storageBucket: 'plant-app-e071e.appspot.com',
      messagingSenderId: '571242942058',
    };
    // SplashScreen.hide();
    await firebase.initializeApp(config);
  }

  // Provider translates state in the store for React to use the Redux
  // connects all the connect tags

  // renderContent() {
  //   const { headerStyle } = styles;
  //       <Provider store={createStore(reducers)}>
  //         <View>
  //           <LoginForm />
  //           <Button
  //             onUserPress={() => firebase.auth().signOut()}>
  //             Log Out
  //           </Button>
  //           <Text style={headerStyle}> Your Plants </Text>
  //           <LibraryList style={{ flex: 1 }}/>
  //         </View>
  //       </Provider>
  // }

  render() {
    const { headerStyle } = styles;

    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
      reducers,
      {},
      composeEnhancers(applyMiddleware(ReduxThunk))
    );
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = {
  headerStyle: {
    marginTop: 20,
    fontSize: 25,
    color: '#f5f7f3',
    alignSelf: 'center',
    backgroundColor: '#A9DFBF',
    borderRadius: 5,
  },
};

export default App;
