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
  fetchEntries: () => actions.fetchEntriesActionCreator(dispatch),

  addEntry: entryInfo => actions.addEntryCreator(dispatch, entryInfo),

  updateNewEntry: newEntryValue => { 
    dispatch(actions.setNewEntryActionCreator(newEntryValue)) 
  }
})

class WorkoutContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="innerbox">
        <WorkoutCreator addEntry={this.props.addEntry} updateNewEntry={this.props.updateNewEntry} newEntry={this.props.newEntry} fetchEntries={this.props.fetchEntries}/>
        <WorkoutDisplay fetchEntries={this.props.fetchEntries} entryList={this.props.entryList} totalEntries={this.props.totalEntries}/>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);