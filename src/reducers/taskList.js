import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  email: null,
  tasks: [],
  completedTasks: [],
};

const taskList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNED_IN:
      return {
        ...state,
        email: action.payload,
      };
    case actionTypes.SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case actionTypes.SET_COMPLETED_TASKS:
      return {
        ...state,
        completedTasks: action.payload,
      };
    default:
      return state;
  }
};

export default taskList;