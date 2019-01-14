import {
  ADD_PLANT
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
    default:
      return state;
  }
};
