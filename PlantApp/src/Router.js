import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
// import firebase from 'firebase';
// import { Spinner } from './Components/common'
import LoginForm from './Components/LoginForm';
import PlantList from './Components/PlantList';
import PlantCreate from './Components/PlantAdd';
import PlantEdit from './Components/PlantEdit';
import PlantGallery from './Components/PlantGallery';
import Camera from './Components/Camera';

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
          leftTitle='Gallery'
          onRight={() => Actions.plantCreate()}
          onLeft={() => Actions.plantGallery()}
          key='plantList'
          component={PlantList}
          title='Your Plants'
          initial
          />

          <Scene key='plantCreate'
          component={PlantCreate}
          title='Create Plant'
          />

        <Scene key='takePhoto'
          component={Camera}
          title='Take Photo'
          />

          <Scene key="plantEdit"
            component={PlantEdit}
            title='Edit Plant'
            />

          <Scene key="plantGallery"
            component={PlantGallery}
            title='Plant Gallery'
            />
        </Scene>
      </Scene>
    </Router>
  )
};

export default RouterComponent;
