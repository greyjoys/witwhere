import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Import Children
import MainContainer from './containers/MainContainer.jsx';
import AuthContainer from './containers/AuthContainer.jsx';

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
        </React.Fragment>
      </Router>
    );
  }
}

export default App;