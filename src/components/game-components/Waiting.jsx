import React from 'react';
import Prompt from './Prompt.jsx';

const waiting = props => {
  if (props.isObserver) {
    <Redirect to="/voting" />;
  }

  return (
    <React.Fragment>
      <Prompt />
      <div className="response-box">
        <input
          id="response"
          name="response"
          type="text"
          onChange={props.updateResponse}
        />
        <button onClick={props.submitResponse}>Submit Response.</button>
      </div>
    </React.Fragment>
  );
};

export default waiting;
