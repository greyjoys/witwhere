import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...

const mapStateToProps = store => ({
  gameStage: store.main.gameStage,
  playerName: store.main.playerName,
  playerPass: store.main.playerPass,
  playerList: store.main.playerList
});

const mapDispatchToProps = dispatch => ({
  advanceStage: () => {
    dispatch(actions.advanceStage())
  },
  updatePlayerName: (e) => {
    dispatch(actions.updatePlayerName(e))
  },
  updatePlayerPass: (e) => {
    dispatch(actions.updatePlayerPass(e))
  },
  updateFooterInput: (e) => {
    dispatch(actions.updateFooterInput(e))
  },
  submitReady: (e) => {
    dispatch(actions.submitReady(e))
  },
  addPlayer: () => {
    dispatch(actions.addPlayer())
  }
});

// Component Body

class MainContainer extends Component {
  constructor(props) {
    super(props);
  };

  render(props) {

    return (
      <div className="main-container">
        <Header
          gameStage={this.props.gameStage}
          playerName={this.props.playerName}
          playerPass={this.props.playerPass}
          updatePlayerName={this.props.updatePlayerName}
          updatePlayerPass={this.props.updatePlayerPass}
          advanceStage={this.props.advanceStage}
          playerList={this.props.playerList}
          addPlayer={this.props.addPlayer}
        />
        <BodyContainer gameStage={this.props.gameStage} />
        <Footer
          gameStage={this.props.gameStage}
          updateFooterInput={this.props.updateFooterInput}
          advanceStage={this.props.advanceStage}
          submitReady={this.props.submitReady} />
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);