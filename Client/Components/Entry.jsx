import React from 'react';

const Entry = props => (
  <div className='entryBox'>
    <h1>Test</h1>
    {props.id}
    {props.description}
  </div>
);
export default Entry;