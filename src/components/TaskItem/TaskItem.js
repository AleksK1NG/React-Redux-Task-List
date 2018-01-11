import React, { Component } from 'react';
import * as actionCreators from '../../constants/index';
import { connect } from 'react-redux';
import { completeTaskRef, taskRef } from '../../firebase';

class TaskItem extends Component {

  completeTask = () => {
    const email = this.props.email;
    const { task, serverKey } = this.props.task;
    taskRef.child(serverKey).remove();
    completeTaskRef.push({email: email, task: task});
  };

  render() {
    return (
      <div style={{margin: '5px'}}>
        <strong style={{marginRight: '10px'}}>{this.props.task.task}</strong>
        <span style={{marginRight: '10px'}}>Submited by <em>{this.props.task.email}</em></span>
        <button
          onClick={() => this.completeTask()}
          className="btn btn-sm btn-primary"
          >Complete</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.taskList.tasks);
  return {
    taskList: state.taskList,
    email: state.taskList.email,
    tasks: state.taskList.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTasks: (payload) => dispatch(actionCreators.setTasks(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);