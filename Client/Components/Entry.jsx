import React from 'react';

const Entry = props => (
  <div className='entryBox'>
    <h1>Entry Number: {props.id}</h1>
    {props.description}
  </div>
);
export default Entry;