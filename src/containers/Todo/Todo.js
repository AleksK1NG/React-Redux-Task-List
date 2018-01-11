import React, { Component } from 'react';
import * as actionCreators from '../../constants/index';
import { connect } from 'react-redux';
import { Button } from '../../styled-components/Button';
import { Todo, Input, Wrapper } from '../../styled-components/todoStyle';

class TodoList extends Component {

  state = {
    todo: '',
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state.todo);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    console.log(this.state.todo);
    this.setState({todo: ''});
  };

  render () {
    return (
      <Wrapper>
        <h1>Simple Todo list</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            onChange={(e) => this.handleChange(e)}
            value={this.state.todo}
            placeholder="Add todo"
            name="todo"
            type="text"/>
          <Button>Add todo</Button>
        </form>
        <br/>
        {this.props.todoList.map(todo => (
          <Todo key={todo.id}>
           <h3>{todo.text}</h3>
            <input
              onChange={() => this.props.completeTodo(todo.id)}
              type="checkbox"
              value={todo.completed}/>
            <Button onClick={() => this.props.deleteTodo(todo.id)}>Delete</Button>
          </Todo>
        ))}
        <br/>
        <hr/>
        <br/>
        <Button onClick={() => this.props.deleteCompleted()}>Delete All Completed Todos</Button>
        <br/>
        <Button onClick={() => this.props.getRequest()} >Fetch json</Button>
      </Wrapper>
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
    addTodo: (payload) => dispatch(actionCreators.addTodo(payload)),
    completeTodo: (payload) => dispatch(actionCreators.completeTodo(payload)),
    deleteTodo: (payload) => dispatch(actionCreators.deleteTodo(payload)),
    deleteCompleted: () => dispatch(actionCreators.deleteCompleted()),
    getRequest: () => dispatch(actionCreators.getRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);