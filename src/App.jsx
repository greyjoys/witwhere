import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Import Children

import Menu from './components/Menu.jsx';
import MainContainer from './containers/MainContainer.jsx';
import AuthContainer from './containers/AuthContainer.jsx';

import * as actions from './actions/actions';

const mapStateToProps = store => ({});

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <Router>
        <React.Fragment>
          <h1>**** WITWHERE 64 V1.00 BASIC V2 ****</h1>
          <Route path={'/'} component={AuthContainer} />
          {/* <Route path={'/'} component={Menu} /> */}
          <Route path={'/'} component={MainContainer} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
