import React from 'react';

const menu = props => {
  return (
    <div className="menu-box" style={{ backgroundColor: 'red' }}>
      <button
        onClick={() => {
          props.handleCreateNewGame(props.ws, props.reduxAddGid);
        }}
      >
        Create Game
      </button>
      <button
        onClick={() => {
          props.handleJoinGame(props.ws, props.gidTextBoxValue, props.username);
        }}
      >
        Join Game
      </button>
      <input
        id="game-id"
        name="game-id"
        type="text"
        value={props.gidTextBoxValue}
        onChange={props.handleGidTextBoxChange}
      />
    </div>
  );
};

export default menu;
