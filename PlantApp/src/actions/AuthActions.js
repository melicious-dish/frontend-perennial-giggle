import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  SELECT_LIBRARY,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_SUCCESS,
} from './types';

// plain js object that tells the reducer how to change data.

// must have a TYPE property that is a string
// this will the reducer a specific command to the reducer. The value of type is how to pass it to the reducer. So make a TYPES.js file for variables

// also specify which type/string we want to change by passing it a PAYLOAD property (the thing we want to work on)

// next update the reducer to tell it how to handle this action

export const selectedLibrary = libraryId => ({
  type: SELECT_LIBRARY,
  payload: libraryId,
});

// login
export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text,
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

export const loginUser = ({ email, password }) => dispatch => {
  dispatch({ type: LOGIN_USER });

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(error => loginUserFail(dispatch, error));
    });
};

const loginUserFail = (dispatch, error) => {
  dispatch({ type: LOGIN_USER_FAIL });
  console.error(error);
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });

  Actions.main({ type: 'replace' });
};

export const logoutUser = () => dispatch => {
  dispatch({ type: LOGOUT_USER });
  firebase
    .auth()
    .signOut()
    .then(() => {
      logoutUserSuccess(dispatch);
    })
    .catch(error => logoutUserFail(dispatch, error));
};

const logoutUserSuccess = dispatch => {
  dispatch({
    type: LOGOUT_USER_SUCCESS,
  });

  Actions.auth({ type: 'replace' });
};

const logoutUserFail = (dispatch, error) => {
  dispatch({ type: LOGOUT_USER_FAIL });
  console.error(error);
};
