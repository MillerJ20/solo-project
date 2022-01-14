import React, { useEffect } from 'react';

const WorkoutCreator = props => {

  return (
  <div>
    <label>What did you do today?</label>
    <input
       onChange={(e) => {props.updateNewEntry(e.target.value)}} 
       value={props.newEntry}
       type="text"
    />
    <button onClick={() =>  {
      props.addEntry(props.newEntry)
      }}>Submit Entry</button>
    <hr size="2" width="100%"/>
  </div>
  );
}
  
export default WorkoutCreator;