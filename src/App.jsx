import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx'

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <h1>This is the top-level App component.</h1>
        <MainContainer />
      </div>
    )
  }
}

export default App;