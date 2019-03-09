import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...
import TestComponent from '../components/TestComponent.jsx'

const mapStateToProps = store => ({
  testValue: store.main.testValue,
  anotherTestValue: store.main.anotherTestValue,
});

const mapDispatchToProps = dispatch => ({

});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
          <h1 id="header">This is the Main Container.</h1>
          <TestComponent />
      </div>
    )
  }

}

export default connect(mapStateToProps)(MainContainer);
