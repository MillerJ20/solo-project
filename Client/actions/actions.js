import * as types from '../constants/actionTypes';

export const addEntryCreator = workoutEntry => ({
  type: types.ADD_ENTRY,
  payload: workoutEntry,
});