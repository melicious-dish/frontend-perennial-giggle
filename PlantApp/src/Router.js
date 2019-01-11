import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import LibraryList from './Components/LibraryList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title="Please Login" initial/>
        </Scene>
        <Scene key='main'>
          <Scene key='plantList' component={LibraryList} title='Your Plants'/>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
