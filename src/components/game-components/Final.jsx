import React from 'react';
import Prompt from './Prompt.jsx';

const final = props => {
  return (
    <div className="final-box">
      <i className="fas fa-crown" />
<<<<<<< HEAD
      <h2>{ props.finalWinner }</h2>
      <button onClick={ props.restartGame }>
        Play Again.
      </button>
      <button >
        Quit Game.
      </button>
=======
      <h2>{props.finalWinner}</h2>
      <button onClick={props.restartGame}>Play Again.</button>
      <button>Quit Game.</button>
>>>>>>> 4ddd6822fb6deedca01cd249d8ac64530762620a
    </div>
  );
};

export default final;
