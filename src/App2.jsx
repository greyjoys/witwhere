import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <Router>
        <Route path={'/'} component={Header} />
        <Route path={'/login'} component={Login} />
        <Route path={'/signup'} component={SignUp} />
        <Route path={'/lobby'} component={Lobby} />
        <Route path={'/session'} component={Session} />     
      </Router>
    );
  };
};

export default App;