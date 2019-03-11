import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...

const mapStateToProps = store => ({
  testValue: store.main.testValue,
  anotherTestValue: store.main.anotherTestValue,
});

const mapDispatchToProps = dispatch => ({

});

class BodyContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="body-container">
          <h1>This is the Body Container.</h1>
      </div>
    )
  }

}

export default connect(mapStateToProps)(BodyContainer);