import React, { Component } from 'react';
import * as actionCreators from '../../constants/index';
import { connect } from 'react-redux';
import { firebaseApp } from '../../firebase';
import { NavLink } from 'react-router-dom';


class SingIn extends Component {

  state = {
    email: '',
    password: '',
    error: {
      message: '',
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  signIn = (e) => {
    console.log(this.state);
    e.preventDefault();
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
        this.setState({error})
      })
  };

  render () {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign In</h2>
        <div className="form-group">
          <input
            style={{marginRight: '5px'}}
            onChange={(e) => this.handleChange(e)}
            value={this.state.email}
            name="email"
            placeholder="email"
            className="form-control"
            type="text"/>
          <input
            style={{marginRight: '5px'}}
            onChange={(e) => this.handleChange(e)}
            name="password"
            value={this.state.password}
            placeholder="password"
            className="form-control"
            type="password"/>
          <button
            onClick={(e) => this.signIn(e)}
            className="btn btn-primary"
            type="button"
          >Sign In</button>
        </div>
        <div>{this.state.error.message}</div>
        <div><NavLink to="/signup">Sign Up</NavLink></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);