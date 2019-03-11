import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...
import Player from '../components/Player.jsx'

const mapStateToProps = store => ({
  playerName: store.main.playerName,
  playerPass: store.main.playerPass,
  promptList: store.main.promptList,
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

    switch(this.props.gameStage) {
      case 1: {
        return(
        <div className="body-container"></div>
        )
      }

      case 2: {
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

      case 3: {
        return(
          <div className="body-container">
            <h2 className="prompt">{this.props.promptList[0]}</h2>
          </div>
        )
      }

      case 4: {
        return(
          <div className="body-container"></div>
        )
      }

      case 5: {
        return(
          <div className="body-container"></div>
        )
      }

      default: {
        <div>error...</div>
      }    
    }
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);