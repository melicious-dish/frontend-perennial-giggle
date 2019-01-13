import {
  ADD_PLANT
} from './types';

export const addPlant = ({ prop, value }) => {
  return {
    type: ADD_PLANT,
    
    payload: { prop, value }
  };
};
