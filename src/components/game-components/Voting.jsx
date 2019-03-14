import React from 'react';
import Prompt from './Prompt.jsx';
// when observers are waiting for a response from the players
const voting = props => {
  return (
    <React.Fragment>
      <Prompt />
      <div className="waiting-for-box">
        <h2>
          Waiting on data.
          <br />[ Cue Jeopardy music... ]
        </h2>

        <h1>Player 1 Response</h1>
        <h2>{props.response1}</h2>
        <button onClick={props.handleVoteClick} name="1">
          Vote for player 1
        </button>
        <h1>Player 2 Response</h1>
        <h2>{props.response2}</h2>
        <button onClick={props.handleVoteClick} name="2">
          Vote for player 2
        </button>
      </div>
    </React.Fragment>
  );
};

export default voting;
