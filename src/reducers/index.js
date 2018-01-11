import { combineReducers } from 'redux';
import counter from './counter';
import result from './result';
import todo from './todo';
import taskList from './taskList';

export default combineReducers({
  counter,
  result,
  todo,
  taskList,
});