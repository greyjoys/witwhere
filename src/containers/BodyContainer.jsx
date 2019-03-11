import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...

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
        <input value={'username'} /><input value={'password'} />
        <button onClick={this.props.testButton}>Submit</button>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);