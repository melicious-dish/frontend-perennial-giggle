import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
// import firebase from 'firebase';
// import { Spinner } from './Components/common'
import Loading from './Components/Loading';
import LoginForm from './Components/LoginForm';
import PlantList from './Components/PlantList';
import PlantCreate from './Components/PlantAdd';
import PlantEdit from './Components/PlantEdit';
import PlantGallery from './Components/PlantGallery';
import Camera from './Components/Camera';

const RouterComponent = () => (
  <Router navigationBarStyle={styles.headingStyle}>
    <Scene key="root" hideNavBar>
      <Scene key="loading" component={Loading} />
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" initial />
      </Scene>

      <Scene key="main">
        <Scene
          leftButton={
            <Icon
  name="image"
  color="#ccbf38"
  size={41}
  onPress={() => Actions.plantGallery()}
/>
          }
          rightButton={
            <Icon
  reverse
  size={14}
  name="add"
  color="#ccbf38"
  onPress={() => Actions.plantCreate()}
/>
          }
          key="plantList"
          component={PlantList}
          title="Your Plants"
          initial
        />
        <Scene
          key="plantCreate"
          component={PlantCreate}
          title="Create Plant"
          navBarButtonColor="#446529"
          titleStyle={{ color: 'black' }}
        />
        <Scene
          key="takePhoto"
          component={Camera}
          title="Take Photo"
          navBarButtonColor="#446529"
          titleStyle={{ color: 'black' }}
        />
        <Scene
          key="plantEdit"
          component={PlantEdit}
          title="Edit Plant"
          navBarButtonColor="#446529"
          titleStyle={{ color: 'black' }}
        />
        <Scene
          key="plantGallery"
          component={PlantGallery}
          title="Plant Gallery"
          navBarButtonColor="#446529"
          titleStyle={{ color: 'black' }}
        />
      </Scene>
    </Scene>
  </Router>
);

const styles = {
  headingStyle: {
    backgroundColor: '#f5f7f3',
    color: 'green',
    marginRight: 15,
    marginLeft: 15,
  },
};
export default RouterComponent;
