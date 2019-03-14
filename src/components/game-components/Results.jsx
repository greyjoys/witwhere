import React from 'react';
import Prompt from './Prompt.jsx'

const results = props => {
  return (
    <React.Fragment>
      <Prompt />
      <div className='results-box'>
        <h3>Player One:</h3>
        <p>{ props.player1Response }</p>
        <p>{ props.response1Votes }</p>
        <i class="fas fa-star" />
        <h3>Player Two:</h3>
        <p>{ props.player2Response }</p>
        <p>{ props.response1Votes }</p>
        <button onClick={ props.startNextRound }>
          Next Round.
        </button>
      </div>
    </React.Fragment>
  );
};

export default results;