import React from 'react';

const prompt = props => {
  return (
    <div className='prompt-box'>
      <h2>{ props.prompt }</h2>
    </div>
  );
};

export default prompt;