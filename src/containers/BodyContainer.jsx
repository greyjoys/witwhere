import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...

import Player from '../components/Player.jsx';
import Typing from 'react-typing-animation';

const mapStateToProps = store => ({
  playerName: store.main.playerName,
  playerPass: store.main.playerPass,
  promptList: store.main.promptList
});

const mapDispatchToProps = dispatch => ({
  testButton: () => {
    dispatch(actions.testButton());
  }
});

class BodyContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    switch (this.props.gameStage) {
      case 1: {
        return <div className="body-container" />;
      }

      case 2: {
        return (
          <div className="body-container">
            <div className="playercontainer" id="lcontainer">
              <Player />
            </div>
            <div className="playercontainer" id="rcontainer">
              <Player />
            </div>
          </div>
        );
      }

      case 3: {
        return (
          <div className="body-container">
            <Typing className="typing-wrapper" cursorClassName="prompt-type">
              <h2 className="prompt">{this.props.promptList[0]}</h2>
            </Typing>
          </div>
        );
      }

      case 4: {
        return (
          <div className="body-container">
            <div className="answers-container">
              <h2 className="prompt">Funny answer</h2>
              <h2 className="prompt">Another hilarious answer</h2>
            </div>
          </div>
        );
      }

      case 5: {
        return (
          <div className="body-container">
            <div className="typing-wrapper">
              <h2 className="prompt">RESULTS</h2>
            </div>
          </div>
        );
      }

      default: {
        <div>error...</div>;
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyContainer);
