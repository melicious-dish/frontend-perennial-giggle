import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import PlantList from './Components/PlantList';
import PlantCreate from './Components/PlantAdd';
import PlantEdit from './Components/PlantEdit';

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
          component={PlantList}
          title='Your Plants'
          initial
          />

          <Scene key='plantCreate'
          component={PlantCreate}
          title='Create Plant'
          />

          <Scene key="plantEdit"
            component={PlantEdit}
            title='Edit Plant'
            />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
