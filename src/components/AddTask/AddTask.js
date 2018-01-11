import React, { Component } from 'react';
import * as actionCreators from '../../constants/index';
import { connect } from 'react-redux';
import { taskRef } from '../../firebase';



class AddTask  extends Component {

  state = {
    task: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addTask = () => {
    console.log('this state', this.state);
    const task  = this.state.task;
    const email  = this.props.email;
    taskRef.push({task: task, email: email});
    this.setState({task: ''});
  };

  render () {
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            style={{marginRight: '5px'}}
            onChange={(e) => this.handleChange(e)}
            name="task"
            value={this.state.task}
            placeholder="Add task"
            className="form-control"
            type="text"/>
          <button
            onClick={() => this.addTask()}
            className="btn btn-success"
            type="button"
            >Submit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.taskList.email);
  return {
    taskList: state.taskList,
    email: state.taskList.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);