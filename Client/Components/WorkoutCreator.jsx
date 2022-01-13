import React from 'react';

const WorkoutCreator = props => (
  <div>
    <h1>Input a New Workout!</h1>
    <label>What did you do today?</label>
    <input
       onChange={(e) => {props.updateNewEntry(e.target.value)}} 
       value={props.newEntry}
       type="text"
    />
    <button onClick={() =>  {
      props.addEntry(props.newEntry)}}>Submit Entry</button>
    <hr size="2" width="100%"/>
  </div>
);

export default WorkoutCreator;