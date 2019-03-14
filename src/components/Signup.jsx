import React from 'react';

const Signup = props => {
    
  if (props.signedUp) {
    <Redirect to='/login' />
  } else {
    return (
      <div className='signup-box'> 
        <label name="username">Player name:</label>
        <input 
          id="username" 
          name="username"
          type="text" 
          value={ props.playerName } 
          onChange={ props.updatePlayerName } 
        />
        <label name="password">Password:</label>
        <input 
          id="password" 
          name="password"
          type="password" 
          value={ props.playerPass } 
          onChange={ props.updatePlayerPass } 
        />
        <button onClick={() => {
            props.addPlayer(props.playerName, props.playerPass);
          }}>Sign Up.</button>
      </div>
    );
  };
};

export default Signup;