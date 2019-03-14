import React from 'react';

const Login = props => {
  console.log('from login component:', props);
  if (props.loggedIn) {
    <Redirect to='/lobby' />;
  } else {
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
        <button
          onClick={() => {
            props.addPlayer(props.playerName, props.playerPass);
          }}
        >
          Log In.
        </button>
      </div>
    );
  }
};

export default Login;
