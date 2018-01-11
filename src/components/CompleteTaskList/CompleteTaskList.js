import React, { Component } from 'react';
import * as actionCreators  from '../../constants/index';
import { connect } from 'react-redux';
import { completeTaskRef } from '../../firebase';
import index from "../../reducers";
import taskList from "../../reducers/taskList";
import CompletedTaskItem from '../CompletedTaskItem/CompletedTaskItem';



class CompleteTaskList  extends Component {

  componentDidMount() {
    completeTaskRef.on('value', snap => {
      const completedTasks = [];
      snap.forEach(item => {
        const {email, task} = item.val();
        completedTasks.push({email: email, task: task});
      });
      this.props.setCompletedTask(completedTasks);
    });
  };

  clearCompleted = () => {
    completeTaskRef.set([]);
  };

  render () {
    console.log(this.props.completedTasks);
    return (
      <div>
        {
          this.props.completedTasks.map((cTask, index) => {
            return <CompletedTaskItem index={index} task={cTask.task} email={cTask.email}/>
          })
        }
        <button
          className="btn btn-primary"
          onClick={() => this.clearCompleted()}
          >Clear All</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('completedTasks is => ',state.taskList.completedTasks);
  return {
    taskList: state.taskList,
    email: state.taskList.email,
    tasks: state.taskList.tasks,
    completedTasks: state.taskList.completedTasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTasks: (payload) => dispatch(actionCreators.setTasks(payload)),
    setCompletedTask: (payload) => dispatch(actionCreators.setCompletedTask(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompleteTaskList);