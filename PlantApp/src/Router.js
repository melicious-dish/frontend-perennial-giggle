import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import LibraryList from './Components/LibraryList';
import PlantCreate from './Components/PlantAdd';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login'
          component={LoginForm}
          title="Please Login"
          initial
          />
        </Scene>
        
        <Scene key='main'>
          <Scene
          rightTitle='Add a plant'
          onRight={() => Actions.plantCreate()}
          key='plantList'
          component={LibraryList}
          title='Your Plants'
          initial
          />

          <Scene key='plantCreate'
          component={PlantCreate}
          title='Create Plant'/>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
