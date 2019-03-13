import React, { Component } from 'react';


const Login = props => {
  return (
    <div className="header">
    <h1>**** WITWHERE 64 V1.00 BASIC V2 ****</h1>
    <div className="sign-in-container">
      <div className="inputs">
        <div className="user-input-container">
          <label name="username">Player name:</label>
          <input id="username" name="username" type="text" value={props.playerName} onChange={props.updatePlayerName}></input>
        </div>
        <div className="user-input-container">
          <label name="password">Password:</label>
          <input id="password" name="password" type="text" value={props.playerPass} onChange={props.updatePlayerPass}></input>
        </div>
      </div>
      <div className="button">
        <button onClick={props.testButton}>Sign in</button>
      </div>
    </div>
  </div>
  )
};

export default Login;