import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import WorkoutCreator from '../Components/WorkoutCreator.jsx';
import WorkoutDisplay from '../Components/WorkoutDisplay.jsx';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

class WorkoutContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="innerbox">
        <WorkoutCreator />
        <WorkoutDisplay />
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);