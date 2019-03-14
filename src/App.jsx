import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Import Children
import MainContainer from './containers/MainContainer.jsx';
import AuthContainer from './containers/AuthContainer.jsx';

import * as actions from './actions/actions';

const mapStateToProps = store => ({
  playerName: store.auth.playerName,
  playerPass: store.auth.playerPass
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
          <Route path={'/'} component={AuthContainer} />
          <Route path={'/'} component={MainContainer} />
          <Route path={'/waiting'} component={Waiting} />
          <Route path={'/voting'} component={Voting} />
          <Route path={'/results'} component={Results} />
          <Route path={'/final'} component={Final} />
          <Route
            path={'/auth/login'}
            render={props => <Login {...this.props} />}
          />
          <Route
            path={'/auth/signup'}
            render={props => <Signup {...this.props} />}
          />
          <Route path={'/'} component={ AuthContainer } />
          <Route path={'/main'} component={ MainContainer } />

          <Route path={'/waiting'} component={ Waiting } />
          <Route path={'/voting'} component={ Voting } />
          <Route path={'/results'} component={ Results } />
          <Route path={'/final'} component={ Final } />
          <Route path={'/auth/login'} component={ Login } />
          <Route path={'/auth/signup'} component={ Signup } />
          {/* <Route path={'/login'} render={() => <Login {...this.props} />} />
          <Route path={'/signup'} render={() => <Signup {...this.props} />} /> */}
        </React.Fragment>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
