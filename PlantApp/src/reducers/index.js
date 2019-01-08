import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

//produce the initial state of the app
// initial state
export default combineReducers({
  libraries: LibraryReducer
});
