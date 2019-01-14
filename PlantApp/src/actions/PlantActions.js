// plain js object that tells the reducer how to change data.

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  ADD_PLANT,
  PLANT_CREATE
} from './types';

export const addPlant = ({ prop, value }) => {
  return {
    type: ADD_PLANT,
    payload: { prop, value }
  };
};


// create a path to our json data - use an arrow function to get past Thunk wanting to return a function
// use firebase.auth to get uid
// add new data to firebase store w .push
// use .then to navigate back to plant list
// dispatch to type: ADD_PLANT to reset the form to empty and add that to tyles and reducer to return to initial state

export const plantCreate = ({ genusSpecies, commonName, nickname, task, photo }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/plants`)
    .push({ genusSpecies, commonName, nickname, task, photo })
    .then(() => {
      dispatch({ type: PLANT_CREATE });
      Actions.pop();
    });
  };
};