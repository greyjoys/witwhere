import React from 'react';

const Login = props => {
  console.log('from login component:', props);
<<<<<<< HEAD
  if (props.loggedIn) {
    <Redirect to='/lobby' />;
  } else {
    if(!props.loginError) {
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
            props.login(props.playerName, props.playerPass);
          }}
        >Log In.</button>
      </div>
    );
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
      <p>{props.loginError}</p>
      <button
        onClick={() => {
          props.login(props.playerName, props.playerPass);
        }}>Log In.</button>
    </div>
    );
  };
  };
=======
  return <h1>hello</h1>
  // if (props.loggedIn) {
  //   <Redirect to='/lobby' />;
  // } else {
  //   return (
  //     <div className='login-box'>
  //       <label name='username'>Player name:</label>
  //       <input
  //         id='username'
  //         name='username'
  //         type='text'
  //         value={ props.playerName }
  //         onChange={ props.updatePlayerName }
  //       />
  //       <label name='password'>Password:</label>
  //       <input
  //         id='password'
  //         name='password'
  //         type='text'
  //         value={ props.playerPass }
  //         onChange={ props.updatePlayerPass }
  //       />
  //       <button
  //         onClick={() => {
  //           props.addPlayer(props.playerName, props.playerPass);
  //         }}
  //       >
  //         Log In.
  //       </button>
  //     </div>
  //   );
  // }
>>>>>>> 4ddd6822fb6deedca01cd249d8ac64530762620a
};

export default Login;
