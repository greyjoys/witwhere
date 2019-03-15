import React from 'react';

const Login = props => {
  let logInErrorMessage;

  if (props.loginError) {
    logInErrorMessage = <p>{ props.loginError }</p>;
  } else {
    logInErrorMessage = '';
  };

  return (
    <div className='login-box'>
      <div>
        <label name='username'>Username: </label>
        <input
          id='username'
          name='username'
          type='text'
          value={ props.playerName }
          onChange={ props.updatePlayerName }
        />
        <label name='password'>Password: </label>
        <input
          id='password'
          name='password'
          type='password'
          value={ props.playerPass }
          onChange={ props.updatePlayerPass }
        />
        {logInErrorMessage}
      </div>
      <button
        onClick={() => {
          props.login(props.playerName, props.playerPass);
        }}
      >
        Log In.
      </button>
    </div>
  );
}; 

export default Login;