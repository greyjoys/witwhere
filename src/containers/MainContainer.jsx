import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import from child components when the time comes...
import Header from '../components/Header.jsx'
import BodyContainer from './BodyContainer.jsx'
import Footer from '../components/Footer.jsx'

const mapStateToProps = store => ({
  gameStage: store.main.gameStage,
});

const mapDispatchToProps = dispatch => ({
  advanceStage: () => {
    dispatch(actions.advanceStage())
  },
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return(
      <div className="main-container">
      	<Header />
      	<BodyContainer />
      	<Footer advanceStage={this.props.advanceStage} />
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
