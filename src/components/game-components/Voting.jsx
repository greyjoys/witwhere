import React from 'react';
import Prompt from './Prompt.jsx'

const voting = props => {
  return (
    <React.Fragment>
      <Prompt />
      <div className='waiting-for-box'>
        <h2>
          Waiting on data.
          <br/>[ Cue Jeopardy music... ]
        </h2>
      </div>
    </React.Fragment>
  );
};

export default voting;