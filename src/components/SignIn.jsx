/**
 * ************************************
 *
 * @module  SignIn
 * @author
 * @date
 * @description presentation component that allows a user to sign in
 *
 * ************************************
 */

import React from "react";

const SignIn = props => (

  <div className="sign-in">
    <label name="username">Player name</label>
    <input id="username" name="username" type="text"></input>
    <label name="password">Password</label>
    <input id="password" name="password" type="text"></input>
  </div>
);

export default SignIn;
