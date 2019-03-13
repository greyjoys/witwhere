import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...

const mapStateToProps = store => ({
  userName: store.auth.gameStage,
  passWord: store.auth.playerName,
});

const mapDispatchToProps = dispatch => ({
  advanceStage: () => {
    dispatch(actions.advanceStage())
  },
});

// Component Body

class MainContainer extends Component {
  constructor(props) {
    super(props);
  };

  render(props) {

    return (
      <div className="main-container">
        <Signup
        />
        <Login
        />
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);