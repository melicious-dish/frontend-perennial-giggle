import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';


//produce the initial state of the app
// initial state
// key will be what will show up on state object

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
