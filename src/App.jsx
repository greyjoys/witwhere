import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Import Children

import * as actions from './actions/actions';
import MainContainer from './containers/MainContainer.jsx';
import AuthContainer from './containers/AuthContainer.jsx';

// Redux Methods

const mapStateToProps = store => ({
  playerName: store.auth.playerName,
  playerPass: store.auth.playerPass,
  isAuthenticated: store.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  updatePlayerName: e => {
    dispatch(actions.updatePlayerName(e));
  },
  updatePlayerPass: e => {
    dispatch(actions.updatePlayerPass(e));
  }
});

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
          <Route
            exact
            path="/"
            render={() =>
              this.props.isAuthenticated ? (
                <Redirect to="/main" />
              ) : (
                <AuthContainer {...this.props} />
              )
            }
          />
          <Route
            path={'/main'}
            render={() => <MainContainer {...this.props} />}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
