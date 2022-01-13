import * as types from '../constants/actionTypes';

export const fetchEntriesActionCreator = dispatch => {
  fetch('http://localhost:3000/workouts')
  .then(res => res.json())
  .then(data => {
    dispatch({
      type: types.FETCH_ENTRIES,
      payload: data.entries,
    })
    return;
  })
  .catch(err=> {
    console.log(err);
  })
};

export const addEntryCreator = (dispatch, entryInfo) => {
  fetch('http://localhost:3000/workouts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ journal_entry: entryInfo })
  })
  .then(res=> res.json())
  .then(data => {
    dispatch({
      type: types.ADD_ENTRY,
      payload: data.entryInfo,
    })
  })
  .catch(err =>{
    console.log(err);
  })
};

export const setNewEntryActionCreator = newEntry => ({
  type: types.SET_NEW_ENTRY,
  payload: newEntry
});