import React from 'react';
import Typing from 'react-typing-animation';

const Player = props => {
  return (
    <div className="player">

      <h4 className="playername">Player</h4>
      <Typing cursorClassName="prompt-type">
        <h4 className="playerstate">not ready</h4>
      </Typing>
    </div>
  )
}

export default Player;