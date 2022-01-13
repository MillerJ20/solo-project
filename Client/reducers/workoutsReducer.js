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
    case types.FETCH_ENTRIES: {
      totalEntries = action.payload.length
      entryList = state.entryList.slice();
      entryList.push(...action.payload);
      console.log('Entry List after push ', entryList)

      return {
        ...state, 
        totalEntries,
        entryList,
        newEntry: '',
      };
    }
    case types.SET_NEW_ENTRY: {
      return {
        ...state,
        newEntry: action.payload,
      }
    }

    default: {
      return state;
    }
  }
}

export default workoutsReducer;