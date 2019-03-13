import React from 'react';
import Prompt from './Prompt.jsx'

const results = props => {
  return (
    <React.Fragment>
      <Prompt />
      <div className='results-box'>
        <h3>Player One: { props.player1response }</h3>
        <h3>Player Two: { props.player2response }</h3>
        <button onClick={ props.startNextRound }>
          Next Round.
        </button>
      </div>
    </React.Fragment>
  );
};

export default results;