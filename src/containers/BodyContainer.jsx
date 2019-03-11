import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');



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
    //this.socket = io.connect('http://localhost:3000');
  }

  componentDidMount() {
    
  }

  postToWS(event) {
    event.preventDefault();
    // ws.send('Hello from front end')
    // this.socket.emit('name of emitted message', {
    //   message: 'hello from BodyContainer component',
    //   handle: 'Ray'
    // })
  }

  render(props) {
    
    return(
      <div className="body-container">
        <input placeholder={'username'} /><input placeholder={'password'} />
        <button onClick={this.props.testButton}>Submit</button>
        <form onSubmit={(event) => this.postToWS(event)}>
				  <input type="text"></input>
				  <input type="submit"></input>
			  </form>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);