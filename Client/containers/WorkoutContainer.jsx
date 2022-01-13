import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import WorkoutCreator from '../Components/WorkoutCreator.jsx';
import WorkoutDisplay from '../Components/WorkoutDisplay.jsx';

const mapStateToProps = state => ({
  totalEntries: state.workouts.totalEntries,
  entryList: state.workouts.entryList,
  newEntry: state.workouts.newEntry,
})

const mapDispatchToProps = dispatch => ({
  addEntry: newEntry => {
    actions.addEntryCreator(dispatch, newEntry)
  }
})

class WorkoutContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="innerbox">
        <WorkoutCreator addEntry={this.props.addEntry}/>
        <WorkoutDisplay />
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);