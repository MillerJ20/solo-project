import * as types from '../constants/actionTypes';

const initialState = {
  totalEntries: 0,
  entryList: [],
  lastEntryId: 0,
  newEntry: '',
};

const workoutsReducer = (state = initialState, action) => {
  let totalEntries;
  let entryList;
  let lastEntryId;
  let newEntry;

  switch(action.type) {
    case types.ADD_ENTRY: {
      lastEntryId = state.lastEntryId +1;
      totalEntries = state.totalEntries +1;
      const newWorkout = {
        'Workout ID': lastEntryId,
        'Workout Description': action.payload
      };

      entryList = state.entryList.slice();
      entryList.push(newWorkout);

      return {
        ...state,
        totalEntries,
        entryList,
        lastEntryId,
        newEntry: '',
      };
    }

    default: {
      return state;
    }
  }
}

export default workoutsReducer;