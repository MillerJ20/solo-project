import { combineReducers } from "redux";

import workoutsReducer from "./workoutsReducer";

const reducers = combineReducers ({
  workouts: workoutsReducer,
});

export default reducers;