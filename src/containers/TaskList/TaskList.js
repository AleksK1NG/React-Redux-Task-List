import React, { Component } from 'react';
import * as actionCreators from '../../constants/index';
import { connect } from 'react-redux';
import { firebaseApp } from '../../firebase';
import AddTask from '../../components/AddTask/AddTask';
import TasksItemsList from '../../components/TaskList/TasksItemsList';
import CompleteTaskList from '../../components/CompleteTaskList/CompleteTaskList';

class TaskList extends Component {

  signOut = () => {
    firebaseApp.auth().signOut();
  };

  render () {
    return (
      <div style={{margin: '5px'}}>
        <h1>Tasks List Project</h1>
        <AddTask/>
        <hr/>
        <h2>Tasks:</h2>
        <TasksItemsList/>
        <hr/>
        <h2>Completed tasks:</h2>
        <CompleteTaskList/>
        <hr/>
        <h2></h2>
        <button
          onClick={() => this.signOut()}
          className="btn btn-danger"
        >Sign Out</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.taskList);
  return {
    taskList: state.taskList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);