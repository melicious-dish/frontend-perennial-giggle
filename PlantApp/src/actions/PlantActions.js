// plain js object that tells the reducer how to change data.

import firebase from 'firebase';
import {
  ADD_PLANT
} from './types';

export const addPlant = ({ prop, value }) => {
  return {
    type: ADD_PLANT,
    payload: { prop, value }
  };
};


// create a path to our json data
// use firebase.auth to get uid
// add new data to firebase store w .push

export const plantCreate = ({ genusSpecies, commonName, nickname, task, photo }) => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}/plants`)
  .push({ genusSpecies, commonName, nickname, task, photo });
};
