import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
 } from '../actions/types';

// can never return undefined from a reducer, need a default state
// use { ...state } to create a new object, otherwise redux won't know there's a state change.
const INITIAL_STATE = {
  email: '',
  password: ''
 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;

  }
};
