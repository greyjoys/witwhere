import React from 'react';

const Signup = props => {
  let signUpErrorMessage;

  if(props.signUpError) {
    signUpErrorMessage = <p>{props.signUpError[0]}</p>;
  } else {
    signUpErrorMessage = '';
  };

  return (
    <div className='signup-box'> 
      <label name="username">Username: </label>
      <input 
        id="username" 
        name="username"
        type="text" 
        value={ props.playerName } 
        onChange={ props.updatePlayerName } 
      />
      <label name="password">Password: </label>
      <input 
        id="password" 
        name="password"
        type="password" 
        value={ props.playerPass } 
        onChange={ props.updatePlayerPass } 
      />
      {signUpErrorMessage}
      <button 
        onClick={() => {
          props.addPlayer(props.playerName, props.playerPass);
        }}
      >
        Sign Up.
      </button>
    </div>
  );
};

export default Signup;