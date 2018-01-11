import React from 'react';
import { Route, Switch } from 'react-router';
import Counter from "./containers/Counter/Counter";
import TodoList from "./containers/Todo/TodoList";
import Todo from "./containers/Todo/Todo";
import TaskList from './containers/TaskList/TaskList';
import SignIn from './components/SignIn/SingIn';
import SignUp from './components/SignUp/SignUp';

export default () => (
  <Switch>
    <Route exact path="/" component={Todo} />
    <Route path="/todolist" component={TodoList}/>
    <Route path="/counter" component={Counter}/>
    <Route path="/tasks" component={TaskList}/>
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
  </Switch>
);