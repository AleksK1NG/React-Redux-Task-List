import React, { Component } from 'react';
import * as actionCreators from '../../constants/index';
import { connect } from 'react-redux';
import { taskRef, completeTaskRef } from '../../firebase';
import TaskItem from '../TaskItem/TaskItem';



class TasksItemsList  extends Component {

  componentDidMount() {
    taskRef.on('value', snap => {
      let tasks = [];
      snap.forEach(item => {
        const {email, task} = item.val();
        const serverKey = item.key;
        tasks.push({ email: email, task: task, serverKey: serverKey});
      });
      console.log('tasks is', tasks);
      this.props.setTasks(tasks);
    });
  };


  render () {
    return (
      <div>
        {
          this.props.tasks.map((task, index) => {
            return (
              <TaskItem key={index} task={task} />
            )
          })
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(TasksItemsList);