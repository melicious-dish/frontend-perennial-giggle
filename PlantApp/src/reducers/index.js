// index.js is the window into the rest of the reducers
// combineReducers allows for multiple reducers to work together

import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './AuthReducer';


//produce the initial state of the app
// initial state
// key will be what will show up on state object

// assign LibraryReducer to libraries key: application state will now be an object (libraries) with the value of whatever got returned from that reducer

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer,
  auth: AuthReducer
});
