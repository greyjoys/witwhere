import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...
import Player from '../components/Player.jsx'

const mapStateToProps = store => ({
  playerName: store.main.playerName,
  playerPass: store.main.playerPass,
});

const mapDispatchToProps = dispatch => ({
  testButton: () => {
    dispatch(actions.testButton())
  },
});

class BodyContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return(
      <div className="body-container">
        <playercontainer id="lcontainer">
          <Player />
        </playercontainer>
        <playercontainer id="rcontainer">
          <Player />
        </playercontainer>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);