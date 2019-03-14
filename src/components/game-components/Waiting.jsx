import React from 'react';
import Prompt from './Prompt.jsx';

const waiting = props => {
  if (props.isObserver) {
    // <Redirect to="/voting" />;
  }

  return (
    <React.Fragment>
      <h1>Fuck you</h1>
      <Prompt />
      <div className="response-box">
        <input
          id="response"
          name="response"
          type="text"
          value={props.responseText}
          onChange={props.updateResponse}
        />
        <button onClick={() => props.submitResponse(props.ws, props.gid)}>
          Submit Response.
        </button>
      </div>
    </React.Fragment>
  );
};

export default waiting;
