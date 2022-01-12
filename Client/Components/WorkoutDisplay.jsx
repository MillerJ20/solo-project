import React from 'react';
import Entry from './Entry.jsx';

const WorkoutDisplay = props => {
  return (
    <div className='displayBox'>
      <h4>Journal Entries</h4>
      <Entry/>
    </div>
  );
};

export default WorkoutDisplay;