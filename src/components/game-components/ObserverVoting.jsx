import React from 'react';
import Prompt from './Prompt.jsx';

const observerVoting = props => {
  let arrOfResponses = [
    <div>
      <h3>Player One: { props.player1response }</h3>
      <button onClick= { props.submitVote } />
    </div>,
    <div>
      <h3>Player Two: { props.player2response }</h3>
      <button onClick= { props.submitVote } />
    </div>
  ];

  return (
    <React.Fragment>
      <Prompt />
      <div className="voting-choices-box">
        { arrOfResponses }
        <button onClick={props.submitResponse}>Submit Response.</button>
      </div>
    </React.Fragment>
  );
};

export default observerVoting;