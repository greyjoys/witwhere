import React from 'react';

const Login = props => {
  console.log('inside component:');
  let logInErrorMessage
  if (props.loginError) {
    logInErrorMessage = <p>{props.loginError}</p>
  } else {
    logInErrorMessage = ''
  }
    return (
      <div className='login-box'>
        <label name='username'>Player name:</label>
        <input
          id='username'
          name='username'
          type='text'
          value={ props.playerName }
          onChange={ props.updatePlayerName }
        />
        <label name='password'>Password:</label>
        <input
          id='password'
          name='password'
          type='password'
          value={ props.playerPass }
          onChange={ props.updatePlayerPass }
        />
        {logInErrorMessage}
        <button
          onClick={() => {
            props.login(props.playerName, props.playerPass);
          }}
        >Log In.</button>
      </div>
    );
  }; 

export default Login;
