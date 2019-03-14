import React from 'react';
import Prompt from './Prompt.jsx'

const final = props => {
  return (
    <div className='final-box'>
      <i className="fas fa-crown" />
      <h2>{ props.finalWinner }</h2>
      <button onClick={ props.restartGame }>
        Play Again.
      </button>
      <button onClick={ alert('No.') }>
        Quit Game.
      </button>
    </div>
  );
};

export default final;