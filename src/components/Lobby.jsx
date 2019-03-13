import React from 'react';

const Lobby = props => {

  return (
    <div className='lobby-box'> 
      <button onClick={ props.createGame }>Create Game</button>
      <button onClick={ props.joinGame }>Join Game</button>
      <input 
        id="game-id" 
        name="game-id"
        type="text"
        onChange={ props.updateGameId } 
      />
    </div>
  );
};

export default Lobby;