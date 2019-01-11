import firebase from 'firebase';

import {
  SELECT_LIBRARY,
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from './types';


// plain js object that tells the reducer how to change data.

// must have a TYPE property that is a string
// this will the reducer a specific command to the reducer. The value of type is how to pass it to the reducer. So make a TYPES.js file for variables

// also specify which type/string we want to change by passing it a PAYLOAD property (the thing we want to work on)

// next update the reducer to tell it how to handle this action

export const selectedLibrary = (libraryId) => {
  return {
    type: SELECT_LIBRARY,
    payload: libraryId
  };
};

// login
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user})
    });
  };
};
