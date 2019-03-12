/**
 * ************************************
 *
 * @module  Prompt
 * @author
 * @date
 * @description presentation component that allows a user to sign in
 *
 * ************************************
 */

import React from "react";

const Prompt = props => (
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?

  <div className="prompt">
    <h2>{props.prompt}</h2>
  </div>
);

export default Prompt;
