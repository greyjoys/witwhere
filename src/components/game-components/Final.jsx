import React from 'react';
import Prompt from './Prompt.jsx';

const final = props => {
  return (
    <div className="final-box">
      <i className="fas fa-crown" />
      <h2>{props.finalWinner}</h2>
      <div>
        <button onClick={props.restartGame}>Play Again.</button>
        <button>Quit Game.</button>
      </div>
    </div>
  );
};

export default final;
