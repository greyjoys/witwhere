import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...
import Login from '../components/Login.jsx'
import Signup from '../components/Signup.jsx'
import Signup from '../components/Signup.jsx';
import Login from '../components/Login.jsx';

import Login from '../components/Login.jsx'
import Signup from '../components/Signup.jsx'

import Signup from '../components/Signup.jsx';
import Login from '../components/Login.jsx';


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
  },

  // submitReady: e => {
  //   dispatch(actions.submitReady(e));
  // },
  addPlayer: (playerName, playerPass) => {
    dispatch(actions.addPlayer(playerName, playerPass));
  },
  login: (playerName, playerPass) => {
    dispatch(actions.login(playerName, playerPass));
  }
});

// Component Body

class AuthContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      userClickedButton: null
    };
    this.loginClicked = this.loginClicked.bind(this);
    this.signUpClicked = this.signUpClicked.bind(this);
  }

  loginClicked() {
    this.setState({ userClickedButton: 'login' });
  }

  signUpClicked() {
    this.setState({ userClickedButton: 'signup' });


    }

  
  render(props) {
    console.log(this.props)
    return (
      <Router>
        <div className="auth-container">
          <h1>Inside auth container</h1>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          
          <Route path={"/login"}
          render ={ (props) =>{
            return(
            <Login {...this.props}/>
            )
          }}
    
          />
          <Route path={"/signup"}
          render ={ (props) => {
            return(
            <Signup {...this.props}/>
            )
          }}
          />
<<<<<<< HEAD
=======

>>>>>>> f40b0feb148ec5fd5939da3be0d86ebe73ef666a
  }

  render() {
    if (this.state.userClickedButton === 'login') {
      return <Redirect to="/auth/login" />;
    }
    if (this.state.userClickedButton === 'signup') {
      return <Redirect to="/auth/signup" />;
    }

    return (
      <Router>
        <div className="auth-container">

          <h1>Inside auth container</h1>
          <button onClick={this.loginClicked}>Login</button>
          <button onClick={this.signUpClicked}>Sign Up</button>

          <h1>Are you ready to do the thing?</h1>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
          <Route 
            path={'/login'} 
            render={props => <Login {...props} /> } 
          />
          <Route path={'/signup'} component={ Signup } />

        </div>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
