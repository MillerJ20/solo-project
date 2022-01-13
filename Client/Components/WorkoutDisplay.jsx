import React, { useEffect } from 'react';
import Entry from './Entry.jsx';

const WorkoutDisplay = props => {

  useEffect(() => {
    props.fetchEntries()
  }, [])

  const entries = [];
    for(let i = 0; i < props.entryList.length; i++){
      entries.push(<Entry id={props.entryList[i].id} description={props.entryList[i].journal_entry}/>)
    }
  return (
    <div className='displayBox'>
      <h4>Journal Entries</h4>
      {entries}
    </div>
  );
};

export default WorkoutDisplay;