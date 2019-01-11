import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Button } from './Components/common';
import LoginForm from './Components/LoginForm';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LibraryList from './Components/LibraryList';



class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCFT7sYB65HbuFRuyFz9mmloonV4XHwKf8",
      authDomain: "plant-app-e071e.firebaseapp.com",
      databaseURL: "https://plant-app-e071e.firebaseio.com",
      projectId: "plant-app-e071e",
      storageBucket: "plant-app-e071e.appspot.com",
      messagingSenderId: "571242942058"
    };

    firebase.initializeApp(config);
  }
  //Provider translates state in the store for React to use the Redux
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
          <Button
            onUserPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
          <Text style={headerStyle}> Your Plants </Text>
          <LibraryList style={{ flex: 1 }}/>
        </View>
      </Provider>
    );
  }
}

const styles = {
  spinnerStyle: {
    marginTop: 300
  },
  headerStyle: {
    marginTop: 20,
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
