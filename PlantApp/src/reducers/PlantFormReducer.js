import {
  ADD_PLANT,
  PLANT_CREATE,
  PLANT_SAVE_SUCCESS,
  PLANT_CLEAR_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  genusSpecies: '',
  commonName: '',
  nickname: '',
  task: '',
  photo: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PLANT:
      return { ...state, [action.payload.prop]: action.payload.value };
    case PLANT_CREATE:
      return INITIAL_STATE;
    case PLANT_SAVE_SUCCESS:
      return INITIAL_STATE;
    case PLANT_CLEAR_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;

  }
};
