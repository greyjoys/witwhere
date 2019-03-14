import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Import Children
import MainContainer from './containers/MainContainer.jsx';
import AuthContainer from './containers/AuthContainer.jsx';

import Waiting from './components/game-components/Waiting.jsx';
import Voting from './components/game-components/Voting.jsx';
import Results from './components/game-components/Results.jsx';
import Final from './components/game-components/Final.jsx';

import * as actions from './actions/actions';

const mapStateToProps = store => ({});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <h1>**** WITWHERE 64 V2.00 BASIC V2 ****</h1>
          <hr />
          <Route path={'/'} component={ AuthContainer } />
          <Route path={'/main'} component={ MainContainer } />
          <Route path={'/waiting'} component={ Waiting } />
          <Route path={'/voting'} component={ Voting } />
          <Route path={'/results'} component={ Results } />
          <Route path={'/final'} component={ Final } />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;