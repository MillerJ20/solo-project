import React, { Component } from 'react';
import { connect } from 'react-redux'
import WorkoutContainer from './WorkoutContainer';

const mapStateToProps = state => ({

})

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="outerBox">
        <h1 id="header">Workout Journal!</h1>
        <WorkoutContainer />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(MainContainer);