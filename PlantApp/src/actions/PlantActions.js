// plain js object that tells the reducer how to change data.

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { Platform } from 'react-native';
import {
  ADD_PLANT,
  PLANT_CREATE,
  PLANTS_FETCH_SUCCESS,
  PLANT_SAVE_SUCCESS,
  PLANT_CLEAR_SUCCESS,
  // PLANTS_PHOTOS,
  TAKE_PHOTO,
} from './types';

export const addPlant = ({ prop, value }) => ({
  type: ADD_PLANT,
  payload: { prop, value },
});

// create a path to our json data - use an arrow function to get past Thunk wanting to return a function
// use firebase.auth to get uid
// add new data to firebase store w .push
// use .then to navigate back to plant list
// dispatch to type: ADD_PLANT to reset the form to empty and add that to types and reducer to return to initial state

export const plantCreate = ({
  genusSpecies,
  commonName,
  nickname,
  taskType,
  taskFrequency,
  taskInterval,
  photo,
}) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/plants`)
      .push({
        genusSpecies,
        commonName,
        nickname,
        taskType,
        taskFrequency,
        taskInterval,
        photo,
      })
      .then(() => {
        dispatch({ type: PLANT_CREATE });
        Actions.pop();
      });
  };
};

// fetch data
// snapshot is an object that describes the data, call snapshot.val to get the list of actual data
export const plantsFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    // console.log("in PLANTS FETCH");
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/plants`)
      .on('value', snapshot => {
        dispatch({ type: PLANTS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const plantSave = ({
  genusSpecies,
  commonName,
  nickname,
  taskType,
  taskFrequency,
  taskInterval,
  photo,
  uid,
}) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/plants/${uid}`)
      .set({
        genusSpecies,
        commonName,
        nickname,
        taskType,
        taskFrequency,
        taskInterval,
        photo,
      })
      .then(() => {
        dispatch({ type: PLANT_SAVE_SUCCESS });
        Actions.plantList({ type: 'reset' });
      });
  };
};

export const plantDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    console.log('in plant delete');
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/plants/${uid}`)
      .remove()
      .then(() => {
        Actions.plantList({ type: 'reset' });
      });
  };
};

export const plantClear = () => ({ type: PLANT_CLEAR_SUCCESS });

export const plantGallery = () => {
  // const { currentUser } = firebase.auth();
  //
  // return (dispatch) => {
  //   // console.log("in PLANTS FETCH");
  //   firebase.database().ref(`/users/${currentUser.uid}/plants`)
  //   .on('value', snapshot => {
  //     dispatch({ type: PLANTS_PHOTOS, payload: snapshot.val() });
  //   })
  // };
};

export const takePhoto = ({ uid, uri }) => {
  const { currentUser } = firebase.auth();

  return async dispatch => {
    const storageRef = firebase
      .storage()
      .ref(`plantImages/${currentUser.uid}/${uid}`);
    const sessionId = new Date().getTime();
    const imageRef = storageRef.child(`${sessionId}.jpg`);

    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        resolve(xhr.response); // when BlobModule finishes reading, resolve with the blob
      };
      xhr.onerror = () => {
        reject(new TypeError('Network request failed')); // error occurred, rejecting
      };
      xhr.responseType = 'blob'; // use BlobModule's UriHandler
      xhr.open('GET', uri, true); // fetch the blob from uri in async mode
      xhr.send(null); // no initial data
    });

    const snapshot = await imageRef.put(blob);
    const remoteURL = await snapshot.ref.getDownloadURL();

    blob.close();

    firebase
      .database()
      .ref(`/users/${currentUser.uid}/plants/${uid}`)
      .child('plantImages')
      .push(remoteURL);
  };
};

// then hook action creator up to plantedit Component
