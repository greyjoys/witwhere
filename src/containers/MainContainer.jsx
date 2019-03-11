import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...
import Header from '../components/Header.jsx'
import BodyContainer from './BodyContainer.jsx'
import Footer from '../components/Footer.jsx'

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
      <div className="main-container">
      	<Header />
      	<BodyContainer />
      	<Footer />
      </div>
    )
  }

}

export default connect(mapStateToProps)(MainContainer);
